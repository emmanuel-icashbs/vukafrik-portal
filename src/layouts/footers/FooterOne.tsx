import Link from "next/link"
import Image from "next/image"

import logo from "@/assets/img/logo/vukafrik-white-gold-logo-optimized.png"
import { vukafrikEvent, vukafrikFooter } from "@/data/vukafrik-content"

const FooterOne = () => {
   return (
      <footer>
         <div className="td-footer-area bg-position pt-130" style={{ backgroundImage: `url(${vukafrikFooter.background.src})` }}>
            <div className="container">
               <div className="row mb-30">
                  <div className="col-lg-3 col-md-5">
                     <div className="td-footer-widget mb-40">
                        <div className="td-footer-logo mb-20">
                           <Link href="/"><Image src={logo} alt={vukafrikEvent.name} /></Link>
                        </div>
                        <p className="text mb-10">{vukafrikFooter.blurb}</p>
                        <Link className="number mb-10 d-inline-block" href="/contact">{vukafrikEvent.ctaLabel}</Link>
                        <Link className="email" href="/contact">Partnership and participation enquiries</Link>
                     </div>
                  </div>
                  <div className="col-lg-5 col-md-7">
                     <div className="td-footer-widget space ml-90 mb-40">
                        <h3 className="td-footer-title mb-20">Quick links</h3>
                        <div className="row">
                           <div className="col-lg-12 col-md-12 col-sm-12">
                              <div className="td-footer-links">
                                 <ul>
                                    {vukafrikFooter.quickLinks.map((link) => (
                                       <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="td-footer-widget td-footer-subscribe mb-40">
                        <h3 className="td-footer-title mb-20">Event snapshot</h3>
                        <p className="text mb-10">{vukafrikEvent.subtitle}</p>
                        <p className="text mb-10">{vukafrikEvent.theme}</p>
                        <div className="vuka-footer-actions">
                           <Link className="td-btn td-left-right" href="/contact">
                              <span className="mr10 td-text d-inline-block mr-5">Start a conversation</span>
                              <span className="td-arrow-angle">
                                 <svg className="td-arrow-svg-top-right" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z" fill="white" />
                                 </svg>
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="td-footer-bottom pt-40 pb-15">
                        <div className="row align-items-center">
                           <div className="col-md-9">
                              <div className="td-footer-bottom-copyright mb-30">
                                 <p>Copyright © 2026 {vukafrikEvent.name}. Organised by {vukafrikEvent.organiser}.</p>
                              </div>
                           </div>
                           <div className="col-md-3">
                              <div className="td-footer-bottom-social text-right mb-30">
                                 <span><Link href="/#overview"><i className="fa-brands fa-linkedin"></i></Link></span>
                                 <span><Link href="/#partners"><i className="fa-brands fa-instagram"></i></Link></span>
                                 <span><Link href="/contact"><i className="fa-brands fa-whatsapp"></i></Link></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
