"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiGoogleanalytics,
  SiGoogleadsense,
  SiGooglesearchconsole,
  SiRedis,
  SiFirebase,
  SiGithub,
  SiNotion,
} from "react-icons/si";
import { RandomStars } from "./stars";

export const TechStackSection = () => {
  const techCategories = [
    {
      name: "Frontend",
      items: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#38B2AC" },
      ],
    },
    {
      name: "Backend",
      items: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
      ],
    },
    {
      name: "Cloud & DevOps",
      items: [
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
    },
    {
      name: "Languages",
      items: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      ],
    },
    {
      name: "Design & Collaboration",
      items: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "Figma", icon: FaFigma, color: "#F24E1E" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "Notion", icon: SiNotion, color: "#000000" },
      ],
    },
    {
      name: "SEO & Growth",
      items: [
        { name: "SEO", icon: SiGooglesearchconsole, color: "#34A853" },
        { name: "Google Ads", icon: SiGoogleadsense, color: "#4285F4" },
        { name: "GA4", icon: SiGoogleanalytics, color: "#E37400" },
        {
          name: "GMB",
          icon: SiGooglesearchconsole,
          color: "#1A73E8",
        },
        { name: "Meta Ads", icon: MetaAdsIcon, color: "#0494EF" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
      <RandomStars />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 mb-6">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-yellow-700 dark:text-yellow-400 uppercase tracking-wider">
              Our Technology Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
              Premium
            </span>{" "}
            Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge tools and frameworks to deliver exceptional
            digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial="hidden"
              whileInView="visible"
              variants={container}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative shadow-md rounded-xl overflow-hidden"
            >
              {/* Premium card effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/0 via-pink-400/10 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-12 rounded-xl" />

              <div className="bg-white/80 dark:bg-slate-800/70 md:p-6 p-4 lg:p-8 transition-all duration-500 relative">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-6 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      variants={item}
                      className="group/tech relative"
                    >
                      <div className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-slate-700/50 shadow-md transition-all duration-300 relative">
                        <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-inner group-hover/tech:shadow-yellow-500/30 group-hover/tech:scale-110 transition-all duration-300">
                          <tech.icon
                            className="w-6 h-6"
                            style={{ color: tech.color }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-slate-300 group-hover/tech:text-yellow-700 dark:group-hover/tech:text-yellow-400 transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
// components/icons/MetaAdsIcon.jsx
export const MetaAdsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 50 50"
    fill="currentColor"
    className="transition-all duration-300 transform group-hover:scale-110"
    aria-label="Meta Ads Icon"
    role="img"
  >
    <title>Meta Ads</title>
    <desc>Meta (Facebook) Ads platform icon</desc>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M47.3,21.01c-0.58-1.6-1.3-3.16-2.24-4.66c-0.93-1.49-2.11-2.93-3.63-4.13c-1.51-1.19-3.49-2.09-5.59-2.26l-0.78-0.04 c-0.27,0.01-0.57,0.01-0.85,0.04c-0.57,0.06-1.11,0.19-1.62,0.34c-1.03,0.32-1.93,0.8-2.72,1.32c-1.42,0.94-2.55,2.03-3.57,3.15 c0.01,0.02,0.03,0.03,0.04,0.05l0.22,0.28c0.51,0.67,1.62,2.21,2.61,3.87c1.23-1.2,2.83-2.65,3.49-3.07 c0.5-0.31,0.99-0.55,1.43-0.68c0.23-0.06,0.44-0.11,0.64-0.12c0.1-0.02,0.19-0.01,0.3-0.02l0.38,0.02c0.98,0.09,1.94,0.49,2.85,1.19 c1.81,1.44,3.24,3.89,4.17,6.48c0.95,2.6,1.49,5.44,1.52,8.18c0,1.31-0.17,2.57-0.57,3.61c-0.39,1.05-1.38,1.45-2.5,1.45 c-1.63,0-2.81-0.7-3.76-1.68c-1.04-1.09-2.02-2.31-2.96-3.61c-0.78-1.09-1.54-2.22-2.26-3.37c-1.27-2.06-2.97-4.67-4.15-6.85 L25,16.35c-0.31-0.39-0.61-0.78-0.94-1.17c-1.11-1.26-2.34-2.5-3.93-3.56c-0.79-0.52-1.69-1-2.72-1.32 c-0.51-0.15-1.05-0.28-1.62-0.34c-0.18-0.02-0.36-0.03-0.54-0.03c-0.11,0-0.21-0.01-0.31-0.01l-0.78,0.04 c-2.1,0.17-4.08,1.07-5.59,2.26c-1.52,1.2-2.7,2.64-3.63,4.13C4,17.85,3.28,19.41,2.7,21.01c-1.13,3.2-1.74,6.51-1.75,9.93 c0.01,1.78,0.24,3.63,0.96,5.47c0.7,1.8,2.02,3.71,4.12,4.77c1.03,0.53,2.2,0.81,3.32,0.81c1.23,0.03,2.4-0.32,3.33-0.77 c1.87-0.93,3.16-2.16,4.33-3.4c2.31-2.51,4.02-5.23,5.6-8c0.44-0.76,0.86-1.54,1.27-2.33c-0.21-0.41-0.42-0.84-0.64-1.29 c-0.62-1.03-1.39-2.25-1.95-3.1c-0.83,1.5-1.69,2.96-2.58,4.41c-1.59,2.52-3.3,4.97-5.21,6.98c-0.95,0.98-2,1.84-2.92,2.25 c-0.47,0.2-0.83,0.27-1.14,0.25c-0.43,0-0.79-0.1-1.13-0.28c-0.67-0.35-1.3-1.1-1.69-2.15c-0.4-1.04-0.57-2.3-0.57-3.61 c0.03-2.74,0.57-5.58,1.52-8.18c0.93-2.59,2.36-5.04,4.17-6.48c0.91-0.7,1.87-1.1,2.85-1.19l0.38-0.02c0.11,0.01,0.2,0,0.3,0.02 c0.2,0.01,0.41,0.06,0.64,0.12c0.26,0.08,0.54,0.19,0.83,0.34c0.2,0.1,0.4,0.21,0.6,0.34c1,0.64,1.99,1.58,2.92,2.62 c0.72,0.81,1.41,1.71,2.1,2.63L25,25.24c0.75,1.55,1.53,3.09,2.39,4.58c1.58,2.77,3.29,5.49,5.6,8c0.68,0.73,1.41,1.45,2.27,2.1 c0.61,0.48,1.28,0.91,2.06,1.3c0.93,0.45,2.1,0.8,3.33,0.77c1.12,0,2.29-0.28,3.32-0.81c2.1-1.06,3.42-2.97,4.12-4.77 c0.72-1.84,0.95-3.69,0.96-5.47C49.04,27.52,48.43,24.21,47.3,21.01z"
    />
  </svg>
);
