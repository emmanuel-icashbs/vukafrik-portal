import { getPageMetadata } from "@/lib/metadata";
import Gallery from "@/components/events/gallery";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/gallery");
const page = () => {
  return (
    <Wrapper>
      <Gallery />
    </Wrapper>
  )
}

export default page