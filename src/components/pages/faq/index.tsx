import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FaqArea from "./FaqArea";
import FooterOne from "@/layouts/footers/FooterOne";
import { breadcrumb_data } from "@/data/FaqData";

const Faq = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb
          title={breadcrumb_data.title}
          sub_title={breadcrumb_data.sub_title}
        />
        <FaqArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Faq;
