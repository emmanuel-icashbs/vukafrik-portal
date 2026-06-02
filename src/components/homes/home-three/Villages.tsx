import Link from "next/link";

import { vukafrikEvent, vukafrikThematicVillages } from "@/data/vukafrik-content";

const Villages = () => {
  return (
    <section id={vukafrikEvent.villagesId} className="vuka-villages-section pt-140 pb-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="td-schedule-2-title-wrap text-center mb-35">
              <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-25">
                Villages thematiques
              </span>
              <h2 className="td-section-title mb-10">
                Huit villages pour lire les secteurs, les initiatives et les opportunites
              </h2>
              <p className="td-section-text">
                Chaque village met en relation les bons acteurs autour d&apos;un
                secteur, d&apos;un besoin de visibilite et d&apos;opportunites de
                collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {vukafrikThematicVillages.map((item) => (
            <div key={item.title} className="col-xl-4 col-lg-6">
              <div className="vuka-village-card mb-25">
                <span className="vuka-village-icon">
                  <i className={item.icon}></i>
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={item.ctaHref}>S&apos;inscrire comme exposant</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Villages;
