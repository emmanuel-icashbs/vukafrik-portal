import Contact from "@/components/contact";
import { paths_holder } from "@/data/MenuData";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: `${vukafrik_event_data.name} | ${paths_holder.contact.title}`,
};
const page = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default page;
