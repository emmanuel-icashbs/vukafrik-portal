import Link from "next/link";

import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import {
  VukafrikRouteDefinition,
  vukafrikEvent,
  vukafrikEventStats,
  vukafrikFaqPlaceholders,
  vukafrikFormTypes,
  vukafrikProgramPlaceholder,
  vukafrikSiteMap,
  vukafrikSponsorCategoryLabels,
  vukafrikSpeakersPlaceholder,
  vukafrikThematicVillages,
} from "@/data/vukafrik-content";

type MicrositePageProps = {
  route: VukafrikRouteDefinition;
};

const routeSpecificHighlights: Record<string, string[]> = {
  about: vukafrikEventStats.map((item) => `${item.value} ${item.label}`),
  program: vukafrikProgramPlaceholder.map(
    (item) => `${item.day} | ${item.time} | ${item.title}`,
  ),
  speakers: vukafrikSpeakersPlaceholder.map(
    (item) => `${item.name} | ${item.role}`,
  ),
  sponsors: vukafrikSponsorCategoryLabels,
  exhibitors: vukafrikThematicVillages.map((item) => item.title),
  register: vukafrikFormTypes,
  faq: vukafrikFaqPlaceholders.map((item) => item.question),
  "venue-travel": [
    `${vukafrikEvent.venue}`,
    `${vukafrikEvent.city}`,
    "Travel guidance coming in Phase 2",
  ],
  "media-accreditation": [
    "Press and media eligibility",
    "Interview request workflow",
    "Editorial access guidance",
  ],
  volunteer: [
    "Operations support",
    "Guest experience assistance",
    "Speaker and stage coordination",
  ],
  news: [
    "Announcements",
    "Partner updates",
    "Programme and speaker reveals",
  ],
  contact: [
    vukafrikEvent.contacts.generalEmail,
    vukafrikEvent.contacts.partnershipsEmail,
    vukafrikEvent.contacts.phoneLabel,
  ],
};

const MicrositePage = ({ route }: MicrositePageProps) => {
  const highlights =
    routeSpecificHighlights[route.id] ??
    vukafrikEventStats.map((item) => `${item.value} ${item.label}`);

  return (
    <>
      <HeaderThree />
      <main>
        <section className="vuka-page-hero pt-220 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-xl-9 col-lg-10">
                <div className="vuka-page-hero__content text-center">
                  <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-20">
                    {route.eyebrow}
                  </span>
                  <h1 className="td-section-title mb-20">{route.title}</h1>
                  <p className="vuka-page-hero__text mb-35">
                    {route.description}
                  </p>
                  <div className="vuka-page-hero__actions">
                    <Link className="td-btn td-left-right" href={vukafrikEvent.ctaLink}>
                      <span className="mr10 td-text d-inline-block mr-5">
                        {vukafrikEvent.ctaLabel}
                      </span>
                    </Link>
                    <Link
                      className="td-btn td-btn-3-border td-left-right"
                      href={vukafrikEvent.secondaryCtaLink}
                    >
                      <span className="mr10 td-text d-inline-block mr-5">
                        {vukafrikEvent.secondaryCtaLabel}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vuka-page-section pb-120">
          <div className="container">
            <div className="row g-4">
              <div className="col-xl-8">
                <div className="vuka-info-card">
                  <span className="vuka-card-eyebrow">Phase 1 foundation</span>
                  <h2>Structured now, ready for content in Phase 2</h2>
                  <p>
                    This route is live and connected inside the VUK&apos;AFRIK
                    microsite so navigation, CTA destinations and page
                    architecture are already stable. The detailed content layer
                    will be expanded in the next phase without reworking the
                    route structure.
                  </p>
                  <div className="vuka-link-grid">
                    {vukafrikSiteMap
                      .filter((item) => item.href !== route.href && item.href !== "/")
                      .slice(0, 6)
                      .map((item) => (
                        <Link key={item.href} href={item.href}>
                          {item.label}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="vuka-info-card vuka-info-card--dark">
                  <span className="vuka-card-eyebrow">Event details</span>
                  <h3>{vukafrikEvent.name}</h3>
                  <ul className="vuka-detail-list">
                    <li>{vukafrikEvent.subtitle}</li>
                    <li>{vukafrikEvent.dates}</li>
                    <li>{vukafrikEvent.venue}</li>
                    <li>{vukafrikEvent.organiser}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row g-4 mt-10">
              <div className="col-xl-7">
                <div className="vuka-info-card">
                  <span className="vuka-card-eyebrow">Prepared content blocks</span>
                  <div className="vuka-chip-grid">
                    {highlights.map((item) => (
                      <span key={item} className="vuka-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="vuka-info-card">
                  <span className="vuka-card-eyebrow">Contact routes</span>
                  <div className="vuka-contact-stack">
                    <Link href={`mailto:${vukafrikEvent.contacts.generalEmail}`}>
                      {vukafrikEvent.contacts.generalEmail}
                    </Link>
                    <Link href={`mailto:${vukafrikEvent.contacts.partnershipsEmail}`}>
                      {vukafrikEvent.contacts.partnershipsEmail}
                    </Link>
                    <Link href={vukafrikEvent.contacts.phoneHref}>
                      {vukafrikEvent.contacts.phoneLabel}
                    </Link>
                    <Link href={vukafrikEvent.contacts.whatsappHref} target="_blank">
                      WhatsApp enquiries
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterOne />
    </>
  );
};

export default MicrositePage;
