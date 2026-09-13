import { vukafrik_event_data } from "./VukAfrikData";

const breadcrumb_data: { title: string; sub_title: string } = {
  title: "Contact",
  sub_title: "Contactez-nous",
};
const info_area = {
  title: "Coordonnées de l’équipe VUK’AFRIK",
  sub_title:
    "Une question sur VUK’AFRIK, votre inscription ou les possibilités de partenariat ? Contactez notre équipe par téléphone, par e-mail ou via le formulaire ci-dessous pour préparer votre participation à l’événement.",
  address: {
    title: "Lieu de l’événement",
    value: vukafrik_event_data.venue,
    link: vukafrik_event_data.venueHref,
  },
  phone: {
    title: "Téléphone",
    value: vukafrik_event_data.contacts.phoneLabel,
    link: vukafrik_event_data.contacts.phoneHref,
  },
  Email: {
    title: "Email",
    value: vukafrik_event_data.contacts.generalEmail,
    link: `mailto:${vukafrik_event_data.contacts.generalEmail}`,
  },
};
const form_area = {
  title: "Envoyer un message à l’équipe VUK’AFRIK",
  sub_title:
    "Sélectionnez le type de demande et précisez votre besoin : inscription, exposition, sponsoring, partenariat, médias ou volontariat. Indiquez vos coordonnées pour que notre équipe puisse vous répondre.",
  fields: [
    "Nom complet *",
    "Email *",
    "Telephone",
    "Type de demande *",
    "Message *",
    "J'accepte que l'equipe VUK'AFRIK examine cette soumission et me contacte si necessaire.",
  ],
  submit_button: "Envoyer le message",
};

const contact_request_types = [
  "Information generale",
  "Inscription",
  "Sponsoring",
  "Exposition",
  "Media",
  "Candidature speaker",
  "Volontariat",
  "Partenariat",
  "Autre",
];

export { breadcrumb_data, info_area, form_area, contact_request_types };
