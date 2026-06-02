import Link from "next/link";
import { notFound } from "next/navigation";

import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import { getNewsUpdateBySlug } from "@/data/vukafrik-content";

type NewsArticlePageProps = {
  slug: string;
};

const NewsArticlePage = ({ slug }: NewsArticlePageProps) => {
  const article = getNewsUpdateBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <CorePageLayout>
      <CorePageHero
        data={{
          title: article.title,
          subtitle: article.excerpt,
          backgroundImage: article.image,
          breadcrumbs: [
            { label: "Accueil", href: "/" },
            { label: "Actualites", href: "/news" },
            { label: article.title },
          ],
          meta: [article.category, article.date],
          actions: [{ label: "Retour aux actualites", href: "/news", variant: "secondary" }],
        }}
      />

      <section className="vuka-page-section pb-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="vuka-info-card">
                {article.body.map((paragraph) => (
                  <p key={paragraph} className="mb-20">
                    {paragraph}
                  </p>
                ))}
                <div className="vuka-page-hero__actions mt-20">
                  <Link className="td-btn td-left-right" href="/register">
                    <span className="mr10 td-text d-inline-block mr-5">S&apos;inscrire</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CorePageLayout>
  );
};

export default NewsArticlePage;
