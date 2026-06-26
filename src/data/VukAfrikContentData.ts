import { StaticImageData } from "next/image";

import aboutThumb from "@/assets/img/about/about-3/thumb.png";
import ctaBg from "@/assets/img/banner/banner.jpg";
import featureBg from "@/assets/img/feature/special-features.jpg";
import footerBg from "@/assets/img/footer/bg.jpg";
import heroSlideOne from "@/assets/img/hero/hero-3/slider.jpg";
import heroSlideTwo from "@/assets/img/hero/hero-3/slider-2.jpg";
import heroSlideThree from "@/assets/img/hero/hero-3/slider-3.jpg";
import scheduleBg from "@/assets/img/schedule/schedule-4/bg.jpg";
import avatar from "@/assets/img/testimonial/avatar.png";
import avatar1 from "@/assets/img/testimonial/tes-4/avatar.jpg";
import avatar2 from "@/assets/img/testimonial/tes-4/avatar-2.jpg";
import avatar3 from "@/assets/img/testimonial/tes-4/avatar-3.jpg";

export interface VukafrikMenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}

export interface VukafrikRouteDefinition {
  id: string;
  label: string;
  href: string;
  title: string;
  eyebrow: string;
  description: string;
}

export interface VukafrikPageHeroData {
  eyebrow?: string;
  title: string;
  subtitle: string;
  meta?: string[];
  theme?: "default" | "commercial";
  backgroundImage?: StaticImageData;
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
  align?: "left" | "center";
  actions?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }[];
}

export interface VukafrikProgramSession {
  day: string;
  dayLabel: string;
  date: string;
  time: string;
  title: string;
  sessionType: string;
  location: string;
  description: string;
  speakers: string[];
  track: string;
}

export interface VukafrikSponsorCategory {
  name: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface VukafrikPartnershipOpportunity {
  title: string;
  description: string;
  category: string;
}

export interface VukafrikExhibitorBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface VukafrikExhibitorOpportunityFormat {
  name: string;
  description: string;
}

export interface VukafrikPartnerLogoPlaceholder {
  category: string;
  placeholderLabel: string;
  logoUrl?: string;
}

export const vukafrikEvent = {
  name: "VUK'AFRIK 2026",
  subtitle: "Foire de l'Innovation et de l'Entrepreneuriat",
  theme:
    "Innovation, entrepreneuriat et transformation economique : construire les nouvelles dynamiques de croissance africaines",
  dates: "25-27 aout 2026",
  venue: "Pullman Hotel, Kinshasa",
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
    { label: "LinkedIn", href: "/contact", icon: "fa-brands fa-linkedin-in" },
    { label: "Instagram", href: "/contact", icon: "fa-brands fa-instagram" },
    {
      label: "WhatsApp",
      href: "https://wa.me/243898470448",
      icon: "fa-brands fa-whatsapp",
    },
  ],
} as const;

export const vukafrikSiteMap: VukafrikRouteDefinition[] = [
  {
    id: "home",
    label: "Accueil",
    href: "/",
    title: "VUK'AFRIK 2026",
    eyebrow: "Accueil microsite",
    description:
      "La page d'accueil presente l'evenement, son positionnement et les principaux parcours de conversion pour les participants et partenaires.",
  },
  {
    id: "about",
    label: "A propos",
    href: "/about",
    title: "A propos de VUK'AFRIK",
    eyebrow: "A propos de l'evenement",
    description:
      "Une plateforme strategique qui connecte innovation, entrepreneuriat, business et investissement en Afrique.",
  },
  {
    id: "program",
    label: "Programme",
    href: "/program",
    title: "Programme",
    eyebrow: "Structure du programme",
    description:
      "Trois jours de dialogue strategique, d'expositions, de showcases innovation, de rencontres d'affaires et de networking.",
  },
  {
    id: "speakers",
    label: "Speakers",
    href: "/speakers",
    title: "Speakers",
    eyebrow: "Speaker lineup",
    description:
      "Leaders, innovators, investors, entrepreneurs and ecosystem builders shaping the future of African growth.",
  },
  {
    id: "register",
    label: "Inscription",
    href: "/register",
    title: "Inscription",
    eyebrow: "Inscription",
    description:
      "Le parcours d'inscription pour les institutions, investisseurs, entreprises, fondateurs, medias et acteurs d'ecosysteme.",
  },
  {
    id: "speaker-application",
    label: "Candidature speaker",
    href: "/speaker-application",
    title: "Proposer une intervention",
    eyebrow: "Candidatures speakers",
    description:
      "Une page dediee aux speakers, panelistes, moderateurs et facilitateurs pour soumettre leur interet de participation.",
  },
  {
    id: "sponsors-partners",
    label: "Sponsors & partenaires",
    href: "/sponsors-partners",
    title: "Sponsors & partenaires",
    eyebrow: "Sponsors & partenaires",
    description:
      "Une page dediee aux demandes de sponsoring et de partenariat pour les organisations corporate, institutionnelles, media et techniques.",
  },
  {
    id: "exhibitors-opportunities",
    label: "Exposants & opportunites",
    href: "/exhibitors-opportunities",
    title: "Exposants & opportunites",
    eyebrow: "Exposition et visibilite",
    description:
      "Une page active pour l'inscription exposant, le positionnement par village thematique et les parcours de visibilite.",
  },
  {
    id: "sponsors",
    label: "Sponsors",
    href: "/sponsors",
    title: "Sponsors & partenaires",
    eyebrow: "Sponsors & partenaires",
    description:
      "Une page orientee partenariat pour les categories sponsor, les partenaires institutionnels et les collaborateurs strategiques.",
  },
  {
    id: "exhibitors",
    label: "Exposants",
    href: "/exhibitors",
    title: "Exposants & opportunites",
    eyebrow: "Exposition et visibilite",
    description:
      "Une page preparee pour la participation exposant, la visibilite startup et les opportunites de presence.",
  },
  {
    id: "news",
    label: "Actualites",
    href: "/news",
    title: "Actualites & annonces",
    eyebrow: "Actualites",
    description:
      "Suivez les annonces et mises a jour de VUK'AFRIK 2026.",
  },
  {
    id: "faq",
    label: "FAQ",
    href: "/faq",
    title: "Questions frequentes",
    eyebrow: "FAQ",
    description:
      "Retrouvez les reponses sur l'inscription, la participation, le sponsoring, l'exposition, l'acces media et les informations pratiques.",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    title: "Contact",
    eyebrow: "Contact et demandes",
    description:
      "Contactez l'equipe de coordination VUK'AFRIK pour toute information generale, demande de partenariat, media ou participation.",
  },
  {
    id: "venue-travel",
    label: "Lieu & acces",
    href: "/venue-travel",
    title: "Lieu & acces",
    eyebrow: "Lieu et acces",
    description:
      "Retrouvez VUK'AFRIK 2026 au Pullman Hotel, Kinshasa.",
  },
  {
    id: "media-accreditation",
    label: "Accreditation media",
    href: "/media-accreditation",
    title: "Accreditation media",
    eyebrow: "Acces media",
    description:
      "Une page dediee aux journalistes, medias et createurs de contenu pour demander une accreditation.",
  },
  {
    id: "volunteer",
    label: "Volontariat",
    href: "/volunteer",
    title: "Volontariat",
    eyebrow: "Opportunite volontaire",
    description:
      "Une page active pour les candidatures volontaires avant evenement et sur site.",
  },
];

export const vukafrikNavigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "A propos", href: "/about" },
  { label: "Programme", href: "/program" },
  { label: "Speakers", href: "/speakers" },
  { label: "Sponsors", href: "/sponsors-partners" },
  { label: "Exposants", href: "/exhibitors-opportunities" },
  { label: "Contact", href: "/contact" },
] as const;

