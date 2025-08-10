"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "@/hooks/mediaQuery";
import { Icons } from "@/components/icons";

export const ProcessSection = () => {
  const processSteps = [
    {
      icon: <Icons.search className="text-2xl" />,
      title: "Discovery",
      description: "Deep dive into your business goals and requirements",
      details: [
        "Competitor analysis",
        "User persona development",
        "Technical feasibility study",
      ],
    },
    {
      icon: <Icons.mapPin className="text-2xl" />,
      title: "Planning",
      description: "Create detailed project roadmap with milestones",
      details: ["Project timeline", "Tech stack selection", "Risk assessment"],
    },
    {
      icon: <Icons.layout className="text-2xl" />,
      title: "Design",
      description: "Craft intuitive user experiences with pixel-perfect UIs",
      details: ["Wireframing", "UI prototyping", "User testing"],
    },
    {
      icon: <Icons.code className="text-2xl" />,
      title: "Development",
      description: "Agile implementation with continuous testing",
      details: ["Sprint planning", "Code reviews", "QA testing"],
    },
    {
      icon: <Icons.rocket className="text-2xl" />,
      title: "Launch",
      description: "Seamless deployment with performance optimization",
      details: ["CI/CD pipeline", "Load testing", "SEO optimization"],
    },
    {
      icon: <Icons.lifeBuoy className="text-2xl" />,
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
  }, []);

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
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="process"
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900"
    >
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            My Development{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600 bg-clip-text text-transparent relative">
              Process
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            A structured approach to ensure quality and efficiency
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
                    <div className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
                      <div className="p-8 relative flex-1 flex flex-col">
                        <div className="flex items-start gap-4">
                          <div className="bg-indigo-100 dark:bg-indigo-500/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner dark:shadow-indigo-500/30">
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-slate-400">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2 mt-6 flex-1">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <Icons.arrowRight className="text-indigo-600 dark:text-indigo-400 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-slate-400 text-sm">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700/50">
                          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                            Phase {index + 1} of {processSteps.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <button
              onClick={() => {
                prevSlide();
                pauseAutoPlay();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-2 rounded-full shadow-xl hover:shadow-indigo-500/10 z-10"
              aria-label="Previous step"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700 dark:text-gray-300"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-2 rounded-full shadow-xl hover:shadow-indigo-500/10 z-10"
              aria-label="Next step"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700 dark:text-gray-300"
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
                      ? "bg-indigo-600 dark:bg-indigo-400 w-4"
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
                className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="p-8 relative flex flex-col h-full">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 dark:bg-indigo-500/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner dark:shadow-indigo-500/30">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6 flex-1">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <Icons.arrowRight className="text-indigo-600 dark:text-indigo-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-slate-400 text-sm">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700/50">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      Phase {index + 1} of {processSteps.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-indigo-100 dark:bg-indigo-500/10 px-6 py-3 rounded-full border border-indigo-200 dark:border-indigo-500/20">
            <span className="w-2.5 h-2.5 bg-indigo-600 dark:bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-400">
              Client reviews at each phase
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
