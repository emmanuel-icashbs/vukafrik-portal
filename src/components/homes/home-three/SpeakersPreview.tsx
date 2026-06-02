import Image from "next/image";
import Link from "next/link";

import {
  vukafrikSpeakersPlaceholder,
  vukafrikSpeakersPreview,
} from "@/data/vukafrik-content";

const SpeakersPreview = () => {
  return (
    <section id={vukafrikSpeakersPreview.id} className="vuka-speakers-section pt-140 pb-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="td-schedule-2-title-wrap text-center mb-35">
              <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-25">
                {vukafrikSpeakersPreview.eyebrow}
              </span>
              <h2 className="td-section-title mb-10">{vukafrikSpeakersPreview.title}</h2>
              <p className="td-section-text">{vukafrikSpeakersPreview.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {vukafrikSpeakersPlaceholder.map((speaker) => (
            <div key={`${speaker.category}-${speaker.role}`} className="col-xl-3 col-lg-6 col-md-6">
              <div className="vuka-speaker-card mb-30">
                <div className="vuka-speaker-thumb">
                  <Image src={speaker.image} alt={speaker.name} />
                </div>
                <div className="vuka-speaker-content">
                  <span className="vuka-speaker-category">{speaker.category}</span>
                  <h3>{speaker.name}</h3>
                  <h4>{speaker.role}</h4>
                  <p className="vuka-speaker-org">{speaker.organisation}</p>
                  <p>{speaker.bio}</p>
                  <div className="vuka-speaker-links">
                    {speaker.socialLinks.map((link) => (
                      <Link key={link.label} href={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link className="td-btn td-left-right" href={vukafrikSpeakersPreview.ctaLink}>
            <span className="mr10 td-text d-inline-block mr-5">
              {vukafrikSpeakersPreview.ctaLabel}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpeakersPreview;
