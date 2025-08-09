// app/sitemap.xml/route.js

import { allBlogs } from "@/lib/client/blog";
import { legal, navLinks } from "@/lib/client/data";

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://services.ecodrix.com";

  const routes = navLinks.map((each) => each.href);
  const legalLinks = legal.map((each) => each.href);
  const blogs = await allBlogs();
  const blogRoutes = blogs.map((each) => `/blog/${each.slug}`);
  const allRoutes = [...routes, ...blogRoutes, ...legalLinks, "/about"];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allRoutes
          .map(
            (route) => `
          <url>
            <loc>${baseUrl}${route}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>`
          )
          .join("")}
      </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
