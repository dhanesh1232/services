"use client";
import { Icons } from "@/components/icons";
import { motion } from "framer-motion";

// Fallback icons in case any are missing
const AwardIcon = ({ className }) =>
  Icons.award ? (
    <Icons.award className={className} />
  ) : (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

const ClockIcon = ({ className }) =>
  Icons.clock ? (
    <Icons.clock className={className} />
  ) : (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

const HeartIcon = ({ className }) =>
  Icons.heart ? (
    <Icons.heart className={className} />
  ) : (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );

const HeadphonesIcon = ({ className }) =>
  Icons.headPhones ? (
    <Icons.headPhones className={className} />
  ) : (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );

export const ServicesStats = () => {
  const stats = [
    {
      value: "50+",
      label: "Projects Delivered",
      icon: <AwardIcon className="text-3xl text-yellow-400" />,
      description: "Exquisite websites crafted since 2024",
    },
    {
      value: "5 Days",
      label: "Quick Delivery",
      icon: <ClockIcon className="text-3xl text-yellow-400" />,
      description: "Premium rapid delivery for demo sites",
    },
    {
      value: "90%+",
      label: "Client Satisfaction",
      icon: <HeartIcon className="text-3xl text-yellow-400" />,
      description: "Dedicated to exceeding elite client expectations",
    },
    {
      value: "24/7",
      label: "Premium Support",
      icon: <HeadphonesIcon className="text-3xl text-yellow-400" />,
      description: "Concierge-level maintenance and support",
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
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900">
      {/* Luxury background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(180,150,100,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(180,150,100,0.25),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(180,150,100,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(180,150,100,0.2),rgba(255,255,255,0))]" />

        {/* Decorative gold elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>

        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0wLDMwIGgzMCBNMzAsMCB2NjAgTTMwLDMwIGgzMCBNMzAsMzAgdjMwIE0zMCwzMCBoLTMwIE0zMCwzMCB2LTMwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 mb-6">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-yellow-700 dark:text-yellow-400 uppercase tracking-wider">
              Excellence in Numbers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
              Premium
            </span>{" "}
            Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Delivering exceptional results that speak volumes about our
            commitment to excellence and client success.
          </p>
        </motion.div>

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
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl p-8 rounded-2xl border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 hover:border-yellow-500/30 transition-all duration-500 relative overflow-hidden">
                {/* Subtle shine effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-12"></div>

                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Icon container with luxury styling */}
                  <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-3 md:mb-6 shadow-inner dark:shadow-yellow-500/20 border border-yellow-500/10 group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>

                  {/* Value with premium styling */}
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </h3>

                  {/* Label with elegant typography */}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-200 mb-1 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    {stat.label}
                  </h4>

                  {/* Description with refined styling */}
                  <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-yellow-500/10 dark:bg-yellow-500/10 px-6 py-4 rounded-2xl border border-yellow-500/20 shadow-lg backdrop-blur-sm">
            <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-md font-medium text-yellow-700 dark:text-yellow-400">
              Trusted by discerning clients and premium brands worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
