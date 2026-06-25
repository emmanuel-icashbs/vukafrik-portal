import Exhibition from "@/components/exhibitions/exhibition";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Event Evente - Conference and Event React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <Exhibition />
    </Wrapper>
  );
};

export default page;
