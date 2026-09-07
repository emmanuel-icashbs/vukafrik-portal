import { getPageMetadata } from "@/lib/metadata";
import Wishlist from "@/components/pages/products/wishlist";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/wishlist");
const page = () => {
  return (
    <Wrapper>
      <Wishlist />
    </Wrapper>
  )
}

export default page