import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RandomStars } from "../stars";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/mediaQuery";

export const message = encodeURIComponent(
  "Hi, I'm interested in your premium digital services. Please share more details about your exclusive offerings."
);

const NightSkyHero = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [isVisible, setIsVisible] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % FEATURES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen pt-6 md:pt-10 isolate px-6 lg:px-8 bg-transparent overflow-hidden">
      {isVisible && <RandomStars />}
      <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-32 z-20">
        <div className="text-center">
          <div>
            {/* Animated title with gradient text */}
            <h1
              className={`text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Transform Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Digital Vision
              </span>{" "}
              Into Reality
            </h1>

            {/* Animated description */}
            <p
              className={`mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 transition-all duration-1000 ease-out delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              We create innovative digital solutions that help businesses thrive
              in the modern world. Let's build something amazing together.
            </p>

            <PremiumButton isMobile={isMobile} isVisible={isVisible} />
          </div>
          {/* Luxury Features Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}
            className="w-full max-w-4xl mx-auto mt-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white dark:bg-gray-900/80 backdrop-blur-xl rounded-lg border border-gray-200 dark:border-gray-800 p-2 lg:p-4 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Luxury shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 dark:from-gray-800/0 dark:via-gray-800/5 dark:to-gray-800/0 pointer-events-none"></div>

                <div className="flex flex-row items-start gap-2 relative z-10">
                  <div
                    className={`p-2.5 md:p-4 rounded-xl ${FEATURES[activeFeature].bgColor} border ${FEATURES[activeFeature].borderColor} shadow-lg`}
                  >
                    {React.cloneElement(FEATURES[activeFeature].icon, {
                      className: `${FEATURES[activeFeature].iconColor} w-6 h-6 md:w-8 md:h-8`,
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 m-0 sm:mb-1.5">
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-left text-gray-900 dark:text-white">
                        {FEATURES[activeFeature].name}
                      </h3>
                      <span
                        className={`h-2 w-2 rounded-full ${FEATURES[activeFeature].dotColor} animate-pulse`}
                      />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-left text-gray-600 dark:text-gray-200 mb-2.5 font-light">
                      <span className="hidden sm:block">
                        {FEATURES[activeFeature].description}
                      </span>
                      <span className="block sm:hidden">
                        {FEATURES[activeFeature].description.slice(0, 50) +
                          "..."}
                      </span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {FEATURES[activeFeature].features.map((feature, i) => (
                        <span
                          key={i}
                          className={`px-3 py-0.5 sm:py-1.5 text-[10px] sm:text-xs lg:text-sm font-medium ${FEATURES[activeFeature].tagBgColor} ${FEATURES[activeFeature].tagTextColor} rounded-full border ${FEATURES[activeFeature].tagBorderColor} backdrop-blur-sm`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-5 gap-2">
              {FEATURES.map((feature, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`flex flex-col items-center group`}
                  aria-label={`View ${feature.name} service`}
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-300 mb-1 ${
                      i === activeFeature
                        ? `${feature.indicatorColor} scale-150 w-4`
                        : "bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-500 dark:group-hover:bg-gray-500 w-2"
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!scroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-light tracking-widest">
              EXPLORE FURTHER
            </span>
            <div className="w-8 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex justify-center p-1 backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Icons.chevronsDown className="w-4 h-4 text-gray-400 dark:text-gray-600" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NightSkyHero;

const PremiumButton = ({ isMobile, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 1.1 }}
      className="mt-4 flex flex-col sm:flex-row gap-2 justify-center"
    >
      <Button
        asChild
        size={isMobile ? "sm" : "lg"}
        className={`
        relative bg-gradient-to-r from-green-600 to-green-500 
        hover:from-green-700 hover:to-green-600 
        transition-all duration-300
        text-sm sm:text-base lg:text-lg
        h-10 sm:h-12 lg:h-14
        px-4 sm:px-6 lg:px-8
        rounded-full border-0 overflow-hidden group
        w-full sm:w-auto
      `}
      >
        <Link
          href={`https://wa.me/918790063821?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
          className="flex items-center justify-center gap-2 sm:gap-3 group text-white font-medium"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          <Icons.whatsapp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10" />
          <span className="relative z-10 whitespace-nowrap">
            Begin Your Journey
          </span>
          <Icons.arrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform ease-in-out group-hover:translate-x-1 relative z-10" />
        </Link>
      </Button>

      <Button
        variant="outline"
        size={isMobile ? "sm" : "lg"}
        asChild
        className={`
        relative border-2 border-gold-400/50 
        hover:border-gold-400 bg-transparent 
        hover:bg-gold-500/10 text-gold-200 
        transition-all duration-300
        text-sm sm:text-base lg:text-lg
        h-10 sm:h-12 lg:h-14
        px-4 sm:px-6 lg:px-8
        rounded-full 
        overflow-hidden group
        w-full sm:w-auto
      `}
      >
        <Link
          href="/services"
          className="font-medium flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span className="text-foreground">Explore Services</span>
          <Icons.chevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-foreground group-hover:text-yellow-500 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </motion.div>
  );
};

const FEATURES = [
  {
    name: "Web Applications",
    icon: <Icons.code className="w-7 h-7" />,
    description:
      "Custom web apps and websites designed to convert visitors into customers while syncing with SEO, ads, and automation tools.",
    features: [
      "Modern & Scalable",
      "SEO-Integrated Architecture",
      "High-Speed & Mobile-Friendly",
    ],
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    dotColor: "bg-blue-500",
    tagBgColor: "bg-blue-100 dark:bg-blue-900/30",
    tagTextColor: "text-blue-700 dark:text-blue-300",
    tagBorderColor: "border-blue-200 dark:border-blue-800/30",
    indicatorColor: "bg-blue-500",
  },
  {
    name: "SEO & Google My Business",
    icon: <Icons.search className="w-7 h-7" />,
    description:
      "From Google Search to Google Maps, we optimize SEO and Google My Business to drive organic and local leads.",
    features: [
      "Keyword & Content Optimization",
      "Google My Business Ranking",
      "Backlinks & Authority Building",
    ],
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    dotColor: "bg-purple-500",
    tagBgColor: "bg-purple-100 dark:bg-purple-900/30",
    tagTextColor: "text-purple-700 dark:text-purple-300",
    tagBorderColor: "border-purple-200 dark:border-purple-800/30",
    indicatorColor: "bg-purple-500",
  },
  {
    name: "AI Agents & WhatsApp CMS",
    icon: <Icons.bot className="w-7 h-7" />,
    description:
      "AI-powered chat agents that manage customer queries, leads, and even update your website content directly from WhatsApp.",
    features: [
      "24/7 Smart AI Support",
      "CRM + WhatsApp Integration",
      "Update Website via Messaging",
    ],
    bgColor: "bg-pink-100 dark:bg-pink-900/20",
    borderColor: "border-pink-200 dark:border-pink-800/30",
    iconColor: "text-pink-600 dark:text-pink-400",
    dotColor: "bg-pink-500",
    tagBgColor: "bg-pink-100 dark:bg-pink-900/30",
    tagTextColor: "text-pink-700 dark:text-pink-300",
    tagBorderColor: "border-pink-200 dark:border-pink-800/30",
    indicatorColor: "bg-pink-500",
  },
  {
    name: "Marketing & Ads Automation",
    icon: <Icons.megaPhone className="w-7 h-7" />,
    description:
      "Run and optimize ads across Google, Meta, and more, powered by AI and connected with your website, SEO, and agents.",
    features: [
      "Cross-Platform Ad Management",
      "Smart Budgeting & Conversion Tracking",
      "SEO + Ads Synergy for ROI",
    ],
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    dotColor: "bg-orange-500",
    tagBgColor: "bg-orange-100 dark:bg-orange-900/30",
    tagTextColor: "text-orange-700 dark:text-orange-300",
    tagBorderColor: "border-orange-200 dark:border-orange-800/30",
    indicatorColor: "bg-orange-500",
  },
  {
    name: "Analytics & Insights",
    icon: <Icons.chart className="w-7 h-7" />,
    description:
      "Real-time dashboards with visitor tracking, ad performance, SEO growth, and AI-driven recommendations.",
    features: [
      "Website & Ad Analytics",
      "SEO Performance Reports",
      "AI Insights for Growth",
    ],
    bgColor: "bg-green-100 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800/30",
    iconColor: "text-green-600 dark:text-green-400",
    dotColor: "bg-green-500",
    tagBgColor: "bg-green-100 dark:bg-green-900/30",
    tagTextColor: "text-green-700 dark:text-green-300",
    tagBorderColor: "border-green-200 dark:border-green-800/30",
    indicatorColor: "bg-green-500",
  },
  {
    name: "Lead Management CRM",
    icon: <Icons.users className="w-7 h-7" />,
    description:
      "Centralized CRM that collects leads from website, ads, SEO, WhatsApp, and AI agents — all in one place.",
    features: [
      "Unified Lead Inbox",
      "Automated Follow-ups",
      "AI-Powered Scoring",
    ],
    bgColor: "bg-teal-100 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800/30",
    iconColor: "text-teal-600 dark:text-teal-400",
    dotColor: "bg-teal-500",
    tagBgColor: "bg-teal-100 dark:bg-teal-900/30",
    tagTextColor: "text-teal-700 dark:text-teal-300",
    tagBorderColor: "border-teal-200 dark:border-teal-800/30",
    indicatorColor: "bg-teal-500",
  },
  {
    name: "All-in-One Growth System",
    icon: <Icons.infinity className="w-7 h-7" />,
    description:
      "A complete ecosystem where your website, SEO, ads, AI agents, and WhatsApp CMS work together to maximize business growth.",
    features: [
      "Seamless Integrations",
      "Automation Across Platforms",
      "Maximum ROI Growth Engine",
    ],
    bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    dotColor: "bg-indigo-500",
    tagBgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    tagTextColor: "text-indigo-700 dark:text-indigo-300",
    tagBorderColor: "border-indigo-200 dark:border-indigo-800/30",
    indicatorColor: "bg-indigo-500",
  },
];
