import type { MetadataRoute } from "next";
import { publicPaths } from "@/lib/indexing";
import { siteUrl } from "@/lib/metadata";
import schedule from "@/data/ScheduleData";
import speakers from "@/data/SpeakerData";
import { firesideChats } from "@/data/FiresideChatData";

export default function sitemap(): MetadataRoute.Sitemap {
  const redirectedEvents = new Set(firesideChats.map(chat => chat.scheduleId));
  const paths = [
    ...publicPaths,
    ...schedule.filter(event => !redirectedEvents.has(event.id)).map(event => `/events/${event.id}`),
    ...speakers.map(speaker => `/speakers/${speaker.id}`),
  ];
  // No invented lastModified timestamps: use actual content revision dates when available.
  return paths.map(path => ({ url: new URL(path, siteUrl).href }));
}
