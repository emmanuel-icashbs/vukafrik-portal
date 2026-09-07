import { createPageMetadata, pageCopy } from "@/lib/metadata";
import HomeTwo from "@/components/homes/home-two";
import Wrapper from "@/layouts/Wrapper";

export const metadata = createPageMetadata("/home-two", ...pageCopy["/"]);
const page = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  )
}

export default page