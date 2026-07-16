import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Schedule from "@/components/homes/home-one/Schedule";
import { breadcrumb_data } from "@/data/ScheduleData";
import TextSlider from "@/components/homes/home-one/TextSlider";
import Feature from "../about/Feature";

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
        <div className="mt-100">
          <TextSlider />
        </div>
      </main>
      <FooterOne />
    </>
  );
};

export default Event;
