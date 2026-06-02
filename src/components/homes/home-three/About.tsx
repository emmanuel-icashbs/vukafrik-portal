import Image from "next/image";

import { vukafrikAbout, vukafrikEvent } from "@/data/vukafrik-content";

const About = () => {
  return (
    <section id={vukafrikAbout.id} className="td-about-area pt-140 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-10 wow fadeInLeft"
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >
            <div className="td-about-3-thumb mr-60 mb-30">
              <Image className="w-100" src={vukafrikAbout.image} alt={vukafrikEvent.name} />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-10 wow fadeInRight"
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >
            <div className="td-about-3-content-wrap mb-30">
              <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-15">
                {vukafrikAbout.eyebrow}
              </span>
              <h2 className="td-section-title mb-20">{vukafrikAbout.title}</h2>
              <p className="para para-2 mb-20">{vukafrikAbout.intro}</p>
              <p className="para mb-30">{vukafrikAbout.body}</p>
              <div className="row">
                {vukafrikAbout.dimensions.map((item) => (
                  <div key={item.title} className="col-md-6">
                    <div className="vuka-overview-card mb-20">
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
          </div>
        </div>
        <div className="row mt-10">
          <div className="col-12">
            <div className="vuka-formats-card">
              <span className="vuka-card-eyebrow">Formats cles</span>
              <div className="vuka-chip-grid">
                {vukafrikAbout.formats.map((item) => (
                  <span key={item} className="vuka-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
