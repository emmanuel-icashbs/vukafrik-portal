import type { MetadataRoute } from "next";

import { newsUpdates, vukafrikSiteMap } from "@/data/vukafrik-content";
import { getVukafrikAbsoluteUrl } from "@/lib/vukafrik-route";

const canonicalRoutes = [
  "/",
  "/about",
  "/program",
  "/speakers",
  "/register",
  "/sponsors-partners",
  "/exhibitors-opportunities",
  "/news",
  "/faq",
  "/contact",
  "/venue-travel",
  "/media-accreditation",
  "/volunteer",
  "/speaker-application",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routeEntries = vukafrikSiteMap
    .filter((route) => canonicalRoutes.includes(route.href))
    .map((route) => ({
      url: getVukafrikAbsoluteUrl(route.href),
      lastModified: new Date("2026-05-30"),
      changeFrequency: route.href === "/" ? "weekly" : "monthly",
      priority: route.href === "/" ? 1 : 0.8,
    })) satisfies MetadataRoute.Sitemap;

  const newsEntries = newsUpdates.map((item) => ({
    url: getVukafrikAbsoluteUrl(`/news/${item.slug}`),
    lastModified: new Date("2026-05-30"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routeEntries, ...newsEntries];
}
