import { vukafrikEvent, vukafrikPillars, vukafrikCountdown } from "@/data/vukafrik-content"

const Feature = () => {
   return (
      <div className="td-feature-area bg-position pt-120 pb-80" style={{ backgroundImage: `url(${vukafrikCountdown.background.src})` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-7 col-lg-9">
                  <div className="td-schedule-2-title-wrap text-center mb-40 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-25">Why VUK'AFRIK</span>
                     <h2 className="td-section-title text-white mb-15">A stronger foundation for visibility, business dialogue and ecosystem credibility</h2>
                     <p className="td-section-text text-white-50">
                        {vukafrikEvent.name} is positioned to convene practical conversations that matter for founders, investors, institutions and market-building organisations.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               {vukafrikPillars.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                     <div className="td-feature-3-wrap mr-60 mb-30">
                        <span className="td-feature-3-icon d-inline-block mb-20"><i className={item.icon}></i></span>
                        <h3 className="td-feature-3-title mb-15">{item.title}</h3>
                        <p className="td-feature-3-text">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Feature
