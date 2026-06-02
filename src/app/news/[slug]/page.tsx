import NewsArticlePage from "@/components/vukafrik/pages/NewsArticlePage";
import { getNewsUpdateBySlug } from "@/data/vukafrik-content";
import Wrapper from "@/layouts/Wrapper";
import { createNewsMetadata } from "@/lib/vukafrik-route";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return createNewsMetadata(slug);
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  getNewsUpdateBySlug(slug);

  return (
    <Wrapper>
      <NewsArticlePage slug={slug} />
    </Wrapper>
  );
};

export default page;
