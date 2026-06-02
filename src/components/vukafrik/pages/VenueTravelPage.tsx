import Link from "next/link";

import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import { venueDetails, vukafrikEvent } from "@/data/vukafrik-content";

const VenueTravelPage = () => {
  return (
    <CorePageLayout>
      <CorePageHero data={venueDetails.hero} />

      <section className="vuka-page-section pb-120">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-xl-5">
              <div className="vuka-venue-copy h-100">
                <span className="vuka-card-eyebrow">Vue d&apos;ensemble</span>
                <h2>{vukafrikEvent.venue}</h2>
                <p>{venueDetails.overview}</p>
                <ul className="vuka-venue-list">
                  <li>{vukafrikEvent.city}, {vukafrikEvent.country}</li>
                  <li>{vukafrikEvent.dates}</li>
                  <li>Les informations pratiques de transport seront partagees prochainement</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="vuka-map-frame">
                <iframe
                  src={venueDetails.mapEmbed}
                  title="Carte du lieu VUK'AFRIK 2026"
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

      <section className="vuka-page-section pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="vuka-info-card">
                <span className="vuka-card-eyebrow">Acces et orientation</span>
                {venueDetails.accessNotes.map((item) => (
                  <p key={item} className="mb-15">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="vuka-info-card">
                <span className="vuka-card-eyebrow">Hebergement</span>
                <p>{venueDetails.accommodationNote}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="vuka-info-card">
                <span className="vuka-card-eyebrow">Contact assistance</span>
                <div className="vuka-contact-stack">
                  <Link href={`mailto:${vukafrikEvent.contacts.generalEmail}`}>
                    {vukafrikEvent.contacts.generalEmail}
                  </Link>
                  <Link href={vukafrikEvent.contacts.phoneHref}>
                    {vukafrikEvent.contacts.phoneLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CorePageLayout>
  );
};

export default VenueTravelPage;
