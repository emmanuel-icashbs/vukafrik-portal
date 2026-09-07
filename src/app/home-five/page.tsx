import { createPageMetadata, pageCopy } from "@/lib/metadata";
import HomeFive from "@/components/homes/home-five";
import Wrapper from "@/layouts/Wrapper";

export const metadata = createPageMetadata("/home-five", ...pageCopy["/"]);
const page = () => {
  return (
    <Wrapper>
      <HomeFive />
    </Wrapper>
  )
}

export default page