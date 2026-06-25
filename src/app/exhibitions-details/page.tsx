import ExhibitionDetails from "@/components/exhibitions/exhibition-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Event Details Evente - Conference and Event React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <ExhibitionDetails />
    </Wrapper>
  )
}

export default page