export const vukafrikMenu: VukafrikMenuItem[] = vukafrikNavigationLinks.map(
  (item, index) => ({
    id: index + 1,
    title: item.label,
    link: item.href,
    has_dropdown: false,
  }),
);

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
      "La rencontre regionale qui connecte innovation, business, investissement et transformation economique depuis Kinshasa.",
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

export const vukafrikHeroMeta = [
  {
    label: "Date",
    value: vukafrikEvent.dates,
    icon: "flaticon-calendar",
  },
  {
    label: "Lieu",
    value: vukafrikEvent.venue,
    icon: "flaticon-gps",
  },
  {
    label: "Theme",
    value: vukafrikEvent.theme,
    icon: "flaticon-request",
  },
];

export const vukafrikCountdown = {
  expiryTimestamp: new Date("2026-08-25T08:00:00"),
  title: "Le compte a rebours est lance",
  subtitle:
    "Kinshasa se prepare a accueillir trois jours de dialogue strategique, de foire multisectorielle et d'opportunites business.",
  locationLabel: `${vukafrikEvent.venue} | ${vukafrikEvent.dates}`,
  background: featureBg,
};

export const vukafrikAbout = {
  id: vukafrikEvent.overviewId,
  image: aboutThumb,
  eyebrow: "Vue d'ensemble",
  title:
    "Une plateforme regionale portee depuis Kinshasa",
  intro:
    "VUK'AFRIK reunit institutions publiques, secteur prive, investisseurs, startups, PME, corporate, medias et acteurs de l'innovation autour d'un objectif clair : creer des connexions utiles entre les initiatives congolaises, les marches, les partenaires et les opportunites regionales.",
  body:
    "La manifestation combine un Sommet strategique et une foire multisectorielle ouverte. Elle donne de la place aux prises de parole de haut niveau, aux demonstrations, aux pitchs, aux villages thematiques et aux rencontres qui peuvent faire avancer des projets.",
  dimensions: [
    {
      title: "Sommet strategique",
      description:
        "Un espace de dialogue public-prive reunissant decideurs, regulateurs, investisseurs, institutions financieres et leaders d'ecosysteme.",
      icon: "flaticon-speaker",
    },
    {
      title: "Foire multisectorielle",
      description:
        "Un espace ouvert d'exposition, de demonstration, de pitch, de showcase, de networking et d'innovation appliquee.",
      icon: "flaticon-teamwork-2",
    },
  ],
  formats: [
    "Sommet strategique",
    "Foire multisectorielle",
    "Villages thematiques",
    "Pitchs & showcases",
    "Rencontres business",
    "Networking",
  ],
};

export const vukafrikProgramme = {
  id: vukafrikEvent.programmeId,
  background: scheduleBg,
  tabs: [
    {
      id: 1,
      dayLabel: "Jour 1",
      title: "25 aout 2026",
      summary:
        "Dialogues institutionnels, keynotes, panels de haut niveau et networking executif.",
      sessions: [
        {
          time: "09:00 - 10:30",
          title: "Sommet strategique et cadrage d'ouverture",
          description:
            "Une ouverture consacree aux enjeux de croissance, de competitivite et de transformation economique en Afrique.",
          meta: "Dialogue de haut niveau",
        },
        {
          time: "11:00 - 13:00",
          title: "Keynotes et panels institutionnels",
          description:
            "Des prises de parole et echanges reunissant institutions, entreprises, investisseurs et acteurs d'appui.",
          meta: "Vision et gouvernance",
        },
      ],
    },
    {
      id: 2,
      dayLabel: "Jour 2",
      title: "26 aout 2026",
      summary:
        "Villages thematiques, expositions, ateliers, demonstrations, pitchs et rencontres business.",
      sessions: [
        {
          time: "09:30 - 12:00",
          title: "Villages thematiques et ateliers sectoriels",
          description:
            "Des parcours sectoriels penses pour mettre en valeur les initiatives, les solutions et les echanges entre professionnels.",
          meta: "Visibilite sectorielle",
        },
        {
          time: "14:00 - 17:00",
          title: "Pitch sessions et showcases",
          description:
            "Des formats courts pour presenter des projets, attirer l'attention des partenaires et ouvrir des discussions concretes.",
          meta: "Business et exposition",
        },
      ],
    },
    {
      id: 3,
      dayLabel: "Jour 3",
      title: "27 aout 2026",
      summary:
        "Startup spotlight, restitution des travaux, rencontres investisseurs, collaborations et perspectives post-evenement.",
      sessions: [
        {
          time: "09:00 - 11:30",
          title: "Startup spotlight et rencontres d'affaires",
          description:
            "Une sequence orientee vers les opportunites de croissance, les mises en relation et les suites a donner apres l'evenement.",
          meta: "Opportunites et connexions",
        },
        {
          time: "12:00 - 14:00",
          title: "Cloture, engagements et prochaines etapes",
          description:
            "Une cloture centree sur les collaborations a poursuivre, les enseignements a retenir et les perspectives a ouvrir.",
          meta: "Cloture strategique",
        },
      ],
    },
  ],
};

export const vukafrikTextSlider = [
  "Innovation",
  "Entrepreneuriat",
  "Investissement",
  "Dialogue public-prive",
  "Transformation economique",
  "Visibilite sectorielle",
  "Kinshasa 2026",
];

export const vukafrikEventStats = [
  {
    value: "5,000+",
    label: "Participants attendus",
  },
  {
    value: "150+",
    label: "Startups & exposants",
  },
  {
    value: "25+",
    label: "Institutions & partenaires",
  },
  {
    value: "8+",
    label: "Villages thematiques",
  },
  {
    value: "20+",
    label: "Panels & ateliers",
  },
  {
    value: "Plusieurs",
    label: "Delegations africaines attendues",
  },
];

export const vukafrikSpeakersPreview = {
  id: vukafrikEvent.speakersId,
  eyebrow: "Speakers",
  title:
    "Des voix attendues autour de l'innovation, de l'investissement et de la transformation economique",
  description:
    "La programmation reunira decideurs publics, dirigeants d'entreprises, investisseurs, experts, entrepreneurs, regulateurs, formateurs et leaders d'ecosysteme.",
  ctaLabel: "Proposer une intervention",
  ctaLink: "/speakers",
};

export const vukafrikSpeakersPlaceholder = [
  {
    name: "Intervenant a confirmer",
    role: "Thematique a confirmer",
    organisation: "Institution / organisation",
    image: avatar1,
    bio:
      "Une intervention attendue sur les trajectoires de croissance, les conditions d'innovation et les enjeux de transformation economique.",
    category: "Keynotes",
    socialLinks: [
      { label: "Programme", href: "/program" },
      { label: "Proposer une intervention", href: "/speaker-application" },
    ],
  },
  {
    name: "Intervenant a confirmer",
    role: "Thematique a confirmer",
    organisation: "Institution / organisation",
    image: avatar2,
    bio:
      "Un profil destine a nourrir les echanges autour des politiques publiques, de l'investissement et des priorites sectorielles.",
    category: "Panels",
    socialLinks: [
      { label: "Programme", href: "/program" },
      { label: "Proposer une intervention", href: "/speaker-application" },
    ],
  },
  {
    name: "Intervenant a confirmer",
    role: "Thematique a confirmer",
    organisation: "Institution / organisation",
    image: avatar3,
    bio:
      "Une conversation attendue autour des signaux de marche, des opportunites d'investissement et des perspectives de partenariat.",
    category: "Fireside chats",
    socialLinks: [
      { label: "Programme", href: "/program" },
      { label: "Proposer une intervention", href: "/speaker-application" },
    ],
  },
  {
    name: "Intervenant a confirmer",
    role: "Thematique a confirmer",
    organisation: "Institution / organisation",
    image: avatar,
    bio:
      "Un format prevu pour partager des outils, des retours d'experience et des pistes d'action applicables.",
    category: "Ateliers",
    socialLinks: [
      { label: "Programme", href: "/program" },
      { label: "Proposer une intervention", href: "/speaker-application" },
    ],
  },
];

