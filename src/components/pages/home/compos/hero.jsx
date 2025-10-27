"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";
import { useMediaQuery } from "@/hooks/mediaQuery";
import { GlowLine } from "./glow";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export default function Hero() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [activeFeature, setActiveFeature] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  const message = encodeURIComponent(
    "Hi, I'm interested in your premium digital services. Please share more details about your exclusive offerings."
  );

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const generated = [...Array(20)].map(() => ({
      x: Math.random() * 100 + "vw",
      y: Math.random() * 100 + "vh",
      scale: Math.random() * 0.5 + 0.5,
      width: Math.random() * 20 + 5 + "px",
      height: Math.random() * 20 + 5 + "px",
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generated);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % FEATURES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden h-full flex items-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${FEATURES[activeFeature].bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Premium animated particle background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-gold-300 to-gold-500 opacity-20"
            initial={{ x: p.x, y: p.y, scale: p.scale }}
            animate={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ width: p.width, height: p.height }}
          />
        ))}
      </div>

      {/* Subtle luxury pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0wLDMwIGgzMCBNMzAsMCB2NjAgTTMwLDMwIGgzMCBNMzAsMzAgdjMwIE0zMCwzMCBoLTMwIE0zMCwzMCB2LTMwIi8+PC9nPjwvc3ZnPg==')]"></div>

      {/* Gold gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0"></div>

      {/* Animated background transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFeature}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${FEATURES[activeFeature].bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 py-20">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
            className="text-center"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, type: "spring" }}
              className="mb-8 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-700 to-gold-500 px-4 py-2 rounded-full border border-gold-300/30 shadow-lg"
            >
              <Icons.sparkle className="w-4 h-4 text-yellow-500" />
              <span className="text-xs uppercase tracking-widest text-white font-semibold">
                Exclusive Premium Digital Services
              </span>
              <Icons.sparkle className="w-4 h-4 text-yellow-500" />
            </motion.div>

            <div className="relative bg-gradient-to-r from-transparent py-6 md:py-8 via-slate-950/60 to-transparent">
              {/* Luxury decorative elements */}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent to-gold-400/50 hidden lg:block"></div>
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-l from-transparent to-gold-400/50 hidden lg:block"></div>

              <h1
                className={`text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight ${playfair.className}`}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="block"
                >
                  Luxury Digital Excellence
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500"
                >
                  Tailored for Success
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Experience bespoke digital solutions crafted with precision and
                elegance. Our exclusive services in{" "}
                <span className="text-blue-300 font-medium">
                  Web Development
                </span>
                , <span className="text-purple-300 font-medium">SEO</span>,{" "}
                <span className="text-pink-300 font-medium">AI Solutions</span>{" "}
                &{" "}
                <span className="text-orange-300 font-medium">
                  Marketing Automation
                </span>{" "}
                deliver unparalleled results for discerning clients.
              </motion.p>
            </div>

            {/* Premium Buttons */}
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
                  shadow-xl hover:shadow-green-500/40 
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
                  hover:text-white transition-all duration-300
                  text-sm sm:text-base lg:text-lg
                  h-10 sm:h-12 lg:h-14
                  px-4 sm:px-6 lg:px-8
                  hover:shadow-lg rounded-full 
                  overflow-hidden group
                  w-full sm:w-auto
                `}
              >
                <Link
                  href="/services"
                  className="font-medium flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span className="text-white">
                    Discover Exclusive Services
                  </span>
                  <Icons.chevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-yellow-500 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="mt-12 flex flex-col items-center"
            >
              <p className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-widest">
                Trusted By Elite Brands
              </p>
              <div className="flex items-center justify-center gap-8 opacity-80">
                <div className="h-8 w-8 bg-white/10 rounded-lg backdrop-blur-sm"></div>
                <div className="h-8 w-8 bg-white/10 rounded-lg backdrop-blur-sm"></div>
                <div className="h-8 w-8 bg-white/10 rounded-lg backdrop-blur-sm"></div>
                <div className="h-8 w-8 bg-white/10 rounded-lg backdrop-lg backdrop-blur-sm"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Luxury Features Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}
            className="w-full max-w-4xl mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4 lg:p-8 shadow-2xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Luxury shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 pointer-events-none"></div>

                <div className="flex flex-col md:flex-row items-start gap-3 relative z-10">
                  <div
                    className={`p-4 rounded-xl bg-${FEATURES[activeFeature].color}-500/20 border border-${FEATURES[activeFeature].color}-400/30 shadow-lg`}
                  >
                    {React.cloneElement(FEATURES[activeFeature].icon, {
                      className: `text-${FEATURES[activeFeature].color}-300 w-6 h-6 md:w-8 md:h-8`,
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {FEATURES[activeFeature].name}
                      </h3>
                      <span
                        className={`h-2 w-2 rounded-full bg-${FEATURES[activeFeature].color}-400 animate-pulse`}
                      ></span>
                    </div>
                    <p className="text-base text-gray-200 mb-2.5 font-light">
                      {FEATURES[activeFeature].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {FEATURES[activeFeature].features.map((feature, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1.5 text-xs lg:text-sm font-medium bg-${FEATURES[activeFeature].color}-500/20 text-${FEATURES[activeFeature].color}-100 rounded-full border border-${FEATURES[activeFeature].color}-400/30 backdrop-blur-sm`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-2">
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
                        ? `${feature.color} scale-150 w-4`
                        : "bg-white/40 group-hover:bg-white/70 w-2"
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
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
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gold-200/80 mb-2 font-light tracking-widest">
              EXPLORE FURTHER
            </span>
            <div className="w-8 h-12 rounded-full border border-yellow-400/30 flex justify-center p-1 backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-yellow-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}

      <GlowLine
        orientation="horizontal"
        position="50%"
        color="blue"
        className="z-20"
      />
    </section>
  );
}
const FEATURES = [
  {
    name: "Web Applications",
    icon: <Icons.code className="w-7 h-7" />,
    title: "Smart, Scalable Websites",
    description:
      "Custom web apps and websites designed to convert visitors into customers while syncing with SEO, ads, and automation tools.",
    features: [
      "Modern & Scalable",
      "SEO-Integrated Architecture",
      "High-Speed & Mobile-Friendly",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", // dev team coding on laptops
    color: "bg-blue-400",
  },
  {
    name: "SEO & Google My Business",
    icon: <Icons.search className="w-7 h-7" />,
    title: "Rank & Get Found Everywhere",
    description:
      "From Google Search to Google Maps, we optimize SEO and Google My Business to drive organic and local leads.",
    features: [
      "Keyword & Content Optimization",
      "Google My Business Ranking",
      "Backlinks & Authority Building",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Google search results page on a laptop
    color: "bg-purple-400",
  },
  {
    name: "AI Agents & WhatsApp CMS",
    icon: <Icons.bot className="w-7 h-7" />,
    title: "AI That Manages & Engages",
    description:
      "AI-powered chat agents that manage customer queries, leads, and even update your website content directly from WhatsApp.",
    features: [
      "24/7 Smart AI Support",
      "CRM + WhatsApp Integration",
      "Update Website via Messaging",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop", // WhatsApp chat on phone with AI
    color: "bg-pink-400",
  },
  {
    name: "Marketing & Ads Automation",
    icon: <Icons.megaPhone className="w-7 h-7" />,
    title: "AI-Driven Ads & Campaigns",
    description:
      "Run and optimize ads across Google, Meta, and more, powered by AI and connected with your website, SEO, and agents.",
    features: [
      "Cross-Platform Ad Management",
      "Smart Budgeting & Conversion Tracking",
      "SEO + Ads Synergy for ROI",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2070&auto=format&fit=crop", // marketer managing ad dashboard
    color: "bg-orange-400",
  },
  {
    name: "Analytics & Insights",
    icon: <Icons.chart className="w-7 h-7" />,
    title: "Data-Driven Decisions",
    description:
      "Real-time dashboards with visitor tracking, ad performance, SEO growth, and AI-driven recommendations.",
    features: [
      "Website & Ad Analytics",
      "SEO Performance Reports",
      "AI Insights for Growth",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", // business dashboard with analytics charts
    color: "bg-green-400",
  },
  {
    name: "Lead Management CRM",
    icon: <Icons.users className="w-7 h-7" />,
    title: "Capture & Convert Leads",
    description:
      "Centralized CRM that collects leads from website, ads, SEO, WhatsApp, and AI agents — all in one place.",
    features: [
      "Unified Lead Inbox",
      "Automated Follow-ups",
      "AI-Powered Scoring",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop", // team managing customer relationships
    color: "bg-teal-400",
  },
  {
    name: "All-in-One Growth System",
    icon: <Icons.infinity className="w-7 h-7" />,
    title: "Everything Connected",
    description:
      "A complete ecosystem where your website, SEO, ads, AI agents, and WhatsApp CMS work together to maximize business growth.",
    features: [
      "Seamless Integrations",
      "Automation Across Platforms",
      "Maximum ROI Growth Engine",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", // futuristic connected digital ecosystem
    color: "bg-indigo-400",
  },
];
