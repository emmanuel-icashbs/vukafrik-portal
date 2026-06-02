import Link from "next/link";

import { ActionCard, FeatureListCard, JourneyStep, SectionHeading } from "@/components/vukafrik/CommercialBlocks";
import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import { StakeholderForm } from "@/components/vukafrik/forms/FormSystem";
import { exhibitorRegistrationForm } from "@/data/vukafrik-forms";
import {
  vukafrikEvent,
  vukafrikExhibitorBenefits,
  vukafrikExhibitorJourney,
  vukafrikExhibitorOpportunityFormats,
  vukafrikThematicVillages,
} from "@/data/vukafrik-content";

const hero = {
  eyebrow: "Exposants & opportunites",
  title: "Exposants & opportunites",
  subtitle:
    "Presentez vos produits, services, innovations et solutions sectorielles a des institutions, investisseurs, leaders corporate, entrepreneurs et acteurs d'ecosysteme.",
  meta: [vukafrikEvent.name, vukafrikEvent.dates, vukafrikEvent.venue],
  theme: "commercial" as const,
  actions: [
    {
      label: "S'inscrire comme exposant",
      href: "#exhibitor-registration",
      variant: "primary" as const,
    },
    {
      label: "Explorer les villages thematiques",
      href: "#thematic-villages",
      variant: "secondary" as const,
    },
  ],
};

const ExhibitorsOpportunitiesPage = () => {
  return (
    <CorePageLayout>
      <CorePageHero data={hero} />

      <section className="vuka-page-section pb-90">
        <div className="container">
          <SectionHeading
            eyebrow="Pourquoi exposer"
            title="Une scene multisectorielle pour montrer, convaincre et connecter"
            description="VUK'AFRIK cree un environnement adapte aux organisations qui veulent etre visibles, rencontrer des partenaires et accelerer des conversations business."
            align="center"
          />
          <div className="row g-4">
            <div className="col-xl-7">
              <FeatureListCard
                title="Pourquoi exposer a VUK'AFRIK ?"
                description="L'evenement est pense pour relier offre, usage, decision, investissement et ecosystemes."
                items={[
                  "Presentez vos produits, services et innovations a une audience multisectorielle.",
                  "Rencontrez institutions, investisseurs, entrepreneurs, corporate et partenaires potentiels.",
                  "Integrez un village thematique coherent avec votre secteur.",
                  "Generez visibilite, leads et conversations business.",
                  "Participez aux showcases, espaces pitch et opportunites de networking.",
                ]}
              />
            </div>
            <div className="col-xl-5">
              <FeatureListCard
                dark
                eyebrow="Positionnement"
                title="Une presence utile et actionnable"
                items={[
                  "Visibilite dans un cadre business et institutionnel",
                  "Acces a des rencontres qualifiees et conversations de croissance",
                  "Connexion a des villages sectoriels et opportunites de demonstration",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="vuka-page-section pb-100">
        <div className="container">
          <SectionHeading
            eyebrow="Benefices exposants"
            title="Des benefices concrets pour votre presence"
            description="Chaque avantage est pense pour transformer la presence sur site en conversation utile, en exposition pertinente et en relation durable."
          />
          <div className="row g-4">
            {vukafrikExhibitorBenefits.map((item) => (
              <div key={item.title} className="col-xl-3 col-lg-4 col-md-6">
                <div className="vuka-commercial-mini-card h-100">
                  <span className="vuka-village-icon">
                    <i className={item.icon}></i>
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="thematic-villages" className="vuka-page-section vuka-page-section--dark pb-100">
        <div className="container">
          <SectionHeading
            eyebrow="Villages thematiques"
            title="Choisissez l'environnement sectoriel le plus pertinent"
            description="Chaque village combine visibilite, rencontres qualifiees, lectures sectorielles et opportunites de demonstration."
            align="center"
          />
          <div className="row g-4">
            {vukafrikThematicVillages.map((item) => (
              <div key={item.title} className="col-xl-4 col-lg-6">
                <ActionCard
                  title={item.title}
                  description={item.description}
                  items={[item.exhibitorFit]}
                  ctaLabel="S'inscrire dans ce village"
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
            eyebrow="Formats"
            title="Des modalites de presence adaptees a votre ambition"
            description="Sans afficher de pricing a ce stade, la page clarifie deja les principaux formats de participation."
          />
          <div className="row g-4">
            {vukafrikExhibitorOpportunityFormats.map((item) => (
              <div key={item.name} className="col-xl-3 col-lg-4 col-md-6">
                <div className="vuka-commercial-mini-card h-100">
                  <h3>{item.name}</h3>
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
            eyebrow="Parcours exposant"
            title="Un chemin simple de la demande a la presence sur site"
            description="Le parcours est pense pour rester clair, fluide et professionnel."
          />
          <div className="row g-4">
            {vukafrikExhibitorJourney.map((item, index) => (
              <div key={item} className="col-xl-2 col-lg-4 col-md-6">
                <JourneyStep index={index + 1} text={item} />
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
                title="Demande d'inscription exposant"
                description="Soumettez votre interet exposant et selectionnez le village thematique correspondant le mieux a votre organisation, produit, service ou initiative."
                items={[
                  "Visibilite et demonstration",
                  "Rencontres partenaires et investisseurs",
                  "Orientation vers le bon environnement sectoriel",
                ]}
              />
            </div>
            <div className="col-xl-8">
              <div id="exhibitor-registration" className="vuka-form-shell">
                <span className="vuka-card-eyebrow">Inscription exposant</span>
                <StakeholderForm
                  config={exhibitorRegistrationForm}
                  sourcePage="/exhibitors-opportunities"
                  submitLabel="Soumettre l'inscription exposant"
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
            <h2>Valorisez votre innovation, votre solution ou votre organisation a VUK&apos;AFRIK 2026.</h2>
            <div className="vuka-page-hero__actions">
              <Link className="td-btn td-left-right" href="#exhibitor-registration">
                <span className="mr10 td-text d-inline-block mr-5">S&apos;inscrire comme exposant</span>
              </Link>
              <Link className="td-btn td-btn-3-border td-left-right" href="/contact">
                <span className="mr10 td-text d-inline-block mr-5">Contacter l&apos;equipe</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CorePageLayout>
  );
};

export default ExhibitorsOpportunitiesPage;
