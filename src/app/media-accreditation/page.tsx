import MediaAccreditationPage from "@/components/vukafrik/pages/MediaAccreditationPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/media-accreditation");

const page = () => {
  return (
    <Wrapper>
      <MediaAccreditationPage />
    </Wrapper>
  );
};

export default page;
