import StakeholderPage from "@/components/vukafrik/pages/StakeholderPage";
import { attendeeRegistrationForm } from "@/data/vukafrik-forms";
import { vukafrikEvent } from "@/data/vukafrik-content";

const hero = {
  eyebrow: "Inscription",
  title: "Inscription",
  subtitle: attendeeRegistrationForm.intro,
  meta: [vukafrikEvent.dates, vukafrikEvent.venue, vukafrikEvent.organiser],
  actions: [
    { label: "Voir le programme", href: "/program", variant: "secondary" as const },
    { label: "Contacter l'equipe", href: "/contact", variant: "primary" as const },
  ],
};

const RegisterPage = () => {
  return (
    <StakeholderPage
      hero={hero}
      formConfig={attendeeRegistrationForm}
      sourcePage="/register"
      submitLabel="Soumettre l'inscription"
      asideCards={[
        {
          eyebrow: "Profils attendus",
          title: "Concu pour une participation strategique et pratique",
          copy:
            "VUK'AFRIK 2026 accueille institutions, investisseurs, entreprises, entrepreneurs, startups, PME, medias et acteurs d'ecosysteme.",
          bullets: [
            "Acces au Strategic Summit et au dialogue de haut niveau",
            "Innovation showcase et villages thematiques",
            "Interactions business et dynamique de networking",
          ],
        },
        {
          eyebrow: "Repere evenement",
          title: `${vukafrikEvent.name} a Kinshasa`,
          copy:
            "Une plateforme regionale dediee a l'innovation, a l'entrepreneuriat et a la transformation economique, avec un ancrage fort a Kinshasa.",
          bullets: [
            vukafrikEvent.subtitle,
            vukafrikEvent.dates,
            vukafrikEvent.venue,
          ],
        },
        {
          eyebrow: "Besoin d'aide ?",
          title: "L'equipe de coordination peut vous orienter",
          copy:
            "Si vous hesitez sur le parcours de participation le plus pertinent, contactez l'equipe VUK'AFRIK et nous vous orienterons.",
          links: [
            {
              label: vukafrikEvent.contacts.generalEmail,
              href: `mailto:${vukafrikEvent.contacts.generalEmail}`,
            },
            {
              label: vukafrikEvent.contacts.phoneLabel,
              href: vukafrikEvent.contacts.phoneHref,
            },
          ],
        },
      ]}
    />
  );
};

export default RegisterPage;
