import { Icons } from "@/components/icons";
import {
  Code2,
  ShoppingCart,
  Search,
  Megaphone,
  MessageSquare,
  Settings,
  BarChart,
  Palette,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { FaTooth } from "react-icons/fa";

export const services = [
  {
    title: "Custom Website",
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
    title: "WhatsApp CMS Manager (Beta)",
    id: "whatsapp-cms-manager",
    href: "whatsapp-cms-manager",
    description:
      "Manage your website content directly from WhatsApp. Beta users get **50% OFF**.",
    features: [
      "WhatsApp-based CMS",
      "Add & update blogs, products, pages",
      "AI content suggestions",
      "Secure & simple workflow",
      "Multi-user access",
      "50% OFF for Beta access",
    ],
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    icon: ({ className }) => <Icons.whatsapp className={className} />,
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
  // {
  //   title: "Dental Website",
  //   href: "/demo/dental-website-demo/index.html",
  //   id: "dental-website-demo",
  //   description:
  //     "Specialized website solutions tailored for dental practices to showcase services and attract new patients.",
  //   features: [
  //     "Online appointment booking",
  //     "Patient testimonials",
  //     "Service catalog",
  //     "Before/after gallery",
  //     "Staff profiles",
  //     "Treatment information",
  //     "Contact forms",
  //   ],
  //   image:
  //     "https://res.cloudinary.com/ddqz4s18g/image/upload/v1755084499/Screenshot_2025-08-13_165721_agebz1.png",
  //   icon: ({ className }) => (
  //     <FaTooth className={className} size={24} color="white" />
  //   ),
  // },
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
  // --- NEW SERVICES ADDED ---
  {
    title: "Google & Meta Ads",
    id: "google-meta-ads",
    href: "google-meta-ads",
    description:
      "Run high-converting campaigns on Google & Meta to attract more customers and maximize ROI.",
    features: [
      "Google Search & Display campaigns",
      "Meta Ads (Facebook & Instagram)",
      "Retargeting strategies",
      "Conversion tracking",
      "A/B testing",
      "Detailed reporting",
    ],
    image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg",
    icon: ({ className }) => <BarChart className={className} />,
  },
  {
    title: "Logo & Graphic Design",
    id: "logo-graphic-design",
    href: "logo-graphic-design",
    description:
      "Creative branding and design solutions to help your business stand out visually.",
    features: [
      "Professional logo design",
      "Business cards & stationery",
      "Social media graphics",
      "Brand guidelines",
      "Custom illustrations",
      "Marketing collateral",
    ],
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
    icon: ({ className }) => <Palette className={className} />,
  },
  {
    title: "Google My Business Setup",
    id: "gmb-setup",
    href: "gmb-setup",
    description:
      "Set up and verify your Google My Business profile to boost local visibility.",
    features: [
      "Business profile creation",
      "Category & service listing",
      "Location pin setup",
      "Photos & branding upload",
      "Basic SEO optimization",
      "Verification support",
    ],
    image: "https://images.pexels.com/photos/756744/pexels-photo-756744.jpeg",
    icon: ({ className }) => <MapPin className={className} />,
  },
  {
    title: "Google My Business Optimization",
    id: "gmb-optimization",
    href: "gmb-optimization",
    description:
      "Optimize your GMB listing for higher rankings in local searches and maps.",
    features: [
      "Review & rating strategy",
      "Keyword-rich descriptions",
      "Geo-tagged photos",
      "Posts & updates management",
      "Competitor analysis",
      "Performance insights",
    ],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    icon: ({ className }) => <TrendingUp className={className} />,
  },
];
export const options = services.map((each) => ({
  value: each.id,
  label: each.title,
}));

export const otherOptions = [
  { value: "consulting", label: "Consulting" },
  { value: "others", label: "Others" },
];

export const serviceOptions = [...options, ...otherOptions];

export const budgetRanges = [
  {
    label: "Under ₹10,000",
    value: "under-10k",
  },
  {
    label: "₹10,000 - ₹50,000",
    value: "10k-50k",
  },
  {
    label: "₹50,000 - ₹1,00,000",
    value: "50k-1l",
  },
  {
    label: "₹1,00,000 - ₹5,00,000",
    value: "1l-5l",
  },
  {
    label: "Over ₹5,00,000",
    value: "over-5l",
  },
  {
    label: "Not sure yet",
    value: "not-sure",
  },
];

export const timeLine = [
  {
    label: "ASAP",
    value: "asap",
  },
  {
    label: "Within 2 weeks",
    value: "2-weeks",
  },
  {
    label: "Within 1 month",
    value: "1-month",
  },
  {
    label: "Within 3 months",
    value: "3-months",
  },
  {
    label: "Flexible",
    value: "flexible",
  },
  {
    label: "Not sure yet",
    value: "not-sure",
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
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "disclaimer", label: "Disclaimer", href: "/disclaimer" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
];
export const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-and-conditions" },
  { name: "Cookies Policy", href: "/cookie-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
];

// Testimonials data
export const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Managing Director",
    company: "TechVision Solutions",
    description:
      "ECODrIx delivered an outstanding e-commerce platform for our business in Mumbai. Their expertise in creating a seamless user experience resulted in a 65% increase in our online sales. The team's commitment to quality and timely delivery was exceptional.",
  },
  {
    name: "Emma Thompson",
    role: "Operations Director",
    company: "London Digital Hub",
    description:
      "Working with ECODrIx from the UK was a breeze despite the time difference. They developed our company website with remarkable attention to detail and integrated advanced analytics that helped us achieve a 90% increase in qualified leads.",
  },
  {
    name: "Priya Sharma",
    role: "CEO",
    company: "Innovate Bangalore",
    description:
      "ECODrIx transformed our startup's digital presence completely. Their team's understanding of the Indian market and technical expertise helped us create a mobile-responsive platform that saw 200% growth in user engagement within three months.",
  },
  {
    name: "Lars Nielsen",
    role: "Marketing Head",
    company: "Nordic Tech Solutions",
    description:
      "From Denmark, we were initially hesitant about offshore development, but ECODrIx proved to be an excellent choice. They built our B2B platform with exceptional security features and intuitive design, resulting in a 45% reduction in customer onboarding time.",
  },
  {
    name: "Amit Verma",
    role: "Director",
    company: "Digital Dynamics Delhi",
    description:
      "The chatbot solution implemented by ECODrIx has revolutionized our customer service. We've seen a 70% reduction in response time and significantly improved customer satisfaction. Their technical support has been outstanding.",
  },
  {
    name: "Sarah Williams",
    role: "Head of Digital",
    company: "Manchester Marketing Co.",
    description:
      "ECODrIx's SEO optimization services have been transformative for our agency. Within six months, our client websites saw an average increase of 80% in organic traffic. Their data-driven approach and regular reporting kept us informed throughout the process.",
  },
];
