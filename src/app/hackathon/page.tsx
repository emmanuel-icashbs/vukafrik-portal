import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Breadcrumb from "@/components/common/Breadcrumb";
import HackatonTeamForm from "@/components/forms/HackatonTeamForm";
import { getPageMetadata } from "@/lib/metadata";
import internalStyles from "@/components/common/InternalPage.module.css";

export const metadata = getPageMetadata("/hackathon");

export default function HackathonPage() {
  return (
    <Wrapper>
      <HeaderThree />
      <main className={internalStyles.main}>
        <Breadcrumb title="Inscription au Hackathon VUK’AFRIK 2026" sub_title="Hackathon" />
        <section className="tg-login-area black-bg text-white" aria-labelledby="hackathon-heading">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 id="hackathon-heading" className="text-white mb-20">Inscrire mon équipe</h2>
                <p className="text-white mb-30">Inscrivez votre équipe au Hackathon VUK’AFRIK 2026, du 23 au 25 septembre au Pullman Hôtel, à Kinshasa. Renseignez le nom de votre équipe et les coordonnées de son responsable pour permettre à l’organisation de vous contacter.</p>
                <HackatonTeamForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterOne />
    </Wrapper>
  );
}
