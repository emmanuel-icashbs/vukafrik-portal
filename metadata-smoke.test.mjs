import assert from "node:assert/strict";

// Run against a running production build: node metadata-smoke.test.mjs
// Set SEO_TEST_URL to test a deployed preview instead of localhost.
const base = process.env.SEO_TEST_URL || "http://localhost:3100";
const routes = ["/", "/about", "/events", "/speakers", "/exhibitions", "/event-venue", "/register", "/sponsors", "/volunteer", "/media-accreditation", "/contact", "/faq", "/gallery", "/blog", "/exhibitions-details", "/pricing", "/login", "/product", "/product-details", "/cart", "/checkout", "/wishlist", "/home-two", "/home-three", "/home-four", "/home-five", "/home-six", "/events/1", "/events/2", "/speakers/1", "/speakers/2", "/product-details/1"];
const images = new Set();
const titles = new Map();
for (const route of routes.filter(route => route !== "/home-three")) {
  const response = await fetch(new URL(route, base), { headers: { "user-agent": "WhatsApp/2.24" } });
  assert.equal(response.status, 200, route);
  const html = await response.text();
  const head = html.split("</head>")[0];
  const meta = (key) => {
    const tags = [...head.matchAll(/<meta\s[^>]*>/g)].map(([tag]) => tag)
      .filter(tag => tag.includes(`name="${key}"`) || tag.includes(`property="${key}"`));
    assert.equal(tags.length, 1, `${route}: exactly one ${key} in initial head`);
    const content = tags[0].match(/content="([^"]*)"/)?.[1];
    assert.ok(content, `${route}: nonempty ${key}`);
    return content;
  };
  const title = head.match(/<title>(.*?)<\/title>/)?.[1];
  const canonical = head.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(new URL(canonical).href, `https://vukafrik.org${route}`, `${route}: canonical`);
  assert.ok(title && !title.includes("Evente"), `${route}: branded title`);
  assert.equal(meta("og:title"), title);
  assert.equal(meta("twitter:title"), title);
  assert.equal(meta("og:description"), meta("description"));
  assert.equal(meta("twitter:description"), meta("description"));
  assert.equal(new URL(meta("og:url")).href, `https://vukafrik.org${route}`);
  assert.equal(meta("og:locale"), "fr_CD");
  assert.equal(meta("twitter:card"), "summary_large_image");
  assert.equal(meta("og:image:width"), "1200");
  assert.equal(meta("og:image:height"), "630");
  assert.equal(meta("og:image"), meta("twitter:image"));
  images.add(meta("og:image"));
  titles.set(route, title);
  assert.match(html, /<html[^>]*lang="fr"/);
}
assert.notEqual(titles.get("/speakers/1"), titles.get("/speakers/2"));
assert.notEqual(titles.get("/events/1"), titles.get("/events/2"));
for (const image of images) {
  const url = new URL(image);
  assert.equal(url.origin, "https://vukafrik.org");
  const response = await fetch(new URL(url.pathname, base));
  assert.equal(response.status, 200, "share image is publicly accessible");
  assert.match(response.headers.get("content-type"), /^image\//);
  const bytes = Buffer.from(await response.arrayBuffer());
  assert.equal(bytes.readUInt32BE(16), 1200, "PNG width");
  assert.equal(bytes.readUInt32BE(20), 630, "PNG height");
}
for (const userAgent of ["facebookexternalhit/1.1", "LinkedInBot/1.0", "Twitterbot/1.0"]) {
  const html = await (await fetch(new URL("/speakers/1", base), { headers: { "user-agent": userAgent } })).text();
  assert.match(html.split("</head>")[0], /property="og:title" content="Docteur Emmanuel LOMAMI/);
}
console.log(`Passed: ${routes.length - 1} pages, dynamic titles, initial crawler metadata, social image and four crawler user agents.`);
