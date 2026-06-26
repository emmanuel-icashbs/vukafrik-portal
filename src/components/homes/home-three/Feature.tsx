import { feature_data, bg_img } from "@/data/FeatureData";

const Feature = () => {
  return (
    <div
      className="td-feature-area bg-position pt-120 pb-80"
      style={{ backgroundImage: `url(${bg_img.src})` }}
    >
      <div className="container">
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
