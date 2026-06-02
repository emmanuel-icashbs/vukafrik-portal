import FaqPage from "@/components/vukafrik/pages/FaqPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/faq");

const page = () => {
  return (
    <Wrapper>
      <FaqPage />
    </Wrapper>
  );
};

export default page;
