import EventDetails from "@/components/events/event-details";
import Wrapper from "@/layouts/Wrapper";
import { getEventById } from "@/utils/functions";

export const metadata = {
  title: "Event Details Evente - Conference and Event React Next js Template",
};
const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const event = await getEventById(parseInt(id));
  return (
    <Wrapper>
      <EventDetails event={event} />
    </Wrapper>
  );
};

export default page;
