import StakeholderPage from "@/components/vukafrik/pages/StakeholderPage";
import { volunteerSignupForm } from "@/data/vukafrik-forms";
import { vukafrikEvent } from "@/data/vukafrik-content";

const hero = {
  eyebrow: "Volontariat",
  title: "Devenir volontaire",
  subtitle:
    "VUK'AFRIK mobilisera une equipe de volontaires pour accompagner l'accueil, l'orientation, la coordination des espaces, l'appui aux intervenants, le soutien media et l'experience des participants.",
  meta: [vukafrikEvent.dates, vukafrikEvent.venue],
  actions: [
    { label: "Decouvrir VUK'AFRIK", href: "/about", variant: "secondary" as const },
    { label: "Contacter l'equipe", href: "/contact", variant: "primary" as const },
  ],
};

const VolunteerPage = () => {
  return (
    <StakeholderPage
      hero={hero}
      formConfig={volunteerSignupForm}
      sourcePage="/volunteer"
      submitLabel="Soumettre la candidature"
      asideCards={[
        {
          eyebrow: "Impact volontaire",
          title: "Contribuez a une experience evenementielle utile et bien coordonnee",
          copy:
            "Le volontariat permet de contribuer a un evenement regional tout en participant de pres a son organisation et a son rythme sur site.",
          bullets: [
            "Contribuer a un evenement regional",
            "Developper son reseau",
            "Acquerir une experience evenementielle",
          ],
        },
        {
          eyebrow: "Ce que nous recherchons",
          title: "Energie, fiabilite et professionnalisme",
          copy:
            "Nous recherchons des volontaires capables d'accompagner les participants, de communiquer clairement et de bien representer l'evenement.",
          links: [
            { label: "En savoir plus sur l'evenement", href: "/about" },
            { label: "Contacter l'equipe", href: "/contact" },
          ],
        },
      ]}
    />
  );
};

export default VolunteerPage;
