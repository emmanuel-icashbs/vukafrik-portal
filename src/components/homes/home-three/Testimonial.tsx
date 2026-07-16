"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import testi_data, { message } from "@/data/TestimonialData";
import { useJarallax } from "@/hooks/useJarallax";

import bg_img from "@/assets/img/testimonial/tes-video.jpg";
import Link from "next/link";
import { cta_data } from "@/data/CtaData";

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

const Testimonial = () => {
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
                      d="M63.5625 50.4V0H113V51.12C113 85.68 81.2188 90 81.2188 90L76.9812 79.92C76.9812 79.92 91.1063 77.76 93.9313 66.24C96.7562 57.6 91.1062 50.4 91.1062 50.4H63.5625ZM0 50.4V0H49.4375V51.12C49.4375 85.68 17.6562 90 17.6562 90L13.4187 79.92C13.4187 79.92 27.5438 77.76 30.3688 66.24C33.1938 57.6 27.5438 50.4 27.5438 50.4H0Z"
                      fill="#FFC247"
                    />
                  </svg>
                </span>
                <Link
                  className="td-btn td-btn-3-border td-left-right text3 mb-20"
                  href={cta_data.reserve_stand.href}
                >
                  <span className="mr10 td-text d-inline-block mr-5">
                    {cta_data.reserve_stand.title}
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
                <h2 className="td-section-title text-white mb-35">{message}</h2>
                <Swiper
                  {...setting}
                  modules={[Autoplay, Navigation]}
                  onSwiper={(swiper) => {
                    swiper.wrapperEl.classList.add("p-relative");
                  }}
                  className="swiper-container td-testimonial-3-slider"
                >
                  {testi_data
                    .filter((items) => items.page === "home_3")
                    .map((item) => (
                      <SwiperSlide key={item.id} className="swiper-slide">
                        <div>
                          <div className="td-testimonial-3-ratings mb-20">
                            <span>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </span>
                          </div>
                          <p className="mb-20">{item.desc}</p>
                          <div className="td-testimonial-3-avatar">
                            <div className="td-testimonial-3-avatar-thumb mr-15">
                              <Image src={item.user} alt="" />
                            </div>
                            <div>
                              <h6 className="names">{item.user_name}</h6>
                              <span className="td-position">
                                {item.designation}
                              </span>
                            </div>
                          </div>
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

export default Testimonial;
