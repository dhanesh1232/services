"use client";

import React, { useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Link from "next/link";

export default function PrivacyPolicy() {
  const contentRef = useRef(null);
  const activeSection = useScrollSpy(contentRef, {
    sectionSelector: "section[id]",
    offset: 100,
  });

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        <>
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website or use our
          services. By using our website and services, you agree to the terms of
          this Privacy Policy. If you do not agree, please discontinue use
          immediately.
        </>,
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      blocks: [
        <>We may collect the following types of information:</>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong>Personal Information</strong>: Name, email address, phone
            number, business name, billing information.
          </li>
          <li>
            <strong>Technical Information</strong>: IP address, browser type,
            operating system, device information, and access times.
          </li>
          <li>
            <strong>Service-Related Data</strong>: Project details, chat agent
            configurations, advertising campaign data, analytics data.
          </li>
          <li>
            <strong>Cookies & Tracking Data</strong>: We use cookies, tracking
            pixels, and similar technologies to enhance your experience.
          </li>
        </ul>,
      ],
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      blocks: [
        <>We use collected information to:</>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Provide and improve our services</li>
          <li>Communicate with you about projects, updates, and offers</li>
          <li>Process payments and manage billing</li>
          <li>Run and optimize advertising campaigns</li>
          <li>Comply with legal obligations</li>
        </ul>,
      ],
    },
    {
      id: "sharing",
      title: "Sharing of Information",
      blocks: [
        <>
          We do not sell your personal information. We may share your
          information only in the following cases:
        </>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            With service providers (e.g., hosting, payment processors, ad
            platforms) who assist in service delivery
          </li>
          <li>To comply with laws, regulations, or legal processes</li>
          <li>To protect our rights, property, and safety or that of others</li>
          <li>With your consent</li>
        </ul>,
      ],
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      blocks: [
        <>
          We use cookies and similar technologies to personalize your
          experience, analyze website performance, and serve relevant ads. You
          can disable cookies in your browser settings, but this may affect
          website functionality.
        </>,
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      blocks: [
        <>
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this policy, unless a longer
          retention period is required by law.
        </>,
      ],
    },
    {
      id: "security",
      title: "Data Security",
      blocks: [
        <>
          We use industry-standard security measures to protect your
          information. However, no method of transmission over the internet or
          electronic storage is 100% secure. We cannot guarantee absolute
          security.
        </>,
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      blocks: [
        <>
          Depending on your location, you may have the following rights under
          applicable laws (GDPR, CCPA, etc.):
        </>,
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Access the personal data we hold about you</li>
          <li>Request corrections or updates</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications</li>
          <li>Restrict or object to certain processing</li>
        </ul>,
        <p className="mt-2">
          To exercise your rights, contact us at{" "}
          <Link
            href="mailto:support@ecodrix.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            support@ecodrix.com
          </Link>
          .
        </p>,
      ],
    },
    {
      id: "third-party",
      title: "Third-Party Links & Services",
      blocks: [
        <>
          Our website may contain links to third-party websites or services. We
          are not responsible for the privacy practices or content of external
          sites.
        </>,
      ],
    },
    {
      id: "international",
      title: "International Users",
      blocks: [
        <>
          If you are accessing our services from outside India, please note that
          your information may be transferred and processed in countries with
          different data protection laws.
        </>,
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      blocks: [
        <>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated "Last Updated" date.
        </>,
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      blocks: [
        <>
          If you have questions about this Privacy Policy, please contact us at:
        </>,
        <p className="mt-2">
          Email:{" "}
          <Link
            href="mailto:support@ecodrix.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            support@ecodrix.com
          </Link>
        </p>,
      ],
    },
  ];

  return (
    <div className="bg-inherit px-4 sm:px-6 lg:px-8 py-20">
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
              Privacy Policy
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Last updated: August 8, 2025
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
          </div>
        </div>
      </div>
    </div>
  );
}
