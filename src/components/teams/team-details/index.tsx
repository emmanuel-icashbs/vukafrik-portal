import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import TeamDetailsArea from "./TeamDetailsArea";
import Schedule from "./Schedule";
import FooterOne from "@/layouts/footers/FooterOne";
import { EventDataType, SpeakerDataType } from "@/utils/types";
import { speaker_details_breadcrumb_data } from "@/data/SpeakerData";

const TeamDetails = ({
  speaker,
  speaker_events,
}: {
  speaker: SpeakerDataType;
  speaker_events: EventDataType[];
}) => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb
          title={speaker_details_breadcrumb_data.title}
          sub_title={speaker_details_breadcrumb_data.sub_title}
          in_between_paths={speaker_details_breadcrumb_data.in_between_paths}
        />
        <TeamDetailsArea speaker={speaker} />
        <Schedule events={speaker_events} />
      </main>
      <FooterOne />
    </>
  );
};

export default TeamDetails;
