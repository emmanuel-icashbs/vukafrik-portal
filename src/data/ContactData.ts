import { vukafrik_event_data } from "./VukAfrikData";

const breadcrumb_data: { title: string; sub_title: string } = {
  title: "Contact",
  sub_title: "Contactez-nous",
};
const info_area = {
  title: "Coordonnées de l'equipe VUK'AFRIK",
  sub_title:
    "Lorem ipsum dolor sit amet consectetur adipiscing eleitut iquam purus sit amet luctus venenatis lectus magna fringilla urna por us non enim praesent elementum facilisise.",
  address: {
    title: "Adresse",
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
    link: vukafrik_event_data.contacts.generalEmail,
  },
};
const form_area = {
  title: "Envoyer un message a l'equipe VUK'AFRIK",
  sub_title:
    "Utilisez ce formulaire pour vos questions generales, partenariats, media et participation.",
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
