import { StaticImageData } from "next/image";

import about_thumb1 from "@/assets/img/about/about-details/thumb.jpg";
import about_thumb2 from "@/assets/img/about/about-details/thumb-2.jpg";
import about_thumb3 from "@/assets/img/about/about-details/thumb-3.jpg";
import shape_1 from "@/assets/img/about/about-details/shape-2.png";
import shape_2 from "@/assets/img/about/about-details/shape.png";

import about_thumb from "@/assets/img/about/about-3/thumb.png";
import { cta_data } from "./CtaData";
import { vukafrik_event_data } from "./VukAfrikData";

import about_thumb4 from "@/assets/img/about/thumb.jpg";
import bg_img1 from "@/assets/img/about/bg.jpg";
import bg_img2 from "@/assets/img/about/flower.png";

interface AboutSectinDataType {
  about_thumb: StaticImageData;
  title: string;
  sub_title: string;
  presentation1: string;
  presentation2: string;
  meetup_people: string;
  connect_with: string;
  about_vukafrik_title: string;
  about_vukafrik_href: string;
  call_us_title: string;
  call_us_phone: string;
}

export const about_section_data: AboutSectinDataType = {
  about_thumb: about_thumb,
  title: "À propos de cette rencontre",
  sub_title: "Pourquoi participer à " + vukafrik_event_data.name + " ?",
  presentation1:
    "VUK'AFRIK reunit institutions publiques, secteur prive, investisseurs, startups, PME, corporate, medias et acteurs de l'innovation autour d'un objectif clair : creer des connexions utiles entre les initiatives congolaises, les marches, les partenaires et les opportunites regionales.",
  presentation2:
    "La manifestation combine un Sommet strategique et une foire multisectorielle ouverte. Elle donne de la place aux prises de parole de haut niveau, aux demonstrations, aux pitchs, aux villages thematiques et aux rencontres qui peuvent faire avancer des projets.",
  meetup_people: "Rencontre plus de 6 000 personnes en présentiel",
  connect_with: "Entrez en contact avec les leaders du secteur",
  about_vukafrik_title: cta_data.about_vukafrik.title,
  about_vukafrik_href: cta_data.about_vukafrik.href,
  call_us_title: "Appelez-nous",
  call_us_phone: vukafrik_event_data.contacts.phoneLabel,
};
const info_section_title = "En savoir plus sur nous";

const breadcrumb_data: {
  title: string;
  sub_title: string;
} = {
  title: "À propos de nous",
  sub_title: "À propos",
};

const about_home_one = {
  title:
    "Welcome to Evente, The Original Business & Cultural Entertainment Venue Get Ready to Informative Knowledge Share Skills.",
  sub_title: "About This Event",
  info1: "6,000+ people’s In Person Meet-up",
  info2: "Connect with Industry Leaders",
  info3: "Sessions on Knowledge Sharing",
  videoLink: "https://www.youtube.com/watch?v=TfU0qjuZkJ4",
};

export {
  info_section_title,
  breadcrumb_data,
  about_thumb1,
  about_thumb2,
  about_thumb3,
  shape_1,
  shape_2,
  about_thumb4,
  bg_img1,
  bg_img2,
  about_home_one,
};
