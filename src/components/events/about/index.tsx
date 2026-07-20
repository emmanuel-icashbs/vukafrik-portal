import Breadcrumb from "@/components/common/Breadcrumb";
import Feature from "./Feature";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterOne from "@/layouts/footers/FooterOne";
import About from "@/components/homes/home-three/About";
import VukaInfo from "@/components/homes/home-three/VukaInfo";
import { breadcrumb_data } from "@/data/AboutUsData";
import AboutHomeOne from "@/components/homes/home-one/About";

const AboutVukaPage = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb
          title={breadcrumb_data.title}
          sub_title={breadcrumb_data.sub_title}
        />
        <About should_display_about_btn={false} />
        <Feature />
        <AboutHomeOne />
        <VukaInfo />
      </main>
      <FooterOne />
    </>
  );
};

export default AboutVukaPage;
