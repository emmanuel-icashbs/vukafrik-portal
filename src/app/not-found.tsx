import Link from "next/link";

import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = {
  ...createVukafrikMetadata("/news"),
  title: "404 | VUK'AFRIK 2026",
  description: "La page demandee sur le microsite VUK'AFRIK 2026 est introuvable.",
};

const NotFoundPage = () => {
  return (
    <Wrapper>
      <CorePageLayout>
        <CorePageHero
          data={{
            title: "Page introuvable",
            subtitle:
              "La page demandee n&apos;est plus disponible ou a ete deplacee. Revenez vers un parcours principal de VUK&apos;AFRIK 2026.",
            breadcrumbs: [
              { label: "Accueil", href: "/" },
              { label: "404" },
            ],
            actions: [
              { label: "Retour a l'accueil", href: "/", variant: "primary" },
              { label: "S'inscrire", href: "/register", variant: "secondary" },
            ],
          }}
        />

        <section className="vuka-page-section pb-140">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9">
                <div className="vuka-info-card text-center">
                  <h2 className="mb-20">La destination demandee n&apos;a pas ete trouvee</h2>
                  <p className="mb-30">
                    Vous pouvez reprendre la navigation depuis l&apos;accueil, consulter le programme
                    ou revenir vers les principaux parcours de participation.
                  </p>
                  <div className="vuka-page-hero__actions">
                    <Link className="td-btn td-left-right" href="/">
                      <span className="mr10 td-text d-inline-block mr-5">Accueil</span>
                    </Link>
                    <Link className="td-btn td-btn-3-border td-left-right" href="/program">
                      <span className="mr10 td-text d-inline-block mr-5">Programme</span>
                    </Link>
                    <Link className="td-btn td-btn-3-border td-left-right" href="/register">
                      <span className="mr10 td-text d-inline-block mr-5">S&apos;inscrire</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CorePageLayout>
    </Wrapper>
  );
};

export default NotFoundPage;
