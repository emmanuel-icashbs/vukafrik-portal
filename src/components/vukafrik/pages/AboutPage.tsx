import Link from "next/link";

import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import {
  aboutHighlightCards,
  aboutPageHero,
  aboutSections,
} from "@/data/vukafrik-content";

const AboutPage = () => {
  return (
    <CorePageLayout>
      <CorePageHero data={aboutPageHero} />

      <section className="vuka-page-section pb-120">
        <div className="container">
          <div className="row">
            {aboutHighlightCards.map((item) => (
              <div key={item.title} className="col-xl-4 col-md-6">
                <div className="vuka-overview-card mb-25">
                  <span className="vuka-overview-icon">
                    <i className={item.icon}></i>
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {aboutSections.map((section, index) => (
        <section
          key={section.id}
          className={`vuka-page-section pb-120 ${index % 2 === 0 ? "" : "vuka-page-section--dark"}`}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className={`vuka-info-card ${index % 2 === 0 ? "" : "vuka-info-card--dark"}`}>
                  <span className="vuka-card-eyebrow">{section.eyebrow}</span>
                  <h2>{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="mb-20">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="vuka-page-section pb-140">
        <div className="container">
          <div className="vuka-info-card vuka-info-card--dark text-center">
            <span className="vuka-card-eyebrow">Prochaine etape</span>
            <h2>Activez votre participation a la plateforme VUK&apos;AFRIK 2026</h2>
            <div className="vuka-page-hero__actions">
              <Link className="td-btn td-left-right" href="/register">
                <span className="mr10 td-text d-inline-block mr-5">S&apos;inscrire</span>
              </Link>
              <Link
                className="td-btn td-btn-3-border td-left-right"
                href="/sponsors-partners#sponsor-inquiry"
              >
                <span className="mr10 td-text d-inline-block mr-5">Devenir sponsor</span>
              </Link>
              <Link
                className="td-btn td-btn-3-border td-left-right"
                href="/exhibitors-opportunities#exhibitor-registration"
              >
                <span className="mr10 td-text d-inline-block mr-5">S&apos;inscrire comme exposant</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CorePageLayout>
  );
};

export default AboutPage;
