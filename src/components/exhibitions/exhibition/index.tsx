import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import ExhibitionSchedule from "./Schedule";
import FormArea from "./FormArea";
import FaqArea from "./FaqArea";
import { breadcrumb } from "@/data/ExhibitionData";
import Pricing from "@/components/homes/home-three/Pricing";

const Exhibition = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title={breadcrumb.title} sub_title={breadcrumb.sub_title} />
        <ExhibitionSchedule />
        <FaqArea />
        <Pricing />
        <FormArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Exhibition;
