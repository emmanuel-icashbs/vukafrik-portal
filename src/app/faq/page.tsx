import Faq from "@/components/pages/faq";
import { paths_holder } from "@/data/MenuData";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: `${vukafrik_event_data.name} | ${paths_holder.faq.title}`,
};
const page = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  )
}

export default page