import bg_img from "@/assets/img/feature/special-features.jpg";
import { vukafrik_event_data } from "./VukAfrikData";

interface DataType {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

const feature_data: DataType[] = [
  {
    id: 1,
    icon: "flaticon-meeting",
    title: "Panel",
    desc: "anunknown printer took galley type and scrambled type specimen book survived.",
  },
  {
    id: 2,
    icon: "flaticon-teamwork-2",
    title: "Ateliers",
    desc: "anunknown printer took galley type and scrambled type specimen book survived.",
  },
  {
    id: 3,
    icon: "flaticon-puzzle",
    title: "Hackathon",
    desc: "anunknown printer took galley type and scrambled type specimen book survived.",
  },
  {
    id: 4,
    icon: "flaticon-share",
    title: "Exposition",
    desc: "anunknown printer took galley type and scrambled type specimen book survived.",
  },
];

const title = "Pourquoi participer à notre événement ?";
const sub_title = "Informations sur l'événement";
const description = `Comme l'année dernière, nous organisons cette année ${vukafrik_event_data.name}. Il s'agit du rendez-vous de tous les grands`;

export { feature_data, bg_img, title, sub_title, description };
