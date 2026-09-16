import seasons from "../data/seasons.yaml";

const routes = [
  "/",
  "/team",
  "/robot",
  "/outreach",
  "/awards",
  "/seasons",
  "/support",
  ...seasons.map((season) => `/seasons/${season.slug}`),
];

export const GET = ({ site }) => {
  const urls = routes
    .map((route) => {
      const canonicalRoute = route === "/" ? route : `${route}/`;
      return `<url><loc>${new URL(canonicalRoute, site)}</loc></url>`;
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
