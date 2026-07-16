import {
  description,
  feature_data,
  sub_title,
  title,
} from "@/data/FeatureData";

const Feature = () => {
  return (
    <div
      className="td-feature-area pt-140 pb-115 bg-position"
      style={{ backgroundColor: `#192b4c` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="td-feature-4-wrap text-center mb-50 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <span className="td-section-subtitle td-section-subtitle-2 mb-25">
                {sub_title}
              </span>
              <h2 className="td-section-title text-white mb-15">{title}</h2>
              <p className="text-white">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {feature_data.map((item) => (
            <div
              key={item.id}
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <div className="td-feature-3-wrap mr-60 mb-30">
                <span className="td-feature-3-icon d-inline-block mb-20">
                  <i className={item.icon}></i>
                </span>
                <h3 className="td-feature-3-title mb-15">{item.title}</h3>
                <p className="td-feature-3-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
