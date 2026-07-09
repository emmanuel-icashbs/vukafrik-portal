import TeamDetails from "@/components/teams/team-details";
import Wrapper from "@/layouts/Wrapper";
import { getSpeakerById, getSpeakerEventsById } from "@/utils/functions";

export const metadata = {
  title: "Team Details Evente - Conference and Event React Next js Template",
};
const page = async ({ params }: { params: { id: string } }) => {
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
