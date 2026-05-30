import Link from 'next/link'

import { vukafrikEvent } from "@/data/vukafrik-content";

const HeaderTopOne = () => {
   return (
      <div className="td-header-3-top d-none d-lg-block">
         <div className="container-fluid container-1680">
            <div className="row">
               <div className="col-lg-6">
                  <div className="td-header-3-top-info">
                     <span><Link href="/#venue"><i className="flaticon-gps"></i>{vukafrikEvent.venue}</Link></span>
                     <span className="dvdr">/</span>
                     <span><Link href="/#programme"><i className="flaticon-calendar"></i>{vukafrikEvent.dates}</Link></span>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="d-none d-lg-block">
                     <div className="td-header-3-top-social d-flex align-items-center justify-content-end">
                        <span className="td-email"><Link href="/contact"><i className="flaticon-mail"></i>{vukafrikEvent.organiser}</Link></span>
                        <span className="dvdr">/</span>
                        <span><Link href="/#overview"><i className="flaticon-request"></i>{vukafrikEvent.subtitle}</Link></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopOne
