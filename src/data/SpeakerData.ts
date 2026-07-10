import team_1 from "@/assets/img/team/team-5/thumb.png";
import team_2 from "@/assets/img/team/team-5/thumb-2.png";
import team_3 from "@/assets/img/team/team-5/thumb-3.png";
import team_4 from "@/assets/img/team/team-5/thumb-4.png";
import team_5 from "@/assets/img/team/team-5/thumb-5.png";
import { vukafrik_event_data } from "./VukAfrikData";
import { cta_data } from "./CtaData";
import { InBetweenPathDataType, SpeakerDataType } from "@/utils/types";
import { paths_holder } from "./MenuData";

const speaker_data: SpeakerDataType[] = [
  {
    id: 1,
    image: team_1,
    name: "Devon Lane",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
    email: vukafrik_event_data.contacts.generalEmail,
    phone: vukafrik_event_data.contacts.phoneLabel,
    address: vukafrik_event_data.venue,
    years_of_experience: "5 years",
  },
  {
    id: 2,
    image: team_2,
    name: "Esther Howard",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
    email: vukafrik_event_data.contacts.generalEmail,
    phone: vukafrik_event_data.contacts.phoneLabel,
    address: vukafrik_event_data.venue,
    years_of_experience: "4 years",
  },
  {
    id: 3,
    image: team_3,
    name: "Robert Fox",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 4,
    image: team_4,
    name: "Leslie Alexander",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 5,
    image: team_5,
    name: "Jane Cooper",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 6,
    image: team_5,
    name: "Prince Ilunga",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 7,
    image: team_5,
    name: "David Ilunga",
    title: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
];

const sub_title = "Apprendre grâce aux intervenants";
const title = "Intervenants à la conférence";
const description = `Comme l'année dernière, nous organisons cette année ${vukafrik_event_data.name}. Il s'agit du rendez-vous de tous les grands`;
const see_more_link = paths_holder.speakers.list.link;
const see_more_label = "Voir plus";
const cta_wrapper_title = "Ensemble avec Vous!";
const cta_wrapper_sub_title = "Nous irons encore plus loin!";
const become_speaker_title = cta_data.become_speaker.title;
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
const form_area = {
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
    "LinkedIn / site web *",
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
  become_speaker_title,
  cta_sub_title,
  cta_title,
  form_area,
  speaker_details_breadcrumb_data,
  speakers_breadcrumb_data,
  speakers_schedule_title,
  info_data,
  session_preferences,
};
export default speaker_data;
