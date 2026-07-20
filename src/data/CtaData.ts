import { exhibitor_form_area } from "./ExhibitionData";
import { media_accred_form_area } from "./MediaAccreditationData";
import { paths_holder } from "./MenuData";
import { speaker_form_area } from "./SpeakerData";
import { sponsor_form_area } from "./SponsorData";
import { volonteer_form_area } from "./VolonteerData";

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

const become_exhibitor_link = `${paths_holder.exhibitions.list.link}#${exhibitor_form_area.id}`;

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
    href: `${paths_holder.sponsors.link}#${sponsor_form_area.id}`,
  },
  become_exhibitor: {
    title: "S'inscrire comme exposant",
    href: become_exhibitor_link,
  },
  become_speaker: {
    title: "Proposer une intervention",
    href: `${paths_holder.speakers.list.link}#${speaker_form_area.id}`,
  },
  become_journalist: {
    title: "Accreditation media",
    href: `${paths_holder.medias_accreditation.link}#${media_accred_form_area.id}`,
  },
  become_volonteer: {
    title: "Volontariat",
    href: `${paths_holder.volunteer.link}#${volonteer_form_area.id}`,
  },
};
