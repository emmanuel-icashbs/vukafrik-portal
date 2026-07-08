import bg_img from "@/assets/img/schedule/schedule-4/bg.jpg";
import { vukafrik_event_data } from "./VukAfrikData";

interface DataType {
  id: number;
  start_time: string;
  end_time: string;
  topic: string;
  category: string;
  key_points?: string[];
  speakers: number[];
  venue: string;
  date: string;
}

const schedule_days: string[] = [
  "Day 01 - 25 aout, 2026",
  "Day 02 - 26 aout, 2026",
  "Day 03 - 27 aout, 2026",
];

const schedule_data: DataType[] = [
  {
    id: 1,
    start_time: "09:00 am",
    end_time: "10:00 am",
    topic: "Women in business conference",
    category: "Conference",
    speakers: [1],
    venue: "Manhattan Club nyc",
    date: schedule_days[0], // day 01
  },
  {
    id: 2,
    start_time: "10:00 am",
    end_time: "11:00 am",
    topic: "Women in business conference",
    category: "Conference",
    speakers: [1, 2],
    venue: "Manhattan Club nyc",
    key_points: [
      "Business Networking",
      "Learning and Development Place",
      "Investment Opportunities",
    ],
    date: schedule_days[0],
  },
  {
    id: 3,
    start_time: "11:00 am",
    end_time: "12:00 pm",
    topic: "Women in business conference",
    category: "Conference",
    speakers: [1],
    venue: "Manhattan Club nyc",
    key_points: [
      "Business Networking",
      "Learning and Development Place",
      "Investment Opportunities",
    ],
    date: schedule_days[0],
  },
  {
    id: 4,
    start_time: "12:00 pm",
    end_time: "01:00 pm",
    topic: "Women in business conference",
    category: "Conference",
    speakers: [1],
    venue: "Manhattan Club nyc",
    date: schedule_days[0],
  },
  {
    id: 1,
    start_time: "09:30 am",
    end_time: "10:30 am",
    topic: "Business Meeting with investors",
    category: "Meeting",
    speakers: [1],
    venue: "Manhattan Club nyc",
    key_points: ["Business Networking", "Investment Opportunities"],
    date: schedule_days[1], // day 02
  },
  {
    id: 2,
    start_time: "10:00 am",
    end_time: "11:00 am",
    topic: "Women in business conference",
    category: "Conference",
    speakers: [1],
    venue: "Manhattan Club nyc",
    date: schedule_days[1],
  },
  {
    id: 1,
    start_time: "9:00 am",
    end_time: "10:00 am",
    topic: "Women in business conference",
    category: "Conference",
    speakers: [1],
    venue: "Manhattan Club nyc",
    key_points: [
      "Learning and Development Place",
      "Investment Opportunities",
      "Business Networking",
      "Learning and Development Place",
    ],
    date: schedule_days[2], // day 03
  },
  {
    id: 2,
    start_time: "10:00 am",
    end_time: "11:00 am",
    topic: "Women in business conference",
    category: "Conference",
    speakers: [1],
    venue: "Manhattan Club nyc",
    key_points: [
      "Business Networking",
      "Investment Opportunities",
      "Business Networking",
      "Learning and Development Place",
    ],
    date: schedule_days[2],
  },
  {
    id: 3,
    start_time: "11:00 am",
    end_time: "12:00 pm",
    topic: "Women in business conference",
    category: "Conference",
    speakers: [1],
    venue: "Manhattan Club nyc",
    date: schedule_days[2],
  },
];
const title: string = "Notre programme d'événements";
const sub_title: string = "Programme de l'événement";
const description: string = `Comme l'année dernière, nous organisons cette année ${vukafrik_event_data.name}. Il s'agit du rendez-vous de tous les leaders`;

export { schedule_days, bg_img, title, sub_title, description };

export default schedule_data;
