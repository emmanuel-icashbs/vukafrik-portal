import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterOne from "@/layouts/footers/FooterOne";
import Banner from "./Banner";
import Countdown from "./Countdown";
import About from "./About";
import Stats from "./Stats";
import SpeakersPreview from "./SpeakersPreview";
import Event from "./Event";
import Villages from "./Villages";
import Experience from "../home-one/Experience";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import FaqTeaser from "./FaqTeaser";
import Venue from "./Venue";
import Newsletter from "./Newsletter";

const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Banner />
        <Countdown />
        <About />
        <Stats />
        <SpeakersPreview />
        <Event />
        <Villages />
        <Experience />
        <Partners />
        <Testimonials />
        <FaqTeaser />
        <Venue />
        <Newsletter />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeThree;
