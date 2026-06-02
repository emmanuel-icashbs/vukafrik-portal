import HomeThree from "@/components/homes/home-three";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/");

const page = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  );
};

export default page;
