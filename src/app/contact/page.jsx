import { ContactSection } from "@/components/pages/contact";
import { metadataForPath, pagesOrganizationJsonLd } from "@/lib/client/seo";

export async function metadata() {
  return metadataForPath("/contact", {
    title: "Contact - Get in Touch",
    description:
      "Have questions or need assistance? Contact our team at Ecodrix Services. We're here to help you with your inquiries, support needs, and service-related questions.",
    keywords: [
      "contact",
      "contact us",
      "get in touch",
      "customer support",
      "help desk",
      "business inquiries",
      "service support",
      "Ecodrix contact",
      "technical assistance",
      "customer service",
      "business hours",
      "support team",
    ],
    openGraph: {
      images: [
        {
          url: "/og-contact.jpg",
          width: 1200,
          height: 630,
          alt: "Contact Ecodrix Services - We're here to help",
        },
      ],
      type: "website",
      siteName: "ECODrIx Services",
      title: "Contact | Get in Touch",
      description:
        "Have questions or need assistance? Contact our team at Ecodrix Services. We're here to help you with your inquiries, support needs, and service-related questions.",
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
      <ContactSection />
    </>
  );
}
