"use client";
import { Icons } from "@/components/icons";
import { motion } from "framer-motion";
import { RandomStars, RightGlow } from "./stars";
const StatIcon = ({ icon: Icon, className }) => {
  return Icon ? (
    <Icon className={className} />
  ) : (
    <div className={`${className} bg-purple-500/20 rounded-full`} />
  );
};

export const ServicesStats = () => {
  return (
    <section className="relative min-h-screen isolate px-6 pt-14 lg:px-8 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Our Digital{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Impact
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transforming visions into digital reality with measurable results
            and exceptional service delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 bg-white/10 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-gray-200/20 dark:border-gray-700/30 overflow-hidden">
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3 bg-purple-500/20 rounded-xl">
                    <StatIcon
                      icon={stat.icon}
                      className="w-6 h-6 text-purple-500"
                    />
                  </div>

                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                    {stat.value}
                  </h3>

                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </h4>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-400">
              Trusted by innovative brands worldwide
            </span>
          </div>
        </motion.div>
      </div>
      <RandomStars />
      <RightGlow />
    </section>
  );
};

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: Icons.award,
    description: "Innovative digital solutions delivered",
  },
  {
    value: "5 Days",
    label: "Quick Delivery",
    icon: Icons.clock,
    description: "Rapid development cycle time",
  },
  {
    value: "90%+",
    label: "Client Satisfaction",
    icon: Icons.heart,
    description: "Consistently exceeding expectations",
  },
  {
    value: "24/7",
    label: "Premium Support",
    icon: Icons.headPhones,
    description: "Round-the-clock expert assistance",
  },
];
