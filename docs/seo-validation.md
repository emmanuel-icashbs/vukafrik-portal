# SEO validation — 7 September 2026

## Implementation checks

- Production build and TypeScript pass (existing Sass deprecation and browser-baseline warnings remain).
- Targeted ESLint passes.
- `metadata-smoke.test.mjs`: 31 rendered routes; complete initial-HTML cards for WhatsApp, Facebook, LinkedIn and Twitter; public 1200 × 630 image.
- `indexing-smoke.test.mjs`: all 88 sitemap URLs return 200 with self-canonicals and a primary heading; demo/commerce noindex; permanent duplicate-homepage redirect; missing and malformed event/speaker paths return actual 404s for browsers and crawlers; linked Event/Organization JSON-LD parses correctly.
- Events and speakers use build-time records with `generateStaticParams` and `dynamicParams = false`, preventing route-loading boundaries from turning unknown URLs into streamed 200 responses. Rebuild when adding records.

## Production mobile baseline before this deployment

[PageSpeed Insights report](https://pagespeed.web.dev/analysis/https-vukafrik-org/c59qn1vd9e?form_factor=mobile), captured 7 September 2026 at 07:36 BST, emulated Moto G Power, slow 4G, Lighthouse 13.4.1:

| Metric | Result |
| --- | --- |
| Performance | 58/100 |
| First contentful paint | 6.3 seconds |
| Largest contentful paint | 12.5 seconds |
| Total blocking time | 0 ms |
| Cumulative layout shift | 0.002 |
| Speed index | 7.6 seconds |
| Accessibility | 75/100 |
| Lighthouse SEO | 100/100 |

This is a synthetic single-run baseline, not real-user Core Web Vitals or a ranking guarantee. No field data was available. The public API returned quota exhaustion; the PageSpeed website completed successfully.

Next performance work should address render-blocking CSS (reported estimated saving 4,870 ms), unused CSS (123 KiB), hero/LCP request discovery and image delivery (198 KiB). Audit also flags unnamed controls/links, contrast and touch-target issues. These broader styling and accessibility changes are outside this indexing implementation.

## Account-dependent completion

After the Amplify deployment, rerun both smoke scripts with `SEO_TEST_URL=https://vukafrik.org`. Use Google's Rich Results Test for independent schema validation. Submit `https://vukafrik.org/sitemap.xml` in the verified Search Console property and inspect key URLs. Search Console submission requires an authenticated property owner. Actual WhatsApp/Facebook/LinkedIn app previews still need visual confirmation and may retain cached previews.
