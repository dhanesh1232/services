import { CookiesPage } from "@/components/pages/cookies-policy";
import { metadataForPath, pagesOrganizationJsonLd } from "@/lib/client/seo";

export async function metadata() {
  return metadataForPath("/cookie-policy", {
    title: "Cookie Policy - ECODrIx Services",
    description:
      "Read our Cookie Policy to understand how ECODrIx Services collects, uses, and manages cookies to enhance your experience on our website.",
    keywords: [
      "cookie policy",
      "cookies",
      "privacy",
      "website tracking",
      "data collection",
      "user consent",
      "ECODrIx Services",
      "privacy policy",
      "website cookies",
      "data protection",
    ],
    openGraph: {
      images: [
        {
          url: "/og-cookie-policy.jpg",
          width: 1200,
          height: 630,
          alt: "Cookie Policy - ECODrIx Services",
        },
      ],
      type: "website",
      siteName: "ECODrIx Services",
      title: "Cookie Policy | ECODrIx Services",
      description:
        "Read our Cookie Policy to understand how ECODrIx Services collects, uses, and manages cookies to enhance your experience on our website.",
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
      <CookiesPage />
    </>
  );
}
