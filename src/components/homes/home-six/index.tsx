import HeaderSix from "@/layouts/headers/HeaderSix";
import Banner from "./Banner";
import Countdown from "./Countdown";
import About from "./About";
import Experience from "./Experience";
import TeamHomeSix from "./Team";
import EventHomeSix from "./Event";
import TextSlider from "./TextSlider";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import Brand from "../home-two/Brand";
import FooterFive from "@/layouts/footers/FooterFive";
import Map from "../home-one/Map";
import Blog from "./Blog";

const HomeSix = () => {
  return (
    <>
      <HeaderSix />
      <main>
        <Banner />
        <Countdown />
        <About />
        <TextSlider />
        <EventHomeSix />
        <Experience />
        <TeamHomeSix />
        <Pricing />
        <Testimonial />
        <Brand />
        <Blog />
        <Map />
      </main>
      <FooterFive />
    </>
  );
};

export default HomeSix;
