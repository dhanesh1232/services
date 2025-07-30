export async function GET() {
  const content = `
  User-agent: *
  Allow: /
  Disallow: /admin
  Disallow: /dashboard
  Sitemap: https://services.ecodrix.com/sitemap.xml
    `.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
