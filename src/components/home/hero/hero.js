import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BsWhatsapp } from "react-icons/bs";
import {
  ChevronsDown,
  Sparkles,
  Zap,
  ShieldCheck,
  Settings,
  CircleCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NeonBg } from "@/components/re-use";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 p-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="h-12 bg-gray-300 rounded-full w-3/4 mx-auto animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded-full w-full animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded-full w-5/6 mx-auto animate-pulse"></div>
          <div className="flex gap-4 justify-center">
            <div className="h-12 w-32 bg-blue-400/40 rounded-lg animate-pulse"></div>
            <div className="h-12 w-32 bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  // Feature definitions with fixed Tailwind colors:
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "AI Chat Agent",
      description: "24/7 sales rep that qualifies leads automatically.",
      colorClass: "text-blue-600 bg-blue-100",
      borderColorClass: "border-blue-300",
      shadowColorClass: "shadow-blue-400/40",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
      title: "SEO Optimization",
      description: "Get found on Google with high-intent traffic.",
      colorClass: "text-pink-600 bg-pink-100",
      borderColorClass: "border-pink-300",
      shadowColorClass: "shadow-pink-400/40",
    },
    {
      icon: <Settings className="w-6 h-6 text-lime-700" />,
      title: "Google & Meta Ads",
      description: "Launch high-ROI campaigns in days, not weeks.",
      colorClass: "text-lime-700 bg-lime-100",
      borderColorClass: "border-lime-300",
      shadowColorClass: "shadow-lime-400/40",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      title: "Conversion-Driven Design",
      description: "Designed to guide visitors into action.",
      colorClass: "text-purple-600 bg-purple-100",
      borderColorClass: "border-purple-300",
      shadowColorClass: "shadow-purple-400/40",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center p-6 py-12 relative overflow-hidden">
      {/* Background gradients and shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 flex">
          <div
            className="w-1/2 h-full bg-gradient-to-br from-blue-200 to-transparent clip-polygon"
            style={{
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          />
          <div
            className="w-1/2 h-full bg-gradient-to-br from-pink-200 to-transparent clip-polygon"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none" />
      </div>
      <NeonBg />

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 100 + 50;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-300 opacity-20"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                background: `radial-gradient(circle, rgba(59, 130, 246, 0.25), transparent 70%)`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 50],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left text content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-400 bg-pink-100"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-medium text-pink-600">
                  High-Converting Websites
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Get 30+ Qualified Leads/Week with <br />
                <span className="bg-gradient-to-r from-blue-600 to-lime-700 bg-clip-text text-transparent">
                  SEO, Ads & AI-Powered Sites
                </span>
              </h1>

              <p className="text-xl mt-4 leading-relaxed text-muted-foreground">
                Our conversion-focused websites + live AI agents + high-ROI ads
                turn cold traffic into customers — on autopilot.
              </p>

              <ul className="mt-6 space-y-3 max-w-md mx-auto lg:mx-0 text-foreground text-left">
                {[
                  "Custom Web Design with SEO",
                  "Google + Meta Paid Ads",
                  "AI Lead Qualification",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 flex-shrink-0 text-lime-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    className="px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-green-500 text-white"
                    size="lg"
                  >
                    <Link href="https://wa.me/918143963821">
                      <span className="flex items-center gap-2">
                        <BsWhatsapp className="mr-1 text-xl" />
                        Let's Connect
                      </span>
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    className="px-8 py-6 text-lg font-semibold rounded-lg border-2 border-blue-600 hover:bg-white/20 text-blue-600"
                    size="lg"
                  >
                    <Link href="#work">See Case Studies</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: "15-30", label: "Leads/Week" },
                { value: "90%", label: "Open Rate" },
                { value: "24h", label: "Setup Quickly" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-transparent shadow-inner bg-transparent/30"
                >
                  <p className="text-2xl font-bold text-blue-600">
                    {stat.value}
                  </p>
                  <p className="text-sm text-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="flex-1 grid grid-cols-2 gap-4 max-w-lg"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -7,
                  boxShadow: `0 10px 25px var(--tw-shadow-color)`,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`p-6 rounded-xl shadow-xl border border-transparent transition-all border-opacity-30 bg-transparent/20`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ y: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.div whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="ghost"
                className="rounded-full w-12 h-12 p-0 border-2 border-blue-600 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80"
                size="icon"
              >
                <Link href="#services">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronsDown className="w-6 h-6 text-blue-600" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
