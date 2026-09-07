import { getPageMetadata } from "@/lib/metadata";
import Blog from "@/components/pages/blogs/blog";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/blog");
const page = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}

export default page