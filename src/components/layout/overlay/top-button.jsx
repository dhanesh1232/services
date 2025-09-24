import React, { useEffect, useState, useCallback, useRef } from "react";
import { ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";

const TopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const scrollTimeout = useRef(null);

  const toggleVisible = useCallback(() => {
    if (scrollTimeout.current) return;

    scrollTimeout.current = setTimeout(() => {
      const scrolled = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercent = (scrolled / (scrollHeight - clientHeight)) * 100;

      setScrollProgress(Math.min(scrollPercent, 100));
      setVisible(scrolled > 150);

      scrollTimeout.current = null;
    }, 16);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible, { passive: true });
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

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  // Color variables based on theme
  const themeColors = {
    light: {
      background: "rgba(255, 255, 255, 0.95)",
      backgroundHover: "rgba(255, 255, 255, 0.98)",
      border: "rgba(0, 0, 0, 0.1)",
      borderHover: "rgba(0, 0, 0, 0.2)",
      text: "rgba(0, 0, 0, 0.9)",
      ringBackground: "rgba(0, 0, 0, 0.08)",
      glow: "rgba(59, 130, 246, 0.3)",
      shadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    },
    dark: {
      background: "rgba(15, 23, 42, 0.95)",
      backgroundHover: "rgba(30, 41, 59, 0.98)",
      border: "rgba(255, 255, 255, 0.15)",
      borderHover: "rgba(255, 255, 255, 0.25)",
      text: "rgba(255, 255, 255, 0.95)",
      ringBackground: "rgba(255, 255, 255, 0.1)",
      glow: "rgba(59, 130, 246, 0.4)",
      shadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
    },
  };

  const colors = theme === "dark" ? themeColors.dark : themeColors.light;

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-1/2 translate-x-1/2 z-50">
      {/* Main button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-xl border
          transition-all duration-300 ease-out group
          focus:outline-none focus:ring-2 focus:ring-blue-500/50
          ${
            isHovered
              ? `border-[${colors.borderHover}] shadow-2xl transform scale-110`
              : `border-[${colors.border}] shadow-lg hover:shadow-xl`
          }
        `}
        style={{
          backgroundColor: isHovered
            ? colors.backgroundHover
            : colors.background,
          boxShadow: isHovered ? colors.shadow : `0 4px 15px rgba(0,0,0,0.25)`,
        }}
        aria-label="Scroll to top"
      >
        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 60 60"
          aria-hidden="true"
        >
          {/* Background ring */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            fill="none"
            stroke={colors.ringBackground}
            strokeWidth="2"
          />
          {/* Progress ring */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
            style={{
              filter: `drop-shadow(0 0 4px ${colors.glow})`,
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
        </svg>

        {/* Icon with animation */}
        <div className="flex items-center justify-center w-full h-full">
          <ChevronUp
            className={`
              transition-all duration-300
              ${isHovered ? "w-6 h-6 transform -translate-y-0.5" : "w-5 h-5"}
            `}
            style={{
              color: colors.text,
              filter: `drop-shadow(0 0 8px rgba(255,255,255,0.2))`,
              animation: isHovered ? "none" : "bounce 2s infinite",
            }}
          />
        </div>
      </button>

      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translateY(0);
          }
          40%,
          43% {
            transform: translateY(-4px);
          }
          70% {
            transform: translateY(-2px);
          }
          90% {
            transform: translateY(-1px);
          }
        }
      `}</style>
    </div>
  );
};

export default TopButton;
