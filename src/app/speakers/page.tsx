import Team from "@/components/teams/team";
import { paths_holder } from "@/data/MenuData";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: `${vukafrik_event_data.name} | ${paths_holder.speakers.list.title}`,
};
const page = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

export default page;
