import Link from "next/link"
import Image, { StaticImageData } from "next/image"

import brand_1 from "@/assets/img/brands/brands.png"
import brand_2 from "@/assets/img/brands/brands-2.png"
import brand_3 from "@/assets/img/brands/brands-3.png"
import brand_4 from "@/assets/img/brands/brands-4.png"
import brand_5 from "@/assets/img/brands/brands-5.png"
import brand_6 from "@/assets/img/brands/brands-6.png"
import brand_7 from "@/assets/img/brands/brands-7.png"
import brand_8 from "@/assets/img/brands/brands-8.png"

const brands: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_8];

const Brand = () => {
   return (
      <div className="td-brands-area blue-bg pt-110 pb-115">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="td-brands-title-wrap mb-45 wow fadeInLeft" data-wow-duration=".9s" data-wow-delay=".2s">
                     <span className="td-section-subtitle mb-20">Our Official Sponsors</span>
                     <h2 className="td-section-title">Trusted by over 150  organizations in more than 50 countries</h2>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-brands-btn mb-45 wow fadeInRight" data-wow-duration=".9s" data-wow-delay=".2s">
                     <Link className="td-btn td-left-right" href="/about">
                        <span className="mr10 td-text d-inline-block mr-5">Become a Sponsor</span>
                        <span className="td-arrow-angle">
                           <svg className="td-arrow-svg-top-right" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                              <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                           </svg>
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="row">
               {brands.map((brand, i) => (
                  <div key={i} className="col-lg-3 col-md-6 col-6 wow fadeInLeft" data-wow-duration=".9s" data-wow-delay=".2s">
                     <div className="td-brands-item mb-25">
                        <Link href="#"><Image src={brand} alt="" /></Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Brand
