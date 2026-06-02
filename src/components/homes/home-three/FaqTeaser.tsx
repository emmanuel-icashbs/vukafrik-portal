import Link from "next/link";

import { vukafrikFaqPlaceholders } from "@/data/vukafrik-content";

const FaqTeaser = () => {
  return (
    <section className="vuka-faq-section pt-140 pb-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="td-schedule-2-title-wrap text-center mb-35">
              <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-25">
                Questions frequentes
              </span>
              <h2 className="td-section-title mb-10">
                Les questions que les visiteurs se poseront des les premiers instants
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {vukafrikFaqPlaceholders.map((item) => (
            <div key={item.question} className="col-xl-6">
              <div className="vuka-faq-card mb-25">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link className="td-btn td-left-right" href="/faq">
            <span className="mr10 td-text d-inline-block mr-5">Voir toute la FAQ</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqTeaser;
