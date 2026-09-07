import { getPageMetadata } from "@/lib/metadata";
import ExhibitionDetails from "@/components/exhibitions/exhibition-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/exhibitions-details");
const page = () => {
  return (
    <Wrapper>
      <ExhibitionDetails />
    </Wrapper>
  )
}

export default page