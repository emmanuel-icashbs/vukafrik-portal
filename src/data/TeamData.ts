import { StaticImageData } from "next/image";

import team_1 from "@/assets/img/team/team-5/thumb.png";
import team_2 from "@/assets/img/team/team-5/thumb-2.png";
import team_3 from "@/assets/img/team/team-5/thumb-3.png";
import team_4 from "@/assets/img/team/team-5/thumb-4.png";
import team_5 from "@/assets/img/team/team-5/thumb-5.png";
import { vukafrik_event_data } from "./VukAfrikData";

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

export { sub_title, title, description };
export default team_data;
