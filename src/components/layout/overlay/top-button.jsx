import React, { useEffect, useState, useCallback, useRef } from "react";
import { ChevronUp } from "lucide-react";

const TopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-1/2 translate-x-1/2 z-50">
      {/* Glowing background effect */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isHovered
            ? "bg-gradient-to-r from-blue-500/30 to-purple-600/30 scale-125 blur-md"
            : "bg-gradient-to-r from-blue-500/0 to-purple-600/0 scale-100"
        }`}
      />

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
              ? "bg-white/20 border-white/30 shadow-2xl transform scale-110"
              : "bg-white/10 border-white/20 shadow-lg hover:shadow-xl"
          }
        `}
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
            stroke="rgba(255,255,255,0.1)"
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
              filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))",
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
              transition-all duration-300 text-white/90
              ${isHovered ? "w-6 h-6 transform -translate-y-0.5" : "w-5 h-5"}
            `}
            style={{
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
              animation: isHovered ? "none" : "bounce 2s infinite",
            }}
          />
        </div>

        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div
            className={`
              absolute inset-0 bg-white/20 rounded-full transform scale-0
              group-active:scale-100 group-active:opacity-100
              transition-all duration-200 ease-out opacity-0
            `}
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
