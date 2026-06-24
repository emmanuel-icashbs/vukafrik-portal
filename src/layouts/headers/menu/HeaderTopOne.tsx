import { vukafrikEvent } from "@/data/VukAfrikData";
import Link from "next/link";

const HeaderTopOne = () => {
  return (
    <div className="td-header-3-top d-none d-lg-block">
      <div className="container-fluid container-1680">
        <div className="row">
          <div className="col-lg-6">
            <div className="td-header-3-top-info">
              <span>
                <Link
                  href={vukafrikEvent.venueHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="flaticon-gps"></i>
                  {vukafrikEvent.venue}
                </Link>
              </span>
              <span className="dvdr">/</span>
              <span>
                <Link href="#">
                  <i className="flaticon-calendar"></i>
                  {vukafrikEvent.dates}
                </Link>
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-none d-lg-block">
              <div className="td-header-3-top-social d-flex align-items-center justify-content-end">
                <span className="td-email">
                  <Link href={`mailto:${vukafrikEvent.contacts.generalEmail}`}>
                    <i className="flaticon-mail"></i>
                    {vukafrikEvent.contacts.generalEmail}
                  </Link>
                </span>
                <span className="dvdr">/</span>
                <span className="td-email">
                  <Link href={vukafrikEvent.contacts.phoneHref}>
                    <i className="flaticon-phone"></i>
                    {vukafrikEvent.contacts.phoneLabel}
                  </Link>
                </span>
                <span className="dvdr">/</span>

                {vukafrikEvent.socialLinks.map((social, index) => (
                  <span key={index}>
                    <Link
                      href={vukafrikEvent.socialLinks[index].href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={vukafrikEvent.socialLinks[index].icon}></i>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopOne;
