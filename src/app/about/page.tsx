import { getPageMetadata } from "@/lib/metadata";
import About from "@/components/events/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/about");
const page = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default page;
