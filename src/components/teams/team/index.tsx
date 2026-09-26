import { registrationClosed, speakersThanksMessage } from "@/data/RegistrationStatus";
import internalStyles from "@/components/common/InternalPage.module.css";
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
      <main className={internalStyles.main}>
        <Breadcrumb
          title={speakers_breadcrumb_data.title}
          sub_title={speakers_breadcrumb_data.sub_title}
        />
        {registrationClosed && <div className="container py-4"><p role="status" className="alert alert-light border mb-0">{speakersThanksMessage}</p></div>}
        <TeamHomeSix ministerFirst />

        <FormArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Team;
