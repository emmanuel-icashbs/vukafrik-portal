import TeamDetails from "@/components/teams/team-details";
import Wrapper from "@/layouts/Wrapper";
import { getSpeakerEventsById } from "@/utils/functions";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/metadata";
import speakers from "@/data/SpeakerData";

export const dynamicParams = false;
export function generateStaticParams() {
  return speakers.map(speaker => ({ id: String(speaker.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const speaker = speakers.find((item) => String(item.id) === id);
  if (!speaker) notFound();
  return createPageMetadata(`/speakers/${id}`, speaker.name,
    `${speaker.name}, ${speaker.title}. Découvrez son profil et ses interventions à VUK’AFRIK 2026, du 23 au 25 septembre à Kinshasa.`);
}
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const speaker = speakers.find((item) => String(item.id) === id);
  if (!speaker) notFound();
  const speaker_events = getSpeakerEventsById(speaker.id);
  return (
    <Wrapper>
      <TeamDetails speaker={speaker} speaker_events={speaker_events} />
    </Wrapper>
  );
};

export default page;
