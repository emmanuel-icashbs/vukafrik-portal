import { vukafrik_event_data as event } from "@/data/VukAfrikData";
import { siteUrl, shareImage } from "./metadata";

export const eventStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": new URL("/#organizer", siteUrl).href,
      name: event.organiser,
      email: event.contacts.generalEmail,
      telephone: event.contacts.phoneHref.replace("tel:", ""),
    },
    {
      "@type": "Event",
      "@id": new URL("/#event", siteUrl).href,
      name: `${event.name} — ${event.subtitle}`,
      description: event.shortDescription,
      url: siteUrl.href,
      startDate: event.startDate,
      endDate: event.endDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      image: [shareImage.url],
      inLanguage: "fr",
      location: {
        "@type": "Place",
        name: event.venue,
        address: { "@type": "PostalAddress", addressLocality: event.city, addressCountry: "CD" },
        hasMap: event.venueHref,
      },
      organizer: { "@id": new URL("/#organizer", siteUrl).href },
    },
  ],
};

export function serializeStructuredData(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
