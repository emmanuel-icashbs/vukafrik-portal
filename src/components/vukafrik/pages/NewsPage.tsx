import Image from "next/image";
import Link from "next/link";

import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import { NewsletterSignup } from "@/components/vukafrik/forms/FormSystem";
import { newsUpdates } from "@/data/vukafrik-content";

const newsHero = {
  eyebrow: "Actualites",
  title: "Actualites & mises a jour",
  subtitle: "Suivez les annonces et mises a jour autour de VUK'AFRIK 2026.",
};

const NewsPage = () => {
  return (
    <CorePageLayout>
      <CorePageHero data={newsHero} />

      <section className="vuka-page-section pb-140">
        <div className="container">
          <div className="row">
            {newsUpdates.map((item) => (
              <div key={item.slug} className="col-xl-4 col-lg-6">
                <div className="vuka-news-card mb-30">
                  <div className="vuka-news-thumb">
                    <Image src={item.image} alt={item.title} />
                  </div>
                  <div className="vuka-news-content">
                    <div className="vuka-news-meta">
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <Link href={`/news/${item.slug}`}>Lire la suite</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vuka-page-section pb-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <NewsletterSignup sourcePage="/news" />
            </div>
          </div>
        </div>
      </section>
    </CorePageLayout>
  );
};

export default NewsPage;
