import bg_img from "@/assets/img/schedule/schedule-4/bg.jpg";
import { vukafrik_event_data } from "./VukAfrikData";

interface DataType {
  id: number;
  schedule_details: {
    id: number;
    time: string;
    time2: string;
    Topics: string;
    speaker: string;
    venue: string;
  }[];
}

const tab_title: string[] = [
  "Day 01 - 25 aout, 2026",
  "Day 02 - 26 aout, 2026",
  "Day 03 - 27 aout, 2026",
];

const schedule_data: DataType[] = [
  {
    id: 1,
    schedule_details: [
      {
        id: 1,
        time: "09:00 am",
        time2: "10:00 am",
        Topics: "Women in business conference",
        speaker: "Ashton Porter",
        venue: "Manhattan Club nyc",
      },
      {
        id: 2,
        time: "10:00 am",
        time2: "11:00 am",
        Topics: "Women in business conference",
        speaker: "Ashton Porter",
        venue: "Manhattan Club nyc",
      },
      {
        id: 3,
        time: "11:00 am",
        time2: "12:00 pm",
        Topics: "Women in business conference",
        speaker: "Ashton Porter",
        venue: "Manhattan Club nyc",
      },
      {
        id: 4,
        time: "12:00 pm",
        time2: "01:00 pm",
        Topics: "Women in business conference",
        speaker: "Ashton Porter",
        venue: "Manhattan Club nyc",
      },
    ],
  },
  {
    id: 2,
    schedule_details: [
      {
        id: 1,
        time: "9:00 am",
        time2: "10:00 am",
        Topics: "Women in business conference",
        speaker: "Ashton Porter",
        venue: "Manhattan Club nyc",
      },
      {
        id: 2,
        time: "10:00 am",
        time2: "11:00 am",
        Topics: "Women in business conference",
        speaker: "Ashton Porter",
        venue: "Manhattan Club nyc",
      },
    ],
  },
  {
    id: 3,
    schedule_details: [
      {
        id: 1,
        time: "9:00 am",
        time2: "10:00 am",
        Topics: "Women in business conference",
        speaker: "Ashton Porter",
        venue: "Manhattan Club nyc",
      },
      {
        id: 2,
        time: "10:00 am",
        time2: "11:00 am",
        Topics: "Women in business conference",
        speaker: "Ashton Porter",
        venue: "Manhattan Club nyc",
      },
      {
        id: 3,
        time: "11:00 am",
        time2: "12:00 pm",
        Topics: "Women in business conference",
        speaker: "Ashton Porter",
        venue: "Manhattan Club nyc",
      },
    ],
  },
  {
    id: 4,
    schedule_details: [
      {
        id: 1,
        time: "10:00 am",
        time2: "11:00 am",
        Topics: "Women in business conference",
        speaker: "Ashton Porter",
        venue: "Manhattan Club nyc",
      },
    ],
  },
];
const title: string = "Notre programme d'événements";
const sub_title: string = "Programme de l'événement";
const description: string = `Comme l'année dernière, nous organisons cette année ${vukafrik_event_data.name}. Il s'agit du rendez-vous de tous les leaders`;

export { tab_title, bg_img, title, sub_title, description };

export default schedule_data;
