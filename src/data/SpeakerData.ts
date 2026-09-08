import ministerPortrait from "@/assets/img/vukafrik/speakers/daniel-mukoko-samba.webp";
import emmanuelPortrait from "@/assets/img/vukafrik/speakers/emmanuel-lomami-kasongo.webp";
import team_1 from "@/assets/img/team/team-5/thumb.png";
import team_2 from "@/assets/img/team/team-5/thumb-2.png";
import team_5 from "@/assets/img/team/team-5/thumb-5.png";
import { InBetweenPathDataType, SpeakerDataType } from "@/utils/types";
import { paths_holder } from "./MenuData";

const speaker_data: SpeakerDataType[] = [
  {
    id: 1,
    type: "Individual",
    image: emmanuelPortrait,
    name: "Docteur Emmanuel LOMAMI KASONGO",
    title: "Président et fondateur — Congolese Computer Community (CCC)",
    biography: "Docteur Emmanuel LOMAMI KASONGO est président et fondateur de la Congolese Computer Community (CCC). Il prononce l’allocution d’ouverture, échange avec Christian KATENDE lors du fireside chat et présente la synthèse et les recommandations de la première journée.",
  },
  {
    id: 2,
    type: "Individual",
    image: team_1,
    name: "Monsieur Christian KATENDE",
    title: "Président — ARPTC",
    biography: "Christian KATENDE, président de l’ARPTC, participe au panel sur la régulation, l’innovation, la compétitivité et l’inclusion financière. Il échange avec Docteur Emmanuel LOMAMI KASONGO lors du fireside chat « Le régulateur face à l’innovation ».",
  },
  {
    id: 3,
    type: "Individual",
    image: team_1,
    name: "Représentant - ANIMF",
    title: "ANIMF",
    biography:
      "La participation d’un représentant de l’ANIMF reste à confirmer dans le programme actuel.",
  },
  {
    id: 4,
    type: "Individual",
    image: team_1,
    name: "Représentant - First Bank",
    title: "First Bank",
    biography:
      "La participation d’un représentant de First Bank reste à confirmer dans le programme actuel.",
  },
  {
    id: 5,
    type: "Individual",
    image: team_1,
    name: "Représentant - Fintech",
    title: "Fintech",
    biography:
      "Les représentants fintech annoncés dans le programme actuel figurent sous le nom de leur organisation.",
  },
  {
    id: 6,
    type: "Individual",
    image: team_2,
    name: "Représentant - ARPTC",
    title: "ARPTC",
    biography:
      "L’ARPTC est représentée par Christian KATENDE dans le panel et le fireside chat de la première journée.",
  },
  {
    id: 7,
    type: "Individual",
    image: team_5,
    name: "Monsieur Hervé Claude NTUMBA",
    title: "Directeur général — FPI",
    biography:
      "Hervé Claude NTUMBA intervient au nom du FPI dans le cadre d’une keynote de la première journée de VUK’AFRIK 2026. Cette prise de parole s’inscrit dans un programme réunissant acteurs institutionnels et économiques autour de l’entrepreneuriat, du financement et de l’industrialisation.",
  },
  {
    id: 8,
    image: team_5,
    name: "Équipe d’accueil VUK’AFRIK",
    title: "VUK'AFRIK",
    type: "Team",
    biography:
      "L’équipe d’accueil VUK’AFRIK intervient lors de l’ouverture des portes des deux premières journées de l’événement. Sa participation accompagne l’arrivée des participants avant les allocutions, les échanges et les ateliers prévus au programme de VUK’AFRIK 2026.",
  },
  {
    id: 9,
    type: "Individual",
    image: team_5,
    name: "Monsieur Sony Ngandu",
    title: "Maître de cérémonie",
    biography: "Sony Ngandu anime l’ouverture protocolaire de VUK’AFRIK 2026 en qualité de maître de cérémonie.",
  },
  {
    id: 10,
    type: "Individual",
    image: team_5,
    name: "Représentant - Gouvernement",
    title: "Représentant du gouvernement",
    biography: "Un représentant du Gouvernement participe à la clôture officielle de la première journée et à la visite des stands avec la FEC lors de la deuxième journée.",
  },
  {
    id: 11,
    type: "Individual",
    image: team_5,
    name: "Madame Sibia NGAYIHEMBAKO",
    title: "Directrice générale adjointe — Finca",
    biography: "Sibia NGAYIHEMBAKO est Directrice générale adjointe de Finca. Ses interventions individuelles à VUK’AFRIK restent à confirmer.",
  },
  {
    id: 12,
    type: "Individual",
    image: team_5,
    name: "Représentant - FOGEC",
    title: "FOGEC",
    biography:
      "Le représentant du FOGEC participe au panel consacré à l’entrepreneuriat, au financement et à l’industrialisation. Les échanges interrogent les difficultés rencontrées par les initiatives congolaises pour se développer et devenir des acteurs économiques de dimension régionale.",
  },
  {
    id: 13,
    type: "Individual",
    image: team_5,
    name: "Représentant - FEC",
    title: "FEC",
    biography:
      "Le représentant de la FEC participe au panel sur l’entrepreneuriat, le financement et l’industrialisation à VUK’AFRIK 2026. Il est également associé à la visite des stands par les officiels lors de la deuxième journée de l’événement.",
  },
  {
    id: 14,
    type: "Individual",
    image: team_5,
    name: "Représentant - APROCEM",
    title: "APROCEM",
    biography:
      "Le représentant de l’APROCEM participe au panel consacré à l’entrepreneuriat, au financement et à l’industrialisation. Cette rencontre porte sur les obstacles au développement des initiatives congolaises et sur leur capacité à devenir des acteurs économiques de dimension régionale.",
  },
  {
    id: 15,
    type: "Individual",
    image: team_5,
    name: "Représentant - PME",
    title: "PME",
    biography:
      "Le représentant d’une PME participe aux échanges sur l’entrepreneuriat, le financement et l’industrialisation à VUK’AFRIK 2026. Le panel aborde les difficultés de croissance des initiatives congolaises et les conditions de leur développement à l’échelle régionale.",
  },
  {
    id: 16,
    type: "Individual",
    image: team_5,
    name: "Représentant - ARSP",
    title: "ARSP",
    biography:
      "Le représentant de l’ARSP participe au panel sur l’entrepreneuriat, le financement et l’industrialisation. Son intervention s’inscrit dans les échanges consacrés aux difficultés rencontrées par les initiatives congolaises pour se développer et prendre une place à l’échelle régionale.",
  },
  {
    id: 17,
    type: "Individual",
    image: team_5,
    name: "Madame Jeannette CILOMBA",
    title: "Vice-présidente — CCC",
    biography:
      "Jeannette CILOMBA participe à VUK’AFRIK 2026 au nom de la CCC dans le cadre d’un fireside chat. Cet échange avec le représentant de la CADECO figure au programme de la première journée, aux côtés des panels et des prises de parole institutionnelles.",
  },
  {
    id: 18,
    type: "Individual",
    image: team_5,
    name: "Représentant - CADECO",
    title: "Directeur général — CADECO",
    biography:
        "Le représentant de la CADECO prend part à un fireside chat avec Jeannette CILOMBA lors de VUK’AFRIK 2026. Cette rencontre figure au programme de la première journée, consacrée aux échanges entre acteurs institutionnels, organisations et entreprises.",
  },
  {
    id: 19,
    type: "Individual",
    image: team_5,
    name: "Représentant - CCC",
    title: "Formateur — CCC",
    biography:
        "Le représentant de la CCC anime une formation sur les fondamentaux du digital pour entrepreneurs, de l’idée au produit numérique. L’atelier comprend également une courte présentation des idées du Hackathon et de leur raison d’être, sans pitch formel.",
  },
  {
    id: 20,
    type: "Team",
    image: team_5,
    name: "Équipe CCC Consulting",
    title: "CCC Consulting",
    biography: "CCC Consulting présente des solutions de gestion pour les entreprises. Aucune session dédiée n’est annoncée dans le programme actuel.",
  },
  {
    id: 21,
    type: "Individual",
    image: team_5,
    name: "Madame Malou Nzuzi",
    title: "Directrice générale — Agence CSB",
    biography:
        "Malou Nzuzi anime, au nom de l’Agence CSB, un atelier consacré à la structuration des PME pour les rendre finançables. Son intervention aborde l’organisation, la gouvernance et le pilotage de l’entreprise dans le cadre de la deuxième journée de VUK’AFRIK 2026.",
  },
  {
    id: 22,
    type: "Team",
    image: team_5,
    name: "Équipe d’organisation CCC",
    title: "Organisation — CCC",
    biography: "L’équipe d’organisation de la CCC accompagne la préparation et le déroulement de VUK’AFRIK 2026.",
  },
  {
    id: 23,
    type: "Team",
    image: team_5,
    name: "Équipe du ministère de l’Économie nationale",
    title: "Ministère de l’Économie nationale",
    biography: "Le ministère de l’Économie nationale est représenté lors de l’allocution institutionnelle de la première journée. Aucun atelier dédié à la formalisation n’est annoncé dans le programme actuel.",
  },
  {
    id: 24,
    type: "Team",
    image: team_5,
    name: "Équipe FOGEC",
    title: "FOGEC",
    biography:
        "L’équipe FOGEC anime un atelier consacré à la garantie du financement et à l’accès au crédit pour les entreprises congolaises. L’intervention porte sur la manière dont le FOGEC facilite cet accès, dans le cadre de la deuxième journée de VUK’AFRIK 2026.",
  },
  {
    id: 25,
    type: "Individual",
    image: team_5,
    name: "PME ou entrepreneur",
    title: "Entrepreneuriat et PME",
    biography:
      "Aucun intervenant n’est encore désigné pour le créneau de présentation de produits et services restant à confirmer.",
  },
  {
    id: 26,
    type: "Team",
    image: team_5,
    name: "Équipe FPI",
    title: "FPI",
    biography:
        "L’équipe FPI anime un atelier consacré au financement des projets industriels à VUK’AFRIK 2026. Son intervention présente les instruments et mécanismes du FPI afin d’aborder leur rôle dans le financement des projets portés par les participants.",
  },
  {
    id: 27,
    type: "Team",
    image: team_5,
    name: "Équipe Visa Congo",
    title: "Visa Congo",
    biography:
        "L’équipe Visa Congo anime un atelier consacré à Visa Pay et à l’économie sans cash lors de VUK’AFRIK 2026. Les échanges portent sur les paiements digitaux comme levier de croissance pour les PME, dans le cadre de la deuxième journée.",
  },
  {
    id: 28,
    type: "Individual",
    image: team_1,
    name: "Représentant - Neotex",
    title: "Neotex",
    biography: "Le représentant de Neotex intervient à VUK’AFRIK 2026 dans le cadre d’un atelier consacré à l’intelligence artificielle au service des entreprises congolaises. Son intervention aborde la stratégie, les cas d’usage et la perception visuelle intelligente.",
  },
  {
    id: 29,
    type: "Individual",
    image: team_1,
    name: "Représentant - Pepsi",
    title: "Pepsi",
    biography: "Le représentant de Pepsi anime un atelier sur les liens entre la chaîne de distribution et les opportunités entrepreneuriales. Son intervention aborde la manière dont l’industrie agroalimentaire fait vivre les PME locales, dans le cadre de VUK’AFRIK 2026.",
  },
  {
    id: 30,
    type: "Individual",
    image: team_1,
    name: "Représentant - ENA",
    title: "ENA",
    biography: "Le représentant de l’ENA anime un atelier consacré à la formation au service de l’administration publique. Son intervention porte sur le rôle de l’ENA dans la professionnalisation de l’administration et l’accompagnement de la transformation économique.",
  },
  {
    id: 31,
    type: "Individual",
    image: team_1,
    name: "Représentant - Finca",
    title: "Finca",
    biography: "Finca participe au panel sur la régulation, l’innovation, la compétitivité et l’inclusion financière le premier jour, puis anime un atelier sur l’éducation financière pour les entrepreneurs et les ménages le troisième jour.",
  },
  {
    id: 32,
    type: "Individual",
    image: team_1,
    name: "Représentant - APROCEC",
    title: "APROCEC",
    biography: "Le représentant de l’APROCEC anime un atelier sur la création et la structuration d’une coopérative d’épargne et de crédit. Cette intervention propose une approche pratique destinée aux entrepreneurs et aux communautés locales dans le cadre de VUK’AFRIK 2026.",
  },
  {
    id: 33,
    type: "Individual",
    image: team_1,
    name: "Représentant - ANADEC",
    title: "ANADEC",
    biography: "Le représentant de l’ANADEC anime un atelier sur l’accompagnement des entreprises, du lancement à la croissance. Son intervention présente les dispositifs d’appui de l’ANADEC pour les PME congolaises lors de la troisième journée de VUK’AFRIK 2026.",
  },
  {
    id: 34,
    type: "Individual",
    image: ministerPortrait,
    name: "Daniel Mukoko Samba",
    title: "Vice-Premier Ministre, Ministre de l’Économie nationale",
    biography: "Daniel Mukoko Samba, Vice-Premier Ministre, Ministre de l’Économie nationale, prononce l’allocution institutionnelle de la première journée de VUK’AFRIK 2026.",
  },
  {
    id: 35,
    type: "Individual",
    image: team_5,
    name: "Représentant — Banque Centrale du Congo",
    title: "Banque Centrale du Congo",
    biography: "La Banque Centrale du Congo participe au panel sur la régulation, l’innovation, la compétitivité et l’inclusion financière.",
  },
  {
    id: 36,
    type: "Individual",
    image: team_5,
    name: "Représentant — pawaPay",
    title: "pawaPay",
    biography: "pawaPay participe au premier panel et présente ses solutions de paiement mobile money pour les entreprises lors de la deuxième journée.",
  },
  {
    id: 37,
    type: "Individual",
    image: team_5,
    name: "Représentant — Manitek",
    title: "Manitek",
    biography: "Manitek présente sa solution lors d’une session de produits et services le 25 septembre, de 11:30 à 12:00. Le contenu détaillé reste à préciser.",
  },
];