export const vukafrikThematicVillages = [
  {
    title: "Agriculture & Agro-transformation",
    description:
      "Un espace pour l'agritech, la transformation, les chaines de valeur alimentaires et les solutions liees a la production.",
    exhibitorFit:
      "Pour les startups agritech, cooperatives, entreprises de transformation alimentaire, projets d'innovation rurale et acteurs des chaines de valeur agricoles.",
    icon: "flaticon-surprise",
    ctaHref: "/exhibitors-opportunities#exhibitor-registration",
  },
  {
    title: "Finance, Fintech & Inclusion financiere",
    description:
      "Un village pour les banques, fintechs, services de paiement, finance digitale et inclusion financiere.",
    exhibitorFit:
      "Pour les banques, fintechs, acteurs du mobile money, plateformes de paiement, solutions d'inclusion financiere et services d'investissement.",
    icon: "flaticon-request",
    ctaHref: "/exhibitors-opportunities#exhibitor-registration",
  },
  {
    title: "Hi-Tech, Digital & Technologies",
    description:
      "Un espace dedie aux plateformes, logiciels, solutions numeriques, intelligence artificielle et transformation digitale.",
    exhibitorFit:
      "Pour les entreprises logicielles, solutions IA, plateformes digitales, startups tech, prestataires IT et partenaires de transformation.",
    icon: "flaticon-speaker",
    ctaHref: "/exhibitors-opportunities#exhibitor-registration",
  },
  {
    title: "Industrie & Transformation locale",
    description:
      "Une vitrine pour la production, la transformation locale, les chaines de valeur industrielles et les savoir-faire de terrain.",
    exhibitorFit:
      "Pour les industriels, projets manufacturiers, entreprises de transformation locale, solutions de production et acteurs des chaines de valeur.",
    icon: "flaticon-teamwork-2",
    ctaHref: "/exhibitors-opportunities#exhibitor-registration",
  },
  {
    title: "Industries creatives & Culture",
    description:
      "Un environnement pour la mode, le design, l'audiovisuel, les medias et les initiatives culturelles a fort potentiel.",
    exhibitorFit:
      "Pour les marques de mode, studios de creation, medias, producteurs audiovisuels, createurs digitaux et entrepreneurs culturels.",
    icon: "flaticon-surprise",
    ctaHref: "/exhibitors-opportunities#exhibitor-registration",
  },
  {
    title: "Ecologie & Environnement",
    description:
      "Un espace pour les solutions liees a l'environnement, a la ville durable, a l'energie et a la gestion responsable des ressources.",
    exhibitorFit:
      "Pour les porteurs de solutions vertes, entreprises engagees, projets climat et acteurs de la transition environnementale.",
    icon: "flaticon-teamwork-2",
    ctaHref: "/exhibitors-opportunities#exhibitor-registration",
  },
  {
    title: "Startup, Entrepreneuriat & PME",
    description:
      "Un espace pour les startups, PME, structures d'accompagnement, incubateurs et talents entrepreneuriaux.",
    exhibitorFit:
      "Pour les jeunes entreprises, incubateurs, structures de soutien, programmes d'employabilite et entrepreneurs en croissance.",
    icon: "flaticon-request",
    ctaHref: "/exhibitors-opportunities#exhibitor-registration",
  },
  {
    title: "Institutionnel",
    description:
      "Un espace de representation pour les institutions, regulateurs, agences de developpement et partenaires publics.",
    exhibitorFit:
      "Pour les institutions publiques, structures d'appui, regulateurs et organismes qui accompagnent les dynamiques economiques.",
    icon: "flaticon-speaker",
    ctaHref: "/exhibitors-opportunities#exhibitor-registration",
  },
];

export const vukafrikCta = {
  eyebrow: "Participation",
  title: "Prenez part a VUK'AFRIK 2026",
  description:
    "Associez votre organisation a une plateforme qui rassemble decideurs, entrepreneurs, investisseurs, institutions et acteurs de l'innovation autour des nouvelles dynamiques de croissance africaines.",
  actions: [
    { label: "S'inscrire", link: "/register" },
    {
      label: "S'inscrire comme exposant",
      link: "/exhibitors-opportunities#exhibitor-registration",
    },
    { label: "Devenir sponsor", link: "/sponsors-partners#sponsor-inquiry" },
  ],
  background: ctaBg,
};

export const vukafrikPartners = {
  id: vukafrikEvent.partnersId,
  eyebrow: "Sponsors & partenaires",
  title:
    "Des opportunites de visibilite pour les organisations qui veulent prendre position",
  description:
    "Sponsors, partenaires institutionnels, medias et acteurs techniques peuvent s'associer a VUK'AFRIK a travers des dispositifs de presence, de prise de parole et de visibilite sectorielle.",
  ctaLabel: "Devenir sponsor",
  ctaLink: "/sponsors-partners#sponsor-inquiry",
};

export const vukafrikSponsorCategories: VukafrikSponsorCategory[] = [
  {
    name: "Founding Partner",
    description:
      "Le partenaire de reference associe au lancement et au rayonnement general de l'evenement.",
    benefits: [
      "Association prioritaire a l'identite de l'evenement",
      "Visibilite forte sur les supports strategiques",
      "Acces privilegie aux espaces de dialogue et de relation",
    ],
    ctaLabel: "Soumettre une demande",
    ctaHref: "/sponsors-partners#sponsor-inquiry",
  },
  {
    name: "Strategic Partner",
    description:
      "Un partenaire engage sur la dimension institutionnelle, corporate ou ecosystemique du rendez-vous.",
    benefits: [
      "Presence sur les temps forts institutionnels",
      "Visibilite aupres des decideurs et parties prenantes",
      "Opportunites de networking qualifie",
    ],
    ctaLabel: "Soumettre une demande",
    ctaHref: "/sponsors-partners#sponsor-inquiry",
  },
  {
    name: "Innovation Partner",
    description:
      "Un partenaire relie aux technologies, aux plateformes et aux solutions qui transforment les secteurs.",
    benefits: [
      "Association aux vitrines innovation",
      "Ancrage dans les conversations sur la transformation",
      "Visibilite sectorielle ciblee",
    ],
    ctaLabel: "Soumettre une demande",
    ctaHref: "/sponsors-partners#sponsor-inquiry",
  },
  {
    name: "Sector Partner",
    description:
      "Un partenaire associe a un village thematique ou a une priorite sectorielle.",
    benefits: [
      "Presence dans un environnement sectoriel pertinent",
      "Connexion avec les publics professionnels du village",
      "Opportunites de valorisation terrain",
    ],
    ctaLabel: "Soumettre une demande",
    ctaHref: "/sponsors-partners#sponsor-inquiry",
  },
  {
    name: "Media Partner",
    description:
      "Partenaire de communication, de presse, de diffusion ou de visibilite digitale.",
    benefits: [
      "Presence dans la narration publique de l'evenement",
      "Visibilite sur les canaux medias et sociaux",
      "Association a la couverture editoriale",
    ],
    ctaLabel: "Soumettre une demande",
    ctaHref: "/sponsors-partners#sponsor-inquiry",
  },
  {
    name: "Technical Partner",
    description:
      "Un partenaire lie a l'execution, a la production, a la technologie ou a l'experience evenementielle.",
    benefits: [
      "Association a la qualite d'execution de l'evenement",
      "Visibilite dans les environnements d'activation",
      "Relations avec les equipes et parties prenantes techniques",
    ],
    ctaLabel: "Soumettre une demande",
    ctaHref: "/sponsors-partners#sponsor-inquiry",
  },
  {
    name: "Institutional Partner",
    description:
      "Une institution publique, regulatoire ou d'appui engagee dans le dialogue strategique du rendez-vous.",
    benefits: [
      "Presence dans les espaces de dialogue public-prive",
      "Association aux enjeux de transformation economique",
      "Visibilite aupres des ecosystemes et partenaires",
    ],
    ctaLabel: "Soumettre une demande",
    ctaHref: "/sponsors-partners#sponsor-inquiry",
  },
];

