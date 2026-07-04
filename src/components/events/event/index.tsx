import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Schedule from "@/components/homes/home-one/Schedule";
import EventHomeTwo from "@/components/homes/home-two/Event";
import Feature from "@/components/homes/home-three/Feature";

const Event = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title="All Events" sub_title="Events" />
        <Schedule />
        <Feature />
        <EventHomeTwo />
      </main>
      <FooterOne />
    </>
  );
};

export default Event;
