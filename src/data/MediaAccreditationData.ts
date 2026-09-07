import { FaqDataType } from "@/utils/types";

const breadcrumb_data: {
  title: string;
  sub_title: string;
} = {
  title: "Accréditation des médias",
  sub_title: "Accréditation des médias",
};
const faq_data: { title: string; sub_title: string; data: FaqDataType[] } = {
  "title": "Demander une accréditation média",
  "sub_title": "Préparez votre demande pour couvrir VUK’AFRIK 2026.",
  "data": [
    {
      "id": 1,
      "page": "inner_faq",
      "showAnswer": true,
      "title": "Comment demander une accréditation ?",
      "desc": "Complétez le formulaire ci-dessous en indiquant votre média, vos coordonnées et l’objet de votre demande."
    },
    {
      "id": 2,
      "page": "inner_faq",
      "showAnswer": false,
      "title": "Quelles informations fournir sur mon média ?",
      "desc": "Indiquez votre organisation, votre type de média et votre pays. Le formulaire prévoit également des liens vers vos contenus précédents et votre numéro de carte de presse."
    },
    {
      "id": 3,
      "page": "inner_faq",
      "showAnswer": false,
      "title": "Puis-je préciser des besoins techniques ?",
      "desc": "Oui. Le formulaire comporte un espace pour vos besoins techniques spécifiques et le nombre de représentants de votre média."
    },
    {
      "id": 4,
      "page": "inner_faq",
      "showAnswer": false,
      "title": "Comment contacter l’équipe ?",
      "desc": "Adressez vos questions sur la couverture de l’événement à info@congocs.org."
    }
  ]
};

const media_accred_form_area = {
  id: "media_form",
  title: "Demande d'accreditation media",
  sub_title:
    "Demandez un acces media pour couvrir VUK'AFRIK 2026, son Strategic Summit, ses expositions, ses innovation showcases et ses activites ecosystemiques.",
  fields: [
    "Organisation / media *",
    "Nom du journaliste / representant *",
    "E-mail *",
    "Téléphone *",
    "Pays *",
    "Type de media *",
    "Objet de la demande *",
    "Lien vers des contenus precedents",
    "Numero de carte de presse *",
    "Nombre de representants media *",
    "Besoins techniques specifiques",
    "J'accepte que l'equipe VUK'AFRIK examine cette soumission et me contacte si necessaire.",
  ],
  submit_button: "Soumettre",
};

const media_types = [
  "TV",
  "Radio",
  "Presse ecrite",
  "Media en ligne",
  "Blog",
  "Podcast",
  "Photo / Video",
  "Reseaux sociaux / Createur de contenu",
  "Autre",
];
export { breadcrumb_data, faq_data, media_accred_form_area, media_types };
