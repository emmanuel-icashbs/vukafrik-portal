import schedule from "./ScheduleData";
import speakers from "./SpeakerData";
import discussion from "@/assets/img/vukafrik/content/fireside-chat-1.webp";
import conversation from "@/assets/img/vukafrik/content/fireside-entrepreneurship.webp";

const definitions = [
  { id: 1, scheduleId: 7, slug: "emmanuel-christian", image: discussion,
    imageAlt: "Échange entre intervenants assis, microphones en main, avec le drapeau de la RDC en arrière-plan",
    imageCaption: "Échange entre intervenants." },
  { id: 2, scheduleId: 10, slug: "jeannette-cadeco", image: conversation,
    imageAlt: "Illustration d’une conversation professionnelle",
    imageCaption: "Image d’illustration." },
];

export const firesideChats = definitions.map((definition) => {
  const session = schedule.find((item) => item.id === definition.scheduleId);
  if (!session) throw new Error(`Missing Fireside Chat schedule: ${definition.scheduleId}`);
  const participants = session.speakers.map((id) => {
    const speaker = speakers.find((item) => item.id === id);
    if (!speaker) throw new Error(`Missing Fireside Chat speaker: ${id}`);
    return { ...speaker, displayName: id === 18 ? "Directeur général de la CADECO" : speaker.name };
  });
  return {
    ...definition, session, participants,
    title: participants.map((speaker) => speaker.displayName).join(" & "),
    href: "/#fireside-chats",
    date: session.date.replace(/^Jour \d+ - /, ""),
    description: session.descriptive_paragraphs?.[0] ?? "",
  };
});
