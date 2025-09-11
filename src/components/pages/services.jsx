"use client";

import { services } from "@/lib/client/data";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Star,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { TopGlow, RandomStars } from "./home/stars";

export default function ServicePage() {
  return (
    <div className="min-h-full py-16 px-6 md:px-12 bg-transparent relative overflow-hidden">
      <TopGlow />
      <RandomStars />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-500/10 px-4 py-2 rounded-full mb-6 border border-indigo-200 dark:border-indigo-500/20"
          >
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Premium Web Solutions
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-tight">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Services
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development solutions designed to elevate your
            online presence and transform your digital vision into reality
          </p>
        </motion.div>

        {/* Interactive category filter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {["All", "Development", "Design", "Strategy"].map((category, i) => (
            <button
              key={i}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gray-100 dark:bg-slate-800/50 hover:bg-indigo-100 dark:hover:bg-indigo-500/10 text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-300 border border-gray-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-500/30"
            >
              {category}
            </button>
          ))}
        </motion.div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index}
              className="group relative bg-transparent backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 transform rotate-45 translate-x-8 -translate-y-8" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/20">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="w-14 h-14 bg-transparent opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-150 rounded-full flex items-center justify-center">
                    <service.icon className="w-4 h-4 text-indigo-600 opacity-50 dark:text-indigo-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-indigo-500 transition-colors duration-300">
                  {service.title}
                </h3>

                <div className="relative mb-6 overflow-hidden rounded-xl group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <CheckCircle className="w-5 h-5 mr-3 text-indigo-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto"
                >
                  <Link
                    href="/contact"
                    className="w-full inline-flex justify-center items-center gap-2 bg-gray-200 dark:bg-slate-700/50 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-gray-700 dark:text-gray-300 hover:text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/20"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 relative"
        >
          {/* Floating elements */}
          <div className="absolute -top-10 left-1/4">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="w-6 h-6 bg-indigo-500/10 rounded-full flex items-center justify-center"
            >
              <Star className="w-3 h-3 text-indigo-500" />
            </motion.div>
          </div>

          <div className="absolute -top-5 right-1/4">
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="w-4 h-4 bg-purple-500/10 rounded-full flex items-center justify-center"
            >
              <Star className="w-2 h-2 text-purple-500" />
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-500/5 dark:to-purple-500/5 p-8 rounded-2xl border border-indigo-100 dark:border-indigo-500/20 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-28 h-28 bg-indigo-500/10 rounded-full blur-xl"></div>
            <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
                Let's discuss how we can help bring your vision to life. Contact
                us today for a free consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex group gap-2 items-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/projects"
                    className="inline-flex group gap-2 items-center px-8 py-3 text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-500/10 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-500/20 transition-all duration-300 border border-indigo-200 dark:border-indigo-500/20"
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
