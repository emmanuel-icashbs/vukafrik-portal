import assert from "node:assert/strict";
const base = process.env.SEO_TEST_URL || "http://localhost:3100";
const get = (path, options = {}) => fetch(new URL(path, base), { headers: { "user-agent": "Googlebot" }, ...options });
const robots = await (await get("/robots.txt")).text();
assert.match(robots, /Sitemap: https:\/\/vukafrik.org\/sitemap.xml/);
assert.match(robots, /Allow: \//);
assert.ok(!robots.includes("Disallow: /product"), "noindex routes must remain crawlable");
const sitemap = await (await get("/sitemap.xml")).text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, new Set(urls).size);
assert.ok(urls.length > 30);
for (const excluded of ["/home-three", "/login", "/product", "/pricing", "/events/7", "/events/10", "/cart"]) {
  assert.ok(!urls.includes(`https://vukafrik.org${excluded}`), excluded);
}
for (const url of urls) {
  assert.equal(new URL(url).origin, "https://vukafrik.org");
  const response = await get(new URL(url).pathname, { redirect: "manual" });
  assert.equal(response.status, 200, url);
  const html = await response.text();
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(new URL(canonical).href, url);
  assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), url);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${url}: one primary heading`);
  assert.ok(!/Aimply dummy|Applications are like the lifeblood/.test(html), `${url}: no placeholder copy`);
}
for (const path of ["/home-two", "/product", "/product-details/1", "/login", "/pricing", "/cart", "/checkout", "/wishlist", "/exhibitions-details"]) {
  const html = await (await get(path)).text();
  assert.match(html, /<meta name="robots" content="[^"]*noindex/);
}
for (const path of ["/events/99999", "/events/1junk", "/events/01", "/speakers/99999", "/speakers/1junk", "/speakers/01", "/missing-page"]) {
  for (const agent of ["WhatsApp/2.24", "Mozilla/5.0"]) {
    const response = await get(path, { headers: { "user-agent": agent } });
    assert.equal(response.status, 404, `${path} (${agent})`);
    assert.match(await response.text(), /noindex/);
  }
}
const redirect = await get("/home-three", { redirect: "manual" });
assert.equal(redirect.status, 308);
assert.equal(new URL(redirect.headers.get("location"), base).pathname, "/");
const home = await (await get("/")).text();
const json = home.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
const schema = JSON.parse(json);
const event = schema["@graph"].find(item => item["@type"] === "Event");
const organizer = schema["@graph"].find(item => item["@type"] === "Organization");
assert.equal(schema["@context"], "https://schema.org");
assert.equal(event.startDate, "2026-09-23");
assert.equal(event.endDate, "2026-09-25");
assert.equal(event.location.address.addressCountry, "CD");
assert.equal(event.organizer["@id"], organizer["@id"]);
assert.equal(event.offers, undefined, "do not invent ticket prices");
assert.equal(event.url, "https://vukafrik.org/");
console.log(`Passed: ${urls.length} sitemap pages, canonicals, robots, noindex rules, 404s, redirect, headings and event JSON-LD.`);
