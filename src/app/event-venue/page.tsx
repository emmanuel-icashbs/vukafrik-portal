import EventsVenue from "@/components/events/events-venue";
import { paths_holder } from "@/data/MenuData";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: `${vukafrik_event_data.name} | ${paths_holder.events.venue.title}`,
};
const page = () => {
  return (
    <Wrapper>
      <EventsVenue />
    </Wrapper>
  );
};

export default page;
