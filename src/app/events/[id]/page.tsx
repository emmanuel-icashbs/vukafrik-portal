import { notFound, redirect } from "next/navigation";
import { firesideChats } from "@/data/FiresideChatData";
import EventDetails from "@/components/events/event-details";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/metadata";
import schedule from "@/data/ScheduleData";

// Records are build-time data. Reject unknown paths before a loading boundary can stream a 200.
export const dynamicParams = false;
export function generateStaticParams() {
  return schedule.map(event => ({ id: String(event.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = schedule.find((item) => String(item.id) === id);
  if (!event) notFound();
  return createPageMetadata(`/events/${id}`, event.topic,
    `${event.topic} : ${event.date.replace(/^Jour \d+ - /, "")}, de ${event.start_time} à ${event.end_time}, ${event.venue}. Consultez cette session de VUK’AFRIK à Kinshasa.`);
}
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const chat = firesideChats.find(item => String(item.scheduleId) === id);
  if (chat) redirect(chat.href);
  const event = schedule.find((item) => String(item.id) === id);
  if (!event) notFound();
  return (
    <Wrapper>
      <EventDetails event={event} />
    </Wrapper>
  );
};

export default page;
