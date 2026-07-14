import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Schedule from "@/components/homes/home-one/Schedule";
import Feature from "@/components/homes/home-three/Feature";
import { breadcrumb_data } from "@/data/ScheduleData";

const Event = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb
          title={breadcrumb_data.title}
          sub_title={breadcrumb_data.sub_title}
        />
        <Schedule />
        <Feature />
      </main>
      <FooterOne />
    </>
  );
};

export default Event;
