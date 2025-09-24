import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CircleSvgTop, RandomStars } from "../stars";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/mediaQuery";

export const message = encodeURIComponent(
  "Hi, I'm interested in your premium digital services. Please share more details about your exclusive offerings."
);

const NightSkyHero = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [isVisible, setIsVisible] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen pt-6 md:pt-10 isolate px-6 lg:px-8 bg-transparent overflow-hidden z-0">
      {isVisible && <RandomStars />}
      <CircleSvgTop className="absolute inset-0 z-0 pointer-events-none" />

      <div className="mx-auto flex items-center h-full justify-center max-w-2xl py-12 sm:py-24 lg:py-32 z-20">
        <div className="text-center">
          <div>
            {/* Animated title with gradient text */}
            <h1
              className={`text-4xl font-bold tracking-tight text-foreground sm:text-6xl transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Transform Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Digital Vision
              </span>{" "}
              Into Reality
            </h1>

            {/* Animated description */}
            <p
              className={`mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 transition-all duration-1000 ease-out delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              We create innovative digital solutions that help businesses thrive
              in the modern world. Let's build something amazing together.
            </p>

            <PremiumButton isMobile={isMobile} isVisible={isVisible} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!scroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-light tracking-widest">
              EXPLORE FURTHER
            </span>
            <div className="w-8 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex justify-center p-1 backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Icons.chevronsDown className="w-4 h-4 text-gray-400 dark:text-gray-600" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NightSkyHero;

const PremiumButton = ({ isMobile, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 1.1 }}
      className="mt-4 flex flex-col sm:flex-row gap-2 justify-center"
    >
      <Button
        asChild
        size={isMobile ? "sm" : "lg"}
        className={`
        relative bg-gradient-to-r from-green-600 to-green-500 
        hover:from-green-700 hover:to-green-600 
        transition-all duration-300
        text-sm sm:text-base lg:text-lg
        h-10 sm:h-12 lg:h-14
        px-4 sm:px-6 lg:px-8
        rounded-full border-0 overflow-hidden group
        w-full sm:w-auto
      `}
      >
        <Link
          href={`https://wa.me/918790063821?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
          className="flex items-center justify-center gap-2 sm:gap-3 group text-white font-medium"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          <Icons.whatsapp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10" />
          <span className="relative z-10 whitespace-nowrap">
            Begin Your Journey
          </span>
          <Icons.arrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform ease-in-out group-hover:translate-x-1 relative z-10" />
        </Link>
      </Button>

      <Button
        variant="outline"
        size={isMobile ? "sm" : "lg"}
        asChild
        className={`
        relative border-2 border-gold-400/50 
        hover:border-gold-400 bg-transparent 
        hover:bg-gold-500/10 text-gold-200 
        transition-all duration-300
        text-sm sm:text-base lg:text-lg
        h-10 sm:h-12 lg:h-14
        px-4 sm:px-6 lg:px-8
        rounded-full 
        overflow-hidden group
        w-full sm:w-auto
      `}
      >
        <Link
          href="/services"
          className="font-medium flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span className="text-foreground">Explore Services</span>
          <Icons.chevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-foreground group-hover:text-yellow-500 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </motion.div>
  );
};
