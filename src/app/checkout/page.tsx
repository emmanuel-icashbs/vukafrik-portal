import { getPageMetadata } from "@/lib/metadata";
import Checkout from "@/components/pages/products/checkout";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/checkout");
const page = () => {
  return (
    <Wrapper>
      <Checkout />
    </Wrapper>
  )
}

export default page