import Link from "next/link";
import Image from "next/image";

import { vukafrik_event_data } from "@/data/VukAfrikData";
import { footer_data } from "@/data/FooterData";
import { paths_holder } from "@/data/MenuData";

const FooterOne = () => {
  return (
    <footer>
      <div
        className="td-footer-area bg-position pt-130"
        style={{ backgroundImage: `url(${footer_data.bg_img.src})` }}
      >
        <div className="container">
          <div className="row mb-30">
            <div className="col-lg-3 col-md-6">
              <div className="td-footer-widget mb-40">
                <div className="td-footer-logo mb-20">
                  <Link href={paths_holder.home.link}>
                    <Image src={footer_data.logo} alt="logo" />
                  </Link>
                </div>
                <p className="text mb-0">{footer_data.blurb}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="td-footer-widget space ml-90 mb-40">
                <h3 className="td-footer-title mb-20">
                  {footer_data.titles[0]}
                </h3>
                <div className="td-footer-links">
                  <ul>
                    {footer_data.quickLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="td-footer-widget space ml-90 mb-40">
                <h3 className="td-footer-title mb-20">
                  {footer_data.titles[1]}
                </h3>
                <div className="td-footer-links">
                  <ul>
                    {footer_data.actionLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="td-footer-widget td-footer-subscribe mb-40">
                <h3 className="td-footer-title mb-20">
                  {footer_data.titles[2]}
                </h3>
                <div className="td-footer-links">
                  <ul>
                    {footer_data.contactLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="td-footer-bottom pt-40 pb-15">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <p className="mb-0">{footer_data.copyright}</p>
                  </div>
                  <div className="col-md-4">
                    <div className="td-footer-bottom-social text-md-right text-start mt-20 mt-md-0">
                      {vukafrik_event_data.socialLinks.map((item) => (
                        <span key={item.label}>
                          <Link
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
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
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
