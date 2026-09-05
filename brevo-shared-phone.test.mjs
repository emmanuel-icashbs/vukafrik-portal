import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const code = ts.transpileModule(fs.readFileSync("src/services/brevo.service.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 },
}).outputText;

function service(fetch) {
  const exports = {};
  vm.runInNewContext(code, {
    exports, fetch, process: { env: { BREVO_API_KEY: "test-key" } },
    console: { info() {} },
  });
  return exports.createOrUpdateBrevoContact;
}

const conflict = {
  code: "duplicate_parameter",
  message: "Unable to update contact, WHATSAPP is already associated with another Contact",
};
const payload = (email, listId) => ({
  email, listIds: [listId],
  attributes: { PHONE: "+243898470448", WHATSAPP: "+243898470448", FIRST_NAME: "Test", CONTACT_TYPE: "ATTENDEE" },
});

// Model Brevo's email upsert, unique WhatsApp ownership, and additive lists.
const contacts = new Map();
const requests = [];
const upsert = service(async (url, options) => {
  assert.equal(url, "https://api.brevo.com/v3/contacts");
  assert.equal(options.method, "POST");
  const data = JSON.parse(options.body);
  requests.push(data);
  assert.equal(data.forceMerge, false);
  assert.equal(data.updateEnabled, true);
  assert.equal("unlinkListIds" in data, false);
  if (data.attributes.WHATSAPP && [...contacts.values()].some(contact =>
    contact.email !== data.email && contact.attributes.WHATSAPP === data.attributes.WHATSAPP)) {
    return Response.json(conflict, { status: 400 });
  }
  const existing = contacts.get(data.email);
  contacts.set(data.email, {
    email: data.email,
    attributes: { ...existing?.attributes, ...data.attributes },
    listIds: [...new Set([...(existing?.listIds ?? []), ...data.listIds])],
  });
  return existing ? new Response(null, { status: 204 }) : Response.json({ id: contacts.size }, { status: 201 });
});

await upsert(payload("first@example.com", 38));
const original = structuredClone(contacts.get("first@example.com"));
const secondPayload = payload("second@example.com", 39);
const saved = await upsert(secondPayload);
assert.equal(saved.success, true);
assert.equal(requests.length, 3);
assert.deepEqual(contacts.get("first@example.com"), original);
assert.equal(contacts.size, 2);
assert.deepEqual(contacts.get("second@example.com").listIds, [39]);
assert.equal(contacts.get("second@example.com").attributes.PHONE, "+243898470448");
assert.equal("WHATSAPP" in requests[2].attributes, false);
assert.deepEqual(requests[2], { ...requests[1], attributes: {
  PHONE: "+243898470448", FIRST_NAME: "Test", CONTACT_TYPE: "ATTENDEE",
} });
assert.equal(secondPayload.attributes.WHATSAPP, "+243898470448", "caller payload is not mutated");

assert.equal((await upsert(payload("first@example.com", 39))).status, 200);
assert.deepEqual(contacts.get("first@example.com").listIds, [38, 39]);
await upsert(payload("first@example.com", 39));
assert.deepEqual(contacts.get("first@example.com").listIds, [38, 39]);
await upsert(payload("third@example.com", 38));
assert.equal(contacts.size, 3, "shared numbers also work within one list");
await upsert(payload("second@example.com", 40));
assert.deepEqual(contacts.get("second@example.com").listIds, [39, 40], "fallback preserves existing lists");

for (const [status, body] of [
  [400, { code: "invalid_parameter", message: "Invalid WHATSAPP format" }],
  [400, { code: "duplicate_parameter", message: "SMS is already associated with another Contact" }],
  [401, conflict], [429, conflict], [500, conflict],
]) {
  let calls = 0;
  const submit = service(async () => { calls++; return Response.json(body, { status }); });
  await assert.rejects(submit(payload("test@example.com", 38)), error => error.status === status && error.code === body.code);
  assert.equal(calls, 1, "unrelated errors must not retry");
}

let calls = 0;
const failure = service(async () => { calls++; return Response.json(conflict, { status: 400 }); });
await assert.rejects(failure(payload("test@example.com", 38)), error => error.status === 400);
assert.equal(calls, 2, "retry happens at most once and failure is not reported as success");

calls = 0;
const noWhatsapp = payload("test@example.com", 38);
delete noWhatsapp.attributes.WHATSAPP;
await assert.rejects(failure(noWhatsapp));
assert.equal(calls, 1);

calls = 0;
const legacyError = service(async () => {
  calls++;
  return calls === 1 ? Response.json({ message: conflict.message }, { status: 400 }) : new Response(null, { status: 204 });
});
assert.equal((await legacyError(payload("test@example.com", 38))).success, true);
assert.equal(calls, 2);
console.log("PASS: shared phones, separate contacts, additive lists, repeat submissions, bounded fallback, and unrelated errors.");
