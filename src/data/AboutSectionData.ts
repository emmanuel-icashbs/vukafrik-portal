import { StaticImageData } from "next/image";

import about_thumb from "@/assets/img/about/about-3/thumb.png";
import { cta_data } from "./CtaData";
import { vukafrik_event_data } from "./VukAfrikData";

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
