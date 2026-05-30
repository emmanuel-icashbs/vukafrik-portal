import Link from "next/link";

import { vukafrikPartners } from "@/data/vukafrik-content";

const Partners = () => {
  return (
    <section id={vukafrikPartners.id} className="td-brands-area td-brands-2-wrap pt-140 pb-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="td-schedule-2-title-wrap text-center mb-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
              <span className="td-section-subtitle td-section-subtitle-2 mb-30">{vukafrikPartners.eyebrow}</span>
              <h2 className="td-section-title mb-10">{vukafrikPartners.title}</h2>
              <p className="td-section-text">{vukafrikPartners.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {vukafrikPartners.groups.map((group) => (
            <div key={group.title} className="col-xl-3 col-lg-6 col-md-6">
              <div className="vuka-partner-card mb-25">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <Link href="/contact">Discuss partnership</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
