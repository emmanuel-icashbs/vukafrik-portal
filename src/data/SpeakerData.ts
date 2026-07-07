import { StaticImageData } from "next/image";

import team_1 from "@/assets/img/team/team-5/thumb.png";
import team_2 from "@/assets/img/team/team-5/thumb-2.png";
import team_3 from "@/assets/img/team/team-5/thumb-3.png";
import team_4 from "@/assets/img/team/team-5/thumb-4.png";
import team_5 from "@/assets/img/team/team-5/thumb-5.png";
import { vukafrik_event_data } from "./VukAfrikData";
import { cta_data } from "./CtaData";

interface DataType {
  id: number;
  thumb: StaticImageData;
  title: string;
  designation: string;
  biography: string;
}

const team_data: DataType[] = [
  {
    id: 1,
    thumb: team_1,
    title: "Devon Lane",
    designation: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 2,
    thumb: team_2,
    title: "Esther Howard",
    designation: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 3,
    thumb: team_3,
    title: "Robert Fox",
    designation: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 4,
    thumb: team_4,
    title: "Leslie Alexander",
    designation: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 5,
    thumb: team_5,
    title: "Jane Cooper",
    designation: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
  {
    id: 6,
    thumb: team_5,
    title: "Prince Ilunga",
    designation: "Sr. Software Engineer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellat.",
  },
];

const sub_title = "Apprendre grâce aux intervenants";
const title = "Intervenants à la conférence";
const description = `Comme l'année dernière, nous organisons cette année ${vukafrik_event_data.name}. Il s'agit du rendez-vous de tous les grands`;
const see_more_link = "/team";
const see_more_label = "Voir plus";
const cta_wrapper_title = "Ensemble avec Vous!";
const cta_wrapper_sub_title = "Nous irons encore plus loin!";
const become_speaker_title = cta_data.become_speaker.title;
const cta_sub_title = "Ne manquez pas notre événement !";
const cta_title = "Inscivez-vous dès aujourd'hui !";
const form_title = "Candidater comme speaker";
const form_sub_title =
  "Partagez votre expertise avec les leaders, entrepreneurs, innovateurs, investisseurs et acteurs d'ecosysteme de VUK'AFRIK 2026";

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
  form_title,
  form_sub_title,
};
export default team_data;
