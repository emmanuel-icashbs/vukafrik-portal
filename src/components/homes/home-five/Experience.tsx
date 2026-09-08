import Image from "next/image";
import DealCounter from "@/components/common/DealCounter";

import banner_thumb from "@/assets/img/vukafrik/content/hackathon-team-coding.webp";
import styles from "./Experience.module.css";
import countdown_data from "@/data/CountDownData";
import { title, sub_title } from "@/data/HackatonData";
import HackatonTeamForm from "@/components/forms/HackatonTeamForm";

const Experience = () => {
  return (
    <div className="td-banner-area td-banner-6-spacing fix p-relative black-bg">
      <div className="container">
        <div className="row align-items-center">
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
              className={`${styles.imageWrap} wow td-animetion-right`}
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <Image
                src={banner_thumb}
                alt="Une équipe collabore autour d’écrans affichant du code informatique."
                sizes="(min-width: 1400px) 636px, (min-width: 1200px) 546px, (min-width: 992px) 936px, (min-width: 768px) 696px, (min-width: 576px) 516px, calc(100vw - 24px)"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