export const vukafrikSponsorCategoryLabels = vukafrikSponsorCategories.map(
  (item) => item.name,
);

export const vukafrikPartnershipOpportunities: VukafrikPartnershipOpportunity[] = [
  {
    title: "Strategic Summit",
    description: "Associer votre marque aux temps forts de dialogue, de vision et de leadership d'opinion.",
    category: "Institutionnel",
  },
  {
    title: "Villages thematiques",
    description: "Positionner votre organisation dans un secteur, une audience et un espace de demonstration identifies.",
    category: "Sectoriel",
  },
  {
    title: "Startup showcase",
    description: "Donner de la visibilite a votre soutien aux talents, aux solutions emergentes et aux initiatives en croissance.",
    category: "Innovation",
  },
  {
    title: "Hackathon",
    description: "S'associer a une dynamique de creation, d'experimentation et de mobilisation de talents.",
    category: "Talent & innovation",
  },
  {
    title: "Business lounge",
    description: "Creer des connexions business et institutionnelles dans un espace de rencontres ciblees.",
    category: "Business",
  },
  {
    title: "Visibilite media & digitale",
    description: "Renforcer votre presence a travers les contenus, les relais editoriaux et les surfaces digitales de l'evenement.",
    category: "Visibilite",
  },
];

export const vukafrikPartnerLogoPlaceholders: VukafrikPartnerLogoPlaceholder[] = [
  { category: "Founding Partner", placeholderLabel: "Partner logo coming soon" },
  { category: "Strategic Partners", placeholderLabel: "Partner logo coming soon" },
  { category: "Innovation Partners", placeholderLabel: "Partner logo coming soon" },
  { category: "Sector Partners", placeholderLabel: "Partner logo coming soon" },
  { category: "Media Partners", placeholderLabel: "Partner logo coming soon" },
  { category: "Technical Partners", placeholderLabel: "Partner logo coming soon" },
];

export const vukafrikExhibitorBenefits: VukafrikExhibitorBenefit[] = [
  {
    title: "Presenter vos solutions",
    description: "Exposez produits, services, innovations et initiatives dans un cadre lisible et professionnel.",
    icon: "flaticon-request",
  },
  {
    title: "Rencontrer des partenaires",
    description: "Echangez avec institutions, investisseurs, entreprises, medias et structures d'appui.",
    icon: "flaticon-speaker",
  },
  {
    title: "Acceder a un public qualifie",
    description: "Donnez de la visibilite a votre offre aupres de visiteurs et interlocuteurs cibles.",
    icon: "flaticon-teamwork-2",
  },
  {
    title: "Participer aux dynamiques sectorielles",
    description: "Inscrivez votre presence dans le village thematique le plus pertinent pour votre activite.",
    icon: "flaticon-request",
  },
  {
    title: "Generer des opportunites business",
    description: "Ouvrez des discussions utiles autour des partenariats, des marches et des perspectives de croissance.",
    icon: "flaticon-surprise",
  },
];

export const vukafrikExhibitorOpportunityFormats: VukafrikExhibitorOpportunityFormat[] = [
  {
    name: "Stand standard",
    description: "Un format de presence simple pour presenter votre offre et accueillir les visiteurs.",
  },
  {
    name: "Stand premium",
    description: "Une presence renforcee pour les organisations qui souhaitent plus d'impact visuel et relationnel.",
  },
  {
    name: "Startup showcase",
    description: "Un format concu pour les startups et initiatives en recherche de visibilite.",
  },
  {
    name: "Espace demonstration",
    description: "Un espace adapte aux demonstrations, experiences et activations autour de votre solution.",
  },
  {
    name: "Stand institutionnel",
    description: "Un format de representation pour institutions, programmes, agences et structures d'appui.",
  },
  {
    name: "Participation village",
    description: "Une integration dans un environnement thematique coherent avec votre secteur et vos priorites.",
  },
];

export const vukafrikSponsorValuePoints = [
  "Donnez de la visibilite a votre organisation dans un cadre institutionnel et business.",
  "Accedez a un ecosysteme multisectoriel reuni autour de l'innovation et de la croissance.",
  "Prenez part a des conversations strategiques avec les bons interlocuteurs.",
  "Associez votre marque a des secteurs, des villages et des temps forts clairement identifies.",
];

export const vukafrikSponsorBenefitGroups = [
  {
    title: "Visibilite de marque",
    items: [
      "Visibilite logo sur la communication evenementielle",
      "Presence sur le site et les supports digitaux selectionnes",
      "Opportunites de branding sur site",
      "Reconnaissance sur les reseaux sociaux",
      "Visibilite media lorsque pertinent",
    ],
  },
  {
    title: "Acces strategique",
    items: [
      "Acces aux espaces de dialogue public-prive",
      "Networking avec institutions et secteur prive",
      "Rencontres executives",
      "Participation aux espaces lounge lorsque pertinent",
      "Connexion aux ecosystemes startups et PME",
    ],
  },
  {
    title: "Thought leadership",
    items: [
      "Participation keynote ou panel lorsque pertinent",
      "Association a des villages thematiques",
      "Presence dans les discussions sectorielles",
      "Visibilite autour de l'innovation et de la transformation economique",
    ],
  },
  {
    title: "Impact ecosystemique",
    items: [
      "Soutien a l'innovation jeunesse",
      "Contribution au developpement entrepreneurial",
      "Appui aux connexions business locales et regionales",
      "Participation a une dynamique de construction ecosystemique durable",
    ],
  },
];

export const vukafrikExhibitorJourney = [
  "Soumettre votre demande",
  "Choisir le village thematique adapte",
  "Valider les modalites de participation",
  "Preparer votre espace",
  "Exposer a VUK'AFRIK 2026",
];

export const vukafrikTestimonials = {
  eyebrow: "Voix de l'ecosysteme",
  title:
    "Quelques regards sur la valeur que le rendez-vous peut creer",
  items: [
    {
      quote:
        "Un evenement comme celui-ci peut donner davantage de visibilite aux initiatives locales tout en ouvrant des conversations utiles avec des partenaires regionaux.",
      name: "Voix entrepreneuriale",
      role: "Ecosysteme startup",
      image: avatar1,
    },
    {
      quote:
        "La force du format tient dans sa capacite a rapprocher institutions, secteur prive et ecosystemes autour de sujets tres concrets.",
      name: "Voix institutionnelle",
      role: "Dialogue public-prive",
      image: avatar2,
    },
    {
      quote:
        "Quand les secteurs sont bien structures et les interlocuteurs bien identifies, il devient plus simple de detecter les bonnes opportunites.",
      name: "Voix investisseur",
      role: "Capital & partenariats",
      image: avatar3,
    },
  ],
};

export const vukafrikFaqPlaceholders = [
  {
    question: "Qui peut participer a VUK'AFRIK ?",
    answer:
      "L'evenement s'adresse aux institutions, investisseurs, entreprises, startups, PME, entrepreneurs, medias et acteurs d'ecosysteme.",
  },
  {
    question: "Comment s'inscrire ?",
    answer:
      "Le formulaire d'inscription est deja disponible sur la page dediee.",
  },
  {
    question: "Mon organisation peut-elle sponsoriser l'evenement ?",
    answer: `Oui. Les demandes de sponsoring et de partenariat peuvent etre adressees a ${vukafrikEvent.contacts.partnershipsEmail}.`,
  },
  {
    question: "Comment les exposants peuvent-ils participer ?",
    answer:
      "Les exposants peuvent soumettre leur interet via le formulaire dedie aux exposants et opportunites.",
  },
  {
    question: "L'accreditation media est-elle disponible ?",
    answer:
      "Oui. Les organisations media et createurs peuvent deja utiliser le formulaire d'accreditation dedie.",
  },
  {
    question: "Ou se tient l'evenement ?",
    answer: `${vukafrikEvent.venue}.`,
  },
];

