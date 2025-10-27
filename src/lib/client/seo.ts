import { keywords } from "./keywords";

const SITE_URL = process.env.NEXT_PUBLIC_API_URL || "https://services.ecodrix.com";
const SITE_NAME = "ECODrIx";
export const defaultMeta = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ECODrIx – Website Development & SEO Services",
    template: "%s | ECODrIx – Services – AI Automation & Web development & CRM SaaS Platform",
  },
  description:
    "Build fast, modern, and SEO-friendly websites with ECODrix. Affordable development services for businesses and startups.",
  keywords: [...keywords],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: "ECODrIx – Website Development & SEO Services",
    description:
      "Explore top-notch services including AI chatbots, multi-platform integrations, and custom website development with ECODrIx.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME || "ECODrIx Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECODrIx | Website Development & SEO Services",
    description:
      "Boost customer engagement and automate business workflows with ECODrIx — an all-in-one AI-powered platform for modern web development, CRM, campaigns, chatbots, and support.",
    creator: "@ecodrix",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  category: "business",
  applicationName: "ECODrIx Services",
  creator: "ECODrIx Team",
  publisher: "ECODrIx Technologies Pvt. Ltd.",
};

function getSafe(obj, prop, fallback = undefined) {
  return obj && prop in obj ? obj[prop] : fallback;
}

export function generateMetadata(config = {}) {
  // Safely extract all properties with fallbacks
  const title = getSafe(config, "title", defaultMeta.title.default);
  const description = getSafe(config, "description", defaultMeta.description);
  const keywords = getSafe(config, "keywords", []);
  const alternates = getSafe(config, "alternates", {});
  const openGraph = getSafe(config, "openGraph", {});
  const twitter = getSafe(config, "twitter", {});
  const robots = getSafe(config, "robots", {});

  // Handle title (string or object)
  const titleString = typeof title === "object" ? getSafe(title, "default", "") : String(title);
  const fullTitle = `${titleString} | ${SITE_NAME}`;

  // Handle keywords
  const fullKeywords = [
    ...(Array.isArray(defaultMeta.keywords) ? defaultMeta.keywords : []),
    ...(Array.isArray(keywords) ? keywords : []),
  ].filter(Boolean);

  // Handle canonical URL
  const canonicalUrl = getSafe(alternates, "canonical", SITE_URL);

  // Handle images safely
  const defaultOgImages = getSafe(defaultMeta, "openGraph", {}).images || [];
  const ogImages = getSafe(openGraph, "images", defaultOgImages);
  const twitterImages = getSafe(
    twitter,
    "images",
    ogImages.map((img) => ({
      url: getSafe(img, "url", ""),
      alt: getSafe(img, "alt", SITE_NAME),
    }))
  );

  return {
    ...defaultMeta,
    title: {
      default: typeof title === "object" ? getSafe(title, "default", "") : title,
      template: getSafe(defaultMeta.title, "template", `%s | ${SITE_NAME}`),
    },
    description: description,
    keywords: fullKeywords.length ? fullKeywords : undefined,
    alternates: {
      ...getSafe(defaultMeta, "alternates", {}),
      canonical: canonicalUrl,
      ...alternates,
    },
    openGraph: {
      ...getSafe(defaultMeta, "openGraph", {}),
      title: fullTitle,
      description,
      ...openGraph,
      images: Array.isArray(ogImages) ? ogImages : [],
    },
    twitter: {
      ...getSafe(defaultMeta, "twitter", {}),
      title: fullTitle,
      description,
      ...twitter,
      images: Array.isArray(twitterImages) ? twitterImages : [],
    },
    robots: {
      ...getSafe(defaultMeta, "robots", {}),
      ...robots,
    },
    metadataBase: new URL(SITE_URL),
  };
}

