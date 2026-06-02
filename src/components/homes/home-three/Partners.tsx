import Link from "next/link";

import {
  vukafrikPartners,
  vukafrikSponsorCategories,
} from "@/data/vukafrik-content";

const Partners = () => {
  return (
    <section id={vukafrikPartners.id} className="td-brands-area td-brands-2-wrap pt-140 pb-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div
              className="td-schedule-2-title-wrap text-center mb-35 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <span className="td-section-subtitle td-section-subtitle-2 mb-30">
                {vukafrikPartners.eyebrow}
              </span>
              <h2 className="td-section-title mb-10">{vukafrikPartners.title}</h2>
              <p className="td-section-text">{vukafrikPartners.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {vukafrikSponsorCategories.slice(0, 6).map((item) => (
            <div key={item.name} className="col-xl-4 col-lg-6 col-md-6">
              <div className="vuka-logo-card mb-25">
                <span className="vuka-logo-placeholder">Logo partenaire</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link className="td-btn td-left-right" href={vukafrikPartners.ctaLink}>
            <span className="mr10 td-text d-inline-block mr-5">{vukafrikPartners.ctaLabel}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
