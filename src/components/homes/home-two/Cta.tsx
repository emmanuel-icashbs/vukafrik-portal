"use client";
import RegistrationGate from "@/components/common/RegistrationGate";
import bg_img from "@/assets/img/cta/cta-bg.png"
import styles from "./Cta.module.scss";

const Cta = ({ variant = "default" }: { variant?: "default" | "premium" }) => {
   const isPremium = variant === "premium";

   return (
      <div className={`td-cta-area ${isPremium ? styles.premium : ""}`}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className={`td-cta-2-wrap bg-position ${isPremium ? styles.premiumWrap : ""}`} style={isPremium ? undefined : { backgroundImage: `url(${bg_img.src})` }}>
                     <div className="row align-items-end">
                        <div className="col-lg-5">
                           <div className="td-cta-2-content mb-20">
                              <span className={`td-cta-2-subtitle d-inline-block mb-5 ${isPremium ? styles.eyebrow : ""}`}>Ne manquez aucune de nos actualités !</span>
                              <h2 className={`td-cta-2-title ${isPremium ? styles.title : ""}`}>Abonnez-vous dès aujourd’hui !</h2>
                           </div>
                        </div>
                        <div className="col-lg-7">
                           <div className={`td-cta-2-form mb-25 ${isPremium ? styles.form : ""}`}>
                              <RegistrationGate><form onSubmit={(e) => e.preventDefault()} className="p-relative">
                                 <input className="td-input" type="text" placeholder="Your E-mail Address" />
                                 <button className="cta-btn" type="submit">Subscribe</button>
                              </form></RegistrationGate>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cta
