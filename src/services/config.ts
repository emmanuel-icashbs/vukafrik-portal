export const BREVO_LISTS = {
  attendee: 38,
  sponsor: 39,
  exhibitor: 40,
  speaker: 41,
  journalist: 42,
  volunteer: 43,
  general: 44,
  hackathon: 45,
} as const;

// CONTACT_TYPE describes the latest submitted form, not all contact roles.
// Use the additive BREVO_LISTS memberships to determine every registered role.
export const BREVO_CONTACT_TYPES = {
  attendee: "ATTENDEE",
  hackathon: "HACKATHON",
  sponsor: "SPONSOR",
  exhibitor: "EXHIBITOR",
  speaker: "SPEAKER",
  journalist: "JOURNALIST",
  volunteer: "VOLUNTEER",
  general: "GENERAL",
} as const;
