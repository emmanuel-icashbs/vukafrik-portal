import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getNewsUpdateBySlug, getVukafrikRouteByHref, vukafrikEvent } from "@/data/vukafrik-content";

const DEFAULT_SITE_URL = "https://www.congocs.org";
const DEFAULT_OG_IMAGE = "/opengraph-image";

type VukafrikSeoConfig = {
  title: string;
  description: string;
};

const vukafrikSeoMap: Record<string, VukafrikSeoConfig> = {
  "/": {
    title: "VUK'AFRIK 2026 | Innovation, Entrepreneurship & Business in Africa",
    description:
      "VUK'AFRIK 2026 is a premium innovation and entrepreneurship event in Kinshasa connecting institutions, investors, startups, SMEs, corporate leaders and ecosystem builders around business, investment and economic transformation.",
  },
  "/about": {
    title: "About VUK'AFRIK | Innovation, Entrepreneurship & Economic Transformation",
    description:
      "Discover VUK'AFRIK 2026, a strategic African platform connecting innovation, entrepreneurship, business and investment in Kinshasa.",
  },
  "/program": {
    title: "Program | VUK'AFRIK 2026",
    description:
      "Explore the VUK'AFRIK 2026 programme across strategic dialogue, thematic villages, innovation showcases, business meetings and networking.",
  },
  "/speakers": {
    title: "Speakers | VUK'AFRIK 2026",
    description:
      "Meet the institutional leaders, investors, entrepreneurs and ecosystem voices shaping the VUK'AFRIK 2026 speaker experience.",
  },
  "/register": {
    title: "Register | VUK'AFRIK 2026",
    description:
      "Register for VUK'AFRIK 2026 and join institutions, investors, startups, SMEs and business leaders in Kinshasa from 25-27 August 2026.",
  },
  "/sponsors-partners": {
    title: "Sponsors & Partners | VUK'AFRIK 2026",
    description:
      "Position your organisation at VUK'AFRIK 2026 through sponsorship, institutional partnership and strategic ecosystem visibility opportunities.",
  },
  "/exhibitors-opportunities": {
    title: "Exhibitors & Opportunities | VUK'AFRIK 2026",
    description:
      "Explore exhibitor opportunities, thematic village positioning and visibility pathways for VUK'AFRIK 2026 in Kinshasa.",
  },
  "/news": {
    title: "News & Updates | VUK'AFRIK 2026",
    description:
      "Follow the latest VUK'AFRIK 2026 announcements, programme updates and launch news ahead of the event in Kinshasa.",
  },
  "/faq": {
    title: "FAQ | VUK'AFRIK 2026",
    description:
      "Find answers about registration, participation, sponsorship, exhibition, media access and venue details for VUK'AFRIK 2026.",
  },
  "/contact": {
    title: "Contact | VUK'AFRIK 2026",
    description:
      "Contact the VUK'AFRIK 2026 coordination team for participation, sponsorship, media and general event enquiries.",
  },
  "/venue-travel": {
    title: "Venue & Travel | VUK'AFRIK 2026",
    description:
      "Plan your visit to VUK'AFRIK 2026 at Pullman Hotel, Kinshasa, with venue, access and travel guidance.",
  },
  "/media-accreditation": {
    title: "Media Accreditation | VUK'AFRIK 2026",
    description:
      "Request media accreditation for VUK'AFRIK 2026 and prepare your event coverage, interviews and storytelling plan.",
  },
  "/volunteer": {
    title: "Volunteer | VUK'AFRIK 2026",
    description:
      "Apply as a volunteer for VUK'AFRIK 2026 and support a premium innovation and business event experience in Kinshasa.",
  },
  "/speaker-application": {
    title: "Apply as Speaker | VUK'AFRIK 2026",
    description:
      "Submit your speaker application for VUK'AFRIK 2026 and contribute expert insight on innovation, entrepreneurship and economic transformation.",
  },
};

export const getVukafrikSiteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;

export const getVukafrikAbsoluteUrl = (path = "/") =>
  new URL(path, getVukafrikSiteUrl()).toString();

export const getRequiredVukafrikRoute = (href: string) => {
  const route = getVukafrikRouteByHref(href);

  if (!route) {
    notFound();
  }

  return route;
};

const buildSharedMetadata = ({
  path,
  title,
  description,
  image = DEFAULT_OG_IMAGE,
}: {
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: vukafrikEvent.name,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: `${vukafrikEvent.name} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
});

export const createVukafrikMetadata = (href: string): Metadata => {
  const route = getRequiredVukafrikRoute(href);
  const seo = vukafrikSeoMap[href] || {
    title: `${route.title} | ${vukafrikEvent.name}`,
    description: route.description,
  };

  return buildSharedMetadata({
    path: href,
    title: seo.title,
    description: seo.description,
  });
};

export const createNewsMetadata = (slug: string): Metadata => {
  const article = getNewsUpdateBySlug(slug);

  if (!article) {
    return createVukafrikMetadata("/news");
  }

  return buildSharedMetadata({
    path: `/news/${slug}`,
    title: `${article.title} | ${vukafrikEvent.name}`,
    description: article.excerpt,
  });
};

export const getVukafrikEventStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: vukafrikEvent.name,
  description: vukafrikEvent.shortDescription,
  startDate: "2026-08-25",
  endDate: "2026-08-27",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Pullman Hotel, Kinshasa",
    address: {
      "@type": "PostalAddress",
      addressLocality: vukafrikEvent.city,
      addressCountry: "CD",
    },
  },
  organizer: {
    "@type": "Organization",
    name: vukafrikEvent.organiser,
    email: vukafrikEvent.contacts.generalEmail,
    url: getVukafrikSiteUrl(),
  },
  image: [getVukafrikAbsoluteUrl(DEFAULT_OG_IMAGE)],
  url: getVukafrikAbsoluteUrl("/"),
});