export const vukafrikVenue = {
  id: vukafrikEvent.venueId,
  eyebrow: "Lieu & contact",
  title: "Pullman Hotel, Kinshasa",
  description:
    "Le Pullman Hotel accueillera VUK'AFRIK 2026 dans un cadre adapte aux rencontres institutionnelles, aux expositions et aux temps forts business.",
  bullets: [
    "Un lieu central pour accueillir conferences, expositions et rendez-vous professionnels",
    "Un cadre coherent avec les publics institutionnels, corporate et investisseurs attendus",
    "Un environnement propice aux villages thematiques, aux showcases et aux rencontres ciblees",
  ],
  mapEmbed: "https://www.google.com/maps?q=Pullman+Hotel+Kinshasa&output=embed",
  contactCtaLabel: "Contacter l'equipe",
  contactCtaLink: "/contact",
};

export const vukafrikFormTypes = [
  "attendee registration",
  "speaker application",
  "exhibitor registration",
  "sponsor inquiry",
  "media accreditation",
  "volunteer signup",
  "newsletter signup",
];

export const vukafrikProgramPlaceholder = [
  {
    day: "Day 1",
    time: "09:00",
    title: "Opening plenary",
    type: "Keynote session",
    location: "Main stage",
    description:
      "A placeholder structure for the final programme schedule, themes and speaker assignments.",
    speakers: ["To be announced"],
    track: "Leadership and strategy",
  },
  {
    day: "Day 2",
    time: "11:30",
    title: "Investment and market confidence",
    type: "Panel discussion",
    location: "Forum theatre",
    description:
      "This placeholder keeps the programme route implementation-ready while the detailed agenda is being curated.",
    speakers: ["To be announced"],
    track: "Capital and partnerships",
  },
];

export const aboutPageHero: VukafrikPageHeroData = {
  eyebrow: "A propos de la plateforme",
  title: "A propos de VUK'AFRIK",
  subtitle:
    "Une plateforme regionale dediee a l'innovation, a l'entrepreneuriat et a la transformation economique en Afrique.",
  backgroundImage: heroSlideOne,
  meta: [vukafrikEvent.dates, vukafrikEvent.venue],
  actions: [
    { label: "S'inscrire", href: "/register", variant: "primary" },
    {
      label: "Devenir sponsor",
      href: "/sponsors-partners#sponsor-inquiry",
      variant: "secondary",
    },
  ],
};

export const aboutSections = [
  {
    id: "why",
    eyebrow: "Pourquoi VUK'AFRIK",
    title:
      "Pourquoi VUK'AFRIK",
    body: [
      "En RDC, de nombreuses initiatives emergent dans le numerique, la fintech, l'agriculture, l'industrie, les services, les industries creatives et la transformation locale. Elles creent de la valeur, repondent a des besoins concrets et participent a l'evolution economique du pays.",
      "Pourtant, beaucoup restent encore peu visibles et insuffisamment connectees aux investisseurs, aux marches et aux partenaires capables d'accelerer leur croissance. VUK'AFRIK repond a ce besoin en creant un cadre de rencontre, de visibilite et de collaboration.",
    ],
  },
  {
    id: "what",
    eyebrow: "Ce que l'evenement active",
    title:
      "Un evenement qui rapproche innovation, business et investissement",
    body: [
      "Le format combine un Sommet strategique, une foire multisectorielle, des villages thematiques, des pitchs, des ateliers et des rencontres business. Chaque composante est pensee pour favoriser les echanges entre institutions, investisseurs, entrepreneurs, entreprises et acteurs de l'ecosysteme.",
    ],
  },
  {
    id: "two-dimensions",
    eyebrow: "Deux dimensions",
    title:
      "Deux dimensions complementaires pour donner du relief au rendez-vous",
    body: [
      "Le Sommet strategique porte la dimension institutionnelle, business et decisionnelle de l'evenement. La foire multisectorielle ouvre quant a elle des espaces d'exposition, de demonstration, de pitch et de mise en relation au plus pres des secteurs.",
    ],
  },
  {
    id: "ccc",
    eyebrow: "Role de la CCC",
    title:
      "Une initiative portee par la Congolese Computer Community",
    body: [
      "La Congolese Computer Community porte VUK'AFRIK dans la continuite de son engagement pour les competences numeriques, l'innovation, l'entrepreneuriat et les collaborations entre acteurs publics et prives.",
    ],
  },
];

export const aboutHighlightCards = [
  {
    title: "Connecter innovation, business et investissement",
    description:
      "Creer des passerelles utiles entre les projets, les secteurs, les partenaires et les opportunites regionales.",
    icon: "flaticon-speaker",
  },
  {
    title: "Favoriser les partenariats strategiques",
    description:
      "Rapprocher acteurs publics, secteur prive, financeurs et structures d'appui autour de perspectives concretes.",
    icon: "flaticon-teamwork-2",
  },
  {
    title: "Positionner Kinshasa comme hub regional",
    description:
      "Donner de la visibilite a une ville et a un ecosysteme capables d'accueillir des conversations a l'echelle regionale.",
    icon: "flaticon-request",
  },
];

export const programPageHero: VukafrikPageHeroData = {
  eyebrow: "Structure du programme",
  title: "Programme",
  subtitle:
    "Pendant trois jours, VUK'AFRIK combine dialogue strategique, exposition multisectorielle, ateliers, pitchs, rencontres business et networking.",
  backgroundImage: heroSlideTwo,
  meta: [vukafrikEvent.dates, vukafrikEvent.venue],
  actions: [
    { label: "S'inscrire", href: "/register", variant: "primary" },
    {
      label: "Proposer une intervention",
      href: "/speaker-application",
      variant: "secondary",
    },
  ],
};

export const programDays = [
  {
    id: "day-1",
    label: "Jour 1",
    title: "Strategic Summit",
    description:
      "Ouverture institutionnelle, keynotes, panels, fireside chats et networking executif structurent la premiere journee.",
  },
  {
    id: "day-2",
    label: "Jour 2",
    title: "Foire multisectorielle",
    description:
      "Expositions, villages thematiques, ateliers pratiques, demonstrations, pitchs et rencontres sectorielles rythment la deuxieme journee.",
  },
  {
    id: "day-3",
    label: "Jour 3",
    title: "Showcases, rencontres business & cloture",
    description:
      "Startup spotlight, restitution des travaux, rencontres investisseurs, conclusions et perspectives post-evenement occupent la derniere journee.",
  },
];

