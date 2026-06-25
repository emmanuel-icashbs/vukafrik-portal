import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import EventHomeSix from "@/components/homes/home-six/Event";
import ExhibitionSchedule from "./Schedule";

const Exhibition = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title="All Exhibitions" sub_title="Exhibitions" />
        <ExhibitionSchedule />
      </main>
      <FooterOne />
    </>
  );
};

export default Exhibition;
