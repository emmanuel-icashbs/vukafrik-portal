import { getPageMetadata } from "@/lib/metadata";
import HomeThree from "@/components/homes/home-three";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/");
const page = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  );
};

export default page;
