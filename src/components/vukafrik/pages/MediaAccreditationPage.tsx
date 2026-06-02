import StakeholderPage from "@/components/vukafrik/pages/StakeholderPage";
import { mediaAccreditationForm } from "@/data/vukafrik-forms";
import { vukafrikEvent } from "@/data/vukafrik-content";

const hero = {
  eyebrow: "Acces media",
  title: "Accreditation media",
  subtitle:
    "Les medias, journalistes, createurs de contenu et plateformes de communication souhaitant couvrir VUK'AFRIK 2026 peuvent soumettre une demande d'accreditation.",
  meta: [vukafrikEvent.dates, vukafrikEvent.venue],
  actions: [
    { label: "Voir les actualites", href: "/news", variant: "secondary" as const },
    { label: "Contacter l'equipe", href: "/contact", variant: "primary" as const },
  ],
};

const MediaAccreditationPage = () => {
  return (
    <StakeholderPage
      hero={hero}
      formConfig={mediaAccreditationForm}
      sourcePage="/media-accreditation"
      submitLabel="Soumettre la demande media"
      asideCards={[
        {
          eyebrow: "Perimetre de couverture",
          title: "Concu pour les medias, diffuseurs et createurs",
          copy:
            "Les demandes seront examinees par l'equipe de coordination selon la capacite d'accueil et la nature de la couverture proposee.",
          bullets: [
            "Couverture editoriale de l'evenement",
            "Interviews et storytelling terrain",
            "Valorisation des secteurs et des initiatives",
          ],
        },
        {
          eyebrow: "Pertinence editoriale",
          title: "Une voie utile pour les medias traditionnels et digitaux",
          copy:
            "Journalistes, blogueurs, diffuseurs, equipes photo et video ainsi que createurs digitaux peuvent manifester leur interet via ce parcours.",
          links: [
            { label: "Voir les annonces", href: "/news" },
            { label: "Contacter le support communication", href: "/contact" },
          ],
        },
      ]}
    />
  );
};

export default MediaAccreditationPage;
