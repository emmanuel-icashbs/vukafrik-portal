import { getPageMetadata } from "@/lib/metadata";
import EventPage from "@/components/events/event";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/events");
const page = () => {
  return (
    <Wrapper>
      <EventPage />
    </Wrapper>
  );
};

export default page;
