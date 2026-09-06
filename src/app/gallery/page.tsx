import Gallery from "@/components/events/gallery";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Galerie photos | VUK’AFRIK",
};
const page = () => {
  return (
    <Wrapper>
      <Gallery />
    </Wrapper>
  )
}

export default page