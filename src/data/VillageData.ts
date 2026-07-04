import { StaticImageData } from "next/image";

import event_thumb1 from "@/assets/img/schedule/schedule-2/thumb.jpg";
import event_thumb2 from "@/assets/img/schedule/schedule-2/thumb-2.jpg";
import event_thumb3 from "@/assets/img/schedule/schedule-2/thumb-3.jpg";
import event_thumb4 from "@/assets/img/schedule/schedule-2/thumb-4.jpg";
import { vukafrik_event_data } from "./VukAfrikData";

interface DataType {
  id: number;
  page: string;
  thumb: StaticImageData;
  date: string;
  title: string;
  country: string;
  user: string;
  time: string;
}

const village_data: DataType[] = [
  {
    id: 1,
    page: "home_2",
    thumb: event_thumb1,
    date: "March_23, 2018",
    title: "Digital Marketing",
    country: "54 Street, Newyork City",
    user: "Esther Howard",
    time: "9.00am - 10.00 am",
  },
  {
    id: 2,
    page: "home_2",
    thumb: event_thumb2,
    date: "March_23, 2018",
    title: "Cultures of Creativity",
    country: "54 Street, Newyork City",
    user: "Esther Howard",
    time: "9.00am - 10.00 am",
  },
  {
    id: 3,
    page: "home_2",
    thumb: event_thumb3,
    date: "March_23, 2018",
    title: "Marketing Matters!",
    country: "54 Street, Newyork City",
    user: "Esther Howard",
    time: "9.00am - 10.00 am",
  },
  {
    id: 4,
    page: "home_2",
    thumb: event_thumb4,
    date: "March_23, 2018",
    title: "UI/UX Design Event",
    country: "54 Street, Newyork City",
    user: "Esther Howard",
    time: "9.00am - 10.00 am",
  },
  {
    id: 5,
    page: "home_2",
    thumb: event_thumb2,
    date: "March_23, 2018",
    title: "Cultures of Creativity",
    country: "54 Street, Newyork City",
    user: "Esther Howard",
    time: "9.00am - 10.00 am",
  },
  {
    id: 6,
    page: "home_2",
    thumb: event_thumb3,
    date: "March_23, 2018",
    title: "Marketing Matters!",
    country: "54 Street, Newyork City",
    user: "Esther Howard",
    time: "9.00am - 10.00 am",
  },
  {
    id: 7,
    page: "home_2",
    thumb: event_thumb4,
    date: "March_23, 2018",
    title: "UI/UX Design Event",
    country: "54 Street, Newyork City",
    user: "Esther Howard",
    time: "9.00am - 10.00 am",
  },
];

const title = "Nos villages thematiques 2026";
const sub_title = "villages thematiques";
const description = `Comme l'année dernière, nous organisons cette année ${vukafrik_event_data.name}. Il s'agit du rendez-vous de tous les grands`;

export { title, sub_title, description };
export default village_data;
