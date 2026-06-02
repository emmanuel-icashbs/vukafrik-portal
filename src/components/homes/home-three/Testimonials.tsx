import Image from "next/image";

import { vukafrikTestimonials } from "@/data/vukafrik-content";

const Testimonials = () => {
  return (
    <section className="vuka-testimonials-section pt-140 pb-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="td-schedule-2-title-wrap text-center mb-35">
              <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-25">
                {vukafrikTestimonials.eyebrow}
              </span>
              <h2 className="td-section-title mb-10">{vukafrikTestimonials.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {vukafrikTestimonials.items.map((item) => (
            <div key={item.name} className="col-xl-4 col-md-6">
              <div className="vuka-testimonial-card mb-25">
                <p className="vuka-testimonial-quote">&quot;{item.quote}&quot;</p>
                <div className="vuka-testimonial-person">
                  <Image src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
