// app/sitemap.xml/route.js

import { allBlogs } from "@/lib/client/blog";
import { legal, navLinks } from "@/lib/client/data";

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL || "https://services.ecodrix.com";

export async function GET() {
  try {
    // Static pages
    const routes = navLinks.map((each) => ({
      loc: `${baseUrl}${each.href}`,
      lastmod: new Date().toISOString(),
    }));
    const legalLinks = legal.map((each) => ({
      loc: `${baseUrl}${each.href}`,
      lastmod: new Date().toISOString(),
    }));

    const blogs = await allBlogs(baseUrl);

    const blogRoutes = blogs
      .filter((blog) => blog.publishDate)
      .map((blog) => ({
        loc: `${baseUrl}/blog/${blog.slug}`,
        lastmod: new Date(blog.publishDate).toISOString(),
      }));

    const allRoutes = [...routes, ...blogRoutes, ...legalLinks];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allRoutes
          .map(
            (route) => `
          <url>
            <loc>${route.loc}</loc>
            <lastmod>${route.lastmod}</lastmod>
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
  } catch (err) {
    console.log(err);
    return new Response("Failed to generate sitemap", { status: 500 });
  }
}
