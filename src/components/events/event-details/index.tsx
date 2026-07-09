import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import EventDetailsArea from "./EventDetailsArea";
import { EventDataType } from "@/utils/types";
import FooterOne from "@/layouts/footers/FooterOne";
import menu_data from "@/data/MenuData";

const EventDetails = ({ event }: { event: EventDataType }) => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb
          title={event.topic}
          sub_title={event.topic}
          in_between_paths={[
            { label: menu_data[2].title, href: menu_data[2].link },
          ]}
        />
        <EventDetailsArea event={event} />
      </main>
      <FooterOne />
    </>
  );
};

export default EventDetails;
