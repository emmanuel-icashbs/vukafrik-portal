import Image from "next/image";
import Link from "next/link";
import DealCounter from "@/components/common/DealCounter";

import banner_thumb from "@/assets/img/banner/banner-5.jpg";
import countdown_data from "@/data/CountDownData";
import { title, sub_title } from "@/data/HackatonData";
import HackatonTeamForm from "@/components/forms/HackatonTeamForm";

const Experience = () => {
  return (
    <div className="td-banner-area td-banner-6-spacing fix p-relative black-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-9">
            <div className="td-banner-title-wrap td-banner-5-wrap td-banner-6-wrap">
              <span
                className="td-section-subtitle mb-20  wow fadeInLeft"
                data-wow-duration=".9s"
                data-wow-delay=".2s"
              >
                {sub_title}
              </span>
              <h2
                className="td-section-title mb-20  wow fadeInLeft"
                data-wow-duration=".9s"
                data-wow-delay=".4s"
              >
                {title}
              </h2>
              <div
                className="td-hero-countdown mb-20 wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <ul className="deal-counter ml0-md" id="timer">
                  <DealCounter
                    expiryTimestamp={countdown_data.expiryTimestamp}
                  />
                </ul>
              </div>
              <HackatonTeamForm />
              
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div
              className="td-banner-6-thumb wow td-animetion-right"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <Image src={banner_thumb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
