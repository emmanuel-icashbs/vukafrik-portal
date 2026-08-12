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

export function deepTrim<T>(value: T): T {
  // Trim strings
  if (typeof value === "string") {
    return value.replace(/\s{2,}/g, " ").trim() as T;
  }

  // Handle arrays
  if (Array.isArray(value)) {
    return value.map((item) => deepTrim(item)) as T;
  }

  // Handle plain objects (exclude null & special objects)
  if (typeof value === "object" && value !== null && value.constructor === Object) {
    const result: Record<string, any> = {};

    for (const [key, val] of Object.entries(value)) {
      result[key] = deepTrim(val);
    }

    return result as T;
  }

  // Return everything else unchanged
  return value;
}