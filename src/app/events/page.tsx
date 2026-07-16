import Event from "@/components/events/event";
import { paths_holder } from "@/data/MenuData";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: `${vukafrik_event_data.name} | ${paths_holder.events.list.title}`,
};
const page = () => {
  return (
    <Wrapper>
      <Event />
    </Wrapper>
  );
};

export default page;
