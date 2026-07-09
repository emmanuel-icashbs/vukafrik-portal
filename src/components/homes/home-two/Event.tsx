"use client";

import Image from "next/image";
import Link from "next/link";

import bg_img from "@/assets/img/about/bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import village_data, {
  description,
  sub_title,
  title,
} from "@/data/VillageData";
import { vukafrik_event_data } from "@/data/VukAfrikData";

const setting = {
  loop: true,
  freeMode: true,
  slidesPerView: "auto" as const,
  spaceBetween: 30,
  centeredSlides: true,
  allowTouchMove: false,
  speed: 7000,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
};

const EventHomeTwo = () => {
  return (
    <div
      className="td-schedule-2-area pt-140 pb-140 bg-position td-text-slider-area td-text-slider-spacing"
      style={{ backgroundImage: `url(${bg_img.src})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div
              className="td-schedule-2-title-wrap text-center mb-30 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <span className="td-section-subtitle td-section-subtitle-2 mb-30 mt-50">
                {sub_title}
              </span>
              <h2 className="td-section-title mb-10">{title}</h2>
              <p className="td-section-text">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper
            {...setting}
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiper.wrapperEl.classList.add("slide-transition");
            }}
            className="swiper-container td-text-slider-active"
          >
            {village_data.map((item) => (
              <SwiperSlide
                key={item.id}
                className="swiper-slide col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              >
                <div
                  key={item.id}
                  className=""
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <div className="td-schedule-2-item mb-30">
                    <div className="td-schedule-2-thumb p-relative">
                      <Link href="#" style={{ cursor: "default" }}>
                        <Image className="w-100" src={item.thumb} alt="" />
                      </Link>
                      <span className="td-schedule-2-date">
                        <i className="flaticon-calendar"></i>
                        {item.date}
                      </span>
                    </div>
                    <div className="td-schedule-2-content">
                      <h5 className="td-schedule-2-title mb-15">
                        <Link href="#" style={{ cursor: "default" }}>
                          {item.title}
                        </Link>
                      </h5>
                      <div className="td-schedule-2-destination mb-15">
                        <span>
                          <i className="flaticon-gps"></i>
                          {item.country}
                        </span>
                        <span>
                          <i className="flaticon-account"></i>
                          {item.user}
                        </span>
                        <span>
                          <i className="flaticon-time"></i>
                          {item.time}
                        </span>
                      </div>
                      <Link
                        className="td-btn-square"
                        href="#"
                        style={{ cursor: "default" }}
                      >
                        {vukafrik_event_data.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default EventHomeTwo;
