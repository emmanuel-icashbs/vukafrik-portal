import { paths_holder } from "./MenuData";

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

const become_exhibitor_link = `${paths_holder.exhibitions.list.link}#exhibitor_form`;
export const cta_data: CtaDataType = {
  register: {
    title: paths_holder.register.title,
    href: paths_holder.register.link,
  },
  reserve_stand: {
    title: "Réserver votre stand",
    href: become_exhibitor_link,
  },
  about_vukafrik: {
    title: "En savoir plus",
    href: paths_holder.about.link,
  },
  become_sponsor: {
    title: "Devenir sponsor",
    href: `${paths_holder.sponsors.link}#sponsor_form`,
  },
  become_exhibitor: {
    title: "S'inscrire comme exposant",
    href: become_exhibitor_link,
  },
  become_speaker: {
    title: "Proposer une intervention",
    href: `${paths_holder.speakers.list.link}#team_form`,
  },
  become_journalist: {
    title: "Accreditation media",
    href: `${paths_holder.medias_accreditation.link}#media_form`,
  },
  become_volonteer: {
    title: "Volontariat",
    href: `${paths_holder.volunteer.link}#volunteer_form`,
  },
};
