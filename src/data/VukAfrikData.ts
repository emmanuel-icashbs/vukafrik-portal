import { paths_holder } from "./MenuData";

export const vukafrik_event_data = {
  name: "VUK'AFRIK 2026",
  subtitle: "Foire de l'Innovation et de l'Entrepreneuriat",
  theme:
    "Innovation, entrepreneuriat et transformation economique : construire les nouvelles dynamiques de croissance africaines",
  dates: "25-27 aout 2026",
  venue: "Pullman Hotel, Kinshasa",
  venueHref:
    "https://www.google.com/maps/place/Pullman+Kinshasa+Grand+H%C3%B4tel/@-4.3712512,15.2993792,12z/data=!4m9!3m8!1s0x1a6a33d0686a8c59:0xa716fe90bc2e9cc8!5m2!4m1!1i2!8m2!3d-4.312448!4d15.27344!16s%2Fg%2F1224nhpv?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D",
  venueEmbedHref:
    "https://www.google.com/maps?q=Pullman%20Kinshasa%20Grand%20Hotel,-4.312448,15.27344&z=14&output=embed",
  country: "Democratic Republic of Congo",
  city: "Kinshasa",
  organiser: "Congolese Computer Community (CCC)",
  shortDescription:
    "Initiee depuis Kinshasa, VUK'AFRIK connecte les initiatives locales aux opportunites regionales a travers un Sommet strategique, une foire multisectorielle ouverte, des villages thematiques et des espaces de networking.",
  positioningLine:
    "La rencontre regionale qui connecte innovation, business, investissement et transformation economique depuis Kinshasa.",
  infos: [
    {
      label: "Notre Vision",
      description:
        "Devenir la plateforme africaine de référence autour de l'innovation, de l'entrepreneuriat, du business, de l'investissement et de la transformation économique. En favorisant les connexions entre les écosystèmes congolais, régionaux et africains, la plateforme contribue à stimuler les opportunités économiques, les collaborations stratégiques et les nouvelles dynamiques de croissance",
    },
    {
      label: "Notre Mission",
      description:
          "Créer un cadre structuré de dialogue, de collaboration et de visibilité afin de renforcer les connexions entre innovation, entrepreneuriat, investissement, institutions et marchés, tout en contribuant au développement des écosystèmes économiques et entrepreneuriaux en RDC et en Afrique. ",
    },
    {
      label: "Nos Pilliers",
      description:
          "Initiee depuis Kinshasa, VUK'AFRIK connecte les initiatives locales aux opportunites regionales a travers un Sommet strategique, une foire multisectorielle ouverte, des villages thematiques et des espaces de networking.",
    },
  ],
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
    {
      label: "LinkedIn",
      href: paths_holder.contact.link,
      icon: "fa-brands fa-linkedin",
    },
    {
      label: "Instagram",
      href: paths_holder.contact.link,
      icon: "fa-brands fa-instagram",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/243898470448",
      icon: "fa-brands fa-whatsapp",
    },
  ],
  copyright:
    "© 2026 VUK'AFRIK. Tous droits réservés. Powered by Congolese Computer Community.",
  keywords: [
    "VUK'AFRIK 2026",
    "Conférence d'affaires",
    "Innovation et entrepreneuriat",
    "Rencontre des dirigeants",
    "Opportunités d'investissement",
    "Réseautage professionnel",
    "Espace d'apprentissage et de développement",
  ],
} as const;
