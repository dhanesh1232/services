import { BlogPage } from "@/components/pages/blog/__page";
import { metadataForPath, pagesOrganizationJsonLd } from "@/lib/client/seo";

export async function metadata() {
  return metadataForPath("/blog", {
    title: "Blog",
    description:
      "Stay updated with the latest trends, insights, and news in technology through the Ecodrix Services blog. Explore articles on software development, IT solutions, and industry innovations to help you stay ahead in the tech world.",
    keywords: [
      "tech blog",
      "technology insights",
      "software development articles",
      "IT solutions blog",
      "industry news",
      "Ecodrix updates",
      "tech trends",
      "technology trends",
      "innovation in technology",
      "business technology",
      "digital transformation",
    ],
    openGraph: {
      title: "Blog",
      description:
        "Stay updated with the latest trends, insights, and news in technology through the Ecodrix Services blog. Explore articles on software development, IT solutions, and industry innovations to help you stay ahead in the tech world.",
      images: [
        {
          url: "/og-blog.jpg",
          width: 1200,
          height: 630,
          alt: "Ecodrix Services Blog - Tech Insights and News",
        },
      ],
      type: "website",
      siteName: "ECODrIx Services",
    },
  });
}

export default function Page() {
  const jsonLd = pagesOrganizationJsonLd();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd.replace(/</g, "\\u003c"),
        }}
      />

      <BlogPage />
    </>
  );
}
