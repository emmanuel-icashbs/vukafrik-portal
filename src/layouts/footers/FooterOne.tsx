import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/img/logo/vukafrik-white-gold-logo.png";
import bg_img from "@/assets/img/footer/bg.jpg";
import { vukafrikEvent, vukafrikFooter } from "@/data/VukAfrikData";

const FooterOne = () => {
  return (
    <footer>
      <div
        className="td-footer-area bg-position pt-130"
        style={{ backgroundImage: `url(${bg_img.src})` }}
      >
        <div className="container">
          <div className="row mb-30">
            <div className="col-lg-3 col-md-6">
              <div className="td-footer-widget mb-40">
                <div className="td-footer-logo mb-20">
                  <Link href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                </div>
                <p className="text mb-0">
                  {
                    "VUK'AFRIK 2026 relie initiatives locales, partenaires regionaux et opportunites de croissance a travers un Sommet strategique, une foire multisectorielle et des espaces de networking a Kinshasa."
                  }
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="td-footer-widget space ml-90 mb-40">
                <h3 className="td-footer-title mb-20">{"Événement"}</h3>
                <div className="td-footer-links">
                  <ul>
                    <li>
                      <Link href="/about">About this Event</Link>
                    </li>

                    <li>
                      <Link href="/speakers">Intervenants</Link>
                    </li>
                    <li>
                      <Link href="/program">Programme</Link>
                    </li>
                    <li>
                      <Link href="/event-venue">Lieu & access</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="td-footer-widget space ml-90 mb-40">
                <h3 className="td-footer-title mb-20">{"Participer"}</h3>
                <div className="td-footer-links">
                  <ul>
                    <li>
                      <Link href="/register">{"S'inscrire"}</Link>
                    </li>

                    <li>
                      <Link href="/sponsors#sponsor_form">Devenir Sponsor</Link>
                    </li>
                    <li>
                      <Link href="/exhibitions#exhibitor_form">
                        {"S'inscrire comme Exposant"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/team#team_form">
                        Proposer une Intervention
                      </Link>
                    </li>
                    <li>
                      <Link href="/media-accreditation#media_form">
                        Accreditation Media
                      </Link>
                    </li>
                    <li>
                      <Link href="/volonteer#volonteer_form">Volontariat</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="td-footer-widget td-footer-subscribe mb-40">
                <h3 className="td-footer-title mb-20">Contact</h3>
                <div className="td-footer-links">
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
          <div className="row">
            <div className="col-12">
              <div className="td-footer-bottom pt-40 pb-15">
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