export const programSessions: VukafrikProgramSession[] = [
  {
    day: "day-1",
    dayLabel: "Day 1",
    date: "25 aout 2026",
    time: "09:00 - 09:45",
    title: "Ouverture institutionnelle",
    sessionType: "Ceremony",
    location: "Main Stage",
    description:
      "Ouverture officielle, mots de bienvenue et cadrage des priorites de la premiere edition.",
    speakers: ["Intervenants a confirmer"],
    track: "Strategic Summit",
  },
  {
    day: "day-1",
    dayLabel: "Day 1",
    date: "25 aout 2026",
    time: "10:00 - 10:45",
    title: "Keynote strategique",
    sessionType: "Keynote",
    location: "Main Stage",
    description:
      "Une prise de parole sur les conditions de croissance, l'innovation et la competitivite des ecosystemes africains.",
    speakers: ["Intervenant a confirmer"],
    track: "Sommet strategique",
  },
  {
    day: "day-1",
    dayLabel: "Day 1",
    date: "25 aout 2026",
    time: "11:15 - 12:30",
    title: "Panel : innovation, entrepreneuriat et transformation economique",
    sessionType: "Panel",
    location: "Forum Hall",
    description:
      "Un echange sur la facon dont les secteurs publics et prives peuvent accelerer la transformation economique.",
    speakers: ["Panelistes a confirmer"],
    track: "Dialogue public-prive",
  },
  {
    day: "day-1",
    dayLabel: "Day 1",
    date: "25 aout 2026",
    time: "14:00 - 14:45",
    title: "Fireside chat : construire de nouvelles dynamiques de croissance",
    sessionType: "Fireside Chat",
    location: "Leadership Lounge",
    description:
      "Une conversation resserree autour de la confiance, de la collaboration et des opportunites a structurer.",
    speakers: ["Intervenants a confirmer"],
    track: "Investissement",
  },
  {
    day: "day-1",
    dayLabel: "Day 1",
    date: "25 aout 2026",
    time: "17:00 - 18:30",
    title: "Networking executif",
    sessionType: "Networking",
    location: "Executive Salon",
    description:
      "Un format de mise en relation cible entre institutions, entreprises, investisseurs, fondateurs et partenaires.",
    speakers: ["Format accompagne"],
    track: "Strategic Summit",
  },
  {
    day: "day-2",
    dayLabel: "Day 2",
    date: "26 aout 2026",
    time: "09:00 - 09:30",
    title: "Ouverture de la foire multisectorielle",
    sessionType: "Exhibition",
    location: "Fair Pavilion",
    description:
      "Lancement du parcours exposants et des espaces de visibilite a travers les villages et les zones d'animation.",
    speakers: ["Format accompagne"],
    track: "Foire multisectorielle",
  },
  {
    day: "day-2",
    dayLabel: "Day 2",
    date: "26 aout 2026",
    time: "09:30 - 12:30",
    title: "Parcours dans les villages thematiques",
    sessionType: "Exhibition",
    location: "Village Zone",
    description:
      "Animations, rencontres et mises en avant des initiatives dans les principaux villages sectoriels.",
    speakers: ["Intervenants a confirmer"],
    track: "Villages thematiques",
  },
  {
    day: "day-2",
    dayLabel: "Day 2",
    date: "26 aout 2026",
    time: "11:00 - 13:00",
    title: "Ateliers et sessions sectorielles",
    sessionType: "Workshop",
    location: "Breakout Rooms",
    description:
      "Des formats pratiques pour partager des experiences, des outils et des modeles de collaboration.",
    speakers: ["Facilitateurs a confirmer"],
    track: "Ateliers",
  },
  {
    day: "day-2",
    dayLabel: "Day 2",
    date: "26 aout 2026",
    time: "14:00 - 15:30",
    title: "Pitchs startups et initiatives",
    sessionType: "Pitch",
    location: "Pitch Arena",
    description:
      "Une sequence de presentations courtes pour donner de la visibilite aux projets et ouvrir des discussions utiles.",
    speakers: ["Participants a confirmer"],
    track: "Pitch",
  },
  {
    day: "day-2",
    dayLabel: "Day 2",
    date: "26 aout 2026",
    time: "15:45 - 17:00",
    title: "Innovation Showcase",
    sessionType: "Exhibition",
    location: "Innovation Stage",
    description:
      "Une mise en avant de solutions, plateformes, produits et innovations appliquees aux secteurs de croissance.",
    speakers: ["Intervenants a confirmer"],
    track: "Innovation",
  },
  {
    day: "day-2",
    dayLabel: "Day 2",
    date: "26 aout 2026",
    time: "17:15 - 18:30",
    title: "Rencontres business",
    sessionType: "Networking",
    location: "Partner Lounge",
    description:
      "Un moment reserve aux mises en relation entre exposants, sponsors, investisseurs et participants.",
    speakers: ["Format accompagne"],
    track: "Business",
  },
  {
    day: "day-3",
    dayLabel: "Day 3",
    date: "27 aout 2026",
    time: "09:00 - 10:15",
    title: "Restitution des travaux et showcases",
    sessionType: "Hackathon",
    location: "Innovation Stage",
    description:
      "Presentation de travaux, pistes de solutions et resultats issus des sequences d'innovation collaborative.",
    speakers: ["Intervenants a confirmer"],
    track: "Innovation",
  },
  {
    day: "day-3",
    dayLabel: "Day 3",
    date: "27 aout 2026",
    time: "10:30 - 11:45",
    title: "Startup Spotlight",
    sessionType: "Pitch",
    location: "Spotlight Arena",
    description:
      "Une mise en lumiere de projets, PME et startups qui meritent l'attention des partenaires et investisseurs.",
    speakers: ["Intervenants a confirmer"],
    track: "Startup Spotlight",
  },
  {
    day: "day-3",
    dayLabel: "Day 3",
    date: "27 aout 2026",
    time: "12:00 - 14:00",
    title: "Rencontres investisseurs et partenaires",
    sessionType: "Networking",
    location: "Meeting Suites",
    description:
      "Des echanges plus cibles pour explorer les suites de collaboration, de financement ou de partenariat.",
    speakers: ["Format accompagne"],
    track: "Investissement",
  },
  {
    day: "day-3",
    dayLabel: "Day 3",
    date: "27 aout 2026",
    time: "14:30 - 15:45",
    title: "Sessions de collaboration sectorielle",
    sessionType: "Workshop",
    location: "Breakout Rooms",
    description:
      "Des sessions pour identifier des points de convergence, clarifier les besoins et projeter les suites a donner.",
    speakers: ["Facilitateurs a confirmer"],
    track: "Institutions & Regulators",
  },
  {
    day: "day-3",
    dayLabel: "Day 3",
    date: "27 aout 2026",
    time: "16:00 - 17:00",
    title: "Cloture et perspectives",
    sessionType: "Ceremony",
    location: "Main Stage",
    description:
      "Une cloture pour partager les principaux enseignements et ouvrir la suite des collaborations.",
    speakers: ["Intervenants a confirmer"],
    track: "Strategic Summit",
  },
];

export const speakerCategories = [
  "Tous",
  "Keynotes",
  "Panels",
  "Fireside chats",
  "Ateliers",
];

export const speakersPlaceholder = [
  {
    slug: "keynote-profile-coming-soon",
    name: "Intervenant a confirmer",
    role: "Thematique a confirmer",
    organisation: "Institution / organisation",
    category: "Keynotes",
    image: avatar1,
    sessionTitle: "Thematique a confirmer",
    bio:
      "Une intervention attendue sur les trajectoires de croissance, les conditions d'innovation et les enjeux de transformation economique.",
    socialLinks: [
      { label: "Programme", href: "/program" },
      { label: "Proposer une intervention", href: "/speaker-application" },
    ],
  },
  {
    slug: "institutional-panelist-coming-soon",
    name: "Intervenant a confirmer",
    role: "Thematique a confirmer",
    organisation: "Institution / organisation",
    category: "Panels",
    image: avatar2,
    sessionTitle: "Thematique a confirmer",
    bio:
      "Un profil destine a nourrir les echanges autour des politiques publiques, de l'investissement et des priorites sectorielles.",
    socialLinks: [
      { label: "Programme", href: "/program" },
      { label: "Proposer une intervention", href: "/speaker-application" },
    ],
  },
  {
    slug: "investor-profile-coming-soon",
    name: "Intervenant a confirmer",
    role: "Thematique a confirmer",
    organisation: "Institution / organisation",
    category: "Fireside chats",
    image: avatar3,
    sessionTitle: "Thematique a confirmer",
    bio:
      "Une conversation attendue autour des signaux de marche, des opportunites d'investissement et des perspectives de partenariat.",
    socialLinks: [
      { label: "Programme", href: "/program" },
      { label: "Proposer une intervention", href: "/speaker-application" },
    ],
  },
  {
    slug: "entrepreneur-profile-coming-soon",
    name: "Intervenant a confirmer",
    role: "Thematique a confirmer",
    organisation: "Institution / organisation",
    category: "Ateliers",
    image: avatar,
    sessionTitle: "Thematique a confirmer",
    bio:
      "Un format prevu pour partager des outils, des retours d'experience et des pistes d'action applicables.",
    socialLinks: [
      { label: "Programme", href: "/program" },
      { label: "Proposer une intervention", href: "/speaker-application" },
    ],
  },
];

