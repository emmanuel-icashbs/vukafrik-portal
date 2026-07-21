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
  title: "À propos de cet événement",
  sub_title: "Pourquoi " + vukafrik_event_data.name + "?",
  presentation1:
    "VUK'AFRIK est bien plus qu'un événement. C'est la plateforme nationale où se rencontrent innovation, entrepreneuriat, investissement et politiques publiques pour accélérer la transformation économique de la République Démocratique du Congo.",
  presentation2:
    "VUK'AFRIK réunit, en un même lieu, les acteurs qui façonnent l'avenir économique de la RDC. Entre Sommet Stratégique, exposition multisectorielle, villages thématiques, conférences, hackathons, ateliers et rencontres d'affaires, chaque espace est conçu pour favoriser l'innovation, stimuler les investissements et créer des collaborations durables.",
  meetup_people: "Rencontre plus de 3 000 personnes en présentiel",
  connect_with: "Entrez en contact avec les leaders du secteur",
  about_vukafrik_title: cta_data.about_vukafrik.title,
  about_vukafrik_href: cta_data.about_vukafrik.href,
  call_us_title: "Appelez-nous",
  call_us_phone: vukafrik_event_data.contacts.phoneLabel,
};
const info_section_title = "CE QUI NOUS REND UNIQUE";

const breadcrumb_data: {
  title: string;
  sub_title: string;
} = {
  title: "À propos de nous",
  sub_title: "À propos",
};

const about_home_one = {
  title:
    "VUK'AFRIK crée l'espace où les idées, les talents et les investissements se rencontrent pour bâtir l'économie de demain.",
  sub_title: "A Propos de cette prémiere Edition",
  info1: "3 000+ Participants en présentiel attendus",
  info2: "Connecter les acteurs de l'écosysteme",
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
