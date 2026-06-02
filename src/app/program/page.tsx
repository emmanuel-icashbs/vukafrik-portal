import ProgramPage from "@/components/vukafrik/pages/ProgramPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/program");

const page = () => {
  return (
    <Wrapper>
      <ProgramPage />
    </Wrapper>
  );
};

export default page;