export const venueDetails = {
  hero: {
    eyebrow: "Lieu & acces",
    title: "Lieu & acces",
    subtitle: "Retrouvez VUK'AFRIK 2026 au Pullman Hotel, Kinshasa.",
    backgroundImage: heroSlideThree,
    meta: [
      vukafrikEvent.venue,
      `${vukafrikEvent.city}, ${vukafrikEvent.country}`,
      vukafrikEvent.dates,
    ],
    actions: [
      { label: "Contacter l'equipe", href: "/contact", variant: "primary" },
      { label: "S'inscrire", href: "/register", variant: "secondary" },
    ],
  } satisfies VukafrikPageHeroData,
  overview:
    "Le Pullman Hotel, Kinshasa offre un cadre strategique adapte au dialogue institutionnel, au networking business et a la participation internationale.",
  accessNotes: [
    "Les informations de transfert aeroport seront confirmees prochainement.",
    "Les indications de transport local seront partagees en amont de l'evenement.",
    "Les consignes d'arrivee seront publiees a l'approche de VUK'AFRIK 2026.",
  ],
  accommodationNote:
    "Les recommandations d'hebergement et les informations hotelieres seront partagees des que les modalites seront confirmees.",
  contactSupport: [
    vukafrikEvent.contacts.generalEmail,
    vukafrikEvent.contacts.phoneLabel,
  ],
  mapEmbed: vukafrikVenue.mapEmbed,
};

export const faqGroups = [
  {
    title: "Informations generales",
    questions: [
      {
        question: "Qu'est-ce que VUK'AFRIK ?",
        answer:
          "VUK'AFRIK est une foire regionale de l'innovation et de l'entrepreneuriat organisee depuis Kinshasa. Elle combine un Sommet strategique, une foire multisectorielle, des villages thematiques et des espaces de networking.",
      },
      {
        question: "Quand et ou se tient VUK'AFRIK 2026 ?",
        answer: `${vukafrikEvent.dates} au ${vukafrikEvent.venue}.`,
      },
      {
        question: "Qui organise VUK'AFRIK ?",
        answer: `${vukafrikEvent.organiser} est la structure organisatrice de l'evenement.`,
      },
      {
        question: "Quel est le theme principal de l'evenement ?",
        answer: vukafrikEvent.theme,
      },
    ],
  },
  {
    title: "Inscription",
    questions: [
      {
        question: "Qui peut participer a VUK'AFRIK ?",
        answer:
          "L'evenement s'adresse aux institutions, entreprises, investisseurs, startups, PME, structures d'accompagnement, medias, jeunes talents, experts et professionnels interesses par l'innovation et la transformation economique.",
      },
      {
        question: "Comment puis-je m'inscrire ?",
        answer:
          "Les participants peuvent s'inscrire via le formulaire dedie sur la page Inscription afin de manifester leur interet et de preparer leur participation.",
      },
      {
        question: "Les etudiants et jeunes entrepreneurs peuvent-ils participer ?",
        answer:
          "Oui. L'evenement est concu pour accueillir une grande diversite de profils, y compris les entrepreneurs emergents et les acteurs engages aupres de la jeunesse.",
      },
      {
        question: "Une confirmation d'inscription sera-t-elle envoyee par email ?",
        answer:
          "Les modalites de confirmation seront precisees lorsque le flux final d'inscription sera completement raccorde.",
      },
    ],
  },
  {
    title: "Sponsors et exposants",
    questions: [
      {
        question: "Comment mon organisation peut-elle sponsoriser VUK'AFRIK ?",
        answer:
          "Les organisations interessees peuvent soumettre une demande via la page Sponsors. L'equipe VUK'AFRIK reprendra ensuite contact pour preciser les formes de partenariat possibles.",
      },
      {
        question: "Quelles categories de sponsor sont disponibles ?",
        answer: vukafrikSponsorCategoryLabels.join(", "),
      },
      {
        question: "Comment puis-je m'inscrire comme exposant ?",
        answer:
          "Les entreprises, startups, PME, institutions et porteurs d'initiatives peuvent remplir le formulaire exposant et choisir le village thematique le plus adapte.",
      },
      {
        question: "Les exposants peuvent-ils choisir un village thematique ?",
        answer:
          "Les details d'affectation par village seront partages lorsque les modalites finales de participation exposant seront confirmees.",
      },
    ],
  },
  {
    title: "Speakers",
    questions: [
      {
        question: "Comment candidater comme speaker ?",
        answer:
          "Les candidatures speakers peuvent etre deposees via la page dediee de candidature speaker.",
      },
      {
        question: "Quels types de sessions sont prevus ?",
        answer:
          "Le programme comprend des keynotes, panels, fireside chats, workshops, pitches, restitutions de hackathon, temps de networking et ceremonies.",
      },
      {
        question: "Les panels et fireside chats font-ils partie du programme ?",
        answer:
          "Oui. Ces deux formats sont bien integres a la structure du programme.",
      },
    ],
  },
  {
    title: "Media",
    questions: [
      {
        question: "L'accreditation media est-elle ouverte ?",
        answer:
          "Oui. Une demande d'accreditation media est prevue pour les journalistes, medias, createurs de contenu et plateformes de communication.",
      },
      {
        question: "Qui les organisations media doivent-elles contacter ?",
        answer: `Les demandes media et communication peuvent etre adressees via ${vukafrikEvent.contacts.generalEmail}.`,
      },
      {
        question: "Des supports presse seront-ils mis a disposition ?",
        answer:
          "Les supports presse et ressources associees seront partages a mesure que le dispositif media sera finalise.",
      },
    ],
  },
  {
    title: "Lieu et acces",
    questions: [
      {
        question: "Ou se situe le Pullman Hotel ?",
        answer: `${vukafrikEvent.venue}, ${vukafrikEvent.city}, ${vukafrikEvent.country}.`,
      },
      {
        question: "Des indications de transport seront-elles partagees ?",
        answer:
          "Oui. Les indications d'arrivee, d'acces et de circulation locale seront publiees a l'approche de l'evenement.",
      },
      {
        question: "L'hebergement est-il inclus ?",
        answer:
          "Les informations d'hebergement seront partagees separement lorsque les modalites auront ete confirmees.",
      },
    ],
  },
];

