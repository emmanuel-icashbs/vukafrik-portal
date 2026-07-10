import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import EventDetailsArea from "./EventDetailsArea";
import { EventDataType } from "@/utils/types";
import FooterOne from "@/layouts/footers/FooterOne";
import { paths_holder } from "@/data/MenuData";

const EventDetails = ({ event }: { event: EventDataType }) => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb
          title={event.topic}
          sub_title={event.topic}
          in_between_paths={[
            {
              label: paths_holder.events.list.title,
              href: paths_holder.events.list.link,
            },
          ]}
        />
        <EventDetailsArea event={event} />
      </main>
      <FooterOne />
    </>
  );
};

export default EventDetails;
