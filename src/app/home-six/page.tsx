import { createPageMetadata, pageCopy } from "@/lib/metadata";
import HomeSix from "@/components/homes/home-six";
import Wrapper from "@/layouts/Wrapper";

export const metadata = createPageMetadata("/home-six", ...pageCopy["/"]);
const page = () => {
  return (
    <Wrapper>
      <HomeSix />
    </Wrapper>
  )
}

export default page