import { getPageMetadata } from "@/lib/metadata";
import EventsVenue from "@/components/events/events-venue";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/event-venue");
const page = () => {
  return (
    <Wrapper>
      <EventsVenue />
    </Wrapper>
  );
};

export default page;
