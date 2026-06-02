import AboutPage from "@/components/vukafrik/pages/AboutPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/about");

const page = () => {
  return (
    <Wrapper>
      <AboutPage />
    </Wrapper>
  );
};

export default page;
