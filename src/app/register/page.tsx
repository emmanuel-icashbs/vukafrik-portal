import Register from "@/components/pages/register";
import { paths_holder } from "@/data/MenuData";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: `${vukafrik_event_data.name} | ${paths_holder.register.title}`,
};
const page = () => {
  return (
    <Wrapper>
      <Register />
    </Wrapper>
  );
};

export default page;
