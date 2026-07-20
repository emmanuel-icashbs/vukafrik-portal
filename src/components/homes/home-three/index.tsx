import HeaderThree from "@/layouts/headers/HeaderThree";
import Banner from "./Banner";
import Countdown from "./Countdown";
import Feature from "./Feature";
import About from "./About";
import FooterOne from "@/layouts/footers/FooterOne";
import TextSlider from "../home-one/TextSlider";
import Brand from "../home-one/Brand";
import Blog from "./Blog";
import Schedule from "../home-one/Schedule";
import TeamHomeSix from "../home-six/Team";
import {
  become_speaker_title,
  cta_wrapper_sub_title,
  cta_wrapper_title,
  see_more_label,
  see_more_link,
} from "@/data/SpeakerData";
import CtaWrapper from "@/components/common/CtaWrapper";
import ButtonLink from "@/components/ui/ButtonLink";
import { cta_data } from "@/data/CtaData";
import Experience from "../home-one/Experience";

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
        <TextSlider />
        <Experience />
        <TeamHomeSix slice_number={5} />
        <div className="mb-50">
          <CtaWrapper
            title={cta_wrapper_title}
            sub_title={cta_wrapper_sub_title}
          >
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-4">
              <ButtonLink
                link={cta_data.become_speaker.href}
                title={become_speaker_title}
              />
              <ButtonLink link={see_more_link} title={see_more_label} />
            </div>
          </CtaWrapper>
        </div>

        <Brand slice_number={8} />

        <Blog />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeThree;
