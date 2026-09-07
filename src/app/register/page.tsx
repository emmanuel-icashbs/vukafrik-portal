import { getPageMetadata } from "@/lib/metadata";
import Register from "@/components/pages/register";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/register");
const page = () => {
  return (
    <Wrapper>
      <Register />
    </Wrapper>
  );
};

export default page;
