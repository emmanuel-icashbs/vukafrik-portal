import { getPageMetadata } from "@/lib/metadata";
import HomeThree from "@/components/homes/home-three";
import Wrapper from "@/layouts/Wrapper";
import { eventStructuredData, serializeStructuredData } from "@/lib/structured-data";

export const metadata = getPageMetadata("/");
const page = () => {
  return (
    <Wrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(eventStructuredData) }} />
      <HomeThree />
    </Wrapper>
  );
};

export default page;
