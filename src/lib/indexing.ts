/** Pages with real public content; keep demo and transaction routes out of search. */
export const publicPaths = [
  "/", "/about", "/events", "/speakers", "/exhibitions", "/event-venue",
  "/register", "/sponsors", "/volunteer", "/media-accreditation", "/contact",
  "/faq", "/gallery", "/blog", "/hackathon",
] as const;

export function isIndexablePath(path: string) {
  return (publicPaths as readonly string[]).includes(path)
    || /^\/(events|speakers)\/[1-9]\d*$/.test(path);
}
