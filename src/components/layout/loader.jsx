import React, { useState, useEffect } from "react";
import Logo from "../logo";

export const GlobalLoader = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const rippleInterval = setInterval(() => {
      const newRipple = {
        id: Date.now() + Math.random(),
        size: 0,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 2000);
    }, 400);

    return () => clearInterval(rippleInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-inherit">
      {/* Central Container */}
      <div className="relative flex items-center justify-center w-10 md:w-16 h-10 md:h-16 lg:w-20 lg:h-20">
        {/* Ripple Layers */}
        {ripples.map((ripple, index) => (
          <div
            key={ripple.id}
            className="absolute rounded-full border border-blue-400/40"
            style={{
              width: "60px",
              height: "60px",
              animation: `rippleExpand 2s ease-out forwards`,
              animationDelay: `${index * 100}ms`,
            }}
          />
        ))}

        {/* Logo Container with Pulse */}
        <div className="relative z-10">
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Continuous Pulse Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping" />

            {/* Logo Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-lg" />

            {/* Logo */}
            <div className="relative z-10 transform animate-pulse scale-75">
              <Logo />
            </div>
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="mt-6 text-center">
        <div className="text-sm text-slate-600 font-medium">Processing</div>
        <div className="flex justify-center space-x-1 mt-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 bg-blue-500 rounded-full opacity-60"
              style={{
                animation: `pulseDots 1.4s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes rippleExpand {
          0% {
            transform: scale(1);
            opacity: 0.8;
            border-width: 2px;
          }
          50% {
            opacity: 0.4;
            border-color: rgba(96, 165, 250, 0.6);
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
            border-width: 1px;
          }
        }

        @keyframes pulseDots {
          0%,
          60%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          30% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
