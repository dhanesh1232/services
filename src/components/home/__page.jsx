"use client";

import { ContactSection } from "@/components/home/contact";
import Head from "next/head";
import Hero from "@/components/home/hero/hero";
import { ServicesStats } from "@/components/home/stats";
import { ServiceSection } from "@/components/home/services";
import { ProcessSection } from "@/components/home/process";
import { TechStackSection } from "@/components/home/tech-stack";
import { PortfolioSection } from "@/components/home/portfolio";
import { TestimonialsSection } from "@/components/home/testimonials";
import { FaqSection } from "@/components/home/faq";
import { useEffect } from "react";
import Why from "@/components/home/why";

export default function ServicesPage() {
  useEffect(() => {
    // Prevent initial scroll jump
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }

    // Mobile viewport height fix
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => window.removeEventListener("resize", setVh);
  }, []);
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ECODrIx",
              image: "https://ecodrix.com/og-image.png",
              "@id": "https://ecodrix.com",
              url: "https://ecodrix.com/",
              telephone: "+91-8143963821",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tirupati, Andhra Pradesh",
                addressLocality: "Tirupati",
                addressRegion: "Andhra Pradesh",
                postalCode: "517501",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "12.9716",
                longitude: "77.5946",
              },
              sameAs: [
                "https://www.facebook.com/ecodrix",
                "https://www.instagram.com/ecodrix__360",
                "https://www.linkedin.com/company/ecodrix",
              ],
              description:
                "Professional web development, AI chatbot solutions, and SaaS automation by ECODrIx. Build smart, scalable, and modern digital experiences.",
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "$$",
              serviceType: [
                "Web Development",
                "AI Chatbots",
                "WhatsApp Automation",
                "SaaS Development",
              ],
            }),
          }}
        />
      </Head>
      <>
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <ServicesStats />

        {/*why section */}
        <Why />

        {/* Services Section */}
        <ServiceSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />
      </>
    </>
  );
}
