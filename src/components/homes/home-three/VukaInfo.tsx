"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useJarallax } from "@/hooks/useJarallax";

import bg_img from "@/assets/img/testimonial/tes-video.jpg";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import { info_section_title } from "@/data/AboutUsData";

const setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  navigation: {
    nextEl: ".td-testimonial-3-next",
    prevEl: ".td-testimonial-3-prev",
  },
};

const VukaInfo = () => {
  useJarallax(0.2);

  return (
    <>
      <div className="td-testimonial-area fix green-bg">
        <div className="container-fluid p-0">
          <div className="row gx-0">
            <div className="col-lg-6">
              <div className="td-testimonial-3-wrap pt-160 pb-160 p-relative">
                <span className="td-testimonial-3-qoute">
                  <svg
                    width="113"
                    height="90"
                    viewBox="0 0 113 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M56.5 10C31.8 10 12 29.8 12 54.5C12 79.2 31.8 99 56.5 99C81.2 99 101 79.2 101 54.5C101 29.8 81.2 10 56.5 10ZM56.5 84C37.3 84 22 68.7 22 49.5C22 30.3 37.3 15 56.5 15C75.7 15 91 30.3 91 49.5C91 68.7 75.7 84 56.5 84ZM60.5 30.5C60.5 34.4 57.4 37.5 53.5 37.5C49.6 37.5 46.5 34.4 46.5 30.5C46.5 26.6 49.6 23.5 53.5 23.5C57.4 23.5 60.5 26.6 60.5 30.5ZM49.5 42.5H57.5V68.5H49.5V42.5Z"
                      fill="#462AF1"
                    />
                  </svg>
                </span>

                <h2 className="td-section-title text-white mb-35">
                  {info_section_title}
                </h2>
                <Swiper
                  {...setting}
                  modules={[Autoplay, Navigation]}
                  onSwiper={(swiper) => {
                    swiper.wrapperEl.classList.add("p-relative");
                  }}
                  className="swiper-container td-testimonial-3-slider"
                >
                  {vukafrik_event_data.infos.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div>
                        <span
                          className="td-section-subtitle td-section-subtitle-2 mb-20"
                          style={{ color: "#f248b4" }}
                        >
                          {item.label}
                        </span>
                        <p className="mb-20">{item.description}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="td-testimonial-3-navigation">
                  <span className="td-testimonial-3-next d-inline-block">
                    <i className="fa-solid fa-angle-left"></i>
                  </span>
                  <span className="td-testimonial-3-prev d-inline-block">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="td-testimonial-3-video bg-position jarallax"
                style={{ backgroundImage: `url(${bg_img.src})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VukaInfo;
