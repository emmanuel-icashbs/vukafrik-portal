# VUK'AFRIK Launch Checklist

- Routes checked: `/`, `/about`, `/program`, `/speakers`, `/register`, `/sponsors-partners`, `/exhibitors-opportunities`, `/news`, `/faq`, `/contact`, `/venue-travel`, `/media-accreditation`, `/volunteer`, `/speaker-application`
- SEO checked: page metadata, canonical paths, Open Graph, Twitter card metadata, JSON-LD event schema
- Social preview checked: branded Open Graph image generated from `src/app/opengraph-image.tsx`
- Favicon checked: VUK'AFRIK app icons served from `src/app/icon.svg` and `src/app/apple-icon.svg`
- Crawl files checked: `robots.ts` and `sitemap.ts` configured for canonical microsite routes
- Forms checked: validation, consent, loading, success/error states, placeholder payload shape retained for future backend integration
- Accessibility checked: mobile menu labels, close button semantics, iframe titles, visible form labels, descriptive links
- Responsive QA checked: homepage hero preserved, compact inner hero preserved, compact footer preserved, no major route-specific layout regressions found during build pass
- Backend note: form submissions still use placeholder client-side handling and need real API wiring before production launch
- Content/assets note: final real speaker profiles, sponsor logos, press assets and any production domain-specific preview image replacement can be added without structural changes
- Production domain note: set `NEXT_PUBLIC_SITE_URL` in the deployment environment so canonical URLs, Open Graph URLs and sitemap host resolve to the live domain
