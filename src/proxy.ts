import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const exactRedirects: Record<string, string> = {
  "/blog": "/news",
  "/events": "/program",
  "/events-details": "/program",
  "/events-venue": "/venue-travel",
  "/team": "/speakers",
  "/team-details": "/speakers",
  "/home-two": "/",
  "/home-four": "/",
  "/home-five": "/",
  "/home-six": "/",
  "/cart": "/",
  "/checkout": "/",
  "/wishlist": "/",
  "/product": "/",
  "/pricing": "/sponsors-partners",
  "/login": "/register",
  "/gallery": "/news",
  "/sponsors": "/sponsors-partners",
  "/exhibitors": "/exhibitors-opportunities",
};

const prefixRedirects: Array<[string, string]> = [
  ["/blog-details", "/news"],
  ["/product-details", "/"],
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (exactRedirects[pathname]) {
    return NextResponse.redirect(new URL(exactRedirects[pathname], request.url));
  }

  const prefixMatch = prefixRedirects.find(([prefix]) => pathname.startsWith(prefix));

  if (prefixMatch) {
    return NextResponse.redirect(new URL(prefixMatch[1], request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/blog",
    "/blog-details/:path*",
    "/events",
    "/events-details",
    "/events-venue",
    "/team",
    "/team-details",
    "/home-two",
    "/home-four",
    "/home-five",
    "/home-six",
    "/cart",
    "/checkout",
    "/wishlist",
    "/product",
    "/product-details/:path*",
    "/pricing",
    "/login",
    "/gallery",
    "/sponsors",
    "/exhibitors",
  ],
};
