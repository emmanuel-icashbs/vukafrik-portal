import { createPageMetadata, pageCopy } from "@/lib/metadata";
import HomeFour from "@/components/homes/home-four";
import Wrapper from "@/layouts/Wrapper";

export const metadata = createPageMetadata("/home-four", ...pageCopy["/"]);
const page = () => {
  return (
    <Wrapper>
      <HomeFour />
    </Wrapper>
  )
}

export default page