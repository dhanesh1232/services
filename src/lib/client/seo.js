const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://services.ecodrix.com";
const SITE_NAME = "ECODrIx";
export const defaultMeta = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "ECODrIx – All-in-One AI Platform for Marketing, Web development, CRM, and Customer Support",
    template:
      "%s | ECODrIx – AI Automation & Web development & CRM SaaS Platform",
  },
  description:
    "ECODrIx is an all-in-one AI-powered SaaS platform offering multichannel automation, CRM integration, marketing campaigns, customer support, real-time conversations, analytics, and intelligent workflows for growing businesses. professional services in web development, AI-powered chatbot solutions, and marketing automation. We help businesses scale with smart, reliable, and scalable digital solutions.",
  keywords: [
    "AI chatbot platform",
    "CRM automation",
    "customer support software",
    "sales automation",
    "marketing campaigns",
    "lead generation",
    "business automation SaaS",
    "WhatsApp chatbot",
    "Instagram automation",
    "Facebook Messenger bot",
    "web chat widget",
    "multi-channel engagement",
    "real-time chat",
    "workflow automation",
    "conversation analytics",
    "broadcast messages",
    "message templates",
    "web development",
    "AI chatbot development",
    "WhatsApp chatbot",
    "Instagram chatbot",
    "Facebook chatbot",
    "custom websites",
    "marketing automation",
    "SaaS development",
    "Next.js services",
    "ECODrIx services",
    "erix",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "ECODrIx – Web & AI Chatbot Development Services",
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
    title: "ECODrIx | Web & AI Chatbot Development Services",
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
  applicationName: "ECODrIx",
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
  const titleString =
    typeof title === "object" ? getSafe(title, "default", "") : String(title);
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
      default:
        typeof title === "object" ? getSafe(title, "default", "") : title,
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
