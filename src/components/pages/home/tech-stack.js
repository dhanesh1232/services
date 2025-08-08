"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";

export const TechStackSection = () => {
  const techCategories = [
    {
      name: "Frontend",
      items: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
      ],
    },
    {
      name: "Backend",
      items: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
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
      name: "Tools",
      items: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600 bg-clip-text text-transparent mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            Modern tools and frameworks we use to build high-quality
            applications
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
              className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-200 dark:border-slate-700/50 shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-6">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    variants={item}
                    className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-slate-700/50 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                  >
                    <div className="bg-indigo-100 dark:bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-inner dark:shadow-indigo-500/30">
                      <tech.icon
                        className="w-6 h-6"
                        style={{ color: tech.color }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-indigo-100 dark:bg-indigo-500/10 px-6 py-3 rounded-full border border-indigo-200 dark:border-indigo-500/20">
            <span className="w-2.5 h-2.5 bg-indigo-600 dark:bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-400">
              And many more tools in our development toolkit
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
