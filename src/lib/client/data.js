import {
  Code2,
  ShoppingCart,
  Search,
  Megaphone,
  MessageSquare,
  Settings,
} from "lucide-react";
import { FaTooth } from "react-icons/fa";

export const services = [
  {
    title: "Web Development",
    href: "custom-web-development",
    id: "custom-web-development",
    description:
      "Tailored solutions built from scratch to meet your specific business requirements.",
    features: [
      "Responsive design",
      "Custom functionality",
      "Performance optimization",
      "Ongoing support",
      "SEO-friendly structure",
      "Cross-browser compatibility",
      "CMS",
    ],
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    icon: ({ className }) => <Code2 className={className} />,
  },
  {
    title: "Dental Website Demo",
    href: "/demo/dental-website-demo/index.html",
    id: "dental-website-demo",
    description:
      "Specialized website solutions tailored for dental practices to showcase services and attract new patients.",
    features: [
      "Online appointment booking",
      "Patient testimonials",
      "Service catalog",
      "Before/after gallery",
      "Staff profiles",
      "Treatment information",
      "Contact forms",
    ],
    image:
      "https://res.cloudinary.com/ddqz4s18g/image/upload/v1755084499/Screenshot_2025-08-13_165721_agebz1.png",
    icon: ({ className }) => (
      <FaTooth className={className} size={24} color="white" />
    ),
  },
  {
    title: "E-Commerce Development",
    href: "/demo/ecommerce-website/index.html",
    id: "e-commerce-development",
    description:
      "Full-featured online store solutions with secure payments and advanced product management.",
    features: [
      "Custom store design",
      "Secure payment gateway integration",
      "Inventory & product management",
      "Custom cart & checkout",
      "Multi-language & multi-currency support",
      "SEO-optimized product pages",
      "CMS",
    ],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    icon: ({ className }) => <ShoppingCart className={className} />,
  },
  {
    title: "SEO Optimization",
    id: "seo-optimization",
    href: "seo-optimization",
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
    id: "advertising",
    href: "advertising",
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
    href: "chatbot-agent-automation",
    id: "chatbot-agent-automation",
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
    title: "Website Maintenance",
    id: "website-maintenance-support",
    href: "website-maintenance-support",
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

export const contactInfo = [
  "📞 Call us: +91 8143963821",
  "📧 Email: contact@ecodrix.com",
  "🕒 Business Hours: Mon-Sat 9AM-6PM",
];
export const navLinks = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/services" },
  //{ id: "blog", label: "Blog", href: "/blog" },
  { id: "disclaimer", label: "Disclaimer", href: "/disclaimer" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
];
export const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-and-conditions" },
  { name: "Disclaimer", href: "/disclaimer" },
];

// Testimonials data
export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    description:
      "ECODrIx transformed our online presence with a stunning website that perfectly represents our brand. The attention to detail and communication throughout the project was exceptional. We saw a 150% increase in leads within the first month!",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Corp",
    description:
      "The e-commerce solution delivered exceptional results, with a 40% increase in conversions. Their technical expertise and problem-solving skills are truly impressive. The team went above and beyond to meet our tight deadline.",
  },
  {
    name: "David Wilson",
    role: "Founder",
    company: "Startup Ventures",
    description:
      "Reliable, professional, and delivered beyond our expectations. Will definitely work with them again for our future projects. The support after launch has been outstanding with 24/7 availability for critical issues.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Digital Solutions",
    description:
      "The mobile app they developed has been downloaded over 500k times with 4.9-star ratings. Their clean code and documentation made future updates extremely easy for our team to handle.",
  },
  {
    name: "James Peterson",
    role: "CTO",
    company: "Enterprise Systems",
    description:
      "We hired ECODrIx to modernize our legacy system and the results were phenomenal. 60% performance improvement and 80% reduction in server costs. Their architectural recommendations saved us thousands.",
  },
  {
    name: "Olivia Smith",
    role: "Creative Director",
    company: "Brand Agency",
    description:
      "As a design-focused agency, we're extremely particular about our digital presence. ECODrIx not only met but exceeded our aesthetic expectations while delivering blazing fast performance.",
  },
];
