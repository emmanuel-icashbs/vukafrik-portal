import VolunteerPage from "@/components/vukafrik/pages/VolunteerPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/volunteer");

const page = () => {
  return (
    <Wrapper>
      <VolunteerPage />
    </Wrapper>
  );
};

export default page;
