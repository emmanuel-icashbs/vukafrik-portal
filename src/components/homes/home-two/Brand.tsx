import brands, { description, sub_title, title } from "@/data/SponsorData";
import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <div className="td-brands-area td-brands-2-wrap pt-140 pb-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div
              className="td-schedule-2-title-wrap text-center mb-30 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <span className="td-section-subtitle td-section-subtitle-2 mb-30">
                {sub_title}
              </span>
              <h2 className="td-section-title mb-10">{title}</h2>
              <p className="td-section-text">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-4 col-md-6 col-6 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <div className="td-brands-item mb-25">
                <Link href="#">
                  <Image src={brand} alt="" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
