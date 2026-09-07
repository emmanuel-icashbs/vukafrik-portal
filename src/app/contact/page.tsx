import { getPageMetadata } from "@/lib/metadata";
import Contact from "@/components/contact";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/contact");
const page = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default page;
