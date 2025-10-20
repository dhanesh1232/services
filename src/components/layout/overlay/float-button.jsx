"use client";
import React from "react";
import styles from "./FloatButton.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

// Web Development Services
const webDevMessage = encodeURIComponent(
  "Hi, I'm interested in your web development services. I need a custom website built for my business. Please share more details or a free demo."
);

// SEO & Digital Marketing Services
const seoMessage = encodeURIComponent(
  "Hi, I'm looking to improve my website's search engine ranking and online visibility. Can you provide SEO services or a free consultation?"
);

// AI & Automation Solutions
const aiAutomationMessage = encodeURIComponent(
  "Hi, I'm interested in AI-powered solutions for automating my business workflows, chatbots, or CRM integration. Please share more details or a free demo."
);

// Full-Service Message
const fullServiceMessage = encodeURIComponent(
  "Hi, I'm looking for comprehensive web solutions including website development, SEO, AI automation, and chatbots. Can you share details or a free demo?"
);

const FloatButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", damping: 10, stiffness: 100 }}
      className="fixed bottom-6 left-4 sm:bottom-8 sm:left-8 z-50"
    >
      <Link
        href={`https://wa.me/918143963821?text=${fullServiceMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className={`flex items-center gap-2 sm:gap-3 no-underline group`}
      >
        <motion.div
          className={`${styles.buttonContainer} relative w-12 h-12 sm:w-14 sm:h-14`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: [0.95, 1, 0.95],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Background Circle */}
          <svg
            className={`${styles.circle} absolute top-0 left-0 w-full h-full`}
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="#25D366"
              stroke="#128C7E"
              strokeWidth="3"
            />
          </svg>

          {/* WhatsApp Icon */}
          <Icons.whatsapp
            className={`${styles.whatsappIcon} text-white w-5 h-5 sm:w-7 sm:h-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          />

          {/* Pulsing Effect */}
          <motion.div
            className={`${styles.pulseCircle} absolute inset-0 rounded-full border-2 border-green-400`}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default FloatButton;
