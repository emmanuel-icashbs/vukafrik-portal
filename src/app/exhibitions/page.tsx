import Exhibition from "@/components/exhibitions/exhibition";
import { paths_holder } from "@/data/MenuData";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: `${vukafrik_event_data.name} | ${paths_holder.exhibitions.list.title}`,
};
const page = () => {
  return (
    <Wrapper>
      <Exhibition />
    </Wrapper>
  );
};

export default page;