const sub_title = "DES VOIX QUI FAÇONNENT L'AVENIR";
const title = "Intervenants à la conférence";
const description =
  "Rencontrez les leaders qui inspirent, innovent et transforment. Écoutez ceux qui façonnent les grandes transformations économiques.";
const see_more_link = paths_holder.speakers.list.link;
const see_more_label = "Voir plus";
const cta_wrapper_title = "Ensemble avec Vous!";
const cta_wrapper_sub_title = "Nous irons encore plus loin!";
const cta_sub_title = "Ne manquez pas notre événement !";
const cta_title = "Inscivez-vous dès aujourd'hui !";

const speaker_details_breadcrumb_data: {
  title: string;
  sub_title: string;
  in_between_paths: InBetweenPathDataType[];
} = {
  title: "Informations sur l'intervenant",
  sub_title: "Informations sur l'intervenant",
  in_between_paths: [
    {
      label: paths_holder.speakers.list.title,
      href: paths_holder.speakers.list.link,
    },
  ],
};
const speakers_breadcrumb_data: {
  title: string;
  sub_title: string;
} = {
  title: "Nos Intervenants",
  sub_title: "Intervenants",
};
const speakers_schedule_title = "Programme de l'intervenant";
const info_data = {
  email: "E-mail",
  phone: "Numéro de téléphone",
  address: "Adresse",
  experience: "Expérience",
};
const speaker_form_area = {
  id: "speaker_form",
  title: "Candidater comme speaker",
  sub_title:
    "Partagez votre expertise avec les leaders, entrepreneurs, innovateurs, investisseurs et acteurs d'ecosysteme de VUK'AFRIK 2026",
  fields: [
    "Nom complet *",
    "Email *",
    "Téléphone *",
    "Organisation *",
    "Fonction / titre *",
    "Courte bio... *",
    "Sujet propose *",
    "Preference de session *",
    "LinkedIn / site web",
    "Experience de prise de parole",
    "Notes complementaires",
    "J'accepte que l'equipe VUK'AFRIK examine cette soumission et me contacte si necessaire.",
  ],
  submit_button: "Soumettre",
};

const session_preferences = [
  "Keynote",
  "Panel",
  "Fireside Chat",
  "Workshop",
  "Session de formation",
  "Jury pitch",
  "Moderateur",
  "Autre",
];

export {
  sub_title,
  title,
  description,
  see_more_link,
  see_more_label,
  cta_wrapper_title,
  cta_wrapper_sub_title,
  cta_sub_title,
  cta_title,
  speaker_form_area,
  speaker_details_breadcrumb_data,
  speakers_breadcrumb_data,
  speakers_schedule_title,
  info_data,
  session_preferences,
};
export default speaker_data;
