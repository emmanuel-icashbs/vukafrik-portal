import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import FaqArea from "./FaqArea";
import FormArea from "./FormArea";
import { breadcrumb_data } from "@/data/VolonteerData";
import { paths_holder } from "@/data/MenuData";
import { vukafrik_event_data } from "@/data/VukAfrikData";

export const metadata = {
  title: `${vukafrik_event_data.name} | ${paths_holder.volunteer.title}`,
};
const page = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <Breadcrumb
          title={breadcrumb_data.title}
          sub_title={breadcrumb_data.sub_title}
        />
        <FaqArea />
        <FormArea />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default page;
