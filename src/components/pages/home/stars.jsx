"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React from "react";

export const RandomStars = ({ className }) => {
  const { theme } = useTheme();
  const [starPositions, setStarPositions] = React.useState([]);
  React.useEffect(() => {
    // Generate random star positions
    const stars = Array.from({ length: 50 }, () => ({
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      delay: Math.random() * 5,
    }));
    setStarPositions(stars);
  }, []);
  return (
    theme === "dark" && (
      <>
        {/* Animated stars in the background */}
        <div className={`absolute inset-0 ${className}`}>
          {starPositions.map((star, i) => (
            <Icons.sparkle
              key={i}
              className="absolute fill-yellow-500 animate-pulse"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>
      </>
    )
  );
};

export const TopGlow = ({ className = "" }) => {
  const { theme } = useTheme();
  return (
    theme === "dark" && (
      <>
        {/* Enhanced gradient elements with animation */}
        <div
          className={`absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 ${className}`}
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse-slow"
            style={{ animationDuration: "8s" }}
          />
        </div>
      </>
    )
  );
};

export const LeftGlow = ({ className }) => {
  const { theme } = useTheme();
  return (
    theme === "dark" && (
      <>
        {/* Left gradient with animation */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 left-0 transform-gpu overflow-hidden blur-3xl ${className}`}
        >
          <div
            className="relative aspect-[678/1155] rounded-full h-[15rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:h-[24rem] animate-pulse-slow"
            style={{ animationDuration: "10s", animationDelay: "1s" }}
          />
        </div>
      </>
    )
  );
};

export const RightGlow = ({ className }) => {
  const { theme } = useTheme();
  return (
    theme === "dark" && (
      <>
        {/* Right gradient with animation */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 right-0 transform-gpu overflow-hidden blur-3xl ${className}`}
        >
          <div
            className="relative aspect-[678/1155] h-[20rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:h-[36rem] animate-pulse-slow"
            style={{ animationDuration: "10s", animationDelay: "1s" }}
          />
        </div>
      </>
    )
  );
};

export const BottomGlow = ({ className }) => {
  const { theme } = useTheme();
  return (
    theme === "dark" && (
      <>
        {/* Bottom gradient with animation */}
        <div
          className={`absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] ${className}`}
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-pulse-slow"
            style={{ animationDuration: "10s", animationDelay: "1s" }}
          />
        </div>
      </>
    )
  );
};

export const CircleSvgTop = ({ className = "" }) => {
  return (
    <svg
      className={cn(className, "w-full h-full")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 700"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {/* Top-right warm gradient */}
        <radialGradient id="gradTopRight" cx="70%" cy="10%" r="60%">
          <stop offset="0%" stopColor="#ff9a9e" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#ff6a88" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ff6a88" stopOpacity="0" />
        </radialGradient>

        {/* Bottom-left cool gradient */}
        <radialGradient id="gradBottomLeft" cx="30%" cy="90%" r="70%">
          <stop offset="0%" stopColor="#74ebd5" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#9face6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#9face6" stopOpacity="0" />
        </radialGradient>

        {/* Soft blur */}
        <filter id="softBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="50" result="b" />
          <feColorMatrix
            in="b"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 0.95 0"
          />
        </filter>
      </defs>

      {/* Transparent base rect */}
      <rect width="100%" height="100%" fill="transparent" />

      {/* Bottom-left gradient circle */}
      <g filter="url(#softBlur)" style={{ mixBlendMode: "screen" }}>
        <circle
          cx="170"
          cy="560"
          r="360"
          fill="url(#gradBottomLeft)"
          opacity="0.95"
        />
      </g>

      {/* Top-right gradient circle */}
      <g filter="url(#softBlur)" style={{ mixBlendMode: "screen" }}>
        <circle
          cx="1030"
          cy="90"
          r="420"
          fill="url(#gradTopRight)"
          opacity="0.95"
        />
      </g>
    </svg>
  );
};
