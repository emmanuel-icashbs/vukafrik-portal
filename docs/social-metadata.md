# Social previews and page metadata

The production origin is `https://vukafrik.org`. Edit shared defaults and French page copy in `src/lib/metadata.ts`. Each rendered page exports a complete card so Next.js nested metadata replacement cannot drop the default image. Speaker, event and product detail pages derive their metadata from the same local records used by the page content. Redirect-only routes continue to share the destination homepage; they do not have independent cards.

The root layout supplies the metadata base, French document language, favicon and fallback card. Do not add a manual description tag to the layout: it would duplicate the route description.

## Indexing and structured data

`src/lib/indexing.ts` lists public content routes. The sitemap adds existing speaker and event records and excludes event URLs that redirect to the homepage fireside-chat section. Demo, account and commerce pages are `noindex, follow` and remain accessible. They remain crawlable in robots.txt so crawlers can read `noindex`. `/home-three` permanently redirects to `/`; legacy fireside-chat redirects are preserved. Page canonicals use the production origin and exclude tracking query parameters.

The homepage includes linked Event and Organization JSON-LD built from event data. Dates are date-only because there is no confirmed overall opening/closing time in the central event record. The venue address includes known city and country only. No ticket prices, availability, street address or external organiser website are invented. Validate against Google's Rich Results Test after deployment; eligibility depends on Google's supported markets and other requirements, and markup does not guarantee an enhanced result.

Missing or malformed event and speaker IDs return 404. Public pages have a primary heading. Registration and exhibition forms have local Suspense boundaries so surrounding page content remains in server HTML. Media and volunteer FAQs render their content in initial HTML.

## Share artwork

`public/images/vukafrik-social-2026.png` is the 1200 × 630 shared preview image, adapted from the supplied campaign visual with the built-in image generation tool. Dates and venue come from current site information. The image was fitted to the exact delivery dimensions after generation.

Generation prompt:

> Adapt the provided VUK’AFRIK artwork into a landscape social preview card at 1200 by 630 pixels. Preserve logo design and navy/gold/orange branding and Africa collage identity. Simplify for thumbnail legibility. Exact text: VUK’AFRIK 2026; Innovation & entrepreneuriat; 23–25 septembre 2026; Pullman Hotel, Kinshasa. Retain Congolese Computer Community organiser identity if space allows. Omit the patronage header and long paragraphs. Generous safe margins. No invented sponsors or claims. Save finished project image.

When changing dates, update page copy and artwork together. Use a new image filename for revised artwork and update the helper to reduce stale image-cache issues.

## Verification

Build and start the production app on port 3100, then run `node metadata-smoke.test.mjs` and `node indexing-smoke.test.mjs`. The checks request initial HTML using crawler user agents, check complete cards across 31 rendered routes, distinct record titles, public PNG dimensions, every sitemap URL, canonical URLs, noindex rules, 404 status codes, the permanent homepage redirect, primary headings and Event JSON-LD. `SEO_TEST_URL` can target a deployed preview instead.

After deployment, repeat against production and manually paste homepage, registration and speaker links into WhatsApp, Facebook and LinkedIn. Verify actual image crops and refreshed previews. Hosting must allow unauthenticated crawler requests to pages and `/images/vukafrik-social-2026.png`; local verification cannot establish production access or platform cache state.
