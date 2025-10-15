import ServicePage from "@/components/pages/services";
import { metadataForPath, pagesOrganizationJsonLd } from "@/lib/client/seo";

export async function metadata() {
  return metadataForPath("/services", {
    title: "Services",
    description:
      "Explore Ecodrix Services' comprehensive solutions for your business needs. We offer professional services focused on innovation, quality, and client success.",
    keywords: [
      "business services",
      "professional services",
      "Ecodrix services",
      "business solutions",
      "professional consulting",
      "service offerings",
      "business consulting",
      "technology services",
      "enterprise solutions",
      "digital services",
      "business transformation",
      "professional solutions",
      "whatsapp cms manager",
    ],
    openGraph: {
      images: [
        {
          url: "/og-services.jpg",
          width: 1200,
          height: 630,
          alt: "Ecodrix Services Offerings",
        },
      ],
      type: "website",
      siteName: "ECODrIx Services",
      description:
        "Explore Ecodrix Services' comprehensive solutions for your business needs. We offer professional services focused on innovation, quality, and client success.",
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
      <ServicePage />
    </>
  );
}
