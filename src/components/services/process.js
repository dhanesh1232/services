"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Layout,
  LifeBuoy,
  MapPin,
  Rocket,
  Search,
} from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "@/hooks/mediaQuery";

export const ProcessSection = () => {
  const processSteps = [
    {
      icon: <Search className="text-2xl" />,
      title: "Discovery",
      description: "Deep dive into your business goals and requirements",
      details: [
        "Competitor analysis",
        "User persona development",
        "Technical feasibility study",
      ],
    },
    {
      icon: <MapPin className="text-2xl" />,
      title: "Planning",
      description: "Create detailed project roadmap with milestones",
      details: ["Project timeline", "Tech stack selection", "Risk assessment"],
    },
    {
      icon: <Layout className="text-2xl" />,
      title: "Design",
      description: "Craft intuitive user experiences with pixel-perfect UIs",
      details: ["Wireframing", "UI prototyping", "User testing"],
    },
    {
      icon: <Code className="text-2xl" />,
      title: "Development",
      description: "Agile implementation with continuous testing",
      details: ["Sprint planning", "Code reviews", "QA testing"],
    },
    {
      icon: <Rocket className="text-2xl" />,
      title: "Launch",
      description: "Seamless deployment with performance optimization",
      details: ["CI/CD pipeline", "Load testing", "SEO optimization"],
    },
    {
      icon: <LifeBuoy className="text-2xl" />,
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
      }, 3000); // Change slide every 3 seconds

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
    <section className="py-20 px-4 sm:px-6 md:px-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            My Development{" "}
            <span className="bg-gradient-to-r relative from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Process
              <svg
                className="absolute left-0 right-0 bottom-0"
                width="100%"
                height="20"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,70 C25,50 75,50 100,70"
                  stroke="blue"
                  strokeWidth="5"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
                      <div className="p-6 pb-12 relative flex-1 flex flex-col">
                        <div className="flex items-start gap-4">
                          <div className="bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2 mt-4 flex-1">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <ArrowRight className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-gray-50 absolute bottom-0 left-0 right-0 dark:bg-gray-600/30 px-6 py-2 border-t border-gray-100 dark:border-gray-600">
                          <span className="text-xs font-medium text-indigo-600 text-center dark:text-indigo-400">
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10"
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
            <div className="flex justify-center mt-4 space-x-2">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-6 pb-12 relative flex-1 flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4 flex-1">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 absolute bottom-0 left-0 right-0 dark:bg-gray-600/30 px-6 py-2 border-t border-gray-100 dark:border-gray-600">
                    <span className="text-xs font-medium text-indigo-600 text-center dark:text-indigo-400">
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
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-gray-700 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Client reviews at each phase
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
