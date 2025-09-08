import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { contactInfo } from "@/lib/client/data";

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px 0px 0px 0px" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Also hide when menu is open to prevent overlapping
  useEffect(() => {
    if (!isInView) {
      setIsVisible(false);
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white overflow-hidden"
          >
            <div className="relative py-2 overflow-hidden">
              <motion.div
                initial={{ x: "100%" }}
                animate={{
                  x: "-100%",
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                }}
                className="whitespace-nowrap inline-flex items-center"
              >
                {[...contactInfo, ...contactInfo].map((text, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium px-4 flex items-center"
                  >
                    {text}
                    {index < contactInfo.length * 2 - 1 && (
                      <span className="mx-4 opacity-50">•</span>
                    )}
                  </span>
                ))}
              </motion.div>

              {/* Pause on hover */}
              <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Announcement;
