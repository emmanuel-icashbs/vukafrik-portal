import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Breadcrumb from "../../common/Breadcrumb";
import Feature from "../about/Feature";
import EventsVenueArea from "./EventsVenueArea";

const EventsVenue = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title="Event venue" sub_title="Event venue" />
        <EventsVenueArea />
        <Feature />
      </main>
      <FooterOne />
    </>
  );
};

export default EventsVenue;
