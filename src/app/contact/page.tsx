import ContactPage from "@/components/vukafrik/pages/ContactPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/contact");

const page = () => {
  return (
    <Wrapper>
      <ContactPage />
    </Wrapper>
  );
};

export default page;
