import StakeholderPage from "@/components/vukafrik/pages/StakeholderPage";
import { speakerApplicationForm } from "@/data/vukafrik-forms";
import { vukafrikEvent } from "@/data/vukafrik-content";

const hero = {
  eyebrow: "Candidatures speakers",
  title: "Candidature speaker",
  subtitle: speakerApplicationForm.intro,
  meta: [vukafrikEvent.dates, vukafrikEvent.venue],
  actions: [
    { label: "Voir le programme", href: "/program", variant: "secondary" as const },
    { label: "Contacter l'equipe", href: "/contact", variant: "primary" as const },
  ],
};

const SpeakerApplicationPage = () => {
  return (
    <StakeholderPage
      hero={hero}
      formConfig={speakerApplicationForm}
      sourcePage="/speaker-application"
      submitLabel="Soumettre la candidature"
      asideCards={[
        {
          eyebrow: "Profil speaker",
          title: "Des voix strategiques, expertes et influentes",
          copy:
            "Nous recherchons des keynote speakers, panelistes, moderateurs, facilitateurs et voix d'ecosysteme capables d'apporter de la substance, de l'experience et de la pertinence.",
          bullets: [
            "Perspective institutionnelle et lecture des politiques publiques",
            "Experience entrepreneuriale et operationnelle",
            "Expertise investissement, marche et secteurs",
          ],
        },
        {
          eyebrow: "Alignement programme",
          title: "Des sessions pensees pour les leaders business et innovation",
          copy:
            "Les candidatures doivent s'aligner avec le sommet strategique, les villages thematiques, les innovation showcases et les espaces de dialogue de l'evenement.",
          links: [
            { label: "Voir le programme", href: "/program" },
            { label: "Voir les speakers", href: "/speakers" },
          ],
        },
        {
          eyebrow: "Contact direct",
          title: "Besoin de partager plus de contexte ?",
          copy:
            "Si votre profil merite un echange plus cible, contactez directement l'equipe et nous vous orienterons vers la prochaine etape.",
          links: [
            { label: vukafrikEvent.contacts.generalEmail, href: `mailto:${vukafrikEvent.contacts.generalEmail}` },
            { label: "Contacter l'equipe", href: "/contact" },
          ],
        },
      ]}
    />
  );
};

export default SpeakerApplicationPage;
