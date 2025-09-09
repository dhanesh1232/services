"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/icons";

const TopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollTimeout = useRef(null);

  // Throttle scroll handler for better performance
  const toggleVisible = useCallback(() => {
    if (scrollTimeout.current) return;

    scrollTimeout.current = setTimeout(() => {
      const scrolled = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercent = (scrolled / (scrollHeight - clientHeight)) * 100;

      setScrollProgress(Math.min(scrollPercent, 100));
      setVisible(scrolled > 100);

      scrollTimeout.current = null;
    }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [toggleVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate the dasharray and dashoffset for the circular progress
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          onClick={scrollToTop}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="fixed z-50 bottom-8 p-0 m-0 focus:ring-0 outline-none ring-0 active:ring-0 active:outline-none right-8 md:w-12 w-10 h-10 md:h-12 bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out flex group items-center justify-center group backdrop-blur-sm bg-opacity-90 dark:bg-opacity-95 border border-slate-700/30 dark:border-slate-600/30 focus:outline-none"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileFocus={{ scale: 1.05 }}
        >
          {/* Circular progress background */}
          <svg
            className="absolute w-full h-full -rotate-90"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="4"
              fill="none"
              className="dark:stroke-white/15"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashoffset}
              className="text-white transition-all duration-300 ease-out dark:text-white"
            />
          </svg>

          {/* Arrow icon with tooltip */}
          <div className="relative flex flex-col items-center">
            <motion.div
              className="w-3.5 h-3.5 md:w-5 md:h-5 text-center flex items-center justify-center"
              animate={{
                y: isHovered ? [0] : [0, -2, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icons.chevronsUp className="text-gray-400 group-hover:text-white dark:text-gray-600" />
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default TopButton;
