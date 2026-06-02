import NewsPage from "@/components/vukafrik/pages/NewsPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/news");

const page = () => {
  return (
    <Wrapper>
      <NewsPage />
    </Wrapper>
  );
};

export default page;
