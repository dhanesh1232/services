"use client";
import { Icons } from "@/components/icons";
import { motion } from "framer-motion";

export const ServicesStats = () => {
  const stats = [
    {
      value: "100+",
      label: "Projects Delivered",
      icon: (
        <Icons.award className="text-3xl dark:text-indigo-400 text-indigo-600" />
      ),
      description: "Successful projects across various industries",
    },
    {
      value: "3+",
      label: "Years Experience",
      icon: (
        <Icons.clock className="text-3xl dark:text-indigo-400 text-indigo-600" />
      ),
      description: "Building modern web applications since 2022",
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      icon: (
        <Icons.heart className="text-3xl dark:text-indigo-400 text-indigo-600" />
      ),
      description: "Dedicated to exceeding client expectations",
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: (
        <Icons.Headphones className="text-3xl dark:text-indigo-400 text-indigo-600" />
      ),
      description: "Reliable maintenance and support",
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-200 dark:border-slate-700/50 shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-indigo-100 dark:bg-indigo-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner dark:shadow-indigo-500/30">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </h3>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-200 mb-3">
                  {stat.label}
                </h4>
                <p className="text-gray-600 dark:text-slate-400 text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
              Trusted by startups and established businesses worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
