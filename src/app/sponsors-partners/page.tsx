import SponsorsPartnersPage from "@/components/vukafrik/pages/SponsorsPartnersPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/sponsors-partners");

const page = () => {
  return (
    <Wrapper>
      <SponsorsPartnersPage />
    </Wrapper>
  );
};

export default page;
