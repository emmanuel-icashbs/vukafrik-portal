import { getPageMetadata } from "@/lib/metadata";
import Faq from "@/components/pages/faq";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/faq");
const page = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  )
}

export default page