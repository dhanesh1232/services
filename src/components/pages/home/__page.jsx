"use client";

import Head from "next/head";
import { ServicesStats } from "@/components/pages/home/stats";
import { ServiceSection } from "@/components/pages/home/services";
import { ProcessSection } from "@/components/pages/home/process";
import { TechStackSection } from "@/components/pages/home/tech-stack";
import { PortfolioSection } from "@/components/pages/home/portfolio";
import { TestimonialsSection } from "@/components/pages/home/testimonials";
import { FaqSection } from "@/components/pages/home/faq";
import { Why } from "@/components/pages/home/why";
import NightSkyHero from "./hero/hero3";
import { CTA } from "./cta";
import dynamic from "next/dynamic";
// import { WaterBubbleEffect } from "@/components/layout/float-ripple";
import { useRef, useEffect } from "react";
const WaterBubbleEffect = dynamic(() =>
  import("@/components/layout/float-ripple").then(
    (mod) => mod.WaterBubbleEffect
  )
);

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
              image: "https://services.ecodrix.com/og-image.png",
              "@id": "https://services.ecodrix.com",
              url: "https://services.ecodrix.com/",
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
                "SEO & Marketing",
                "Digital Marketing",
                "Web Design",
                "best website builder",
                "make a website",
                "free website hosting",
                "create a website for free",
                "web design",
                "wordpress website",
                "make your own website",
                "create your own website",
                "free website maker",
                "ecommerce website",
              ],
            }),
          }}
        />
      </Head>
      <>
        <WaterBubbleEffect />

        <div className={`sticky top-0 w-full left-0`}>
          {/* Hero Section */}
          <NightSkyHero />
        </div>

        <AnimatedSection>
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
          {/* CTA Section */}
          <CTA />
          {/* FAQ Section */}
          <FaqSection />
        </AnimatedSection>
      </>
    </>
  );
}

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef();

  return (
    <div
      ref={sectionRef}
      className={`h-full w-full shadow-2xl dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 bg-gradient-to-b from-white via-white to-white z-0 relative mx-auto transition-all duration-300`}
    >
      {children}
    </div>
  );
};
