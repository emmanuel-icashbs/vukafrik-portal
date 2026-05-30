import { vukafrikAudience } from "@/data/vukafrik-content";

const Audience = () => {
  return (
    <section id={vukafrikAudience.id} className="td-team-area pt-140 pb-120 fix p-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-8 col-lg-9">
            <div className="td-schedule-2-title-wrap text-center mb-40 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
              <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-25">{vukafrikAudience.eyebrow}</span>
              <h2 className="td-section-title mb-15">{vukafrikAudience.title}</h2>
              <p className="td-section-text">{vukafrikAudience.description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {vukafrikAudience.cards.map((card) => (
            <div key={card.title} className="col-xl-3 col-lg-6 col-md-6">
              <div className="vuka-audience-card mb-30">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
