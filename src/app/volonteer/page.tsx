import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import FaqArea from "./FaqArea";
import FormArea from "./FormArea";
import Cta from "./Cta";

export const metadata = {
  title: "Register Evente - Conference and Event React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <Breadcrumb title="Volontaire" sub_title="Volontaire" />
        <FaqArea />
        <Cta />
        <FormArea />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default page;
