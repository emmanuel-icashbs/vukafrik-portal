const breadcrumb_data: { title: string; sub_title: string } = {
  title: "Inscrivez-vous chez nous",
  sub_title: "S'inscrire",
};
const form_area = {
  title: "S'inscrire a VUK'AFRIK 2026",
  sub_title:
    "Rejoignez institutions, investisseurs, leaders corporate, startups, entrepreneurs, innovateurs et acteurs d'ecosysteme a Kinshasa.",
  fields: [
    "Prenom *",
    "Nom *",
    "Email *",
    "Telephone / WhatsApp *",
    "Organisation",
    "Fonction",
    "Pays *",
    "Ville *",
    "Type de participant *",
    "Jours de participation *",
    "J'accepte que l'equipe VUK'AFRIK examine cette soumission et me contacte si necessaire.",
  ],
  submit_button: "Soumettre",
};

const participant_types = [
  "Entrepreneur",
  "Fondateur de startup",
  "Dirigeant de PME",
  "Representant corporate",
  "Investisseur",
  "Institution / Gouvernement",
  "Etudiant",
  "Media",
  "Partenaire",
  "Autre",
];

const main_interests = [
  "Strategic Summit",
  "Innovation Showcase",
  "Villages thematiques",
  "Pitch startup",
  "Sponsoring",
  "Exposition",
  "Opportunites d'investissement",
  "Networking",
  "Media",
  "Volontariat",
  "Autre",
];

const attendance_days = [
  "Jour 1 - Strategic Summit",
  "Jour 2 - Foire multisectorielle",
  "Jour 3 - Showcases & cloture",
  "Les trois jours",
];

export {
  breadcrumb_data,
  form_area,
  participant_types,
  main_interests,
  attendance_days,
};
