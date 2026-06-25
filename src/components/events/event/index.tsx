import Breadcrumb from "@/components/common/Breadcrumb";
import Experience from "./Experience";
import TextSlider from "@/components/homes/home-one/TextSlider";
import Ticket from "@/components/homes/home-one/Ticket";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Schedule from "@/components/homes/home-one/Schedule";

const Event = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title="All Events" sub_title="Events" />
        <Schedule />
        <TextSlider />
        <Experience />
        <Ticket />
      </main>
      <FooterOne />
    </>
  );
};

export default Event;
