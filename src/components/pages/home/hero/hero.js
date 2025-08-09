"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronsDown,
  Code,
  Megaphone,
  MessageSquare,
} from "lucide-react";
import { Icons } from "@/components/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Hero() {
  const message = encodeURIComponent(
    "Hi, I'm interested in your web development services. I need a website. Please share more details or a free demo."
  );
  const [scroll, setScroll] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 80;
      setScroll(isScroll);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.addEventListener("scroll", handleScroll);
  });

  return (
    <section className="py-16 sm:py-24 px-6 md:px-12 relative overflow-hidden bg-white dark:bg-slate-950 min-h-screen flex items-center">
      {/* Background glow layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(128,0,255,0.05),transparent)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(128,0,255,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.08),transparent)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.15),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 dark:text-white font-medium ${caveat.className}`}
            >
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,255,0.4)]">
                AI-Powered Services
              </span>
              <br />
              to Grow Your Business
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transform your digital presence with{" "}
              <span className="text-purple-600 dark:text-purple-400 font-medium">
                Web Development
              </span>
              ,{" "}
              <span className="text-pink-600 dark:text-pink-400 font-medium">
                SEO
              </span>
              ,{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Marketing
              </span>{" "}
              &{" "}
              <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                AI Agent
              </span>
              .
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-green-500/40 transition-all"
              >
                <Link
                  href={`https://wa.me/918790063821?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact on WhatsApp"
                  className="flex items-center gap-2 text-white"
                >
                  <Icons.whatsapp className="w-5 h-5" />
                  Let’s Connect
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-border hover:border-purple-500 hover:text-purple-500 dark:hover:border-purple-400"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 items-center gap-2"
          >
            {[
              { icon: <Code />, title: "Web Dev", desc: "Modern & Scalable" },
              {
                icon: <Megaphone />,
                title: "Marketing",
                desc: "Results-Driven Growth",
              },
              {
                icon: <MessageSquare />,
                title: "AI Agent",
                desc: "24/7 Smart Support",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-4 md:p-6 rounded-md md:rounded-xl bg-gray-50 dark:bg-slate-800/40 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50 shadow-xl hover:shadow-purple-500/10 transition-all"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-600/20 dark:to-yellow-400/10 w-12 h-12 rounded-md md:rounded-xl flex items-center justify-center">
                  {React.cloneElement(item.icon, {
                    className: "w-6 h-6 text-purple-600 dark:text-purple-400",
                  })}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm truncate text-muted-foreground mt-1">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          {!scroll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.2,
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              exit={{ opacity: 0 }}
              className="fixed bottom-4 left-1/2 -translate-x-1/2 text-purple-400"
            >
              <ChevronsDown className="w-6 h-6 animate-bounce" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
