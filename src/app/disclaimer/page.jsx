import Disclaimer from "@/components/pages/disclaimer";
import { metadataForPath } from "@/lib/client/seo";

export async function metadata() {
  return metadataForPath("/disclaimer", {
    title: "Disclaimer",
    description:
      "Important disclaimers and legal information regarding Ecodrix services, terms of use, and limitations of liability.",
    keywords: [
      "disclaimer",
      "terms of use",
      "legal information",
      "service limitations",
      "liability",
      "Ecodrix policies",
      "service terms",
    ],
    openGraph: {
      images: [
        {
          url: "/og-disclaimer.jpg",
          width: 1200,
          height: 630,
          alt: "Ecodrix Services Disclaimer and Legal Information",
        },
      ],
      type: "website",
      siteName: "Ecodrix Services",
    },
  });
}

export default function DisclaimerPage() {
  return <Disclaimer />;
}
