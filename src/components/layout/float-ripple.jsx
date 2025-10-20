"use client";
import React, { useState, useEffect, useRef } from "react";

export const WaterBubbleEffect = () => {
  const [bubbles, setBubbles] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const lastBubbleTime = useRef(0);

  // Create a new water bubble at cursor position
  const createBubble = (x, y, isClick = false) => {
    const newBubble = {
      id: Date.now() + Math.random(),
      x,
      y,
      size: isClick ? 20 : Math.random() * 10 + 8, // 8-18px initial size
      targetSize: isClick ? 70 : Math.random() * 25 + 35, // 35-60px max size
      opacity: isClick ? 0.9 : Math.random() * 0.4 + 0.4, // 0.4-0.8 opacity
      growthSpeed: isClick ? 1.2 : Math.random() * 0.4 + 0.4, // Faster growth: 0.4-0.8
      life: 1,
      createdAt: Date.now(),
      lifetime: isClick ? 1500 : Math.random() * 1000 + 800, // 0.8-1.8 seconds (shorter)
      waveFrequency: Math.random() * 0.8 + 0.3, // Faster wave motion
      waveOffset: Math.random() * Math.PI * 2,
      isRising: Math.random() > 0.2, // More bubbles rise
      riseSpeed: Math.random() * 0.4 + 0.2, // Faster rising
      driftX: (Math.random() - 0.5) * 0.8, // Faster horizontal drift
    };

    setBubbles((prev) => [...prev, newBubble]);
  };

  // Animation loop for bubbles
  const animateBubbles = () => {
    const currentTime = Date.now();

    setBubbles((prevBubbles) =>
      prevBubbles
        .map((bubble) => {
          const age = currentTime - bubble.createdAt;
          const progress = age / bubble.lifetime;

          if (progress >= 1) {
            return { ...bubble, life: 0 };
          }

          // Faster size oscillation
          const waveEffect =
            Math.sin(age * 0.015 * bubble.waveFrequency + bubble.waveOffset) *
            3;
          const currentTargetSize = bubble.targetSize + waveEffect;

          // Faster growth towards target size
          const sizeDifference = currentTargetSize - bubble.size;
          const newSize =
            bubble.size + sizeDifference * bubble.growthSpeed * 0.08;

          // Faster opacity fade
          const newOpacity = bubble.opacity * (1 - progress * 1.2);

          // Faster floating movement
          const newY = bubble.isRising
            ? bubble.y - bubble.riseSpeed * 1.5
            : bubble.y;
          const newX = bubble.x + bubble.driftX * 1.2;

          return {
            ...bubble,
            size: Math.max(1, newSize),
            opacity: newOpacity,
            x: newX,
            y: newY,
            life: newOpacity > 0.02 ? 1 : 0,
          };
        })
        .filter((bubble) => bubble.life > 0 && bubble.opacity > 0.01)
    );

    animationRef.current = requestAnimationFrame(animateBubbles);
  };

  // Auto-generate random bubbles (more frequently)
  const generateRandomBubbles = () => {
    if (containerRef.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Create 1-3 random bubbles more often
      if (Math.random() > 0.5) {
        // Increased from 0.7
        const bubbleCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < bubbleCount; i++) {
          const x = Math.random() * width;
          const y = height + 20;
          createBubble(x, y);
        }
      }
    }
  };

  // Start animation and add event listeners
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateBubbles);

    // Faster auto-bubble generation interval
    const bubbleInterval = setInterval(generateRandomBubbles, 500); // Reduced from 800ms

    // Global mouse event listeners
    const handleGlobalMouseMove = (e) => {
      const now = Date.now();
      if (now - lastBubbleTime.current < 200) return; // Reduced from 300ms

      // Check if mouse is over interactive elements
      const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractiveElement = checkInteractiveElement(elementUnderMouse);

      // Create bubbles more frequently (reduced threshold)
      if (!isInteractiveElement && Math.random() > 0.4) {
        // Reduced from 0.6
        createBubble(e.clientX, e.clientY);
        lastBubbleTime.current = now;
      }
    };

    const handleGlobalClick = (e) => {
      const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractiveElement = checkInteractiveElement(elementUnderMouse);

      if (!isInteractiveElement) {
        createBubble(e.clientX, e.clientY, true);

        // Create more smaller bubbles around the click
        for (let i = 0; i < 3; i++) {
          // Increased from 2
          setTimeout(() => {
            createBubble(
              e.clientX + (Math.random() - 0.5) * 40,
              e.clientY + (Math.random() - 0.5) * 40
            );
          }, i * 80); // Reduced delay
        }
      }
    };

    const checkInteractiveElement = (element) => {
      return (
        element &&
        (element.tagName === "BUTTON" ||
          element.tagName === "A" ||
          element.tagName === "INPUT" ||
          element.tagName === "SELECT" ||
          element.tagName === "TEXTAREA" ||
          element.closest("button") ||
          element.closest("a") ||
          element.closest('[role="button"]') ||
          element.closest("[onclick]") ||
          element.style.cursor === "pointer" ||
          window.getComputedStyle(element).cursor === "pointer")
      );
    };

    // Add event listeners
    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("click", handleGlobalClick);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearInterval(bubbleInterval);
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{ height: "100vh", width: "100vw" }}
      >
        {/* Water bubbles */}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="fixed pointer-events-none rounded-full z-20"
            style={{
              left: bubble.x,
              top: bubble.y,
              width: bubble.size,
              height: bubble.size,
              transform: "translate(-50%, -50%)",
              background: `
                radial-gradient(
                  circle at 30% 30%,
                  hsla(200, 80%, 90%, ${bubble.opacity * 0.8}) 0%,
                  hsla(200, 70%, 70%, ${bubble.opacity * 0.4}) 40%,
                  hsla(200, 60%, 50%, ${bubble.opacity * 0.1}) 100%
                )
              `,
              border: `1px solid hsla(200, 80%, 95%, ${bubble.opacity * 0.3})`,
              boxShadow: `
                inset 0 0 ${bubble.size * 0.3}px hsla(200, 100%, 95%, ${
                bubble.opacity * 0.4
              }),
                0 0 ${bubble.size * 0.2}px hsla(200, 80%, 80%, ${
                bubble.opacity * 0.3
              }),
                inset 0 -${bubble.size * 0.1}px ${
                bubble.size * 0.2
              }px hsla(200, 60%, 40%, ${bubble.opacity * 0.2})
              `,
              filter: `blur(${Math.max(0.5, bubble.size * 0.03)}px)`,
              transition: "none",
            }}
          />
        ))}

        {/* Bubble highlights for 3D effect */}
        {bubbles.map((bubble) => (
          <div
            key={`highlight-${bubble.id}`}
            className="fixed pointer-events-none rounded-full z-20"
            style={{
              left: bubble.x - bubble.size * 0.15,
              top: bubble.y - bubble.size * 0.15,
              width: bubble.size * 0.3,
              height: bubble.size * 0.3,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, hsla(200, 100%, 100%, ${
                bubble.opacity * 0.6
              }) 0%, transparent 70%)`,
              filter: "blur(0.5px)",
              transition: "none",
            }}
          />
        ))}

        {/* Faster ambient water particles */}
        <div
          className="fixed top-20 left-1/4 w-1 h-1 bg-cyan-300 rounded-full opacity-40 z-10"
          style={{
            animation: "ping 2s infinite ease-in-out",
          }}
        ></div>
        <div
          className="fixed top-1/3 right-1/4 w-0.5 h-0.5 bg-blue-300 rounded-full opacity-30 z-10"
          style={{
            animation: "pulse 1.5s infinite ease-in-out",
          }}
        ></div>
        <div
          className="fixed bottom-1/4 left-1/3 w-1.5 h-1.5 bg-teal-300 rounded-full opacity-25 z-10"
          style={{
            animation: "ping 2.5s infinite ease-in-out",
            animationDelay: "0.8s",
          }}
        ></div>
        <div
          className="fixed bottom-1/3 right-1/3 w-0.5 h-0.5 bg-cyan-200 rounded-full opacity-40 z-10"
          style={{
            animation: "pulse 2s infinite ease-in-out",
            animationDelay: "1.2s",
          }}
        ></div>

        {/* Subtle water caustics effect */}
        <div
          className="absolute inset-0 opacity-10 z-5"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, hsl(200, 100%, 70%) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, hsl(200, 100%, 60%) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, hsl(200, 100%, 50%) 0%, transparent 50%)
            `,
            mixBlendMode: "soft-light",
            animation: "pulse 8s infinite ease-in-out",
          }}
        />

        {/* Water surface shimmer */}
        <div
          className="absolute top-0 left-0 w-full h-20 opacity-30 z-5"
          style={{
            background:
              "linear-gradient(to bottom, hsl(200, 100%, 80%) 0%, transparent 100%)",
            mixBlendMode: "overlay",
            animation: "pulse 5s infinite ease-in-out",
          }}
        />
      </div>
    </div>
  );
};
