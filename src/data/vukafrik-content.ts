import { StaticImageData } from "next/image";

import heroSlideOne from "@/assets/img/hero/hero-3/slider.jpg";
import heroSlideTwo from "@/assets/img/hero/hero-3/slider-2.jpg";
import heroSlideThree from "@/assets/img/hero/hero-3/slider-3.jpg";
import aboutThumb from "@/assets/img/about/about-3/thumb.png";
import featureBg from "@/assets/img/feature/special-features.jpg";
import scheduleBg from "@/assets/img/schedule/schedule-4/bg.jpg";
import ctaBg from "@/assets/img/banner/banner.jpg";
import footerBg from "@/assets/img/footer/bg.jpg";

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

export const vukafrikEvent = {
  name: "VUK'AFRIK 2026",
  subtitle: "Foire de l'Innovation et de l'Entrepreneuriat",
  dates: "25-27 August 2026",
  venue: "Pullman Hotel, Kinshasa",
  organiser: "Congolese Computer Community (CCC)",
  theme:
    "Innovation, entrepreneuriat et transformation economique : construire les nouvelles dynamiques de croissance africaines",
  ctaLabel: "Register interest",
  ctaLink: "/contact",
  overviewId: "overview",
  programmeId: "programme",
  audienceId: "audience",
  partnersId: "partners",
  venueId: "venue",
} as const;

export const vukafrikMenu: VukafrikMenuItem[] = [
  {
    id: 1,
    title: "Overview",
    link: `/#${vukafrikEvent.overviewId}`,
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Programme",
    link: `/#${vukafrikEvent.programmeId}`,
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Audience",
    link: `/#${vukafrikEvent.audienceId}`,
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Partners",
    link: `/#${vukafrikEvent.partnersId}`,
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Venue",
    link: `/#${vukafrikEvent.venueId}`,
    has_dropdown: false,
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];

export const vukafrikHeroSlides: {
  id: number;
  bg_img: StaticImageData;
  sub_title: string;
  title: string;
}[] = [
  {
    id: 1,
    bg_img: heroSlideOne,
    sub_title: `${vukafrikEvent.dates} | ${vukafrikEvent.venue}`,
    title: vukafrikEvent.name,
  },
  {
    id: 2,
    bg_img: heroSlideTwo,
    sub_title: vukafrikEvent.subtitle,
    title: "Innovation, entrepreneurship and economic transformation",
  },
  {
    id: 3,
    bg_img: heroSlideThree,
    sub_title: `Organised by ${vukafrikEvent.organiser}`,
    title: "Where founders, investors and institutions shape Africa's next growth cycle",
  },
];

export const vukafrikCountdown = {
  expiryTimestamp: new Date("2026-08-25T08:00:00"),
  title: "Save the date",
  subtitle: "Kinshasa convenes Africa's innovation ecosystem",
  locationLabel: `${vukafrikEvent.venue} | ${vukafrikEvent.dates}`,
  background: featureBg,
};

export const vukafrikAbout = {
  id: vukafrikEvent.overviewId,
  image: aboutThumb,
  eyebrow: "About VUK'AFRIK",
  title:
    "A premium event platform for entrepreneurship, investment and strategic African growth",
  intro:
    "VUK'AFRIK 2026 is designed as a short-term, high-value microsite destination for a business-facing event that connects innovators, entrepreneurs, institutions, investors and market builders around one shared ambition: unlocking practical growth.",
  body:
    "The experience combines visibility, public-private dialogue, curated encounters and sector storytelling to position Kinshasa as a serious meeting point for economic transformation and opportunity creation.",
  highlights: [
    {
      label: "3 days",
      description: "of curated dialogue, showcases and high-level networking",
      icon: "flaticon-calendar",
    },
    {
      label: "1 growth agenda",
      description: "centred on innovation, entrepreneurship and African competitiveness",
      icon: "flaticon-teamwork-2",
    },
  ],
  supportingLabel: "Organiser",
  supportingValue: vukafrikEvent.organiser,
};

export const vukafrikPillars: {
  id: number;
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    id: 1,
    icon: "flaticon-speaker",
    title: "Innovation visibility",
    desc: "Highlight high-potential ventures, sector advances and ecosystem enablers shaping Africa's next business narratives.",
  },
  {
    id: 2,
    icon: "flaticon-teamwork-2",
    title: "Entrepreneurship acceleration",
    desc: "Create a serious environment for founders, operators and support organisations to exchange ideas, methods and opportunities.",
  },
  {
    id: 3,
    icon: "flaticon-request",
    title: "Investment conversations",
    desc: "Facilitate quality encounters between entrepreneurs, investors, institutions and partners looking for scalable market pathways.",
  },
  {
    id: 4,
    icon: "flaticon-surprise",
    title: "Public-private dialogue",
    desc: "Open space for practical discussion on policy, competitiveness, digital transition and the business environment.",
  },
];

