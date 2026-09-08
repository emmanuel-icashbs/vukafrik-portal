import { info_area } from "@/data/ContactData";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import Link from "next/link";

const ContactArea = () => {
  return (
    <div className="td-contact-area pt-140 pb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="td-contact-map pb-40">
              <iframe
                src={vukafrik_event_data.venueEmbedHref}
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="td-contact-info grey-bg mb-40">
              <h3 className="td-contact-info-title mb-15">{info_area.title}</h3>
              <p className="mb-30">{info_area.sub_title}</p>
              <div className="td-contact-info-list">
                <ul>
                  <li>
                    <span className="icons">
                      <i className="flaticon-gps"></i>
                    </span>
                    <div className="address">
                      <span>{info_area.address.title}</span>
                      <Link href={info_area.address.link} target="_blank">
                        {info_area.address.value}
                      </Link>
                    </div>
                  </li>
                  <li>
                    <span className="icons">
                      <i className="flaticon-phone"></i>
                    </span>
                    <div className="address">
                      <span>{info_area.phone.title}</span>
                      <Link href={info_area.phone.link} target="_blank">
                        {info_area.phone.value}
                      </Link>
                    </div>
                  </li>
                  <li>
                    <span className="icons">
                      <i className="flaticon-mail"></i>
                    </span>
                    <div className="address">
                      <span>{info_area.Email.title}</span>
                      <Link href={info_area.Email.link} target="_blank">
                        {info_area.Email.value}
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="td-contact-info-social">
                {vukafrik_event_data.socialLinks.map((social, index) => (
                  <Link href={social.href} target="_blank" key={index}>
                    <i className={`fa-brands ${social.icon}`}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
