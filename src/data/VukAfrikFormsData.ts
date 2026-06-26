import { vukafrikEvent } from "@/data/VukAfrikContentData";

export const VUKAFRIK_FORM_TYPES = {
  ATTENDEE_REGISTRATION: "ATTENDEE_REGISTRATION",
  SPEAKER_APPLICATION: "SPEAKER_APPLICATION",
  EXHIBITOR_REGISTRATION: "EXHIBITOR_REGISTRATION",
  SPONSOR_INQUIRY: "SPONSOR_INQUIRY",
  MEDIA_ACCREDITATION: "MEDIA_ACCREDITATION",
  VOLUNTEER_SIGNUP: "VOLUNTEER_SIGNUP",
  NEWSLETTER_SIGNUP: "NEWSLETTER_SIGNUP",
  CONTACT_INQUIRY: "CONTACT_INQUIRY",
} as const;

export type VukafrikFormType =
  (typeof VUKAFRIK_FORM_TYPES)[keyof typeof VUKAFRIK_FORM_TYPES];

export type VukafrikFieldOption = {
  label: string;
  value: string;
};

export type VukafrikFieldType =
  | "text"
  | "email"
  | "tel"
  | "select"
  | "textarea"
  | "checkbox"
  | "radio"
  | "file"
  | "number";

export type VukafrikFieldConfig = {
  name: string;
  label: string;
  type: VukafrikFieldType;
  required?: boolean;
  placeholder?: string;
  options?: VukafrikFieldOption[];
  description?: string;
  minLength?: number;
  rows?: number;
  accept?: string;
};

export type VukafrikFormConfig = {
  formType: VukafrikFormType;
  title: string;
  intro: string;
  successMessage: string;
  successCta?: {
    label: string;
    href: string;
  };
  fields: VukafrikFieldConfig[];
};

export const participantTypes: VukafrikFieldOption[] = [
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
].map((item) => ({ label: item, value: item }));

export const mainInterests: VukafrikFieldOption[] = [
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
].map((item) => ({ label: item, value: item }));

export const daysAttending: VukafrikFieldOption[] = [
  "Jour 1 - Strategic Summit",
  "Jour 2 - Foire multisectorielle",
  "Jour 3 - Showcases & cloture",
  "Les trois jours",
].map((item) => ({ label: item, value: item }));

export const sessionPreferences: VukafrikFieldOption[] = [
  "Keynote",
  "Panel",
  "Fireside Chat",
  "Workshop",
  "Session de formation",
  "Jury pitch",
  "Moderateur",
  "Autre",
].map((item) => ({ label: item, value: item }));

export const thematicVillageOptions: VukafrikFieldOption[] = [
  "Agriculture & Agro-transformation",
  "Banking, Fintech & Financial Inclusion",
  "Digital & Technologies",
  "Industry & Local Transformation",
  "Creative Industries & Culture",
  "Entrepreneurship, Youth & Employability",
  "Institutions & Regulators",
  "Gastronomy",
  "SMEs",
  "Other",
].map((item) => ({ label: item, value: item }));

export const sponsorCategoryOptions: VukafrikFieldOption[] = [
  "Founding Partner",
  "Strategic Partner",
  "Innovation Partner",
  "Sector Partner",
  "Media Partner",
  "Technical Partner",
  "Institutional Partner",
  "A definir",
].map((item) => ({ label: item, value: item }));

export const budgetRanges: VukafrikFieldOption[] = [
  "A discuter",
  "Moins de $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Prefere ne pas preciser",
].map((item) => ({ label: item, value: item }));

export const mediaTypes: VukafrikFieldOption[] = [
  "TV",
  "Radio",
  "Presse ecrite",
  "Media en ligne",
  "Blog",
  "Podcast",
  "Photo / Video",
  "Reseaux sociaux / Createur de contenu",
  "Autre",
].map((item) => ({ label: item, value: item }));

export const volunteerAvailability: VukafrikFieldOption[] = [
  "Avant l'evenement",
  "Jour 1 uniquement",
  "Jour 2 uniquement",
  "Jour 3 uniquement",
  "Tous les jours de l'evenement",
  "Flexible",
].map((item) => ({ label: item, value: item }));

