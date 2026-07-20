"use client";
import ButtonLink from "@/components/ui/ButtonLink";
import { cta_data } from "@/data/CtaData";
import brands, {
  see_more_label,
  see_more_link,
  sub_title,
  title,
} from "@/data/SponsorData";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Brand = ({ slice_number }: { slice_number?: number }) => {
  const [sponsors, setSponsors] = useState<StaticImageData[]>([]);

  useEffect(() => {
    if (slice_number) {
      setSponsors(brands.slice(0, slice_number));
    } else {
      setSponsors(brands);
    }
  }, []);

  return (
    <div
      className="td-brands-area td-brands-home-one blue-bg pt-110 pb-115"
      style={{ backgroundColor: "#192b4c" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="td-brands-title-wrap mb-45 wow fadeInLeft"
              data-wow-duration=".9s"
              data-wow-delay=".2s"
            >
              <span className="td-section-subtitle mb-20">{sub_title}</span>

              <h2 className="td-section-title">{title}</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="td-brands-btn mb-45 wow fadeInRight"
              data-wow-duration=".9s"
              data-wow-delay=".2s"
            >
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-4">
                <ButtonLink
                  link={cta_data.become_sponsor.href}
                  title={cta_data.become_sponsor.title}
                />
                <ButtonLink link={see_more_link} title={see_more_label} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {sponsors.map((brand, i) => (
            <div
              key={i}
              className="col-lg-3 col-md-6 col-6 wow fadeInLeft"
              data-wow-duration=".9s"
              data-wow-delay=".2s"
            >
              <div className="td-brands-item mb-25">
                <Link href="#">
                  <Image src={brand} alt="" className="td-brand-logo" />
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
