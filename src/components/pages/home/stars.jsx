"use client";

import { Icons } from "@/components/icons";
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

export const TopGlow = ({ className }) => {
  return (
    <>
      {/* Enhanced gradient elements with animation */}
      <div
        className={`absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 ${className}`}
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse-slow"
          style={{ animationDuration: "8s" }}
        />
      </div>
    </>
  );
};

export const LeftGlow = ({ className }) => {
  return (
    <>
      {/* Left gradient with animation */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 left-0 transform-gpu overflow-hidden blur-3xl ${className}`}
      >
        <div
          className="relative aspect-[678/1155] h-[15rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:h-[24rem] animate-pulse-slow"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        />
      </div>
    </>
  );
};

export const RightGlow = ({ className }) => {
  return (
    <>
      {/* Right gradient with animation */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 right-0 transform-gpu overflow-hidden blur-3xl ${className}`}
      >
        <div
          className="relative aspect-[678/1155] h-[20rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:h-[36rem] animate-pulse-slow"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        />
      </div>
    </>
  );
};

export const BottomGlow = ({ className }) => {
  return (
    <>
      {/* Bottom gradient with animation */}
      <div
        className={`absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] ${className}`}
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-pulse-slow"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        />
      </div>
    </>
  );
};
