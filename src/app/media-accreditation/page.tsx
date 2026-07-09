import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import FaqArea from "./FaqArea";
import FormArea from "./FormArea";
import { breadcrumb_data } from "@/data/MediaAccreditationData";

export const metadata = {
  title: "Register Evente - Conference and Event React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <Breadcrumb
          title={breadcrumb_data.title}
          sub_title={breadcrumb_data.title}
        />
        <FaqArea />
        <FormArea />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default page;
