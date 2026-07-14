"use client";
import Image from "next/image";
import Link from "next/link";
import village_data, {
  description,
  sub_title,
  title,
} from "@/data/VillageData";
import { cta_data } from "@/data/CtaData";

const ExhibitionSchedule = () => {
  return (
    <div className="td-schedule-area  pt-140 pb-100 grey-bg-4 p-relative z-index-1 fix">
      <div className="td-hero-4-blur td-team-5-blur"></div>
      <div className="td-hero-4-blur td-hero-4-blur-2 td-team-5-blur-2"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-9 col-lg-10">
            <div
              className="td-schedule-2-title-wrap text-center mb-20  wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-30">
                {sub_title}
              </span>
              <h2 className="td-section-title mb-10">{title}</h2>
              <p className="td-section-text">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="tp-contact-form-wrapper  tab-content"
            id="v-pills-tabContent"
          >
            <div
              className={`tab-pane fade show active`}
              id="v-pills-home1"
              role="tabpanel"
              aria-labelledby="v-pills-home1-tab"
            >
              {village_data.map((item) => (
                <div
                  key={item.id}
                  className="td-schedule-3-wrap td-schedule-6-wrap mb-10"
                >
                  <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5">
                      <div className="td-schedule-3-thumb p-relative">
                        <Link href="#">
                          <Image className="w-100" src={item.thumb} alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                      <div className="td-schedule-3-content">
                        <h2 className="td-schedule-3-title mb-20">
                          <Link href="#">{item.title}</Link>
                        </h2>
                        <div className="td-schedule-3-btn d-flex align-items-center flex-wrap">
                          <div className="td-schedule-3-user-wrap d-flex align-items-center"></div>
                          <div className="td-schedule-3-destination mb-10">
                            <span className="d-block">{item.description}</span>
                            <span>{item.exhibitorFit}</span>
                          </div>
                          <Link
                            className="td-btn td-btn-3-squre td-left-right text3 mr-25"
                            href={cta_data.become_exhibitor.href}
                          >
                            <span className="mr10 td-text d-inline-block mr-5">
                              {cta_data.become_exhibitor.title}
                            </span>
                            <span className="td-arrow-angle">
                              <svg
                                className="td-arrow-svg-top-right"
                                width="13"
                                height="14"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z"
                                  fill="white"
                                />
                                <path
                                  d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionSchedule;
