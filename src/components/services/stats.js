"use client";
import { motion } from "framer-motion";
import { Award, Clock, Headphones, Heart } from "lucide-react";

export const ServicesStats = () => {
  const stats = [
    {
      value: "100+",
      label: "Projects Delivered",
      icon: <Award className="text-2xl" />,
      description: "Successful projects across various industries",
    },
    {
      value: "3+",
      label: "Years Experience",
      icon: <Clock className="text-2xl" />,
      description: "Building modern web applications since 2022",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: <Heart className="text-2xl" />,
      description: "Dedicated to exceeding client expectations",
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Headphones className="text-2xl" />,
      description: "Reliable maintenance and support",
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
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
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
              className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {stat.value}
                </h3>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h4>
                <p className="text-muted-foreground text-sm">
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
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-gray-700 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Trusted by startups and established businesses worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
