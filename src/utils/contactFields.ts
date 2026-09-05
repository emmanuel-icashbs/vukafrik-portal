export const DRC_COUNTRY = "République démocratique du Congo";
export const DRC_PHONE_PREFIX = "+243";
export const PHONE_ERROR = "Saisissez un numéro de République démocratique du Congo valide, par exemple +243 89 847 0448.";

/** Accept local or international DRC numbers; never reinterpret another country code. */
export function normalizeDrcPhone(value: unknown): string | null {
  if (typeof value !== "string" || !/^[+\d\s().-]+$/.test(value)) return null;
  let digits = value.replace(/[\s().-]/g, "");
  if (digits.startsWith("+243")) digits = digits.slice(4);
  else if (digits.startsWith("00243")) digits = digits.slice(5);
  else if (digits.startsWith("243") && digits.length === 12) digits = digits.slice(3);
  else if (digits.startsWith("0") && digits.length === 10) digits = digits.slice(1);
  return /^[1-9]\d{8}$/.test(digits) ? `${DRC_PHONE_PREFIX}${digits}` : null;
}

export function validateContactFields(data: { phone?: unknown; team_leader_phone?: unknown; country?: unknown }, hasCountry = false) {
  const phone = normalizeDrcPhone(data.team_leader_phone ?? data.phone);
  if (!phone) return { error: PHONE_ERROR, field: data.team_leader_phone !== undefined ? "team_leader_phone" : "phone", phone: null };
  if (hasCountry && data.country !== DRC_COUNTRY) {
    return { error: "Le pays doit être République démocratique du Congo.", field: "country", phone: null };
  }
  return { error: null, field: null, phone };
}
