import Link from "next/link";

import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import { StakeholderForm } from "@/components/vukafrik/forms/FormSystem";
import { contactInquiryForm } from "@/data/vukafrik-forms";
import { contactDetails, vukafrikEvent } from "@/data/vukafrik-content";

const ContactPage = () => {
  return (
    <CorePageLayout>
      <CorePageHero data={contactDetails.hero} />

      <section className="vuka-page-section pb-80">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-xl-5">
              <div className="vuka-info-card h-100">
                <span className="vuka-card-eyebrow">Coordination</span>
                <h2>{vukafrikEvent.organiser}</h2>
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
                </div>
                <div className="vuka-address-block mt-30">
                  {vukafrikEvent.contacts.office.map((line) => (
                    <p key={line} className="mb-10">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="vuka-form-shell">
                <span className="vuka-card-eyebrow">Demande generale</span>
                <StakeholderForm
                  config={contactInquiryForm}
                  sourcePage="/contact"
                  submitLabel="Envoyer le message"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vuka-page-section pb-80">
        <div className="container">
          <div className="row">
            {contactDetails.categories.map((item) => (
              <div key={item.title} className="col-xl-4 col-md-6">
                <div className="vuka-contact-card mb-25">
                  <span className="vuka-card-eyebrow">{item.title}</span>
                  <p>{item.copy}</p>
                  {item.contact.startsWith("/") ? (
                    <Link href={item.contact}>Ouvrir la page</Link>
                  ) : item.contact.includes("@") ? (
                    <Link href={`mailto:${item.contact}`}>{item.contact}</Link>
                  ) : (
                    <Link href={vukafrikEvent.contacts.phoneHref}>{item.contact}</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vuka-page-section pb-140">
        <div className="container">
          <div className="vuka-info-card text-center">
            <span className="vuka-card-eyebrow">Actions</span>
            <h2>Choisissez la voie la plus pertinente pour contacter l&apos;equipe VUK&apos;AFRIK</h2>
            <div className="vuka-page-hero__actions">
              <Link className="td-btn td-left-right" href="/register">
                <span className="mr10 td-text d-inline-block mr-5">S&apos;inscrire</span>
              </Link>
              <Link
                className="td-btn td-btn-3-border td-left-right"
                href="/sponsors-partners#sponsor-inquiry"
              >
                <span className="mr10 td-text d-inline-block mr-5">Devenir sponsor</span>
              </Link>
              <Link
                className="td-btn td-btn-3-border td-left-right"
                href="/exhibitors-opportunities#exhibitor-registration"
              >
                <span className="mr10 td-text d-inline-block mr-5">S&apos;inscrire comme exposant</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CorePageLayout>
  );
};

export default ContactPage;
