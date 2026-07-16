import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import FaqArea from "./FaqArea";
import FormArea from "./FormArea";
import Brand from "@/components/homes/home-two/Brand";
import { breadcrumb } from "@/data/SponsorData";
import { paths_holder } from "@/data/MenuData";
import { vukafrik_event_data } from "@/data/VukAfrikData";

export const metadata = {
  title: `${vukafrik_event_data.name} | ${paths_holder.sponsors.title}`,
};
const page = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <Breadcrumb title={breadcrumb.title} sub_title={breadcrumb.sub_title} />
        <Brand />
        <FaqArea />
        <FormArea />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default page;
