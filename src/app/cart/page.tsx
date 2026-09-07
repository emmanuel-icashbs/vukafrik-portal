import { getPageMetadata } from "@/lib/metadata";
import Cart from "@/components/pages/products/cart";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/cart");
const page = () => {
  return (
    <Wrapper>
      <Cart />
    </Wrapper>
  )
}

export default page