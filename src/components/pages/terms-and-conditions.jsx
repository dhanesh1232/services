"use client";

import React, { useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Link from "next/link";

export default function TermsAndConditions() {
  const contentRef = useRef(null);
  const activeSection = useScrollSpy(contentRef, {
    sectionSelector: "section[id]",
    offset: 100,
  });

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <p>
          These Terms & Conditions ("Terms") govern your use of our website,
          products, and services provided by <strong>Your Company Name</strong>.
          By accessing or using our services, you agree to these Terms. If you
          do not agree, you must immediately stop using our services.
        </p>
      ),
    },
    {
      id: "services",
      title: "Our Services",
      content: (
        <p>
          We provide professional services including Web Development, Search
          Engine Optimization (SEO), Digital Advertising Campaigns, and Chat
          Agent Integrations. Service details, timelines, and costs will be
          outlined in individual agreements or proposals.
        </p>
      ),
    },
    {
      id: "eligibility",
      title: "Eligibility",
      content: (
        <p>
          You must be at least 18 years old and have the legal authority to
          enter into these Terms on behalf of yourself or your organization.
        </p>
      ),
    },
    {
      id: "client-responsibilities",
      title: "Client Responsibilities",
      content: (
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Provide accurate and complete information</li>
          <li>Supply necessary content, assets, and approvals on time</li>
          <li>
            Maintain access to required accounts, domains, and third-party
            platforms
          </li>
          <li>Ensure compliance with all applicable laws</li>
        </ul>
      ),
    },
    // ... Additional sections following the same pattern
  ];

  return (
    <div className="bg-erix px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex max-w-7xl mx-auto flex-col lg:flex-row gap-8">
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Terms & Conditions
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
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
                <div className="space-y-4">{section.content}</div>
              </section>
            ))}

            <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                For questions about these Terms, please{" "}
                <Link
                  href="/contact"
                  className="text-blue-500 hover:underline hover:text-indigo-600"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
