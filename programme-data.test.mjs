import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";

const require = createRequire(import.meta.url);
const ts = require("typescript");
// Evaluate the real data modules; image imports are irrelevant to timetable checks.
function data(file, exportName = "default") {
  const testModule = { exports: {} };
  const code = ts.transpileModule(readFileSync(new URL(file, import.meta.url), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  }).outputText;
  const stub = new Proxy(() => {}, { get: (_, key) => key === "__esModule" ? false : stub });
  vm.runInNewContext(code, { module: testModule, exports: testModule.exports, require: () => stub });
  return JSON.parse(JSON.stringify(testModule.exports[exportName]));
}
const schedule = data("./src/data/ScheduleData.ts", "schedule_data");
const publicSchedule = data("./src/data/ScheduleData.ts");
const speakers = data("./src/data/SpeakerData.ts");
const byId = id => schedule.find(session => session.id === id);
assert.equal(schedule.length, 51, "Detailed timetable includes the restored ministry workshop");
assert.equal(publicSchedule.length, 41);
assert.ok(publicSchedule.every(s => ![1, 44, 45, 48, 49, 51, 15, 24, 38, 34].includes(s.id)), "Operational entries are excluded from public pages");
assert.equal(new Set(schedule.map(s => s.id)).size, schedule.length);
assert.equal(new Set(speakers.map(s => s.id)).size, speakers.length);
for (const day of ["01", "02", "03"]) {
  const sessions = schedule.filter(s => s.date.startsWith(`Jour ${day}`));
  for (const [i, session] of sessions.entries()) {
    assert.match(session.start_time, /^\d{2}:\d{2}$/);
    assert.match(session.end_time, /^\d{2}:\d{2}$/);
    assert.ok(session.start_time < session.end_time, session.topic);
    if (i) assert.equal(sessions[i - 1].end_time, session.start_time, `No gaps or overlaps: ${session.topic}`);
    assert.equal(session.venue, day === "01" ? "Salon Congo" : "Chapiteau");
    for (const id of session.speakers) assert.ok(speakers.some(s => s.id === id), `Missing speaker ${id}`);
  }
}
assert.deepEqual(byId(4).speakers, [34], "Minister's address does not replace generic government sessions");
assert.deepEqual(byId(13).speakers, [10]);
assert.deepEqual(byId(5).speakers, []);
assert.match(byId(5).topic, /À confirmer/);
assert.deepEqual(byId(8).speakers, [7]);
assert.deepEqual(byId(6).speakers, [6, 35, 38, 36, 15]);
assert.deepEqual(byId(9).speakers, [12, 16, 13, 14, 15]);
assert.deepEqual(byId(11).speakers, [14]);
assert.equal(speakers.find(s => s.id === 14).name, "Monsieur Pascal TCHELO MAZOMBO");
assert.equal(speakers.find(s => s.id === 14).title, "Directeur général — APROCM");
assert.equal(speakers.find(s => s.id === 38).name, "Mirela PEKMEZI");
assert.equal(speakers.find(s => s.id === 38).title, "Directrice générale de FINCA");
assert.deepEqual(byId(39).speakers, [31], "FINCA workshop is not assigned to Mirela without confirmation");
assert.deepEqual(byId(16).speakers, [10]);
assert.deepEqual(byId(52).speakers, [10]);
assert.deepEqual(byId(17).speakers, [10, 13, 1]);
assert.deepEqual(byId(18).speakers, [23]);
assert.deepEqual(byId(19).speakers, [19]);
assert.equal(byId(18).start_time, "10:00");
assert.equal(byId(18).end_time, "10:40");
assert.equal(byId(19).start_time, "10:40");
assert.equal(byId(19).end_time, "11:20");
assert.equal(byId(21).start_time, "11:40");
assert.equal(byId(28).end_time, "16:50");
assert.deepEqual(byId(7).speakers, [1, 2]);
assert.deepEqual(byId(10).speakers, [17, 18]);
assert.deepEqual(byId(22).speakers, [36]);
assert.deepEqual(byId(32).speakers, [37]);
const day3 = schedule.filter(s => s.date.startsWith("Jour 03"));
assert.deepEqual(day3.map(s => `${s.start_time}–${s.end_time}`), [
  "09:30–10:00", "10:00–10:35", "10:35–10:55", "10:55–11:30", "11:30–12:00",
  "12:00–12:35", "12:35–13:25", "13:25–14:00", "14:00–14:35", "14:35–15:25",
  "15:25–16:05", "16:05–16:35", "16:35–17:05", "17:05–18:05",
]);
assert.match(speakers.find(s => s.id === 1).name, /LOMAMI KASONGO/);
assert.equal(speakers.find(s => s.id === 34).name, "Daniel Mukoko Samba");
console.log("Passed: revised timetable, public visibility, continuity, rooms and speaker assignments.");
