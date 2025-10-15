import { BlogPage } from "@/components/pages/blog/__page";
import { metadataForPath } from "@/lib/client/seo";
import Head from "next/head";

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
      "innovation in technology",
      "business technology",
      "digital transformation",
    ],
    openGraph: {
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
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ECODrIx Services",
              description:
                "Digital innovation and web development services provider specializing in custom solutions",
              url: "https://services.ecodrix.com",
              logo: "https://services.ecodrix.com/logo.png",
              foundingDate: "2022",
              sameAs: [
                "https://twitter.com/ecodrix",
                "https://www.linkedin.com/company/ecodrix",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8790063821",
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>
      <BlogPage />
    </>
  );
}
