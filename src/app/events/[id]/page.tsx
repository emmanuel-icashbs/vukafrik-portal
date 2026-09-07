import { redirect } from "next/navigation";
import { firesideChats } from "@/data/FiresideChatData";
import EventDetails from "@/components/events/event-details";
import Wrapper from "@/layouts/Wrapper";
import { getEventById } from "@/utils/functions";
import { createPageMetadata } from "@/lib/metadata";
import schedule from "@/data/ScheduleData";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = schedule.find((item) => String(item.id) === id);
  if (!event) return createPageMetadata(`/events/${encodeURIComponent(id)}`, "Événement introuvable", "Retrouvez les sessions et les horaires dans le programme de VUK’AFRIK 2026.");
  return createPageMetadata(`/events/${id}`, event.topic,
    `${event.topic} : ${event.date.replace(/^Jour \d+ - /, "")}, de ${event.start_time} à ${event.end_time}, ${event.venue}. Consultez cette session de VUK’AFRIK à Kinshasa.`);
}
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const chat = firesideChats.find(item => String(item.scheduleId) === id);
  if (chat) redirect(chat.href);
  const event = await getEventById(parseInt(id));
  return (
    <Wrapper>
      <EventDetails event={event} />
    </Wrapper>
  );
};

export default page;
