import bg_img from "@/assets/img/schedule/schedule-4/bg.jpg";
import { vukafrik_event_data } from "./VukAfrikData";
import { EventDataType } from "@/utils/types";

import event_thumb1 from "@/assets/img/schedule/schedule-2/thumb.jpg";
import event_thumb2 from "@/assets/img/schedule/schedule-2/thumb-2.jpg";
import event_thumb3 from "@/assets/img/schedule/schedule-2/thumb-3.jpg";
import event_thumb4 from "@/assets/img/schedule/schedule-2/thumb-4.jpg";

const schedule_days: string[] = [
  "Jour 01 - 25 aout, 2026",
  "Jour 02 - 26 aout, 2026",
  "Jour 03 - 27 aout, 2026",
];

const schedule_data: EventDataType[] = [
  {
    id: 1,
    start_time: "09:00 am",
    end_time: "10:00 am",
    topic: "Women in business conference",
    category: "Conference",
    image: event_thumb1,
    speakers: [1],
    venue: "Salle 001",
    date: schedule_days[0], // day 01
    descriptive_paragraphs: [
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.",
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
    ],
  },
  {
    id: 2,
    start_time: "10:00 am",
    end_time: "11:00 am",
    topic: "Women in business conference",
    category: "Conference",
    image: event_thumb2,
    speakers: [1, 2],
    venue: "Salle 001",
    key_points: [
      "Business Networking",
      "Learning and Development Place",
      "Investment Opportunities",
    ],
    date: schedule_days[0],
    descriptive_paragraphs: [
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.",
    ],
  },
  {
    id: 3,
    start_time: "11:00 am",
    end_time: "12:00 pm",
    topic: "Women in business conference",
    category: "Conference",
    image: event_thumb3,
    speakers: [1],
    venue: "Salle 002",
    key_points: [
      "Business Networking",
      "Learning and Development Place",
      "Investment Opportunities",
    ],
    date: schedule_days[0],
    descriptive_paragraphs: [
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.",
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
    ],
  },
  {
    id: 4,
    start_time: "12:00 pm",
    end_time: "01:00 pm",
    topic: "Women in business conference",
    category: "Conference",
    speakers: [1],
    venue: "Salle 001",
    date: schedule_days[0],
    descriptive_paragraphs: [
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
    ],
    image: event_thumb4,
  },
  {
    id: 5,
    start_time: "09:30 am",
    end_time: "10:30 am",
    topic: "Business Meeting with investors",
    category: "Meeting",
    image: event_thumb1,
    speakers: [1],
    venue: "Salle 035",
    key_points: ["Business Networking", "Investment Opportunities"],
    date: schedule_days[1], // day 02
    descriptive_paragraphs: [
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.",
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
    ],
  },
  {
    id: 6,
    start_time: "10:00 am",
    end_time: "11:00 am",
    topic: "Women in business conference",
    category: "Conference",
    image: event_thumb2,
    speakers: [1],
    venue: "Salle 001",
    date: schedule_days[1],
    descriptive_paragraphs: [
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.",
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
    ],
  },
  {
    id: 7,
    start_time: "9:00 am",
    end_time: "10:00 am",
    topic: "Women in business conference",
    category: "Conference",
    image: event_thumb3,
    speakers: [4, 2, 3],
    venue: "Salle 026",
    key_points: [
      "Learning and Development Place",
      "Investment Opportunities",
      "Business Networking",
      "Learning and Development Place",
    ],
    date: schedule_days[2], // day 03
    descriptive_paragraphs: [
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.",
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
    ],
  },
  {
    id: 8,
    start_time: "10:00 am",
    end_time: "11:00 am",
    topic: "Women in business conference",
    category: "Conference",
    image: event_thumb4,
    speakers: [3, 4, 8],
    venue: "Salle 001",
    key_points: [
      "Business Networking",
      "Investment Opportunities",
      "Business Networking",
      "Learning and Development Place",
    ],
    date: schedule_days[2],
    descriptive_paragraphs: [
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.",
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
    ],
  },
  {
    id: 9,
    start_time: "11:00 am",
    end_time: "12:00 pm",
    topic: "Women in business conference",
    category: "Conference",
    image: event_thumb1,
    speakers: [2, 3],
    venue: "Salle 002",
    date: schedule_days[2],
    descriptive_paragraphs: [
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.",
      "Aimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dum my text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
    ],
  },
];
const title: string = "Notre programme d'événements";
const sub_title: string = "Programme de l'événement";
const description: string = `Comme l'année dernière, nous organisons cette année ${vukafrik_event_data.name}. Il s'agit du rendez-vous de tous les leaders`;
const table_columns = {
  topic: "Sujet",
  speakers: "Intervenant(s)",
  venue: "Lieu",
};

const detail_page_data = {
  speakers_title: "Intervenant(s) de l'événement",
  info_title: "Information",
  info_category: "Catégorie",
  info_date: "Date",
  info_time: "Heure",
  info_phone: "Téléphone",
  info_location: "Lieu",
  info_email: "E-mail",
  registration_title: "Inscription",
};

const breadcrumb_data: {
  title: string;
  sub_title: string;
} = {
  title: `Programme de ${vukafrik_event_data.name}`,
  sub_title: "Programme",
};

export {
  schedule_days,
  bg_img,
  title,
  sub_title,
  description,
  detail_page_data,
  table_columns,
  breadcrumb_data,
};

export default schedule_data;
