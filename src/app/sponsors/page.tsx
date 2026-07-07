import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import FaqArea from "./FaqArea";
import FormArea from "./FormArea";
import Brand from "@/components/homes/home-two/Brand";
import { breadcrumb } from "@/data/SponsorData";

export const metadata = {
  title: "Register Evente - Conference and Event React Next js Template",
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
