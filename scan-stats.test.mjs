import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";
const require = createRequire(import.meta.url);
const ts = require("typescript");
// Shared object state remains visible to calls made through the VM-loaded module.
const mock = {
  contents: { "2026-09-23": 0, "2026-09-24": 0, "2026-09-25": 0 },
  revision: 1,
  reads: 0,
  writes: 0,
  failure: undefined,
  conflictAlways: false,
};
class GetObjectCommand { constructor(input) { this.input = input; } }
class PutObjectCommand { constructor(input) { this.input = input; } }
class S3Client {
  async send(command) {
    if (mock.failure) throw mock.failure;
    assert.equal(command.input.Bucket, "vukafrik-storage");
    assert.equal(command.input.Key, "scan-stats-2026.json");
    if (command instanceof GetObjectCommand) {
      mock.reads++;
      const body = JSON.stringify(mock.contents);
      return { Body: { transformToString: async () => body }, ETag: String(mock.revision) };
    }
    mock.writes++;
    if (mock.conflictAlways || command.input.IfMatch !== String(mock.revision)) {
      throw { $metadata: { httpStatusCode: 412 } };
    }
    mock.contents = JSON.parse(command.input.Body);
    mock.revision++;
    return {};
  }
}
const mod = { exports: {} };
vm.runInNewContext(ts.transpileModule(readFileSync("src/lib/scan-stats.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText, {
  exports: mod.exports, module: mod,
  require: () => ({ S3Client, GetObjectCommand, PutObjectCommand }),
  setTimeout: callback => { callback(); },
});
const { eventDate, recordScan, readScanStats } = mod.exports;
assert.equal(eventDate(new Date("2026-09-22T22:59:59Z")), "2026-09-22");
assert.equal(eventDate(new Date("2026-09-22T23:00:00Z")), "2026-09-23");
assert.equal(eventDate(new Date("2026-09-23T23:00:00Z")), "2026-09-24");
assert.equal(eventDate(new Date("2026-09-25T23:00:00Z")), "2026-09-26");
assert.equal((await recordScan(new Date("2026-09-22T22:59:59Z"))).counted, false);
assert.equal((await recordScan(new Date("2026-09-25T23:00:00Z"))).counted, false);
assert.equal(mock.reads, 0, "Outside-event visits do not access S3");
await Promise.all(Array.from({ length: 6 }, () => recordScan(new Date("2026-09-23T10:00:00Z"))));
assert.equal(mock.contents["2026-09-23"], 6, "Concurrent scans preserve every increment");
assert.equal(mock.contents["2026-09-24"], 0);
await recordScan(new Date("2026-09-23T23:00:00Z"));
await recordScan(new Date("2026-09-25T22:59:59Z"));
assert.equal(mock.contents["2026-09-24"], 1);
assert.equal(mock.contents["2026-09-25"], 1);
mock.contents = { "2026-09-23": 12 };
assert.equal((await readScanStats()).stats["2026-09-24"], 0);
const writesBefore = mock.writes;
mock.contents = { "2026-09-23": -1 };
await assert.rejects(recordScan(new Date("2026-09-23T10:00:00Z")), /Invalid scan count/);
assert.equal(mock.writes, writesBefore, "Malformed contents are never overwritten");
mock.failure = new Error("Access denied");
await assert.rejects(readScanStats(), /Access denied/);
mock.failure = undefined;
mock.contents = { "2026-09-23": 0 };
mock.conflictAlways = true;
await assert.rejects(recordScan(new Date("2026-09-23T10:00:00Z")));
assert.equal(mock.writes - writesBefore, 10, "Conflict retries are bounded");
console.log("Scan stats tests passed: timezone boundaries, event dates, concurrent updates, zero days, invalid data, access errors and retry limits.");