export const vukafrikProgramme = {
  id: vukafrikEvent.programmeId,
  background: scheduleBg,
  tabs: [
    {
      id: 1,
      dayLabel: "Day 01",
      title: "25 August 2026",
      sessions: [
        {
          time: "09:00 - 10:30",
          title: "Opening plenary and strategic framing",
          description:
            "Set the tone of the forum with leaders from entrepreneurship, institutions and the private sector defining the opportunity space for Africa's next growth cycle.",
          meta: "High-level dialogue",
        },
        {
          time: "11:00 - 13:00",
          title: "Innovation ecosystem spotlight",
          description:
            "Explore the realities, constraints and growth signals shaping African innovation ecosystems across digital, creative and productive sectors.",
          meta: "Sector visibility",
        },
      ],
    },
    {
      id: 2,
      dayLabel: "Day 02",
      title: "26 August 2026",
      sessions: [
        {
          time: "09:30 - 11:30",
          title: "Entrepreneurship and scale sessions",
          description:
            "Practical conversations on venture building, market readiness, support infrastructure and how ambitious businesses move from potential to traction.",
          meta: "Founder growth",
        },
        {
          time: "14:00 - 17:00",
          title: "Showcase floor and curated meetings",
          description:
            "Give entrepreneurs, innovators and partner organisations a premium environment for visibility, relationship-building and qualified introductions.",
          meta: "Business matchmaking",
        },
      ],
    },
    {
      id: 3,
      dayLabel: "Day 03",
      title: "27 August 2026",
      sessions: [
        {
          time: "09:00 - 11:00",
          title: "Investment, finance and market confidence",
          description:
            "Focus on investment appetite, bankability, partnership design and the signals needed to strengthen confidence in African growth sectors.",
          meta: "Capital and partnerships",
        },
        {
          time: "11:30 - 13:00",
          title: "Commitments and closing outlook",
          description:
            "Translate the forum into relationships, follow-up actions and a forward-looking narrative for economic transformation.",
          meta: "Closing commitments",
        },
      ],
    },
  ],
};

export const vukafrikTextSlider = [
  "Innovation",
  "Entrepreneurship",
  "Investment",
  "Public-private dialogue",
  "Economic transformation",
  "Sector visibility",
  "Kinshasa 2026",
];

export const vukafrikAudience = {
  id: vukafrikEvent.audienceId,
  eyebrow: "Who should attend",
  title: "Built for decision-makers, builders and ecosystem catalysts",
  description:
    "The microsite foundation prioritises the audiences most likely to convert: entrepreneurs, institutions, investors, corporates and support organisations seeking visibility and high-quality interactions.",
  cards: [
    {
      title: "Founders and startups",
      description:
        "Entrepreneurs looking for visibility, market access, partnerships and stronger positioning within the regional innovation conversation.",
    },
    {
      title: "Investors and financiers",
      description:
        "Capital providers, funders and banking actors interested in pipeline quality, investable sectors and practical partnership opportunities.",
    },
    {
      title: "Institutions and policy actors",
      description:
        "Public stakeholders, agencies and ecosystem stewards engaging around transformation, competitiveness and public-private coordination.",
    },
    {
      title: "Corporates and support organisations",
      description:
        "Companies, accelerators, chambers, development actors and enablers seeking relevance, credibility and business-facing ecosystem presence.",
    },
  ],
};

export const vukafrikCta = {
  eyebrow: "Participation opportunities",
  title: "Position your organisation inside the VUK'AFRIK 2026 conversation",
  description:
    "Use this Phase 1 foundation to support future conversion journeys for exhibitors, sponsors, startups, delegates and ecosystem partners without carrying template clutter into the next phases.",
  actions: [
    { label: "Register interest", link: "/contact" },
    { label: "Partnership enquiries", link: "/contact" },
  ],
  background: ctaBg,
};

export const vukafrikPartners = {
  id: vukafrikEvent.partnersId,
  eyebrow: "Partnership ecosystem",
  title: "Designed to host strategic, institutional and market-facing partners",
  description:
    "Instead of generic sponsor placeholders, the structure now prepares for premium partner storytelling, credibility building and future partner-logo rollout.",
  groups: [
    {
      title: "Institutional partners",
      description:
        "Public institutions, agencies and ecosystem bodies supporting dialogue, visibility and transformation priorities.",
    },
    {
      title: "Investment and finance",
      description:
        "Funds, financial institutions and capital partners interested in innovation-led economic growth and quality deal visibility.",
    },
    {
      title: "Technology and enterprise",
      description:
        "Corporate players, digital actors and business platforms aligning with innovation, entrepreneurship and sector modernisation.",
    },
    {
      title: "Media and ecosystem support",
      description:
        "Media, community and support organisations amplifying participation, visibility and the broader business narrative around the event.",
    },
  ],
};

export const vukafrikVenue = {
  id: vukafrikEvent.venueId,
  eyebrow: "Venue and city",
  title: "Pullman Hotel, Kinshasa",
  description:
    "A premium hospitality setting in Kinshasa suitable for executive dialogue, investor-facing meetings, curated networking and a high-quality event experience.",
  bullets: [
    "Three-day event environment built for premium business interactions",
    "Accessible setting for institutional, entrepreneurial and investment audiences",
    "Strong fit for showcases, discussion formats and relationship-building",
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Pullman+Hotel+Kinshasa&output=embed",
};

export const vukafrikFooter = {
  background: footerBg,
  blurb:
    "VUK'AFRIK 2026 is a premium African innovation and entrepreneurship event focused on visibility, partnership building and practical economic transformation dialogue.",
  quickLinks: [
    { label: "Overview", href: `/#${vukafrikEvent.overviewId}` },
    { label: "Programme", href: `/#${vukafrikEvent.programmeId}` },
    { label: "Audience", href: `/#${vukafrikEvent.audienceId}` },
    { label: "Partners", href: `/#${vukafrikEvent.partnersId}` },
    { label: "Venue", href: `/#${vukafrikEvent.venueId}` },
    { label: "Contact", href: "/contact" },
  ],
};
