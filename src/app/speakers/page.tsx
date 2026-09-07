import { getPageMetadata } from "@/lib/metadata";
import Team from "@/components/teams/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/speakers");
const page = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

export default page;
