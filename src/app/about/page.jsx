import About from "@/components/pages/about";
import { metadataForPath } from "@/lib/client/seo";

export async function metadata() {
  return metadataForPath("/about", {
    title: "About",
    description:
      "Learn about Ecodrix Services - our mission, values, and commitment to delivering innovative solutions. Discover our journey and what makes us your trusted technology partner.",
    keywords: [
      "about us",
      "company profile",
      "Ecodrix mission",
      "our values",
      "company history",
      "technology solutions",
      "Ecodrix team",
      "business philosophy",
      "company overview",
      "tech services",
    ],
    openGraph: {
      images: [
        {
          url: "/og-about.jpg",
          width: 1200,
          height: 630,
          alt: "About Ecodrix Services - Your Technology Partner",
        },
      ],
      type: "website",
      siteName: "ECODrIx Services",
    },
  });
}

export default function AboutPage() {
  return <About />;
}