export const volunteerInterestAreas: VukafrikFieldOption[] = [
  "Accueil et inscription",
  "Support visiteurs",
  "Support speakers",
  "Support media",
  "Support exposants",
  "Protocole / VIP",
  "Logistics",
  "Support technique",
  "Reseaux sociaux / contenu",
  "Support general",
].map((item) => ({ label: item, value: item }));

export const inquiryTypes: VukafrikFieldOption[] = [
  "Information generale",
  "Inscription",
  "Sponsoring",
  "Exposition",
  "Media",
  "Candidature speaker",
  "Volontariat",
  "Partenariat",
  "Autre",
].map((item) => ({ label: item, value: item }));

const consentField: VukafrikFieldConfig = {
  name: "consent",
  label:
    "J'accepte que l'equipe VUK'AFRIK examine cette soumission et me contacte si necessaire.",
  type: "checkbox",
  required: true,
};

export const attendeeRegistrationForm: VukafrikFormConfig = {
  formType: VUKAFRIK_FORM_TYPES.ATTENDEE_REGISTRATION,
  title: "S'inscrire a VUK'AFRIK 2026",
  intro:
    "Rejoignez institutions, investisseurs, leaders corporate, startups, entrepreneurs, innovateurs et acteurs d'ecosysteme a Kinshasa.",
  successMessage:
    "Merci. Votre soumission a bien ete recue. L'equipe VUK'AFRIK l'examinera et reviendra vers vous si necessaire.",
  successCta: {
    label: "Voir le programme",
    href: "/program",
  },
  fields: [
    { name: "firstName", label: "Prenom", type: "text", required: true },
    { name: "lastName", label: "Nom", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    {
      name: "phone",
      label: "Telephone / WhatsApp",
      type: "tel",
      required: true,
    },
    { name: "organisation", label: "Organisation", type: "text", required: true },
    { name: "jobTitle", label: "Fonction", type: "text", required: true },
    { name: "country", label: "Pays", type: "text", required: true },
    { name: "city", label: "Ville", type: "text", required: true },
    {
      name: "participantType",
      label: "Type de participant",
      type: "select",
      required: true,
      options: participantTypes,
    },
    {
      name: "mainInterest",
      label: "Interet principal",
      type: "select",
      required: true,
      options: mainInterests,
    },
    {
      name: "daysAttending",
      label: "Jours de participation",
      type: "radio",
      required: true,
      options: daysAttending,
    },
    consentField,
  ],
};

export const speakerApplicationForm: VukafrikFormConfig = {
  formType: VUKAFRIK_FORM_TYPES.SPEAKER_APPLICATION,
  title: "Candidater comme speaker",
  intro:
    "Partagez votre expertise avec les leaders, entrepreneurs, innovateurs, investisseurs et acteurs d'ecosysteme de VUK'AFRIK 2026.",
  successMessage:
    "Merci. Votre soumission a bien ete recue. L'equipe VUK'AFRIK l'examinera et reviendra vers vous si necessaire.",
  successCta: {
    label: "Voir le programme",
    href: "/program",
  },
  fields: [
    { name: "fullName", label: "Nom complet", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Telephone", type: "tel", required: true },
    { name: "organisation", label: "Organisation", type: "text", required: true },
    { name: "positionTitle", label: "Fonction / titre", type: "text", required: true },
    {
      name: "shortBio",
      label: "Courte bio",
      type: "textarea",
      required: true,
      minLength: 30,
      rows: 5,
    },
    {
      name: "proposedTopic",
      label: "Sujet propose",
      type: "textarea",
      required: true,
      minLength: 20,
      rows: 4,
    },
    {
      name: "sessionPreference",
      label: "Preference de session",
      type: "select",
      required: true,
      options: sessionPreferences,
    },
    {
      name: "linkedinWebsite",
      label: "LinkedIn / site web",
      type: "text",
      required: true,
    },
    {
      name: "headshot",
      label: "Photo portrait",
      type: "file",
      description: "Champ preparatoire uniquement. La gestion de fichiers sera connectee dans une phase ulterieure.",
      accept: ".png,.jpg,.jpeg,.webp",
    },
    {
      name: "previousSpeakingExperience",
      label: "Experience de prise de parole",
      type: "textarea",
      rows: 4,
    },
    { name: "additionalNotes", label: "Notes complementaires", type: "textarea", rows: 4 },
    consentField,
  ],
};

export const exhibitorRegistrationForm: VukafrikFormConfig = {
  formType: VUKAFRIK_FORM_TYPES.EXHIBITOR_REGISTRATION,
  title: "S'inscrire comme exposant",
  intro:
    "Soumettez votre interet exposant pour integrer un village thematique, renforcer votre visibilite et activer des interactions business.",
  successMessage:
    "Merci. Votre soumission a bien ete recue. L'equipe VUK'AFRIK l'examinera et reviendra vers vous si necessaire.",
  successCta: {
    label: "Explorer les villages thematiques",
    href: "/exhibitors-opportunities",
  },
  fields: [
    {
      name: "organisationName",
      label: "Organisation / entreprise",
      type: "text",
      required: true,
    },
    { name: "contactPerson", label: "Personne de contact", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Telephone", type: "tel", required: true },
    { name: "website", label: "Site web", type: "text", required: true },
    {
      name: "sectorVillage",
      label: "Secteur / village",
      type: "select",
      required: true,
      options: thematicVillageOptions,
    },
    {
      name: "productServiceDescription",
      label: "Description du produit ou service",
      type: "textarea",
      required: true,
      minLength: 20,
      rows: 5,
    },
    {
      name: "spaceRequirement",
      label: "Format souhaite",
      type: "select",
      required: true,
      options: [
        "Stand standard",
        "Stand premium",
        "Espace startup showcase",
        "Stand institutionnel",
        "Espace demonstration produit",
        "A definir",
      ].map((item) => ({ label: item, value: item })),
    },
    {
      name: "specialNeeds",
      label: "Besoins specifiques",
      type: "textarea",
      required: true,
      rows: 4,
    },
    {
      name: "logoUpload",
      label: "Logo",
      type: "file",
      description: "Champ preparatoire uniquement. La gestion de fichiers sera connectee dans une phase ulterieure.",
      accept: ".png,.jpg,.jpeg,.svg",
    },
    { name: "socialMediaLinks", label: "Liens reseaux sociaux", type: "text" },
    {
      name: "numberOfRepresentatives",
      label: "Nombre de representants",
      type: "number",
    },
    consentField,
  ],
};

export const sponsorInquiryForm: VukafrikFormConfig = {
  formType: VUKAFRIK_FORM_TYPES.SPONSOR_INQUIRY,
  title: "Devenir sponsor ou partenaire",
  intro:
    "Soumettez l'interet de votre organisation pour un sponsoring ou un partenariat et laissez l'equipe VUK'AFRIK vous orienter vers le bon dispositif.",
  successMessage:
    "Merci. Votre soumission a bien ete recue. L'equipe VUK'AFRIK l'examinera et reviendra vers vous si necessaire.",
  successCta: {
    label: "Contacter l'equipe",
    href: "/contact",
  },
  fields: [
    { name: "organisationName", label: "Nom de l'organisation", type: "text", required: true },
    { name: "contactPerson", label: "Personne de contact", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Telephone", type: "tel", required: true },
    { name: "website", label: "Site web", type: "text", required: true },
    {
      name: "sponsorCategory",
      label: "Categorie de partenariat",
      type: "select",
      required: true,
      options: sponsorCategoryOptions,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
      minLength: 20,
      rows: 5,
    },
    {
      name: "budgetRange",
      label: "Fourchette budgetaire",
      type: "select",
      options: budgetRanges,
    },
    {
      name: "preferredVisibilityArea",
      label: "Zone de visibilite souhaitee",
      type: "text",
    },
    { name: "sectorOfInterest", label: "Secteur d'interet", type: "text" },
    consentField,
  ],
};

export const mediaAccreditationForm: VukafrikFormConfig = {
  formType: VUKAFRIK_FORM_TYPES.MEDIA_ACCREDITATION,
  title: "Demande d'accreditation media",
  intro:
    "Demandez un acces media pour couvrir VUK'AFRIK 2026, son Strategic Summit, ses expositions, ses innovation showcases et ses activites ecosystemiques.",
  successMessage:
    "Merci. Votre soumission a bien ete recue. L'equipe VUK'AFRIK l'examinera et reviendra vers vous si necessaire.",
  successCta: {
    label: "Voir les actualites",
    href: "/news",
  },
  fields: [
    {
      name: "mediaOrganisation",
      label: "Organisation media",
      type: "text",
      required: true,
    },
    {
      name: "representativeName",
      label: "Nom du journaliste / representant",
      type: "text",
      required: true,
    },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Telephone", type: "tel", required: true },
    { name: "country", label: "Pays", type: "text", required: true },
    {
      name: "mediaType",
      label: "Type de media",
      type: "select",
      required: true,
      options: mediaTypes,
    },
    {
      name: "accreditationPurpose",
      label: "Objet de la demande",
      type: "textarea",
      required: true,
      minLength: 20,
      rows: 4,
    },
    {
      name: "previousWorkLink",
      label: "Lien vers des contenus precedents",
      type: "text",
      required: true,
    },
    { name: "pressCardNumber", label: "Numero de carte de presse", type: "text" },
    {
      name: "numberOfRepresentatives",
      label: "Nombre de representants media",
      type: "number",
    },
    {
      name: "specialEquipmentRequest",
      label: "Besoins techniques specifiques",
      type: "textarea",
      rows: 4,
    },
    consentField,
  ],
};

export const volunteerSignupForm: VukafrikFormConfig = {
  formType: VUKAFRIK_FORM_TYPES.VOLUNTEER_SIGNUP,
  title: "Devenir volontaire a VUK'AFRIK 2026",
  intro:
    "Rejoignez l'equipe qui accompagne l'une des plateformes africaines emergentes de l'innovation, de l'entrepreneuriat et du business.",
  successMessage:
    "Merci. Votre soumission a bien ete recue. L'equipe VUK'AFRIK l'examinera et reviendra vers vous si necessaire.",
  successCta: {
    label: "Decouvrir VUK'AFRIK",
    href: "/about",
  },
  fields: [
    { name: "fullName", label: "Nom complet", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Telephone", type: "tel", required: true },
    { name: "city", label: "Ville", type: "text", required: true },
    {
      name: "availability",
      label: "Disponibilite",
      type: "select",
      required: true,
      options: volunteerAvailability,
    },
    {
      name: "skills",
      label: "Competences",
      type: "textarea",
      required: true,
      minLength: 15,
      rows: 4,
    },
    {
      name: "areaOfInterest",
      label: "Zone d'interet",
      type: "select",
      required: true,
      options: volunteerInterestAreas,
    },
    {
      name: "previousEventExperience",
      label: "Experience evenementielle precedente",
      type: "textarea",
      required: true,
      rows: 4,
    },
    consentField,
  ],
};

export const newsletterSignupForm: VukafrikFormConfig = {
  formType: VUKAFRIK_FORM_TYPES.NEWSLETTER_SIGNUP,
  title: "S'abonner aux actualites VUK'AFRIK",
  intro: "Restez au plus pres des annonces, mises a jour programme et temps forts.",
  successMessage: "Merci pour votre abonnement aux actualites VUK'AFRIK.",
  fields: [
    { name: "name", label: "Nom", type: "text" },
    { name: "email", label: "Email", type: "email", required: true },
    consentField,
  ],
};

export const contactInquiryForm: VukafrikFormConfig = {
  formType: VUKAFRIK_FORM_TYPES.CONTACT_INQUIRY,
  title: "Envoyer un message a l'equipe VUK'AFRIK",
  intro:
    "Utilisez ce formulaire pour vos questions generales, partenariats, media et participation.",
  successMessage:
    "Merci. Votre soumission a bien ete recue. L'equipe VUK'AFRIK l'examinera et reviendra vers vous si necessaire.",
  successCta: {
    label: "S'inscrire",
    href: "/register",
  },
  fields: [
    { name: "fullName", label: "Nom complet", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Telephone", type: "tel" },
    {
      name: "inquiryType",
      label: "Type de demande",
      type: "select",
      required: true,
      options: inquiryTypes,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
      minLength: 20,
      rows: 5,
    },
    consentField,
  ],
};

export const createBaseSubmissionPayload = (
  formType: VukafrikFormType,
  sourcePage: string,
) => ({
  formType,
  submittedAt: new Date().toISOString(),
  eventName: vukafrikEvent.name,
  eventEdition: "2026",
  sourcePage,
});
