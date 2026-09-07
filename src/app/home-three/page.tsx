import { createPageMetadata, pageCopy } from "@/lib/metadata";
import HomeThree from "@/components/homes/home-three";
import Wrapper from "@/layouts/Wrapper";

export const metadata = createPageMetadata("/home-three", ...pageCopy["/"]);
const page = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  )
}

export default page