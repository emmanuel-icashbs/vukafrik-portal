import { getPageMetadata } from "@/lib/metadata";
import Pricing from "@/components/pages/pricing";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/pricing");
const page = () => {
  return (
    <Wrapper>
      <Pricing />
    </Wrapper>
  )
}

export default page