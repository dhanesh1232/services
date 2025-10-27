"use client";
import { motion } from "framer-motion";
import { RandomStars, RightGlow } from "./stars";
import TimelinePage2 from "./compos/timeline";

export const ProcessSection = () => {
  return (
    <section
      id="process"
      className="py-12 px-6 md:px-12 relative overflow-hidden bg-transparent"
    >
      <RightGlow className="z-0" />
      <RandomStars />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-0"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 mb-6">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-yellow-700 dark:text-yellow-400 uppercase tracking-wider">
              Our Methodology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
              Premium
            </span>{" "}
            Development Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A meticulously crafted approach ensuring excellence, precision, and
            outstanding results at every phase
          </p>
        </motion.div>
        <TimelinePage2 />
      </div>
    </section>
  );
};
