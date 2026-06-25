import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import ExhibitionSchedule from "./Schedule";
import Cta from "./Cta";
import FormArea from "./FormArea";

const Exhibition = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title="All Exhibitions" sub_title="Exhibitions" />
        <ExhibitionSchedule />
        <Cta />
        <FormArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Exhibition;
