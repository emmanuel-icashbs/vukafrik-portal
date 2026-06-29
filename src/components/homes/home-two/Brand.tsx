import CtaWrapper from "@/components/common/CtaWrapper";
import ButtonLink from "@/components/ui/ButtonLink";
import { cta_data } from "@/data/CtaData";
import brands, {
  become_sponsor_title,
  cta_wrapper_sub_title,
  cta_wrapper_title,
  description,
  see_more_label,
  see_more_link,
  sub_title,
  title,
} from "@/data/SponsorData";
import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <div className="td-brands-area td-brands-2-wrap pt-140 pb-115">
      <div className="container mb-20">
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
      <CtaWrapper title={cta_wrapper_title} sub_title={cta_wrapper_sub_title}>
        <div className="d-flex align-items-center justify-content-end">
          <ButtonLink
            link={cta_data.become_sponsor.href}
            title={become_sponsor_title}
          />
          <span className="mx-2"></span>
          <ButtonLink link={see_more_link} title={see_more_label} />
        </div>
      </CtaWrapper>
    </div>
  );
};

export default Brand;
