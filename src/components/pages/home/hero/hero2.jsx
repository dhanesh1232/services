"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const text = "Welcome to Our App";

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-red-500 clip-diagonal-left" />
        <div className="absolute inset-0 bg-yellow-400 clip-diagonal-right" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1
          className="mb-6 text-5xl font-bold md:text-7xl"
          ref={containerRef}
          style={{
            backgroundImage: "linear-gradient(135deg, red 50%, yellow 50%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: `${containerSize.width}px ${containerSize.height}px`,
          }}
        >
          {text.split("").map((letter, i) => (
            <span key={i} className="inline-block">
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <button className="rounded-lg bg-white px-8 py-3 text-lg font-semibold text-black transition hover:bg-gray-100">
          Get Started
        </button>
      </div>

      {/* Diagonal Clip Styles */}
      <style jsx>{`
        .clip-diagonal-left {
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        .clip-diagonal-right {
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </div>
  );
}
