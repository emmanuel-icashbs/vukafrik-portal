import { vukafrik_event_data } from "@/data/VukAfrikData";
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
                  href={vukafrik_event_data.venueHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="flaticon-gps"></i>
                  {vukafrik_event_data.venue}
                </Link>
              </span>
              <span className="dvdr">/</span>
              <span>
                <Link href="#">
                  <i className="flaticon-calendar"></i>
                  {vukafrik_event_data.dates}
                </Link>
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-none d-lg-block">
              <div className="td-header-3-top-social d-flex align-items-center justify-content-end">
                <span className="td-email">
                  <Link
                    href={`mailto:${vukafrik_event_data.contacts.generalEmail}`}
                  >
                    <i className="flaticon-mail"></i>
                    {vukafrik_event_data.contacts.generalEmail}
                  </Link>
                </span>
                <span className="dvdr">/</span>
                <span className="td-email">
                  <Link href={vukafrik_event_data.contacts.phoneHref}>
                    <i className="flaticon-phone"></i>
                    {vukafrik_event_data.contacts.phoneLabel}
                  </Link>
                </span>
                <span className="dvdr">/</span>

                {vukafrik_event_data.socialLinks.map((social, index) => (
                  <span key={index}>
                    <Link
                      href={vukafrik_event_data.socialLinks[index].href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={vukafrik_event_data.socialLinks[index].icon}
                      ></i>
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
