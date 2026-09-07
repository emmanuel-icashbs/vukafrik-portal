import { getPageMetadata } from "@/lib/metadata";
import Product from "@/components/pages/products/product";
import Wrapper from "@/layouts/Wrapper";

export const metadata = getPageMetadata("/product");
const page = () => {
  return (
    <Wrapper>
      <Product />
    </Wrapper>
  )
}

export default page