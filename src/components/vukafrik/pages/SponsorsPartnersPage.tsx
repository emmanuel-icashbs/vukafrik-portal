import Link from "next/link";

import { SectionHeading, ActionCard, FeatureListCard, MetricCard } from "@/components/vukafrik/CommercialBlocks";
import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import { StakeholderForm } from "@/components/vukafrik/forms/FormSystem";
import { sponsorInquiryForm } from "@/data/vukafrik-forms";
import {
  vukafrikEvent,
  vukafrikEventStats,
  vukafrikPartnerLogoPlaceholders,
  vukafrikPartnershipOpportunities,
  vukafrikSponsorBenefitGroups,
  vukafrikSponsorCategories,
  vukafrikSponsorValuePoints,
} from "@/data/vukafrik-content";

const hero = {
  eyebrow: "Sponsors & partenaires",
  title: "Sponsors & partenaires",
  subtitle:
    "Associez votre organisation a une plateforme regionale qui connecte institutions, investisseurs, entrepreneurs, startups, PME, corporate et acteurs de l'innovation.",
  meta: [vukafrikEvent.name, vukafrikEvent.dates, vukafrikEvent.venue],
  theme: "commercial" as const,
  actions: [
    {
      label: "Devenir sponsor",
      href: "#sponsor-inquiry",
      variant: "primary" as const,
    },
    {
      label: "Contacter l'equipe partenariats",
      href: "/contact",
      variant: "secondary" as const,
    },
  ],
};

const SponsorsPartnersPage = () => {
  return (
    <CorePageLayout>
      <CorePageHero data={hero} />

      <section className="vuka-page-section pb-90">
        <div className="container">
          <SectionHeading
            eyebrow="Pourquoi VUK'AFRIK"
            title="Une plateforme de visibilite et d'acces strategique"
            description="Devenir partenaire de VUK'AFRIK, c'est prendre position dans une dynamique appelee a renforcer les connexions entre politiques publiques, innovation, financement, entrepreneuriat et transformation economique."
            align="center"
          />
          <div className="row g-4">
            <div className="col-xl-7">
              <FeatureListCard
                title="Pourquoi devenir partenaire de VUK'AFRIK ?"
                description="Le format est pense pour connecter institutions publiques, regulateurs, entreprises, banques, investisseurs, startups, PME, entrepreneurs, medias, talents et structures d'appui."
                items={vukafrikSponsorValuePoints}
              />
            </div>
            <div className="col-xl-5">
              <FeatureListCard
                dark
                eyebrow="Publics cibles"
                title="Un environnement utile pour les organisations ambitieuses"
                items={[
                  "Institutions publiques et regulateurs",
                  "Leaders corporate et institutions financieres",
                  "Investisseurs, startups, PME et entrepreneurs",
                  "Partenaires techniques, medias et communautes talents",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="vuka-page-section vuka-page-section--dark pb-100">
        <div className="container">
          <SectionHeading
            eyebrow="Projections"
            title="Une plateforme de haute visibilite"
            description="Ces projections donnent la mesure du rendez-vous et de la qualite des connexions qu'il peut ouvrir pour les partenaires."
            align="center"
          />
          <div className="row g-4">
            {vukafrikEventStats.map((item) => (
              <div key={item.label} className="col-xl-4 col-md-6">
                <MetricCard value={item.value} label={item.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vuka-page-section pb-100">
        <div className="container">
          <SectionHeading
            eyebrow="Categories"
            title="Des categories de partenariat adaptees a vos objectifs"
            description="Chaque categorie repond a une logique de positionnement, de visibilite et de contribution differente."
          />
          <div className="row g-4">
            {vukafrikSponsorCategories.map((item) => (
              <div key={item.name} className="col-xl-4 col-lg-6">
                <ActionCard
                  title={item.name}
                  description={item.description}
                  items={item.benefits}
                  ctaLabel={item.ctaLabel}
                  ctaHref={item.ctaHref}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vuka-page-section pb-100">
        <div className="container">
          <SectionHeading
            eyebrow="Benefices"
            title="Ce que votre organisation peut activer"
            description="Les partenariats VUK'AFRIK sont concus comme des leviers de visibilite, d'influence, d'acces et d'impact."
          />
          <div className="row g-4">
            {vukafrikSponsorBenefitGroups.map((group) => (
              <div key={group.title} className="col-xl-6">
                <FeatureListCard title={group.title} items={group.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vuka-page-section pb-100">
        <div className="container">
          <SectionHeading
            eyebrow="Opportunites"
            title="Des espaces de sponsoring et de co-positionnement clairs"
            description="Votre organisation peut s'associer a des environnements, formats et activations differents selon son ambition."
          />
          <div className="row g-4">
            {vukafrikPartnershipOpportunities.map((item) => (
              <div key={item.title} className="col-xl-3 col-lg-4 col-md-6">
                <div className="vuka-commercial-mini-card h-100">
                  <span className="vuka-card-eyebrow">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vuka-page-section pb-100">
        <div className="container">
          <SectionHeading
            eyebrow="Logos partenaires"
            title="Une grille prete a accueillir les identites officielles"
            description="Les logos definitifs seront integres des qu'ils seront disponibles. La structure est deja prete pour une presentation propre et institutionnelle."
          />
          <div className="row g-4">
            {vukafrikPartnerLogoPlaceholders.map((item) => (
              <div key={item.category} className="col-xl-4 col-md-6">
                <div className="vuka-logo-showcase-card h-100">
                  <span className="vuka-card-eyebrow">{item.category}</span>
                  <div className="vuka-logo-placeholder-box">{item.placeholderLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vuka-page-section pb-100">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-xl-4">
              <FeatureListCard
                eyebrow="Formulaire"
                title="Construisons votre participation"
                description="Dites-nous comment votre organisation souhaite s'engager avec VUK'AFRIK. Notre equipe partenariats analysera votre demande et reviendra vers vous."
                items={[
                  "Visibilite de marque et presence institutionnelle",
                  "Association a un village, un espace ou un temps fort",
                  "Connexion a l'ecosysteme innovation et business",
                ]}
              />
            </div>
            <div className="col-xl-8">
              <div id="sponsor-inquiry" className="vuka-form-shell">
                <span className="vuka-card-eyebrow">Demande partenaire</span>
                <StakeholderForm
                  config={sponsorInquiryForm}
                  sourcePage="/sponsors-partners"
                  submitLabel="Soumettre la demande sponsor"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vuka-page-section pb-140">
        <div className="container">
          <div className="vuka-info-card vuka-info-card--dark text-center">
            <span className="vuka-card-eyebrow">Derniere etape</span>
            <h2>Construisons ensemble le futur de l&apos;innovation, de l&apos;entrepreneuriat et du business avec VUK&apos;AFRIK.</h2>
            <div className="vuka-page-hero__actions">
              <Link className="td-btn td-left-right" href="#sponsor-inquiry">
                <span className="mr10 td-text d-inline-block mr-5">Soumettre une demande sponsor</span>
              </Link>
              <Link className="td-btn td-btn-3-border td-left-right" href="/contact">
                <span className="mr10 td-text d-inline-block mr-5">Contacter l&apos;equipe partenariats</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CorePageLayout>
  );
};

export default SponsorsPartnersPage;
