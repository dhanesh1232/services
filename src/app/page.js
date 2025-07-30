import ServicesPage from "@/components/home/__page";
import { metadataForPath } from "@/lib/client/seo";

export async function generateMetadata() {
  return metadataForPath("/", {
    title: "Home",
    description:
      "Discover how ECODrIx helps you automate marketing and customer support.",
    keywords: ["web development", "e-commerce", ""],
    openGraph: {
      images: [
        {
          url: "/og-services.jpg",
          width: 1200,
          height: 630,
          alt: "Services ECODrIx",
        },
      ],
    },
  });
}

export default function Page() {
  return <ServicesPage />;
}
