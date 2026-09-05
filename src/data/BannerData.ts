import { StaticImageData } from "next/image";
import { cta_data } from "./CtaData";

import bg_img1 from "@/assets/img/hero/hero-3/slider.jpg";
import bg_img2 from "@/assets/img/hero/hero-3/slider-2.jpg";
import bg_img3 from "@/assets/img/hero/hero-3/slider-3.jpg";

interface BannerDataType {
  id: number;
  bg_img: StaticImageData;
  sub_title: string;
  title: string;
  action: { title: string; href: string };
}

const banner_data: BannerDataType[] = [
  {
    id: 1,
    bg_img: bg_img1,
    title: "Développez vos compétences avec nos ateliers pratiques.",
    sub_title: "VUK’AFRIK 2026 · ATELIERS PRATIQUES",
    action: { title: "S’inscrire comme participant", href: cta_data.register.href },
  },
  {
    id: 2,
    bg_img: bg_img2,
    title: "Sommet strategique, Foire multisectorielle, villages thematiques.",
    sub_title: "KINSHASA, 23-25 SEPTEMBRE 2026",
    action: { title: "S’inscrire comme participant", href: cta_data.register.href },
  },
  {
    id: 3,
    bg_img: bg_img3,
    sub_title: "PULLMAN HOTEL, KINSHASA",
    title:
      "Construire aujourd'hui l'économie congolaise de demain.",
    action: { title: "S’inscrire comme exposant", href: cta_data.become_exhibitor.href },
  },
];

const setting = {
  slidesPerView: 1,
  speed: 1500,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  navigation: {
    nextEl: ".td-hero-3-next",
    prevEl: ".td-hero-3-prev",
  },
};

export { banner_data, setting };
