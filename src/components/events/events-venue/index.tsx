import internalStyles from "@/components/common/InternalPage.module.css";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Breadcrumb from "../../common/Breadcrumb";
import Feature from "../about/Feature";
import EventsVenueArea from "./EventsVenueArea";
import { breadcrumb_data } from "@/data/EventVenueData";

const EventsVenue = () => {
  return (
    <>
      <HeaderThree />
      <main className={internalStyles.main}>
        <Breadcrumb
          title={breadcrumb_data.title}
          sub_title={breadcrumb_data.sub_title}
        />
        <EventsVenueArea />
        <Feature />
      </main>
      <FooterOne />
    </>
  );
};

export default EventsVenue;
