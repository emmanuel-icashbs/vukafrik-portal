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
  if (
    typeof value === "object" &&
    value !== null &&
    value.constructor === Object
  ) {
    const result: Record<string, any> = {};

    for (const [key, val] of Object.entries(value)) {
      result[key] = deepTrim(val);
    }

    return result as T;
  }

  // Return everything else unchanged
  return value;
}

// Write a split schedule dates function receiving a string in the format "Jour 01 - 25 aout, 2026" and returning an object with Jour 01, 25, aout, 2026 separate properties.
// The function should be named splitScheduleDate and should return an object with the properties schedule_day, month_day, month, year.
export const splitScheduleDate = (dateString: string) => {
  const dateStringNoExtraSpace = dateString.replace(/\s{2,}/, " ");
  const [schedule_day, date] = dateStringNoExtraSpace.split(/\s*-\s*/);

  const [month_day, month, year] = date.split(/\s*,\s*|\s+/);
  console.log({ month_day, month, year });

  return { schedule_day, month_day, month, year };
};
