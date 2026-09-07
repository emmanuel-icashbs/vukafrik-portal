import { getPageMetadata } from "@/lib/metadata";
import ProductDetails from "@/components/pages/products/product-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/product-details");
const page = () => {
  return (
    <Wrapper>
      <ProductDetails />
    </Wrapper>
  )
}

export default page