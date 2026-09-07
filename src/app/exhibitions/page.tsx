import { getPageMetadata } from "@/lib/metadata";
import Exhibition from "@/components/exhibitions/exhibition";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/exhibitions");
const page = () => {
  return (
    <Wrapper>
      <Exhibition />
    </Wrapper>
  );
};

export default page;
