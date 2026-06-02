import SpeakerApplicationPage from "@/components/vukafrik/pages/SpeakerApplicationPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/speaker-application");

const page = () => {
  return (
    <Wrapper>
      <SpeakerApplicationPage />
    </Wrapper>
  );
};

export default page;
