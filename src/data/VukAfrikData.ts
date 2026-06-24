import { StaticImageData } from "next/image";

import heroSlideOne from "@/assets/img/hero/hero-3/slider.jpg";
import heroSlideTwo from "@/assets/img/hero/hero-3/slider-2.jpg";
import heroSlideThree from "@/assets/img/hero/hero-3/slider-3.jpg";

export const vukafrikEvent = {
  name: "VUK'AFRIK 2026",
  subtitle: "Foire de l'Innovation et de l'Entrepreneuriat",
  theme:
    "Innovation, entrepreneuriat et transformation economique : construire les nouvelles dynamiques de croissance africaines",
  dates: "25-27 aout 2026",
  venue: "Pullman Hotel, Kinshasa",
  venueHref:
    "https://www.google.com/maps/place/Pullman+Kinshasa+Grand+H%C3%B4tel/@-4.3712512,15.2993792,12z/data=!4m9!3m8!1s0x1a6a33d0686a8c59:0xa716fe90bc2e9cc8!5m2!4m1!1i2!8m2!3d-4.312448!4d15.27344!16s%2Fg%2F1224nhpv?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D",
  country: "Democratic Republic of Congo",
  city: "Kinshasa",
  organiser: "Congolese Computer Community (CCC)",
  shortDescription:
    "Initiee depuis Kinshasa, VUK'AFRIK connecte les initiatives locales aux opportunites regionales a travers un Sommet strategique, une foire multisectorielle ouverte, des villages thematiques et des espaces de networking.",
  positioningLine:
    "La rencontre regionale qui connecte innovation, business, investissement et transformation economique depuis Kinshasa.",
  ctaLabel: "S'inscrire",
  ctaLink: "/register",
  secondaryCtaLabel: "Devenir sponsor",
  secondaryCtaLink: "/sponsors-partners#sponsor-inquiry",
  overviewId: "overview",
  programmeId: "programme",
  speakersId: "speakers-preview",
  partnersId: "partners",
  villagesId: "villages",
  venueId: "venue",
  contacts: {
    generalEmail: "info@congocs.org",
    partnershipsEmail: "partners@congocs.org",
    phoneLabel: "+243 89 847 0448",
    phoneHref: "tel:+243898470448",
    whatsappHref: "https://wa.me/243898470448",
    office: [
      "Maison de l'Entrepreneuriat",
      "Av. St Christophe",
      "Limete, Kinshasa",
    ],
  },
  socialLinks: [
    { label: "LinkedIn", href: "/contact", icon: "fa-brands fa-linkedin" },
    { label: "Instagram", href: "/contact", icon: "fa-brands fa-instagram" },
    {
      label: "WhatsApp",
      href: "https://wa.me/243898470448",
      icon: "fa-brands fa-whatsapp",
    },
  ],
} as const;

export const vukafrikHeroSlides: {
  id: number;
  bg_img: StaticImageData;
  sub_title: string;
  title: string;
  kicker: string;
}[] = [
  {
    id: 1,
    bg_img: heroSlideOne,
    sub_title:
      "La rencontre regionale qui connecte investissement, business, innovation et transformation economique depuis Kinshasa.",
    title: "VUK'AFRIK 2026",
    kicker: "Foire de l'Innovation et de l'Entrepreneuriat",
  },
  {
    id: 2,
    bg_img: heroSlideTwo,
    sub_title:
      "Un cadre structure pour rapprocher institutions, secteur prive, investisseurs, startups, PME, medias et acteurs de l'innovation.",
    title: "Connecter les initiatives congolaises aux opportunites regionales",
    kicker: "Kinshasa | 25-27 aout 2026",
  },
  {
    id: 3,
    bg_img: heroSlideThree,
    sub_title:
      "Sommet strategique, foire multisectorielle, villages thematiques et rencontres business sur trois jours.",
    title:
      "Un rendez-vous concu pour donner de la visibilite aux secteurs, aux talents et aux partenariats",
    kicker: "Pullman Hotel, Kinshasa",
  },
];
