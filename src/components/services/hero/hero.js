"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

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
      <section className="md:py-20 py-12 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Skeleton for text content */}
          <div>
            <div className="h-12 bg-background rounded mb-6 w-3/4"></div>
            <div className="h-4 bg-background rounded mb-2 w-full"></div>
            <div className="h-4 bg-background rounded mb-2 w-5/6"></div>
            <div className="h-4 bg-background rounded mb-8 w-4/5"></div>
            <div className="flex gap-4">
              <div className="h-12 bg-background rounded-lg w-32"></div>
              <div className="h-12 bg-background rounded-lg w-32"></div>
            </div>
          </div>
          {/* Skeleton for code block */}
          <div className="h-64 bg-background rounded-xl"></div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="md:py-20 py-12 px-6 md:px-12 bg-background"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={item}>
          <motion.h1
            variants={item}
            className="sm:text-2xl text-xl lg:text-4xl font-bold leading-tight text-foreground mb-4"
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

          <div className="space-y-4 mb-6">
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
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/918143963821"
              aria-label="Contact on WhatsApp"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Your Free Demo
            </a>
            <Link
              href="#work"
              className="border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              See More...
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="block ml-4 md:ml-0">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -left-6 w-full h-full border-2 border-indigo-300 dark:border-indigo-600 rounded-xl"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative bg-background p-2 rounded-xl shadow-lg border border-border"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="flex gap-1 p-3 bg-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-4 text-gray-300 font-mono text-sm">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = {"{"}{" "}
                  <br />
                  <span className="ml-4 text-green-400">name:</span>{" "}
                  <span className="text-yellow-300">{`'ECODrIx'`}</span>, <br />
                  <span className="ml-4 text-green-400">specialty:</span>{" "}
                  <span className="text-yellow-300">{`'React & Next.js'`}</span>
                  , <br />
                  <span className="ml-4 text-green-400">experience:</span>{" "}
                  <span className="text-amber-500">3+</span>{" "}
                  <span className="text-gray-500">years</span> <br />
                  {"}"}; <br />
                  <br />
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-400">buildProject</span>() {"{"}{" "}
                  <br />
                  <span className="ml-4 text-purple-400">return</span>{" "}
                  <span className="text-yellow-300">
                    {`'Your Amazing Website'`}
                  </span>
                  ; <br />
                  {"}"}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