export const newsUpdates = [
  {
    slug: "vukafrik-2026-announced-kinshasa",
    category: "Annonce",
    date: "30 mai 2026",
    title: "VUK'AFRIK 2026 annonce a Kinshasa",
    excerpt:
      "La premiere edition de VUK'AFRIK fixe son rendez-vous a Kinshasa autour de l'innovation, de l'entrepreneuriat et de la transformation economique.",
    image: heroSlideOne,
    body: [
      "Annoncee pour sa premiere edition, VUK'AFRIK rassemblera a Kinshasa les acteurs publics et prives qui faconnent les nouvelles dynamiques de croissance africaines.",
      "Le rendez-vous s'articulera autour d'un Sommet strategique, d'une foire multisectorielle et de plusieurs espaces de mise en relation.",
    ],
  },
  {
    slug: "strategic-summit-to-open-first-edition",
    category: "Programme",
    date: "02 juin 2026",
    title: "Le Sommet strategique au coeur de la premiere edition",
    excerpt:
      "La journee d'ouverture accordera une place centrale au dialogue institutionnel, aux keynotes et aux echanges de haut niveau.",
    image: heroSlideTwo,
    body: [
      "Le premier jour donnera le ton avec des prises de parole strategiques, des panels et des conversations dediees aux priorites de croissance.",
      "Ce format doit permettre de rapprocher institutions, secteur prive, investisseurs et ecosystemes d'innovation.",
    ],
  },
  {
    slug: "thematic-villages-to-structure-the-fair",
    category: "Foire multisectorielle",
    date: "Bientot",
    title: "Les villages thematiques structureront la foire multisectorielle",
    excerpt:
      "La foire s'organisera autour de villages sectoriels pour faciliter la lecture de l'offre, des secteurs et des opportunites.",
    image: heroSlideThree,
    body: [
      "Agriculture, finance, digital, industrie, culture, environnement, entrepreneuriat et institutionnel figureront parmi les grands axes de la foire.",
      "Cette organisation doit permettre aux visiteurs et partenaires d'identifier plus rapidement les bons interlocuteurs.",
    ],
  },
  {
    slug: "sponsor-and-exhibitor-requests-open",
    category: "Participation",
    date: "Bientot",
    title: "Ouverture des demandes exposants et sponsors",
    excerpt:
      "Les organisations souhaitant devenir sponsors ou exposants pourront manifester leur interet via les parcours dedies du microsite.",
    image: heroSlideOne,
    body: [
      "Les categories de partenariat et les demandes exposants sont deja structurees pour accompagner les premiers echanges.",
      "Les parcours de participation seront progressivement enrichis au fil de la preparation de l'evenement.",
    ],
  },
  {
    slug: "startup-pitch-and-innovation-spaces-in-preparation",
    category: "Innovation",
    date: "Bientot",
    title: "Les espaces startup, pitch et innovation en preparation",
    excerpt:
      "Plusieurs formats seront dedies aux startups, aux pitchs et aux demonstrations de solutions pendant les trois jours.",
    image: heroSlideTwo,
    body: [
      "L'objectif est de donner de la visibilite aux initiatives a fort potentiel tout en favorisant les rencontres utiles avec les partenaires.",
      "Les modalites detaillees seront precisees au fur et a mesure de la consolidation du programme.",
    ],
  },
  {
    slug: "media-accreditation-opening-soon",
    category: "Media",
    date: "Bientot",
    title: "Les demandes d'accreditation media seront bientot ouvertes",
    excerpt:
      "Les medias, journalistes et createurs de contenu disposeront d'un parcours dedie pour couvrir VUK'AFRIK 2026.",
    image: heroSlideThree,
    body: [
      "Un dispositif d'accreditation media est prevu pour faciliter la couverture editoriale, les interviews et le storytelling de l'evenement.",
      "Les modalites pratiques seront partagees avec l'ouverture officielle du parcours media.",
    ],
  },
];

export const contactDetails = {
  hero: {
    eyebrow: "Parcours de contact",
    title: "Contact",
    subtitle:
      "Pour toute demande liee a la participation, aux partenariats, aux medias, aux exposants ou a l'organisation generale, contactez l'equipe VUK'AFRIK.",
    backgroundImage: heroSlideOne,
    meta: [vukafrikEvent.organiser, vukafrikEvent.city],
    actions: [
      { label: "S'inscrire", href: "/register", variant: "primary" },
      {
        label: "Devenir sponsor",
        href: "/sponsors-partners#sponsor-inquiry",
        variant: "secondary",
      },
    ],
  } satisfies VukafrikPageHeroData,
  categories: [
    {
      title: "Informations generales",
      copy:
        "Pour les demandes generales liees a l'evenement, aux parcours de participation et a la coordination pratique.",
      contact: vukafrikEvent.contacts.generalEmail,
    },
    {
      title: "Partenariats & sponsoring",
      copy:
        "Pour les demandes de sponsoring, de partenariat et les discussions de collaboration.",
      contact: vukafrikEvent.contacts.partnershipsEmail,
    },
    {
      title: "Media & communication",
      copy:
        "Pour les demandes media, les intentions de couverture et la coordination editoriale.",
      contact: vukafrikEvent.contacts.generalEmail,
    },
    {
      title: "Exposants",
      copy:
        "Pour les opportunites exposants, les villages thematiques et les modalites de participation.",
      contact: "/exhibitors-opportunities#exhibitor-registration",
    },
    {
      title: "Speakers",
      copy:
        "Pour les propositions d'intervention, la participation aux sessions et les questions liees au programme.",
      contact: "/speaker-application",
    },
    {
      title: "Volontaires",
      copy:
        "Pour les candidatures volontaires et les missions d'appui a l'evenement.",
      contact: "/volunteer",
    },
  ],
};

export const vukafrikFooter = {
  background: footerBg,
  blurb:
    "VUK'AFRIK 2026 relie initiatives locales, partenaires regionaux et opportunites de croissance a travers un Sommet strategique, une foire multisectorielle et des espaces de networking a Kinshasa.",
  quickLinks: [
    { label: "A propos", href: "/about" },
    { label: "Programme", href: "/program" },
    { label: "Speakers", href: "/speakers" },
    { label: "Lieu & acces", href: "/venue-travel" },
    { label: "FAQ", href: "/faq" },
  ],
  actionLinks: [
    { label: "S'inscrire", href: vukafrikEvent.ctaLink },
    { label: "Devenir sponsor", href: "/sponsors-partners#sponsor-inquiry" },
    {
      label: "S'inscrire comme exposant",
      href: "/exhibitors-opportunities#exhibitor-registration",
    },
    { label: "Proposer une intervention", href: "/speaker-application" },
    { label: "Accreditation media", href: "/media-accreditation" },
    { label: "Volontariat", href: "/volunteer" },
  ],
  contactLinks: [
    {
      label: vukafrikEvent.contacts.generalEmail,
      href: `mailto:${vukafrikEvent.contacts.generalEmail}`,
    },
    {
      label: vukafrikEvent.contacts.partnershipsEmail,
      href: `mailto:${vukafrikEvent.contacts.partnershipsEmail}`,
    },
    { label: vukafrikEvent.contacts.phoneLabel, href: vukafrikEvent.contacts.phoneHref },
    { label: vukafrikEvent.venue, href: "/venue-travel" },
  ],
  copyright:
    "© 2026 VUK'AFRIK. Tous droits reserves. Powered by Congolese Computer Community.",
};

export const siteContent = {
  event: vukafrikEvent,
  routes: vukafrikSiteMap,
};

export const homeContent = {
  hero: vukafrikHeroSlides,
  overview: vukafrikAbout,
  programme: vukafrikProgramme,
  stats: vukafrikEventStats,
  speakers: vukafrikSpeakersPreview,
  villages: vukafrikThematicVillages,
  sponsors: vukafrikPartners,
  venue: vukafrikVenue,
};

export const aboutContent = {
  hero: aboutPageHero,
  sections: aboutSections,
  highlights: aboutHighlightCards,
};

export const programContent = {
  hero: programPageHero,
  days: programDays,
  sessions: programSessions,
};

export const speakerContent = {
  categories: speakerCategories,
  placeholders: speakersPlaceholder,
};

export const sponsorContent = {
  categories: vukafrikSponsorCategories,
  opportunities: vukafrikPartnershipOpportunities,
  benefits: vukafrikSponsorBenefitGroups,
};

export const exhibitorContent = {
  villages: vukafrikThematicVillages,
  benefits: vukafrikExhibitorBenefits,
  journey: vukafrikExhibitorJourney,
  formats: vukafrikExhibitorOpportunityFormats,
};

export const faqContent = {
  groups: faqGroups,
  teaser: vukafrikFaqPlaceholders,
};

export const contactContent = contactDetails;
export const mediaContent = venueDetails;
export const volunteerContent = venueDetails;
export const newsContent = newsUpdates;
export const villageContent = vukafrikThematicVillages;

export const vukafrikLegacyRedirects = {
  aboutAlias: "/about",
  newsAlias: "/news",
  programAlias: "/program",
  speakersAlias: "/speakers",
  venueAlias: "/venue-travel",
  homeAlias: "/",
} as const;

export const getVukafrikRouteByHref = (href: string) =>
  vukafrikSiteMap.find((route) => route.href === href);

export const getNewsUpdateBySlug = (slug: string) =>
  newsUpdates.find((item) => item.slug === slug);
