import VenueTravelPage from "@/components/vukafrik/pages/VenueTravelPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/venue-travel");

const page = () => {
  return (
    <Wrapper>
      <VenueTravelPage />
    </Wrapper>
  );
};

export default page;
