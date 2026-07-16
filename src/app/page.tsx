import HomeThree from "@/components/homes/home-three";
import { paths_holder } from "@/data/MenuData";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: `${vukafrik_event_data.name} | ${paths_holder.home.title}`,
};
const page = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  );
};

export default page;
