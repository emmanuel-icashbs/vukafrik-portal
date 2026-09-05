import team_1 from "@/assets/img/team/team-5/thumb.png";
import team_2 from "@/assets/img/team/team-5/thumb-2.png";
import team_3 from "@/assets/img/team/team-5/thumb-3.png";
import team_4 from "@/assets/img/team/team-5/thumb-4.png";
import team_5 from "@/assets/img/team/team-5/thumb-5.png";
import { vukafrik_event_data } from "./VukAfrikData";
import { InBetweenPathDataType, SpeakerDataType } from "@/utils/types";
import { paths_holder } from "./MenuData";

const speaker_data: SpeakerDataType[] = [
  {
    id: 1,
    type: "Individual",
    image: team_1,
    name: "Docteur Emmanuel LOMAMI",
    title: "Président & Fondateur de CCC",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
    email: vukafrik_event_data.contacts.generalEmail,
    phone: vukafrik_event_data.contacts.phoneLabel,
    address: vukafrik_event_data.venue,
    years_of_experience: "5 years",
  },
  {
    id: 2,
    type: "Individual",
    image: team_1,
    name: "Monsieur Christian KATENDE",
    title: "Président de l'ARPTC",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 3,
    type: "Individual",
    image: team_1,
    name: "Représentant",
    title: "ANIMF",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 4,
    type: "Individual",
    image: team_1,
    name: "Représentant",
    title: "First Bank",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 5,
    type: "Individual",
    image: team_1,
    name: "Représentant",
    title: "Fintech",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 6,
    type: "Individual",
    image: team_2,
    name: "Représentant",
    title: "ARPTC",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
    email: vukafrik_event_data.contacts.generalEmail,
    phone: vukafrik_event_data.contacts.phoneLabel,
    address: vukafrik_event_data.venue,
    years_of_experience: "4 years",
  },
  {
    id: 7,
    type: "Individual",
    image: team_5,
    name: "Monsieur Hervé Claude NTUMBA",
    title: "Directeur Général FPI",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 8,
    image: team_5,
    name: "Equipe d'acceille VUK'AFRIK",
    title: "VUK'AFRIK",
    type: "Team",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 9,
    type: "Individual",
    image: team_5,
    name: "Monsieur Sony Ngandu",
    title: "Maitre de Cerémonie",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 10,
    type: "Individual",
    image: team_5,
    name: "Répresentant du gouvernement",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 11,
    type: "Individual",
    image: team_5,
    name: "Madame Sibia NGAYIHEMBAKO (DGA Finca)",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 12,
    type: "Individual",
    image: team_5,
    name: "DG FOGEC",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 13,
    type: "Individual",
    image: team_5,
    name: "Representant FEC",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 14,
    type: "Individual",
    image: team_5,
    name: "DG APROCEM",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 15,
    type: "Individual",
    image: team_5,
    name: "DG d'une PME",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 16,
    type: "Individual",
    image: team_5,
    name: "DG ARESP",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 17,
    type: "Individual",
    image: team_5,
    name: "Madame Jeannette CILOMBA (Vice Président de la CCC)",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 18,
    type: "Individual",
    image: team_5,
    name: "DG CADECO",
    title: "Sr. Software Engineer",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 19,
    type: "Individual",
    image: team_5,
    name: "Formatteur CCC",
    title: "Sr. Software Engineer",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 20,
    type: "Team",
    image: team_5,
    name: "Equipe CCC Consulting",
    title: "Sr. Software Engineer",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 21,
    type: "Individual",
    image: team_5,
    name: "Madame Malou Nzuzi (DG Agence CSB)",
    title: "Sr. Software Engineer",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 22,
    type: "Team",
    image: team_5,
    name: "Equipe d'organisation CCC",
    title: "Sr. Software Engineer",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 23,
    type: "Team",
    image: team_5,
    name: "Equipe Ministere de l'Economie National",
    title: "Sr. Software Engineer",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 24,
    type: "Team",
    image: team_5,
    name: "Equipe Ministere du FOGEC",
    title: "Sr. Software Engineer",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 25,
    type: "Individual",
    image: team_5,
    name: "PME ou Entrepreneur",
    title: "Sr. Software Engineer",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 26,
    type: "Team",
    image: team_5,
    name: "Equipe FPI",
    title: "Sr. Software Engineer",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 27,
    type: "Team",
    image: team_5,
    name: "Equipe Visa Congo",
    title: "Sr. Software Engineer",
    biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 28,
    type: "Individual",
    image: team_1,
    name: "Représentant - Neotex",
    title: "Neotex",
    biography: "Neotex présente la stratégie, les cas d’usage et la perception visuelle intelligente au service des entreprises congolaises.",
  },
  {
    id: 29,
    type: "Individual",
    image: team_1,
    name: "Représentant - Pepsi",
    title: "Pepsi",
    biography: "Pepsi aborde les opportunités entrepreneuriales liées à la chaîne de distribution et le rôle de l’industrie agroalimentaire pour les PME locales.",
  },
  {
    id: 30,
    type: "Individual",
    image: team_1,
    name: "Représentant - ENA",
    title: "ENA",
    biography: "L’ENA présente son rôle dans la professionnalisation de l’administration publique et l’accompagnement de la transformation économique.",
  },
  {
    id: 31,
    type: "Individual",
    image: team_1,
    name: "Représentant - Finca",
    title: "Finca",
    biography: "Finca propose un atelier sur les bases de l’éducation financière pour les entrepreneurs et les ménages.",
  },
  {
    id: 32,
    type: "Individual",
    image: team_1,
    name: "Représentant - APROCEC",
    title: "APROCEC",
    biography: "APROCEC aborde la création et la structuration d’une coopérative d’épargne et de crédit pour les entrepreneurs et les communautés locales.",
  },
  {
    id: 33,
    type: "Individual",
    image: team_1,
    name: "Représentant - ANADEC",
    title: "ANADEC",
    biography: "L’ANADEC présente ses dispositifs d’appui aux PME congolaises, du lancement de l’entreprise à sa croissance.",
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
