"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/mediaQuery";

export const Web = ({ className }) => {
  const isMobile = useMediaQuery("(max-width:500px)");
  const pathRef = useRef(null);
  const [points, setPoints] = useState([]);

  const services = [
    "Full Stack Web Dev",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "GMB Optimization",
    "Logo Design",
  ];

  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    const newPoints = [];

    services.forEach((_, i) => {
      const point = path.getPointAtLength((length / (services.length - 1)) * i);
      newPoints.push({ x: point.x, y: point.y });
    });

    setPoints(newPoints);
  }, []);

  return (
    <div className={`${className} w-full h-full -z-10`}>
      <div className="bg-transparent w-full h-full text-center flex items-center justify-center">
        <div
          className={`${
            isMobile ? "w-80 h-80" : "w-96 h-96 md:w-[600px] md:h-[600px]"
          } relative`}
        >
          <svg className="w-full h-full" viewBox="0 0 100 60">
            {/* Semi-circular dotted line */}
            <path
              ref={pathRef}
              d="M5,50 A45,45 0 0,1 95,50"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="0.7"
              strokeDasharray="2,2"
            />

            {/* Services mapped to dots + labels */}
            {points.map((pt, idx) => (
              <g key={idx}>
                {/* Slow pulsing dot */}
                <g>
                  <motion.circle cx={pt.x} cy={pt.y} r="1.2" fill="#6366f1" />
                  <motion.circle
                    cx={pt.x}
                    cy={pt.y}
                    r="1.5"
                    fill="#6366f1"
                    animate={{
                      scale: [1, 2.5],
                      opacity: [0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: idx * 0.8,
                    }}
                  />
                </g>

                {/* Label */}
                <text
                  x={pt.x}
                  y={pt.y - 5}
                  textAnchor="middle"
                  fill="#1e3a8a"
                  fontSize="1.5"
                  className="font-medium opacity-40"
                >
                  {services[idx]}
                </text>
              </g>
            ))}

            {/* Center brand */}
            <text
              x="50"
              y="55"
              textAnchor="middle"
              fill="#1e3a8a"
              fontSize="4"
              className="font-semibold"
            >
              ECODRIX
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};
