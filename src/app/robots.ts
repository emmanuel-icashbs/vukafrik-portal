import type { MetadataRoute } from "next";

import { getVukafrikSiteUrl } from "@/lib/vukafrik-route";

const siteUrl = getVukafrikSiteUrl();

const disallowedRoutes = [
  "/cart",
  "/checkout",
  "/wishlist",
  "/product",
  "/product-details",
  "/blog",
  "/blog-details",
  "/events",
  "/events-details",
  "/events-venue",
  "/gallery",
  "/home-two",
  "/home-four",
  "/home-five",
  "/home-six",
  "/login",
  "/pricing",
  "/sponsors",
  "/exhibitors",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedRoutes,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
