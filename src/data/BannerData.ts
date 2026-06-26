import { StaticImageData } from "next/image";

import bg_img1 from "@/assets/img/hero/hero-3/slider.jpg";
import bg_img2 from "@/assets/img/hero/hero-3/slider-2.jpg";
import bg_img3 from "@/assets/img/hero/hero-3/slider-3.jpg";

interface BannerDataType {
  id: number;
  bg_img: StaticImageData;
  sub_title: string;
  title: string;
}

const banner_data: BannerDataType[] = [
  {
    id: 1,
    bg_img: bg_img1,
    title: "Foire de l'Innovation, Investissement et de l'Entrepreneuriat.", // , investissement et transformation economique depuis Kinshasa
    sub_title: "VUK'AFRIK 2026",
  },
  {
    id: 2,
    bg_img: bg_img2,
    title: "Connecter les initiatives congolaises aux opportunites regionales.",
    sub_title: "KINSHASA, 25-27 AOUT 2026",
  },
  {
    id: 3,
    bg_img: bg_img3,
    sub_title: "PULLMAN HOTEL, KINSHASA",
    title:
      "Sommet strategique, foire multisectorielle, villages thematiques et rencontres business sur trois jours.",
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
