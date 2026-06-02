import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/img/logo/vukafrik-white-gold-logo-optimized.png";
import { vukafrikEvent, vukafrikFooter } from "@/data/vukafrik-content";

const FooterOne = () => {
  return (
    <footer>
      <div
        className="td-footer-area td-footer-area--vukafrik bg-position"
        style={{ backgroundImage: `url(${vukafrikFooter.background.src})` }}
      >
        <div className="td-footer-main td-footer-main--vukafrik pt-55 pb-50">
          <div className="container">
            <div className="row mb-10">
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="td-footer-widget td-footer-4-widget td-footer-4-widget--brand mb-35">
                  <div className="td-footer-logo mb-20">
                    <Link href="/">
                      <Image src={logo} alt={vukafrikEvent.name} />
                    </Link>
                  </div>
                  <p className="text mb-0">{vukafrikFooter.blurb}</p>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                <div className="td-footer-widget td-footer-4-widget mb-35">
                  <h3 className="td-footer-title mb-18">Evenement</h3>
                  <div className="td-footer-links">
                    <ul>
                      {vukafrikFooter.quickLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="td-footer-widget td-footer-4-widget mb-35">
                  <h3 className="td-footer-title mb-18">Participer</h3>
                  <div className="td-footer-links">
                    <ul>
                      {vukafrikFooter.actionLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-12 col-md-6">
                <div className="td-footer-widget td-footer-4-widget mb-35">
                  <h3 className="td-footer-title mb-18">Contact</h3>
                  <div className="td-footer-links td-footer-links--contact">
                    <ul>
                      {vukafrikFooter.contactLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="td-footer-bottom-copyright td-footer-4-copyright td-footer-4-copyright--vukafrik">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <p className="mb-0">{vukafrikFooter.copyright}</p>
              </div>
              <div className="col-md-4">
                <div className="td-footer-bottom-social text-md-right text-start mt-20 mt-md-0">
                  {vukafrikEvent.socialLinks.map((item) => (
                    <span key={item.label}>
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                      >
                        <i className={item.icon}></i>
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
