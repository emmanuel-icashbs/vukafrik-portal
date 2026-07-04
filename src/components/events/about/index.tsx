import Breadcrumb from "@/components/common/Breadcrumb";
import Feature from "./Feature";
import TextSlider from "@/components/homes/home-one/TextSlider";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterOne from "@/layouts/footers/FooterOne";
import About from "@/components/homes/home-three/About";
import VukaInfo from "@/components/homes/home-three/VukaInfo";

const AboutVukaPage = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title="What We Have Done" sub_title="About" />
        <About should_display_about_btn={false} />
        <Feature />
        <div className="mt-100">
          <TextSlider />
        </div>
        <VukaInfo />
      </main>
      <FooterOne />
    </>
  );
};

export default AboutVukaPage;
