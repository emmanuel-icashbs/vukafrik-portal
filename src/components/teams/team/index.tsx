import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import TeamHomeSix from "@/components/homes/home-six/Team";
import FooterOne from "@/layouts/footers/FooterOne";
import FormArea from "./FormArea";
import { speakers_breadcrumb_data } from "@/data/SpeakerData";

const Team = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb
          title={speakers_breadcrumb_data.title}
          sub_title={speakers_breadcrumb_data.sub_title}
        />
        <TeamHomeSix />

        <FormArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Team;
