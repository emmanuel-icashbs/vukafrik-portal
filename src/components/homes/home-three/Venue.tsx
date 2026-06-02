import Link from "next/link";

import { vukafrikEvent, vukafrikVenue } from "@/data/vukafrik-content";

const Venue = () => {
  return (
    <section
      id={vukafrikVenue.id}
      className="td-map-area fix vuka-venue-section pt-140 pb-140"
    >
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-5">
            <div className="vuka-venue-copy mb-20">
              <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-20">
                {vukafrikVenue.eyebrow}
              </span>
              <h2 className="td-section-title mb-15">{vukafrikVenue.title}</h2>
              <p className="mb-30">{vukafrikVenue.description}</p>
              <ul className="vuka-venue-list">
                {vukafrikVenue.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="vuka-contact-panel">
              <span className="vuka-card-eyebrow">Contacts</span>
              <div className="vuka-contact-stack">
                <Link href={`mailto:${vukafrikEvent.contacts.generalEmail}`}>
                  Informations generales : {vukafrikEvent.contacts.generalEmail}
                </Link>
                <Link href={`mailto:${vukafrikEvent.contacts.partnershipsEmail}`}>
                  Partenariats : {vukafrikEvent.contacts.partnershipsEmail}
                </Link>
                <Link href={vukafrikEvent.contacts.phoneHref}>
                  Telephone / WhatsApp : {vukafrikEvent.contacts.phoneLabel}
                </Link>
              </div>
              <div className="vuka-footer-actions">
                <Link
                  className="td-btn td-left-right"
                  href={vukafrikVenue.contactCtaLink}
                >
                  <span className="mr10 td-text d-inline-block mr-5">
                    {vukafrikVenue.contactCtaLabel}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="td-map-inner vuka-map-frame">
              <iframe
                src={vukafrikVenue.mapEmbed}
                title="Carte du Pullman Hotel a Kinshasa"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
