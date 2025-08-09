import {
  Code2,
  ShoppingCart,
  Palette,
  Search,
  Megaphone,
  MessageSquare,
  Settings,
  LineChart,
} from "lucide-react";

export const services = [
  {
    title: "Custom Web Development",
    description:
      "Tailored solutions built from scratch to meet your specific business requirements.",
    features: [
      "Responsive design",
      "Custom functionality",
      "Performance optimization",
      "Ongoing support",
      "SEO-friendly structure",
      "Cross-browser compatibility",
    ],
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    icon: ({ className }) => <Code2 className={className} />,
  },
  {
    title: "E-Commerce Development",
    description:
      "Full-featured online store solutions with secure payments and advanced product management.",
    features: [
      "Custom store design",
      "Secure payment gateway integration",
      "Inventory & product management",
      "Custom cart & checkout",
      "Multi-language & multi-currency support",
      "SEO-optimized product pages",
    ],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    icon: ({ className }) => <ShoppingCart className={className} />,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your search engine rankings with proven optimization techniques.",
    features: [
      "Keyword research & strategy",
      "On-page SEO optimization",
      "Technical SEO improvements",
      "Backlink building",
      "Content optimization",
      "Performance tracking",
    ],
    image:
      "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg",
    icon: ({ className }) => <Search className={className} />,
  },
  {
    title: "Advertising",
    description:
      "Reach the right audience and grow your brand with targeted marketing campaigns.",
    features: [
      "Social media marketing",
      "Google Ads & Meta Ads campaigns",
      "Email marketing automation",
      "Content marketing",
      "Performance tracking",
      "Brand awareness strategies",
    ],
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg",
    icon: ({ className }) => <Megaphone className={className} />,
  },
  {
    title: "Chatbot Agent & Automation",
    description:
      "AI-powered chatbots for websites, WhatsApp, Facebook, and Instagram to automate communication.",
    features: [
      "Multi-platform chatbot integration",
      "24/7 automated support",
      "Lead capture & qualification",
      "CRM integration",
      "Multi-language support",
      "Automated follow-ups",
    ],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    icon: ({ className }) => <MessageSquare className={className} />,
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Keep your site updated, secure, and running smoothly with regular maintenance.",
    features: [
      "Security updates & patching",
      "Performance monitoring",
      "Bug fixes",
      "Content updates",
      "Regular backups",
      "Technical support",
    ],
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    icon: ({ className }) => <Settings className={className} />,
  },
];

export const navLinks = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/services" },
  //{ id: "blog", label: "Blog", href: "/blog" },
  { id: "disclaimer", label: "Disclaimer", href: "/disclaimer" },
  { id: "contact", label: "Contact", href: "/contact" },
];
export const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-and-conditions" },
  { name: "Disclaimer", href: "/disclaimer" },
];
