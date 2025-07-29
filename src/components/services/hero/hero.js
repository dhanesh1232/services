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
      <section className="md:py-20 py-12 px-6 md:px-12 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Skeleton for text content */}
          <div>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded mb-6 w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-5/6"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-8 w-4/5"></div>
            <div className="flex gap-4">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-32"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-32"></div>
            </div>
          </div>
          {/* Skeleton for code block */}
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="md:py-20 py-12 px-6 md:px-12 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={item}>
          <motion.h1
            variants={item}
            className="sm:text-3xl text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-4"
          >
            Modern Web Development{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Solutions
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          >
            {`Professional freelance web development services tailored to your
              business needs. Let's build something amazing together.`}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              aria-label="Go to contact section"
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              Get Started
            </Link>
            <Link
              href="#work"
              className="border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              View Work
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
              className="relative bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
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
