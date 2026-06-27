import HeaderThree from "@/layouts/headers/HeaderThree";
import Banner from "./Banner";
import Countdown from "./Countdown";
import Feature from "./Feature";
import About from "./About";
import Team from "./Team";
import Pricing from "./Pricing";
import FooterOne from "@/layouts/footers/FooterOne";
import TextSlider from "../home-one/TextSlider";
import Experience from "../home-one/Experience";
import Testimonial from "./Testimonial";
import Brand from "../home-two/Brand";
import Blog from "./Blog";
import Schedule from "../home-one/Schedule";

const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Banner />
        <Countdown />
        <Feature />
        <About />
        <Schedule />
        <Testimonial />
        <Team />
        <Pricing />

        <TextSlider />
        <Experience />
        <Brand />
        <Blog />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeThree;
