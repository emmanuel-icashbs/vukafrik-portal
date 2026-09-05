import fs from 'node:fs';
import ts from 'typescript';
import vm from 'node:vm';
import assert from 'node:assert/strict';
function load(file, imports = {}) {
    const exports = {};
    const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
    vm.runInNewContext(code, { exports, require: name => { if (!(name in imports))
            throw new Error(name); return imports[name]; }, console });
    return exports;
}
(async () => {
    const fields = load('src/utils/contactFields.ts');
    for (const raw of ['898470448', '0898470448', '089 847 0448', '+243898470448', '+243 (89) 847-0448', '243898470448', '00243898470448'])
        assert.equal(fields.normalizeDrcPhone(raw), '+243898470448', raw);
    for (const raw of ['', '+243', '123', '+447123456789', '+243243898470448', '+2430898470448', '0898470448ext1', null, 898470448, '000000000', '+2438984704489'])
        assert.equal(fields.normalizeDrcPhone(raw), null, String(raw));
    for (const route of ['attendee', 'journalist', 'general_contact', 'volunteer', 'sponsor', 'speaker', 'exhibitor', 'hackathon']) {
        let calls = [];
        const { POST } = load(`src/app/api/${route}/route.ts`, {
            '@/utils/contactFields': fields,
            '@/services/brevo.service': { createOrUpdateBrevoContact: async (data) => { calls.push(data); return { success: true, status: 200, data: {} }; } },
            '@/services/config': { BREVO_CONTACT_TYPES: {}, BREVO_LISTS: {} },
            'next/server': { NextResponse: { json: (body, options) => ({ body, status: options?.status ?? 200 }) } }
        });
        const data = { name: 'Test', full_name: 'Test', first_name: 'Test', last_name: 'Test', email: 'test@example.com', message: 'Test', proposed_topic: 'Test', organisation: 'Test', contact_person: 'Test', team_name: 'Test', team_leader_name: 'Test', team_leader_email: 'test@example.com', country: 'République démocratique du Congo', phone: '0898470448' };
        if (route === 'hackathon') {
            delete data.phone;
            data.team_leader_phone = '0898470448';
        }
        let result = await POST({ json: async () => data });
        assert.equal(result.status, 200, route + JSON.stringify(result));
        assert.equal(calls.length, 1, route);
        assert.equal(calls[0].attributes.PHONE, '+243898470448');
        assert.equal(calls[0].attributes.WHATSAPP, '+243898470448');
        const field = route === 'hackathon' ? 'team_leader_phone' : 'phone';
        result = await POST({ json: async () => ({ ...data, [field]: '+447123456789' }) });
        assert.equal(result.status, 400, route);
        assert.equal(calls.length, 1);
        if (['attendee', 'journalist'].includes(route)) {
            result = await POST({ json: async () => ({ ...data, country: 'UK' }) });
            assert.equal(result.status, 400, route);
            assert.equal(calls.length, 1);
        }
    }
    console.log('PASS: 19 phone cases, all 8 API normalization and rejection checks, both country restrictions.');
})().catch(error => { console.error(error); process.exitCode = 1; });
