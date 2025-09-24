"use client";

import React, { useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Link from "next/link";

const CookiePolicy = () => {
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
          This Cookie Policy explains what cookies are, how ECODrIx uses them,
          the types of cookies we use, and your choices regarding their use. By
          using our website, you consent to the use of cookies in accordance
          with this policy.
        </>,
        <>
          Cookies are an important part of how our website works and help us
          provide you with the best possible experience. This policy should be
          read alongside our{" "}
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </>,
      ],
    },
    {
      id: "what-are-cookies",
      title: "What are Cookies?",
      blocks: [
        <>
          Cookies are small text files that are placed on your device (computer,
          tablet, or mobile device) when you visit a website. They are widely
          used to make websites work more efficiently, as well as to provide
          information to the owners of the site.
        </>,
        <>
          Cookies can be "persistent" or "session" cookies. Persistent cookies
          remain on your personal computer or mobile device when you go offline,
          while session cookies are deleted as soon as you close your web
          browser.
        </>,
      ],
    },
    {
      id: "how-we-use-cookies",
      title: "How We Use Cookies",
      blocks: [
        <>ECODrIx uses cookies for several purposes:</>,
        <ul className="list-disc pl-6 mt-2 space-y-3">
          <li>
            <strong>Essential Cookies:</strong> These cookies are strictly
            necessary for the operation of our website. They enable you to
            navigate around the site and use its features, such as accessing
            secure areas. Without these cookies, services you have asked for
            cannot be provided.
          </li>
          <li>
            <strong>Performance and Analytics Cookies:</strong> These cookies
            collect information about how you use our website, such as which
            pages you visit most often and if you receive error messages. This
            data helps us improve the website's performance and your user
            experience. All information these cookies collect is aggregated and
            therefore anonymous.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> These cookies allow our
            website to remember choices you make (such as your username,
            language, or region) and provide enhanced, more personalized
            features. They may also be used to provide services you have asked
            for such as watching a video.
          </li>
          <li>
            <strong>Advertising and Targeting Cookies:</strong> These cookies
            are used to deliver advertisements more relevant to you and your
            interests. They are also used to limit the number of times you see
            an advertisement as well as help measure the effectiveness of
            advertising campaigns.
          </li>
          <li>
            <strong>Social Media Cookies:</strong> These cookies are set by a
            range of social media services that we have added to the site to
            enable you to share our content with your friends and networks.
          </li>
        </ul>,
      ],
    },
    {
      id: "third-party-cookies",
      title: "Third-Party Cookies",
      blocks: [
        <>
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the website, deliver
          advertisements on and through the website, and so on.
        </>,
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
          <h3 className="text-lg font-semibold mb-2">
            Examples of third-party cookies we use:
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Analytics:</strong> To understand how visitors
              interact with our website
            </li>
            <li>
              <strong>Google Ads:</strong> For advertising and retargeting
              purposes
            </li>
            <li>
              <strong>Facebook Pixel:</strong> To measure and optimize our
              advertising campaigns
            </li>
            <li>
              <strong>Hotjar:</strong> To better understand our users' needs and
              optimize their experience
            </li>
          </ul>
        </div>,
      ],
    },
    {
      id: "cookie-choices",
      title: "Your Cookie Choices",
      blocks: [
        <>
          You have several options to control or limit how cookies are used on
          our website:
        </>,
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Browser Controls:</strong> Most web browsers allow you to
            control cookies through their settings preferences. However,
            limiting cookies may affect your ability to use certain features of
            our website.
          </li>
          <li>
            <strong>Opt-Out Tools:</strong> You can opt out of targeted
            advertising by visiting:
            <div className="ml-4 mt-2 space-y-1">
              <Link
                target="_blank"
                href="http://www.aboutads.info/choices/"
                className="text-blue-600 hover:underline block"
              >
                • Digital Advertising Alliance
              </Link>
              <Link
                target="_blank"
                href="http://www.youronlinechoices.com/"
                className="text-blue-600 hover:underline block"
              >
                • European Interactive Digital Advertising Alliance
              </Link>
            </div>
          </li>
          <li>
            <strong>Google Analytics:</strong> You can opt-out of Google
            Analytics by installing Google's opt-out browser add-on:{" "}
            <Link
              target="_blank"
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-blue-600 hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </Link>
          </li>
          <li>
            <strong>Cookie Consent Banner:</strong> When you first visit our
            website, you will be presented with a cookie consent banner where
            you can choose which types of cookies to accept.
          </li>
        </ul>,
      ],
    },
    {
      id: "specific-cookies",
      title: "Specific Cookies We Use",
      blocks: [
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 border-b text-left font-semibold">
                  Cookie Name
                </th>
                <th className="px-4 py-3 border-b text-left font-semibold">
                  Purpose
                </th>
                <th className="px-4 py-3 border-b text-left font-semibold">
                  Duration
                </th>
                <th className="px-4 py-3 border-b text-left font-semibold">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3">session_id</td>
                <td className="px-4 py-3">Maintain user session</td>
                <td className="px-4 py-3">Session</td>
                <td className="px-4 py-3">Essential</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3">user_preferences</td>
                <td className="px-4 py-3">Store user settings</td>
                <td className="px-4 py-3">1 year</td>
                <td className="px-4 py-3">Functionality</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3">_ga</td>
                <td className="px-4 py-3">Google Analytics</td>
                <td className="px-4 py-3">2 years</td>
                <td className="px-4 py-3">Analytics</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3">_gid</td>
                <td className="px-4 py-3">Google Analytics</td>
                <td className="px-4 py-3">24 hours</td>
                <td className="px-4 py-3">Analytics</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3">_fbp</td>
                <td className="px-4 py-3">Facebook Pixel</td>
                <td className="px-4 py-3">3 months</td>
                <td className="px-4 py-3">Advertising</td>
              </tr>
              <tr>
                <td className="px-4 py-3">_hjSession</td>
                <td className="px-4 py-3">Hotjar Session</td>
                <td className="px-4 py-3">30 minutes</td>
                <td className="px-4 py-3">Analytics</td>
              </tr>
            </tbody>
          </table>
        </div>,
      ],
    },
    {
      id: "changes",
      title: "Changes to This Cookie Policy",
      blocks: [
        <>
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any material changes by posting the new
          Cookie Policy on this page and updating the "Last updated" date.
        </>,
        <>
          We encourage you to review this Cookie Policy periodically to stay
          informed about our use of cookies.
        </>,
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      blocks: [
        <>
          If you have any questions about this Cookie Policy or our use of
          cookies, please contact us:
        </>,
        <ul className="list-disc pl-6 space-y-2">
          <li>
            By email:{" "}
            <Link
              href="mailto:info@ecodrix.com"
              className="text-blue-600 hover:underline"
            >
              info@ecodrix.com
            </Link>
          </li>
          <li>
            By visiting this page on our website:{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact Us
            </Link>
          </li>
          <li>By mail: [Your Company Address]</li>
        </ul>,
      ],
    },
  ];

  return (
    <div className="bg-erix px-4 sm:px-6 lg:px-8 py-20 z-10">
      <div className="flex max-w-7xl mx-auto flex-col lg:flex-row gap-8">
        {/* Table of Contents */}
        <div className="lg:w-1/4 hidden lg:block sticky top-16 h-fit bg-slate-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Table of Contents
          </h2>
          <nav className="space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 font-medium shadow-sm"
                    : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
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
              Cookie Policy for ECODrIx
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
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
                    <div
                      key={index}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {block}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Legal Disclaimer */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-8 border border-blue-100 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              <strong>Note:</strong> This cookie policy is provided for
              informational purposes and should not be construed as legal
              advice. We recommend consulting with a legal professional to
              ensure your cookie policy complies with all applicable laws and
              regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
