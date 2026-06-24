import HomeOne from "@/components/homes/home-one";
import HomeThree from "@/components/homes/home-three";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Vukafrika | Home",
};
const page = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  )
}

export default page