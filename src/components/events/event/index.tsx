import internalStyles from "@/components/common/InternalPage.module.css";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import { breadcrumb_data } from "@/data/ScheduleData";
import Feature from "../about/Feature";
import Blog from "@/components/homes/home-three/Blog";
import Event from "@/components/homes/home-five/Event";
import Experience from "@/components/homes/home-five/Experience";

const EventPage = () => {
  return (
    <>
      <HeaderThree />
      <main className={internalStyles.main}>
        <Breadcrumb
          title={breadcrumb_data.title}
          sub_title={breadcrumb_data.sub_title}
        />
        <div className={internalStyles.download}>
          <a href="/documents/VUKAFRIK_2026_Programme_Detaille_5.pdf" download>
            Télécharger le programme détaillé (PDF)
          </a>
        </div>
        <Event />
        <Feature />
        <Blog />
        <Experience />
      </main>
      <FooterOne />
    </>
  );
};

export default EventPage;
