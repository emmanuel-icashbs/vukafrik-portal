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
assert.equal(schedule.length, 50, "Detailed timetable includes the restored ministry workshop");
assert.equal(publicSchedule.length, 39);
assert.ok(publicSchedule.every(s => ![1, 44, 45, 48, 49, 51, 15, 24, 38, 34, 54].includes(s.id)), "Operational entries are excluded from public pages");
assert.equal(new Set(schedule.map(s => s.id)).size, schedule.length);
assert.equal(new Set(speakers.map(s => s.id)).size, speakers.length);
for (const day of ["01", "02", "03"]) {
  const sessions = schedule.filter(s => s.date.startsWith(`Jour ${day}`));
  for (const [i, session] of sessions.entries()) {
    assert.match(session.start_time, /^\d{2}:\d{2}$/);
    assert.match(session.end_time, /^\d{2}:\d{2}$/);
    assert.ok(session.start_time < session.end_time, session.topic);
    if (i && session.id !== 20 && sessions[i - 1].id !== 53) {
      assert.equal(sessions[i - 1].end_time, session.start_time, `No unexpected gaps or overlaps: ${session.topic}`);
    }
    assert.equal(session.venue, day === "01" ? "Salon Congo" : "Chapiteau");
    for (const id of session.speakers) assert.ok(speakers.some(s => s.id === id), `Missing speaker ${id}`);
  }
}
assert.deepEqual(byId(4).speakers, [34], "Minister's address does not replace generic government sessions");
assert.deepEqual(byId(13).speakers, [10]);
assert.deepEqual(byId(5).speakers, []);
assert.match(byId(5).topic, /À confirmer/);
assert.deepEqual(byId(8).speakers, [7]);
assert.deepEqual(byId(6).speakers, [6, 35, 38, 40, 41]);
assert.deepEqual(byId(9).speakers, [12, 16, 13, 14, 39]);
assert.deepEqual(byId(11).speakers, [14]);
assert.equal(speakers.find(s => s.id === 14).name, "Monsieur Pascal TCHELO MAZOMBO");
assert.equal(speakers.find(s => s.id === 14).title, "Directeur général — APROCM");
assert.equal(speakers.find(s => s.id === 38).name, "Madame Mirela PEKMEZI");
assert.equal(speakers.find(s => s.id === 38).title, "Directrice générale de FINCA");
assert.deepEqual(byId(39).speakers, [31], "FINCA workshop is not assigned to Mirela without confirmation");
assert.deepEqual(byId(16).speakers, [10]);
assert.deepEqual(byId(52).speakers, [10]);
assert.deepEqual(byId(17).speakers, [10, 13, 1]);
assert.deepEqual(byId(18).speakers, [23]);
assert.deepEqual(byId(19).speakers, [19]);
assert.equal(byId(18).start_time, "10:00");
assert.equal(byId(18).end_time, "10:40");
assert.equal(byId(19).start_time, "12:40");
assert.equal(byId(19).end_time, "13:20");
assert.equal(byId(21).start_time, "11:40");
assert.equal(byId(28).end_time, "16:50");
assert.deepEqual(byId(7).speakers, [1, 2]);
assert.deepEqual(byId(10).speakers, [42, 17]);
assert.deepEqual(byId(22).speakers, [36]);
assert.deepEqual(byId(32).speakers, [43]);
const day3 = schedule.filter(s => s.date.startsWith("Jour 03"));
assert.deepEqual(day3.map(s => `${s.start_time}–${s.end_time}`), [
  "09:30–10:00", "10:00–10:35", "10:35–10:55", "10:55–11:30", "11:30–11:50",
  "11:50–12:35", "12:35–13:25", "13:25–14:25", "14:25–15:00", "15:00–15:35",
  "15:35–16:25", "16:25–17:10", "17:10–17:30",
]);
assert.match(speakers.find(s => s.id === 1).name, /LOMAMI KASONGO/);
assert.equal(speakers.find(s => s.id === 34).name, "Son Excellence Monsieur Daniel MUKOKO SAMBA");


assert.equal(byId(53).start_time, "10:40");
assert.equal(byId(53).end_time, "16:00");
assert.deepEqual(byId(53).speakers, [23]);
assert.match(byId(53).topic, /en parallèle/);
assert.ok(publicSchedule.some(s => s.id === 53));
assert.equal(byId(20).start_time, "11:20");
assert.deepEqual(byId(55).speakers, []);
assert.match(byId(55).category, /confirmer/);
assert.deepEqual(byId(56).speakers, [44]);
for (const id of [23, 33, 36, 40, 41, 43]) assert.equal(byId(id), undefined, `Removed session ${id}`);
console.log("Passed: version 9 timetable, parallel service, public visibility, rooms and speaker assignments.");
