import { StaticImageData } from "next/image";

interface EventDataType {
  id: number;
  start_time: string;
  end_time: string;
  topic: string;
  category: string;
  image: StaticImageData;
  key_points?: string[];
  speakers: number[];
  venue: string;
  date: string;
  descriptive_paragraphs: string[];
}
interface SpeakerDataType {
  id: number;
  image: StaticImageData;
  name: string;
  title: string;
  biography: string;
  email?: string;
  phone?: string;
  address?: string;
  years_of_experience?: string;
}

interface InBetweenPathDataType {
  label: string;
  href: string;
}

export type { EventDataType, SpeakerDataType, InBetweenPathDataType };
