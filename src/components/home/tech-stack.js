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
  // Group technologies by category for better organization
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
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const categoryItem = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const techItem = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "backOut",
      },
    },
  };

  return (
    <section id="tech" className="py-16 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern tools and frameworks I use to build high-quality applications
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={categoryItem}
              className="bg-background/50 rounded-xl p-4 sm:p-6 border border-border"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 z-20 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    variants={techItem}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ ease: "easeInOut", duration: 0.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-3 rounded-lg shadow-inner bg-white dark:bg-gray-700 hover:shadow-md transition-all duration-200"
                  >
                    <tech.icon
                      className="w-8 h-8 mb-2"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            And many more tools in my development toolkit
          </p>
        </motion.div>
      </div>
    </section>
  );
};
