import TermsAndConditions from "@/components/pages/terms-and-conditions";
import { metadataForPath } from "@/lib/client/seo";

export async function metadata() {
  return metadataForPath("/terms-and-conditions", {
    title: "Terms and Conditions",
    description:
      "Read our terms and conditions to understand the rules, guidelines, and agreements that govern the use of Ecodrix Services. Learn about our policies, user responsibilities, and legal requirements.",
    keywords: [
      "terms and conditions",
      "user agreement",
      "legal terms",
      "service terms",
      "usage policy",
      "Ecodrix terms",
      "service agreement",
      "user guidelines",
      "legal requirements",
      "terms of use",
      "policy",
      "conditions",
    ],
    openGraph: {
      images: [
        {
          url: "/og-terms.jpg",
          width: 1200,
          height: 630,
          alt: "Ecodrix Services Terms and Conditions",
        },
      ],
      type: "website",
      siteName: "ECODrIx Services",
      title: "Terms and Conditions | Ecodrix Services",
      description:
        "Read our terms and conditions to understand the rules, guidelines, and agreements that govern the use of Ecodrix Services.",
    },
  });
}

export default function TermsPage() {
  return <TermsAndConditions />;
}
