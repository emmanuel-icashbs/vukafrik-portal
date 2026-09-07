import { FaqDataType } from "@/utils/types";

const breadcrumb_data: {
  title: string;
  sub_title: string;
} = {
  title: "Volontaire",
  sub_title: "Volontaire",
};
const faq_area: { title: string; sub_title: string; data: FaqDataType[] } = {
  "title": "Participer comme volontaire",
  "sub_title": "Retrouvez les informations utiles pour présenter votre candidature.",
  "data": [
    {
      "id": 1,
      "page": "inner_faq",
      "showAnswer": true,
      "title": "Comment devenir volontaire ?",
      "desc": "Remplissez le formulaire de candidature ci-dessous avec vos coordonnées, vos compétences et votre expérience événementielle."
    },
    {
      "id": 2,
      "page": "inner_faq",
      "showAnswer": false,
      "title": "Puis-je préciser mes disponibilités ?",
      "desc": "Oui. Le formulaire vous permet d’indiquer vos disponibilités et votre zone d’intérêt."
    },
    {
      "id": 3,
      "page": "inner_faq",
      "showAnswer": false,
      "title": "Quelles informations préparer ?",
      "desc": "Préparez votre nom, votre adresse e-mail, votre téléphone, votre ville et une présentation de vos compétences et expériences."
    },
    {
      "id": 4,
      "page": "inner_faq",
      "showAnswer": false,
      "title": "Comment contacter l’équipe ?",
      "desc": "Pour toute question sur votre candidature, contactez l’équipe à info@congocs.org."
    }
  ]
};
const volunteer_form_area = {
  id:"volonteer_form",
  title: "Devenir volontaire a VUK'AFRIK 2026",
  sub_title:
    "Rejoignez l'equipe qui accompagne l'une des plateformes africaines emergentes de l'innovation, de l'entrepreneuriat et du business.",
  fields: [
    "Nom complet *",
    "E-mail *",
    "Téléphone *",
    "Ville *",
    "Disponibilite *",
    "Zone d'interet *",
    "Competences *",
    "Experience evenementielle precedente *",
    "J'accepte que l'equipe VUK'AFRIK examine cette soumission et me contacte si necessaire.",
  ],
  submit_button: "Soumettre",
};

const volunteer_availabilities = [
  "Avant l'evenement",
  "Jour 1 uniquement",
  "Jour 2 uniquement",
  "Jour 3 uniquement",
  "Tous les jours de l'evenement",
  "Flexible",
];
const volunteer_zones_of_interest = [
  "Accueil et inscription",
  "Support visiteurs",
  "Support speakers",
  "Support media",
  "Support exposants",
  "Protocole / VIP",
  "Logistics",
  "Support technique",
  "Reseaux sociaux / contenu",
  "Support general"
]
export { breadcrumb_data, volunteer_form_area, faq_area, volunteer_availabilities, volunteer_zones_of_interest };
