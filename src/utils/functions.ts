import schedule_data from "@/data/ScheduleData";
import speaker_data from "@/data/SpeakerData";

export const getSpeakerById = (id: number) => {
  const speaker = speaker_data.find((item) => item.id === id);
  return speaker;
};

export const getSpeakerEventsById = (id: number) => {
  const events = schedule_data.filter((item) => id in item.speakers);
  return events;
};

export const getEventById = (id: number) => {
  const event = schedule_data.find((item) => item.id === id);
  return event;
};
