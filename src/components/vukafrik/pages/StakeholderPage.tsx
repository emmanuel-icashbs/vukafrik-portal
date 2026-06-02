import Link from "next/link";

import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import { StakeholderForm } from "@/components/vukafrik/forms/FormSystem";
import {
  VukafrikFormConfig,
} from "@/data/vukafrik-forms";
import { VukafrikPageHeroData } from "@/data/vukafrik-content";

type StakeholderAsideCard = {
  eyebrow: string;
  title: string;
  copy: string;
  bullets?: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

type StakeholderPageProps = {
  hero: VukafrikPageHeroData;
  formConfig: VukafrikFormConfig;
  sourcePage: string;
  submitLabel: string;
  formAnchorId?: string;
  asideCards: StakeholderAsideCard[];
};

const StakeholderPage = ({
  hero,
  formConfig,
  sourcePage,
  submitLabel,
  formAnchorId,
  asideCards,
}: StakeholderPageProps) => {
  return (
    <CorePageLayout>
      <CorePageHero data={hero} />

      <section className="vuka-page-section pb-140">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-xl-4 col-lg-5">
              {asideCards.map((card) => (
                <div key={card.title} className="vuka-info-card mb-25">
                  <h2>{card.title}</h2>
                  <p>{card.copy}</p>
                  {card.bullets?.length ? (
                    <ul className="vuka-stakeholder-list">
                      {card.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {card.links?.length ? (
                    <div className="vuka-stakeholder-links">
                      {card.links.map((link) => (
                        <Link key={link.href + link.label} href={link.href}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="col-xl-8 col-lg-7">
              <div id={formAnchorId} className="vuka-form-shell">
                <StakeholderForm
                  config={formConfig}
                  sourcePage={sourcePage}
                  submitLabel={submitLabel}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </CorePageLayout>
  );
};

export default StakeholderPage;
