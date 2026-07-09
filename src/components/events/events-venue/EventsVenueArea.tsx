import Image from "next/image";
import Link from "next/link";

import { event_venue_data } from "@/data/EventVenueData";
import { vukafrik_event_data } from "@/data/VukAfrikData";

const EventsVenueArea = () => {
  return (
    <div className="td-venue-area pt-140 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-30">
            <div
              className="td-venue-thumb d-flex justify-content-center align-items-center pt-10 pb-10"
              style={{
                backgroundImage: `url(${event_venue_data.image2.src})`,
                borderRadius: "19px",
              }}
            >
              <div className="td-venue-bg-overlay" />
              <div
                style={{
                  border: "solid 1px white",
                  borderRadius: "19px",
                  height: "fit-content",
                  zIndex: 1,
                }}
              >
                <Image
                  className="w-100 wow td-animetion-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                  src={event_venue_data.image}
                  alt="pullman hotel"
                  style={{ objectFit: "contain" }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div
              className="td-venue-content-wrap wow fadeInRight"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <span className="td-venue-subtitle mb-10 d-block">
                {event_venue_data.sub_title}
              </span>
              <h2 className="td-venue-title mb-20">{event_venue_data.title}</h2>
              <p className="td-venue-text mb-30">
                {event_venue_data.description}
              </p>
              <div>
                <div className="td-venue-info mb-25">
                  <span className="td-venue-info-icon">
                    <i className="flaticon-gps"></i>
                  </span>
                  <div>
                    <span className="subtitle">
                      {event_venue_data.address.label}
                    </span>
                    <Link
                      className="links"
                      href={vukafrik_event_data.venueHref}
                      target="_blank"
                    >
                      {event_venue_data.address.value}
                    </Link>
                  </div>
                </div>
                <div className="td-venue-info mb-25">
                  <span className="td-venue-info-icon">
                    <i className="flaticon-phone"></i>
                  </span>
                  <div>
                    <span className="subtitle">
                      {event_venue_data.phone.label}
                    </span>
                    <a
                      className="links"
                      href={`tel:${event_venue_data.phone.value}`}
                    >
                      {event_venue_data.phone.value}
                    </a>
                  </div>
                </div>
                <div className="td-venue-info">
                  <span className="td-venue-info-icon">
                    <i className="flaticon-mail"></i>
                  </span>
                  <div>
                    <span className="subtitle">
                      {event_venue_data.email.label}
                    </span>
                    <Link className="links" href="mailto:info@gmail.com">
                      {event_venue_data.email.value}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsVenueArea;
