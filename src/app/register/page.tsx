import RegisterPage from "@/components/vukafrik/pages/RegisterPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/register");

const page = () => {
  return (
    <Wrapper>
      <RegisterPage />
    </Wrapper>
  );
};

export default page;
