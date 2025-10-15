import About from "@/components/pages/about";
import { metadataForPath } from "@/lib/client/seo";
import Head from "next/head";

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
      <About />
    </>
  );
}
