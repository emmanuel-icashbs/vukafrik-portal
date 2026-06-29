type CtaItemType = {
  title: string;
  href: string;
};
interface CtaDataType {
  register: CtaItemType;
  reserve_stand: CtaItemType;
  about_vukafrik: CtaItemType;
  become_sponsor: CtaItemType;
  become_exhibitor: CtaItemType;
  become_speaker: CtaItemType;
  become_journalist: CtaItemType;
  become_volonteer: CtaItemType;
}
export const cta_data: CtaDataType = {
  register: {
    title: "S'inscrire",
    href: "/register",
  },
  reserve_stand: {
    title: "Réserver votre stand",
    href: "/exhibitions#exhibitions_form",
  },
  about_vukafrik: {
    title: "En savoir plus",
    href: "/about",
  },
  become_sponsor: {
    title: "Devenir sponsor",
    href: "/sponsors#sponsor_form",
  },
  become_exhibitor: {
    title: "S'inscrire comme exposant",
    href: "/exhibitions#exhibitor_form",
  },
  become_speaker: {
    title: "Proposer une intervention",
    href: "/team#team_form",
  },
  become_journalist: {
    title: "Accreditation media",
    href: "/media-accreditation#media_form",
  },
  become_volonteer: {
    title: "Volontariat",
    href: "/volonteer#volonteer_form",
  },
};
