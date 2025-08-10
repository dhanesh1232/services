"use client";

import React, { useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy"; // Custom hook for table of contents highlighting
import Link from "next/link";

export default function Disclaimer() {
  const contentRef = useRef(null);
  const activeSection = useScrollSpy(contentRef, {
    sectionSelector: "section[id]",
    offset: 100,
  });

  const sections = [
    {
      id: "general-information",
      title: "General Information",
      blocks: [
        <>
          The content, resources, and services provided on this website are
          intended for general informational and business purposes only. While
          we strive to provide accurate, up-to-date, and reliable information,
          we make no warranties or guarantees regarding accuracy, completeness,
          or suitability for your specific needs.
        </>,
        <>
          All content on this website is subject to change without notice. We
          reserve the right to modify, update, or remove any content at any time
          for any reason.
        </>,
      ],
    },
    {
      id: "no-professional-advice",
      title: "No Professional Advice",
      blocks: [
        <>
          The information provided on this website does not constitute
          professional advice of any kind (legal, financial, technical, etc.).
          You should not rely solely on this information without consulting
          appropriate professionals or conducting your own verification.
        </>,
      ],
    },
    {
      id: "service-performance",
      title: "Service Performance",
      blocks: [
        <>
          Our services include <strong>Web Development</strong>,{" "}
          <strong>Search Engine Optimization (SEO)</strong>,{" "}
          <strong>Digital Advertising Campaigns</strong>, and{" "}
          <strong>Chat Agent Integrations</strong>. While we apply best
          practices and proven strategies, we do not guarantee specific outcomes
          such as:
        </>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Top search engine rankings or fixed positions</li>
          <li>Specific traffic numbers or conversion rates</li>
          <li>Revenue targets or return on investment</li>
          <li>
            Immediate results (some strategies require time to show effects)
          </li>
        </ul>,
        <p className="mt-2">
          Performance results depend on factors outside of our control,
          including search engine algorithms, market competition, user behavior,
          external platform policies, and economic conditions.
        </p>,
      ],
    },
    {
      id: "seo-limitations",
      title: "SEO Limitations",
      blocks: [
        <>
          SEO results vary based on multiple factors including but not limited
          to:
        </>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Search engine algorithm changes (Google, Bing, etc.)</li>
          <li>Market trends and seasonal fluctuations</li>
          <li>Competitor actions and industry dynamics</li>
          <li>Website technical infrastructure and hosting quality</li>
          <li>Content quality and update frequency</li>
        </ul>,
        <p className="mt-2">
          We cannot guarantee first-page rankings on Google or any other search
          engine. Algorithm updates, indexing delays, manual actions, and
          competitor improvements may affect ranking positions at any time.
        </p>,
      ],
    },
    {
      id: "advertising-campaigns",
      title: "Advertising Campaigns",
      blocks: [
        <>Digital advertising performance depends on multiple variables:</>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Targeting accuracy and audience size</li>
          <li>Ad budget and bid strategies</li>
          <li>Market competition and seasonality</li>
          <li>Platform algorithms and policy changes</li>
          <li>Ad creative quality and relevance</li>
          <li>Landing page experience and conversion optimization</li>
        </ul>,
        <p className="mt-2">
          We are not responsible for reduced campaign performance caused by:
        </p>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Platform policy changes or account restrictions</li>
          <li>Budget limitations set by the client</li>
          <li>Market shifts or economic conditions</li>
          <li>Changes in client products/services/pricing</li>
        </ul>,
      ],
    },
    {
      id: "web-development",
      title: "Web Development Services",
      blocks: [
        <>For web development projects, please note:</>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Final designs require client approval before implementation</li>
          <li>
            Project timelines are estimates and may change based on complexity
          </li>
          <li>We require all content/assets before development begins</li>
          <li>Additional features beyond scope may incur extra costs</li>
          <li>
            We're not responsible for domain/hosting issues with third-party
            providers
          </li>
        </ul>,
      ],
    },
    {
      id: "chat-agent",
      title: "Chat Agent & Third-Party Tools",
      blocks: [
        <>
          Our chat agent services integrate with third-party platforms
          including:
        </>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>WhatsApp (via Twilio or direct API)</li>
          <li>Instagram Direct Messages</li>
          <li>Facebook Messenger</li>
          <li>Custom web widgets</li>
          <li>Other messaging platforms via API</li>
        </ul>,
        <p className="mt-2">Important limitations:</p>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            We are not liable for downtime or policy changes by these platforms
          </li>
          <li>
            Clients must maintain compliance with platform terms of service
          </li>
          <li>
            Message delivery depends on platform algorithms and user settings
          </li>
          <li>
            Some features may require business verification with the platform
          </li>
        </ul>,
      ],
    },
    {
      id: "data-privacy",
      title: "Data Collection & Privacy",
      blocks: [
        <>While we implement security best practices, please understand:</>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            We're not responsible for data breaches caused by third-party
            services
          </li>
          <li>
            Clients must ensure compliance with privacy laws (GDPR, CCPA, etc.)
          </li>
          <li>
            Analytics data is provided "as is" without warranty of accuracy
          </li>
          <li>Some tracking may be blocked by user browser settings</li>
        </ul>,
      ],
    },
    {
      id: "client-responsibilities",
      title: "Client Responsibilities",
      blocks: [
        <>Clients must provide:</>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Accurate, lawful, and complete information for all projects</li>
          <li>Timely feedback and approvals during project phases</li>
          <li>Necessary permissions for content, media, and branding used</li>
          <li>
            Access to required accounts and platforms (with appropriate
            permissions)
          </li>
        </ul>,
        <p className="mt-2">
          Any delays, penalties, or issues resulting from client-side factors
          (including late content, delayed approvals, or access issues) may
          affect project timelines and outcomes.
        </p>,
      ],
    },
    {
      id: "payments-refunds",
      title: "Payments & Refunds",
      blocks: [
        <>Payment terms:</>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Projects require deposits as outlined in contracts</li>
          <li>Late payments may pause work and incur fees</li>
          <li>
            Refund policies vary by service type (see individual agreements)
          </li>
          <li>
            Third-party costs (ads, software licenses, etc.) are non-refundable
          </li>
        </ul>,
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      blocks: [
        <>Unless otherwise agreed in writing:</>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Clients own final deliverables for which they've paid in full</li>
          <li>We retain rights to portfolio samples (unless under NDA)</li>
          <li>
            Third-party assets (fonts, stock images, etc.) may have separate
            licenses
          </li>
          <li>
            Custom code may include reusable libraries we maintain rights to
          </li>
        </ul>,
      ],
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      blocks: [
        <>To the fullest extent permitted by law, we are not liable for:</>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Any direct, indirect, incidental, or consequential damages</li>
          <li>Lost profits, revenue, data, or business opportunities</li>
          <li>Service interruptions beyond our reasonable control</li>
          <li>Actions of third-party services or platforms</li>
          <li>Client errors or misuse of delivered products</li>
        </ul>,
      ],
    },
    {
      id: "indemnification",
      title: "Indemnification",
      blocks: [
        <>
          You agree to indemnify and hold harmless our company and its
          affiliates from any claims, damages, or expenses arising from:
        </>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Your use of our services in violation of laws</li>
          <li>Your infringement of third-party rights</li>
          <li>Misrepresentation of your business or offerings</li>
          <li>Unauthorized modifications to delivered work</li>
        </ul>,
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      blocks: [
        <>
          This disclaimer and any disputes will be governed by the laws of
          India, without regard to its conflict of law provisions.
        </>,
      ],
    },
    {
      id: "acceptance-terms",
      title: "Acceptance of Terms",
      blocks: [
        <>
          By using our website and engaging our services, you acknowledge that:
        </>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>You have read and understood this disclaimer</li>
          <li>You agree to be bound by these terms</li>
          <li>
            You are authorized to represent your organization (if applicable)
          </li>
          <li>These terms may be updated periodically</li>
        </ul>,
        <p className="mt-2 font-medium">
          If you do not agree with any part of this disclaimer, you must
          immediately discontinue use of our website and services.
        </p>,
      ],
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-erix">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Table of Contents */}
        <div className="lg:w-1/4 lg:block hidden lg:sticky lg:self-start lg:top-16 h-fit bg-slate-100 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Table of Contents
          </h2>
          <nav className="space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block py-1 px-2 rounded transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="lg:w-3/4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Disclaimer</h1>
            <p className="mt-2 text-muted-foreground">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.blocks.map((block, index) => (
                    <div key={index}>{block}</div>
                  ))}
                </div>
              </section>
            ))}

            <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                If you have any questions about this disclaimer, please{" "}
                <Link
                  href="/contact"
                  className="bold text-blue-500 hover:underline hover:text-indigo-600"
                >
                  contact
                </Link>{" "}
                us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