/**
 * 🌐 ECODrIx Metadata Configuration & Generator
 * ----------------------------------------------
 * This module defines and dynamically generates metadata
 * for SEO, social sharing, and web crawlers across all pages.
 *
 * ✦ Purpose:
 * Centralizes and automates the generation of page-level meta tags
 * (title, description, keywords, OpenGraph, Twitter, robots, etc.)
 * using defaults and optional overrides.
 *
 * ✦ Features:
 * - Provides a single source of truth for all meta information.
 * - Auto-merges defaults with page-specific metadata.
 * - Ensures Open Graph, Twitter, and robots directives remain consistent.
 * - Safely handles missing fields and maintains valid structure.
 * - Includes helper methods for canonical URL and structured SEO tagging.
 *
 * ⚙️ Functions:
 * 1. `generateMetadata(config = {})`
 *    → Merges custom config with global defaults to produce complete metadata.
 *
 * 2. `metadataForPath(path, config = {})`
 *    → Extends `generateMetadata` to include path-based canonical URLs and OG links.
 *
 * 🧩 Usage:
 * ```js
 * import { metadataForPath } from "@/lib/metadata";
 *
 * export const metadata = metadataForPath("/blog/my-post", {
 *   title: "Custom Page Title",
 *   description: "A short summary for SEO and previews.",
 * });
 * ```
 *
 * 🧠 Notes:
 * - `SITE_URL` and environment variables are used to ensure canonical consistency.
 * - The `getSafe()` helper prevents runtime errors when optional fields are missing.
 * - Designed to integrate seamlessly with Next.js `app/` metadata API.
 *
 * @module metadata
 * @fileoverview Handles global and dynamic SEO metadata generation.
 * @author
 * ECODrIx Technologies Pvt. Ltd.
 */

export function metadataForPath(path, config = {}) {
  return generateMetadata({
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
    openGraph: {
      url: `${SITE_URL}${path}`,
    },
    ...config,
  });
}

/**
 * Generates JSON-LD structured data for SEO purposes.
 *
 * 1️⃣ organizationJsonLd(overrides)
 *    - Purpose: Provides structured data describing the organization, which helps search engines
 *      understand the company, its branding, contact information, and social profiles.
 *    - Parameters:
 *        overrides (object): Optional. Allows you to overwrite or add fields to the default organization data.
 *    - Returns: A JSON string containing Organization schema markup.
 *    - Example Usage:
 *        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLd() }} />
 *
 * 2️⃣ blogPostingJsonLd(post)
 *    - Purpose: Generates structured data for individual blog posts, helping search engines
 *      recognize content details for rich results (like featured snippets).
 *    - Parameters:
 *        post (object): The blog post object containing title, metaDescription, publishDate, updatedAt, author, featuredImage, and URL.
 *    - Returns: A JSON string containing BlogPosting schema markup.
 *    - Example Usage:
 *        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: blogPostingJsonLd(post) }} />
 *
 * Notes:
 * - Both functions output JSON-LD as a string, ready to be inserted in <script type="application/ld+json">.
 * - Make sure all fields like URLs, images, dates, and author names are correctly populated from your backend.
 */

export function pagesOrganizationJsonLd(overrides = {}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ECODrIx Services",
    description:
      "Digital innovation and web development services provider specializing in custom solutions",
    url: "https://services.ecodrix.com",
    logo: "https://services.ecodrix.com/logo.png",
    foundingDate: "2022",
    sameAs: ["https://twitter.com/ecodrix", "https://www.linkedin.com/company/ecodrix"],
    address: { "@type": "PostalAddress", addressCountry: "India" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8790063821",
      contactType: "customer service",
    },
  };
  return JSON.stringify({ ...base, ...overrides });
}

export function blogPostingJsonLd(post) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: {
      "@type": "ImageObject",
      url: post.featuredImage?.url || "https://services.ecodrix.com/placeholder.jpg",
    },
    datePublished: post.publishDate,
    dateModified: post.updatedAt || post.publishDate,
    author: {
      "@type": "Person",
      name: post.author?.name || "Dhanesh M",
      url: "https://dhanesh-portfolio-tan.vercel.app",
      sameAs: [
        "https://www.linkedin.com/in/dhanesh-mekalthuru-5baa9323b/",
        "https://github.com/dhanesh1232",
        "https://www.instagram.com/erix.__.dhanesh/",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "ECODrIx Services",
      url: "https://services.ecodrix.com",
      logo: {
        "@type": "ImageObject",
        url: "https://services.ecodrix.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://services.ecodrix.com/blog/${post.url}`,
    },
  });
}
