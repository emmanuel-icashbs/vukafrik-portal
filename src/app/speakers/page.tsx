import SpeakersPage from "@/components/vukafrik/pages/SpeakersPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/speakers");

const page = () => {
  return (
    <Wrapper>
      <SpeakersPage />
    </Wrapper>
  );
};

export default page;
