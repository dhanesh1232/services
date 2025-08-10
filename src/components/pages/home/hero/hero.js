"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

const FEATURES = [
  {
    name: "Web Development",
    icon: <Icons.code className="w-7 h-7" />,
    title: "Websites That Convert",
    description:
      "Custom, fast, and mobile-friendly websites built to generate leads and sales.",
    features: ["Modern & Scalable", "SEO-Optimized", "High-Speed Performance"],
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "SEO",
    icon: <Icons.search className="w-7 h-7" />,
    title: "Rank #1 on Google",
    description:
      "Drive organic traffic and get found by the right audience with proven SEO strategies.",
    features: ["Keyword Optimization", "Content Strategy", "Backlink Building"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "AI & Chat Agents",
    icon: <Icons.bot className="w-7 h-7" />,
    title: "24/7 Smart Support",
    description:
      "AI-powered chatbots and live chat to handle leads, support, and sales automatically.",
    features: ["Multi-language Support", "CRM Integration", "Smart Responses"],
    gradient: "from-pink-500 to-orange-500",
  },
  {
    name: "Marketing Automation",
    icon: <Icons.megaPhone className="w-7 h-7" />,
    title: "AI-Driven Marketing",
    description:
      "Automate and optimize campaigns across platforms for maximum ROI.",
    features: ["Cross-Platform Ads", "Smart Budgeting", "Conversion Tracking"],
    gradient: "from-orange-500 to-yellow-500",
  },
];

export default function Hero() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scroll, setScroll] = useState(false);
  const message = encodeURIComponent(
    "Hi, I'm interested in your web development services. I need a website. Please share more details or a free demo."
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
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % FEATURES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-28 px-4 md:px-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 min-h-screen flex items-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(128,0,255,0.08),transparent)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(128,0,255,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.12),transparent)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="text-center"
          >
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 dark:text-white font-bold ${caveat.className}`}
            >
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,0,255,0.5)]">
                We Build Websites & AI Tools
              </span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl">
                That Bring You Clients — Fast
              </span>
            </h1>

            <p className="mt-8 text-xl sm:text-2xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Trusted by 50+ businesses worldwide to boost revenue through{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Web Development
              </span>
              ,{" "}
              <span className="text-pink-600 dark:text-pink-400 font-semibold">
                SEO
              </span>
              ,{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                Marketing
              </span>{" "}
              &{" "}
              <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                AI Agent
              </span>
              .
            </p>

            {/* Enhanced Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-xl hover:shadow-green-500/30 transition-all duration-300 text-lg h-14 px-8"
              >
                <Link
                  href={`https://wa.me/918790063821?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact on WhatsApp"
                  className="flex items-center gap-3 group text-white"
                >
                  <Icons.whatsapp className="w-6 h-6" />
                  Let's Connect
                  <Icons.arrowRight className="w-5 h-5 transition-transform ease-in-out group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:border-purple-500 hover:text-purple-500 dark:hover:border-purple-400 transition-all duration-300 text-lg h-14 px-8 hover:shadow-lg"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>

          {/* Enhanced Features */}
          <div className="w-full max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-slate-800 backdrop-blur-xl rounded-xl border border-gray-100 dark:border-slate-700 shadow-xl bg-opacity-45 p-4 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`bg-gradient-to-br ${FEATURES[activeFeature].gradient} bg-opacity-10 dark:bg-opacity-20 p-1.5 md:p-3 rounded-md`}
                  >
                    {React.cloneElement(FEATURES[activeFeature].icon, {
                      className: `text-white`,
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                      {FEATURES[activeFeature].name}
                    </h3>
                    <p className="mt-1 text-base lg:text-lg text-gray-700 dark:text-gray-200">
                      {FEATURES[activeFeature].description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-3">
                      {FEATURES[activeFeature].features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 rounded-full shadow-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-6 gap-3">
              {FEATURES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeFeature
                      ? "w-10 bg-gradient-to-r from-purple-500 to-pink-500"
                      : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`View feature ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          {!scroll && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.5,
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              exit={{ opacity: 0 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 text-purple-500 dark:text-purple-400"
            >
              <Icons.chevronsDown className="w-8 h-8 animate-bounce" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
