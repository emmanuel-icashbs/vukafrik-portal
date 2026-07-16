import About from "@/components/events/about";
import { paths_holder } from "@/data/MenuData";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: `${vukafrik_event_data.name} | ${paths_holder.about.title}`,
};
const page = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default page;
