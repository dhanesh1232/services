"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "@/hooks/mediaQuery";
import { Icons } from "@/components/icons";
import { RandomStars, RightGlow } from "./stars";

// Fallback icons
const SearchIcon = ({ className }) =>
  Icons.search ? (
    <Icons.search className={className} />
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
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

const MapPinIcon = ({ className }) =>
  Icons.mapPin ? (
    <Icons.mapPin className={className} />
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
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

const LayoutIcon = ({ className }) =>
  Icons.layout ? (
    <Icons.layout className={className} />
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
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    </svg>
  );

const CodeIcon = ({ className }) =>
  Icons.code ? (
    <Icons.code className={className} />
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
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );

const RocketIcon = ({ className }) =>
  Icons.rocket ? (
    <Icons.rocket className={className} />
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
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );

const LifeBuoyIcon = ({ className }) =>
  Icons.lifeBuoy ? (
    <Icons.lifeBuoy className={className} />
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
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

const ArrowRightIcon = ({ className }) =>
  Icons.arrowRight ? (
    <Icons.arrowRight className={className} />
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
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );

export const ProcessSection = () => {
  const processSteps = [
    {
      icon: <SearchIcon className="text-2xl" />,
      title: "Discovery",
      description: "Deep dive into your business goals and requirements",
      details: [
        "Competitor analysis",
        "User persona development",
        "Technical feasibility study",
      ],
    },
    {
      icon: <MapPinIcon className="text-2xl" />,
      title: "Planning",
      description: "Create detailed project roadmap with milestones",
      details: ["Project timeline", "Tech stack selection", "Risk assessment"],
    },
    {
      icon: <LayoutIcon className="text-2xl" />,
      title: "Design",
      description: "Craft intuitive user experiences with pixel-perfect UIs",
      details: ["Wireframing", "UI prototyping", "User testing"],
    },
    {
      icon: <CodeIcon className="text-2xl" />,
      title: "Development",
      description: "Agile implementation with continuous testing",
      details: ["Sprint planning", "Code reviews", "QA testing"],
    },
    {
      icon: <RocketIcon className="text-2xl" />,
      title: "Launch",
      description: "Seamless deployment with performance optimization",
      details: ["CI/CD pipeline", "Load testing", "SEO optimization"],
    },
    {
      icon: <LifeBuoyIcon className="text-2xl" />,
      title: "Support",
      description: "Ongoing maintenance and feature enhancements",
      details: ["Bug fixes", "Security updates", "Performance monitoring"],
    },
  ];

  const isMobile = useMediaQuery("(max-width:768px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === processSteps.length - 1 ? 0 : prevIndex + 1
    );
  }, [processSteps.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? processSteps.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isMobile && autoPlay) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isMobile, autoPlay, currentIndex, nextSlide]);

  const pauseAutoPlay = () => {
    setAutoPlay(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeAutoPlay = () => {
    setAutoPlay(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="process"
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent"
    >
      <RightGlow className="z-0" />
      <RandomStars />
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

        {isMobile ? (
          <div
            className="relative"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
            onTouchStart={pauseAutoPlay}
            onTouchEnd={resumeAutoPlay}
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={container}
              viewport={{ once: true, margin: "-100px" }}
              className="overflow-hidden"
              ref={carouselRef}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="w-full flex-shrink-0 px-2 z-20"
                  >
                    <div className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 hover:border-yellow-500/30 transition-all duration-500 overflow-hidden flex flex-col h-full relative group">
                      {/* Shine effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-12"></div>

                      <div className="p-8 relative flex-1 flex flex-col z-10">
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner dark:shadow-yellow-500/20 border border-yellow-500/10 group-hover:scale-110 transition-transform duration-500">
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-2 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-slate-400">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-3 mt-6 flex-1">
                          {step.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start group/detail"
                            >
                              <ArrowRightIcon className="text-yellow-600 dark:text-yellow-400 mt-1 mr-3 flex-shrink-0 group-hover/detail:scale-110 transition-transform duration-300" />
                              <span className="text-gray-600 dark:text-slate-400 text-sm group-hover/detail:text-yellow-700 dark:group-hover/detail:text-yellow-400 transition-colors duration-300">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700/50">
                          <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                            Phase {index + 1} of {processSteps.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Premium navigation buttons */}
            <button
              onClick={() => {
                prevSlide();
                pauseAutoPlay();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-3 rounded-full shadow-xl hover:shadow-yellow-500/10 z-10 group/button transition-all duration-300"
              aria-label="Previous step"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover/button:text-yellow-600 dark:group-hover/button:text-yellow-400 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                nextSlide();
                pauseAutoPlay();
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-3 rounded-full shadow-xl hover:shadow-yellow-500/10 z-10 group/button transition-all duration-300"
              aria-label="Next step"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover/button:text-yellow-600 dark:group-hover/button:text-yellow-400 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Premium indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    goToSlide(index);
                    pauseAutoPlay();
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-yellow-600 dark:bg-yellow-400 w-4"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative"
              >
                {/* Shine effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                <div className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl p-8 rounded-2xl border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 hover:border-yellow-500/30 transition-all duration-500 relative overflow-hidden h-full">
                  {/* Subtle shine effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-12"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner dark:shadow-yellow-500/20 border border-yellow-500/10 group-hover:scale-110 transition-transform duration-500">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-2 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 mt-6 flex-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start group/detail">
                          <ArrowRightIcon className="text-yellow-600 dark:text-yellow-400 mt-1 mr-3 flex-shrink-0 group-hover/detail:scale-110 transition-transform duration-300" />
                          <span className="text-gray-600 dark:text-slate-400 text-sm group-hover/detail:text-yellow-700 dark:group-hover/detail:text-yellow-400 transition-colors duration-300">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700/50">
                      <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                        Phase {index + 1} of {processSteps.length}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Premium callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-yellow-500/10 dark:bg-yellow-500/10 px-8 py-4 rounded-2xl border border-yellow-500/20 shadow-lg backdrop-blur-sm">
            <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-md font-medium text-yellow-700 dark:text-yellow-400">
              Client collaboration and reviews at each phase ensure perfection
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
