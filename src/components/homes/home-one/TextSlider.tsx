"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image'

import arrow from "@/assets/img/text/round.png"

const slider_data: string[] = ["Business Conference", "Book Your Ticket", "Industry Lead Company", "Business Conference 2025", "Industry Lead Company",
   "Business Conference", "Book Your Ticket", "Industry Lead Company", "Business Conference 2025", "Industry Lead Company",
];

const setting = {
   loop: true,
   freeMode: true,
   slidesPerView: 'auto' as const,
   spaceBetween: 30,
   centeredSlides: true,
   allowTouchMove: false,
   speed: 7000,
   autoplay: {
      delay: 1,
      disableOnInteraction: true,
   },
};

const TextSlider = () => {
   return (
      <div className="td-text-slider-area td-text-slider-spacing">
         <div className="container-fluid">
            <div className="row">
               <Swiper {...setting} modules={[Autoplay]} onSwiper={(swiper) => {
                  swiper.wrapperEl.classList.add("slide-transition");
               }} className="swiper-container td-text-slider-active">
                  {slider_data.map((item, i) => (
                     <SwiperSlide key={i} className="swiper-slide">
                        <div className="td-text-slider-item">
                           <h3 className="text">{item}</h3>
                           <Image src={arrow} alt="round" />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   )
}

export default TextSlider
