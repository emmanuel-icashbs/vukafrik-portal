# Social previews and page metadata

The production origin is `https://vukafrik.org`. Edit shared defaults and French page copy in `src/lib/metadata.ts`. Each rendered page exports a complete card so Next.js nested metadata replacement cannot drop the default image. Speaker, event and product detail pages derive their metadata from the same local records used by the page content. Redirect-only routes continue to share the destination homepage; they do not have independent cards.

The root layout supplies the metadata base, French document language, favicon and fallback card. Do not add a manual description tag to the layout: it would duplicate the route description. Demo and commerce routes retain their existing behaviour; this change does not remove them or change indexing rules.

## Share artwork

`public/images/vukafrik-social-2026.png` is the 1200 × 630 shared preview image, adapted from the supplied campaign visual with the built-in image generation tool. Dates and venue come from current site information. The image was fitted to the exact delivery dimensions after generation.

Generation prompt:

> Adapt the provided VUK’AFRIK artwork into a landscape social preview card at 1200 by 630 pixels. Preserve logo design and navy/gold/orange branding and Africa collage identity. Simplify for thumbnail legibility. Exact text: VUK’AFRIK 2026; Innovation & entrepreneuriat; 23–25 septembre 2026; Pullman Hotel, Kinshasa. Retain Congolese Computer Community organiser identity if space allows. Omit the patronage header and long paragraphs. Generous safe margins. No invented sponsors or claims. Save finished project image.

When changing dates, update page copy and artwork together. Use a new image filename for revised artwork and update the helper to reduce stale image-cache issues.

## Verification

Build and start the production app on port 3100, then run `node metadata-smoke.test.mjs`. The check requests the initial HTML using social crawler user agents, checks complete cards across 32 routes, distinct record titles and the public PNG dimensions. `SEO_TEST_URL` can target a deployed preview instead.

After deployment, repeat against production and manually paste homepage, registration and speaker links into WhatsApp, Facebook and LinkedIn. Verify actual image crops and refreshed previews. Hosting must allow unauthenticated crawler requests to pages and `/images/vukafrik-social-2026.png`; local verification cannot establish production access or platform cache state.
