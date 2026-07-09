import schedule_data from "@/data/ScheduleData";
import speaker_data from "@/data/SpeakerData";
import { EventDataType, SpeakerDataType } from "./types";

export const getSpeakerById = (id: number): SpeakerDataType => {
  const speaker = speaker_data.find((item) => item.id === id);
  if (!speaker) {
    throw new Error(`Speaker with id ${id} not found`);
  }
  return speaker;
};

export const getSpeakersByIds = (ids: number[]): SpeakerDataType[] => {
  return ids.map((id) => getSpeakerById(id));
};

export const getSpeakerEventsById = (id: number): EventDataType[] => {
  return schedule_data.filter((item) => item.speakers.includes(id));
};

export const getEventById = (id: number): EventDataType => {
  const event: EventDataType | undefined = schedule_data.find(
    (item) => item.id === id,
  );
  if (!event) {
    throw new Error(`Event with id ${id} not found`);
  }
  return event;
};
