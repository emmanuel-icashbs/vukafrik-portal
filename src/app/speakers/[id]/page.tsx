import TeamDetails from "@/components/teams/team-details";
import Wrapper from "@/layouts/Wrapper";
import { getSpeakerById, getSpeakerEventsById } from "@/utils/functions";
import { createPageMetadata } from "@/lib/metadata";
import speakers from "@/data/SpeakerData";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const speaker = speakers.find((item) => String(item.id) === id);
  if (!speaker) return createPageMetadata(`/speakers/${encodeURIComponent(id)}`, "Intervenant introuvable", "Découvrez les intervenants et les sessions de VUK’AFRIK 2026 à Kinshasa.");
  return createPageMetadata(`/speakers/${id}`, speaker.name,
    `${speaker.name}, ${speaker.title}. Découvrez son profil et ses interventions à VUK’AFRIK 2026, du 23 au 25 septembre à Kinshasa.`);
}
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const speaker = await getSpeakerById(parseInt(id));
  const speaker_events = await getSpeakerEventsById(parseInt(id));
  return (
    <Wrapper>
      <TeamDetails speaker={speaker} speaker_events={speaker_events} />
    </Wrapper>
  );
};

export default page;
