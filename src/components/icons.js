import {
  AlignRight,
  ArrowRight,
  Award,
  BarChart2,
  Bot,
  Calendar,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsDown,
  ChevronsUp,
  ChevronUp,
  Clock,
  Code,
  Cpu,
  CreditCard,
  Database,
  ExternalLink,
  FileText,
  Globe,
  Headphones,
  Heart,
  HelpCircle,
  Infinity,
  Layout,
  LayoutTemplate,
  LifeBuoy,
  Lightbulb,
  Link,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Monitor,
  Package,
  Phone,
  Plug,
  Plus,
  Puzzle,
  RefreshCcw,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Users,
  Verified,
  X,
  Zap,
} from "lucide-react";
import { BsLinkedin, BsTelegram, BsWhatsapp } from "react-icons/bs";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaSlack,
} from "react-icons/fa";
import { FaQuoteLeft, FaXTwitter } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";
export const Icons = {
  infinity: Infinity,
  phone: Phone,
  chart: BarChart2,
  search: Search,
  whatsapp: BsWhatsapp,
  twitter: FaXTwitter,
  linkedin: BsLinkedin,
  chevronsUp: ChevronsUp,
  discord: FaDiscord,
  github: FaGithub,
  web: Globe,
  instagram: FaInstagram,
  facebook: FaFacebook,
  telegram: BsTelegram,
  sms: MessageCircle,
  slack: FaSlack,
  voice: Phone,
  rocket: Rocket,
  customSDK: Code,
  checkCircle: CheckCircle,
  cheveronUp: ChevronUp,
  external: ExternalLink,
  chevronDown: ChevronDown,
  link: Link,
  automation: Zap,
  marketing: BarChart2,
  ai: Cpu,
  chatbots: Bot,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  plus: Plus,
  package: Package,
  bot: Bot,
  conversation: MessageSquare,
  message: MessageCircle,
  database: Database,
  plug: Plug,
  creditCard: CreditCard,
  campaign: MdCampaign,
  helpCircle: HelpCircle,
  api: Code,
  landingPage: LayoutTemplate,
  adCampaign: MdCampaign,
  mail: Mail,
  code: Code,
  clock: Clock,
  fileText: FileText,
  monitor: Monitor,
  layout: Layout,
  shield: Shield,
  users: Users,
  integration: Puzzle,
  alignRight: AlignRight,
  cross: X,
  megaPhone: Megaphone,
  arrowRight: ArrowRight,
  chevronsDown: ChevronsDown,
  lightbulb: Lightbulb,
  refresh: RefreshCcw,
  target: Target,
  trendingUp: TrendingUp,
  user: User,
  mapPin: MapPin,
  verified: Verified,
  award: Award,
  headPhones: Headphones,
  headPhones: Headphones, // Add this line to support both cases
  heart: Heart,
  quoteLeft: FaQuoteLeft,
  lifeBuoy: LifeBuoy,
  sparkle: Sparkles,
  calendar: Calendar,
  check: Check,
};

export const RenderChannelIcons = ({ className, channels }) => {
  return (
    <div className={`flex flex-wrap ${className} gap-2 mt-2`}>
      {channels.map((channel) => {
        const Icon = Icons[channel] || Globe;
        return (
          <div
            key={channel}
            className="flex items-center justify-center p-1.5 md:p-2 bg-gray-100 dark:bg-gray-700 rounded-full"
            title={channel.charAt(0).toUpperCase() + channel.slice(1)}
          >
            <Icon className="w-4 h-4" />
          </div>
        );
      })}
    </div>
  );
};

// Create a simple icons.js file
export const RocketIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

export const ConstructionIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  </svg>
);

export const CalendarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);
export const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
