"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import CodeProfile from "@/components/home/code.profile";
import { Button } from "@/components/ui/button";
import { BsWhatsapp } from "react-icons/bs";
import { ChevronsDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  // Scroll effect with debounce
  useEffect(() => {
    // Initial check for page load with scroll position
    const initialCheck = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);
    };

    // Run initial check
    initialCheck();

    let timeoutId;
    const handleScroll = () => {
      // Clear previous timeout to debounce
      clearTimeout(timeoutId);

      // Set immediate visual feedback
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);

      // Additional debounced check (optional)
      timeoutId = setTimeout(() => {
        const currentScrolled = window.scrollY > 40;
        setScrolled(currentScrolled);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  if (!mounted) {
    return (
      <section id="hero" className="md:py-20 py-12 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Skeleton for text content */}
          <div>
            <Skeleton className="h-12 rounded mb-6 w-3/4" />
            <Skeleton className="h-4 rounded mb-2 w-full" />
            <Skeleton className="h-4 rounded mb-2 w-5/6" />
            <Skeleton className="h-4 rounded mb-8 w-4/5" />
            <div className="flex gap-4">
              <Skeleton className="h-12 rounded-lg w-32" />
              <Skeleton className="h-12 rounded-lg w-32" />
            </div>
          </div>
          {/* Skeleton for code block */}
          <Skeleton className="h-64 rounded-xl" />
        </div>
      </section>
    );
  }
  return (
    <motion.section
      initial="hidden"
      id="hero"
      animate="show"
      variants={container}
      className="min-h-screen h-full flex items-center justify-center pt-20 px-6 md:px-12 bg-gradient-to-tr from-blue-200 to-purple-700 dark:from-blue-900 dark:to-purple-900 relative"
    >
      <div className="w-full max-w-7xl mx-auto text-center md:text-left grid md:grid-cols-2 gap-12 place-content-center items-center">
        <motion.div variants={item}>
          <motion.h1
            variants={item}
            className="sm:text-32xl text-2xl lg:text-4xl font-bold leading-tight text-foreground mb-4"
          >
            Turn Browsers into Buyers with{" "}
            <span className="text-indigo-100 dark:text-indigo-950">
              Customers
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base lg:text-lg text-muted-foreground mb-8"
          >
            {`Get a high-converting website that delivers 15-30 hot leads/week 
        directly to your WhatsApp. Perfect for salons, gyms, coaches & local businesses 
        ready to grow.`}
          </motion.p>

          <div className="space-y-4 mb-6 flex flex-col items-center md:items-start">
            <motion.div variants={item} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="ml-3 text-base font-medium text-gray-600 dark:text-gray-300">
                <span className="font-bold">24/7 Lead Generation:</span>{" "}
                Customers message you directly while you sleep
              </p>
            </motion.div>

            <motion.div variants={item} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="ml-3 font-medium text-gray-700 dark:text-gray-200">
                <span className="font-bold">Zero Missed Opportunities:</span>{" "}
                98% open rate vs 20% email
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="flex flex-col items-center sm:flex-row sm:justify-center gap-4"
          >
            <Button variant="outline-success" asChild>
              <Link
                href="https://wa.me/918143963821"
                aria-label="Contact on WhatsApp"
                className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium transition-all duration-300 rounded-md group"
              >
                {/* Background animation span */}
                <span className="absolute inset-0 w-0 transform origin-right bg-green-600 transition-all duration-300 ease-in-out group-hover:w-full left-0 group-hover:left-0 group-hover:right-auto" />

                {/* Content wrapper to ensure z-index and coloring */}
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  <BsWhatsapp className="text-lg" />
                  Get Your Free Demo
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#work">See More...</Link>
            </Button>
          </motion.div>
        </motion.div>

        <div className="min-h-full">
          <CodeProfile />
        </div>
      </div>
      <AnimatePresence>
        {!scrolled && (
          <Button
            className="absolute bottom-10 translate-x-1/2 z-20 shadow-2xl rounded-full"
            size="icon"
            variant="outline"
            asChild
          >
            <Link href="#services">
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <ChevronsDown />
              </motion.span>
            </Link>
          </Button>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
