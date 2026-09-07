import { getPageMetadata } from "@/lib/metadata";
import Login from "@/components/pages/login";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/login");
const page = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  )
}

export default page