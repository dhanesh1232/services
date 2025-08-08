import PrivacyPolicy from "@/components/pages/privacy-policy";
import { metadataForPath } from "@/lib/client/seo";

export async function metadata() {
  return metadataForPath("/privacy-policy", {
    title: "Privacy Policy",
    description:
      "Learn about how Ecodrix Services collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and transparency.",
    keywords: [
      "privacy policy",
      "data protection",
      "personal information",
      "data security",
      "privacy terms",
      "user privacy",
      "data collection",
      "Ecodrix privacy",
      "information security",
      "data handling",
      "privacy guidelines",
      "confidentiality policy",
    ],
    openGraph: {
      images: [
        {
          url: "/og-privacy.jpg",
          width: 1200,
          height: 630,
          alt: "Ecodrix Services Privacy Policy",
        },
      ],
      type: "website",
      siteName: "ECODrIx Services",
      title: "Privacy Policy | Ecodrix Services",
      description:
        "Learn about how Ecodrix Services collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and transparency.",
    },
  });
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
