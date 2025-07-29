"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-rotate carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (index) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(index);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const goToPrev = () => {
    goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    goToSlide((currentIndex + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-6 md:px-12 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0.7,
                    y: 0,
                    scale: currentIndex === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md border border-border transition-all duration-300 ${
                    currentIndex === index ? "scale-100" : "scale-95"
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full relative overflow-hidden mr-4 border-2 border-border">
                      <Image
                        fill
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <FaQuoteLeft className="text-indigo-300 dark:text-indigo-400 mb-4 text-xl" />

                  <p className="text-gray-600 dark:text-gray-300 mb-6 relative pl-6">
                    {testimonial.quote}
                  </p>

                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-indigo-600 w-6"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full relative overflow-hidden mr-4 border-2 border-indigo-100 dark:border-gray-600">
                  <Image
                    fill
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>

              <FaQuoteLeft className="text-indigo-300 dark:text-indigo-400 mb-4 text-xl" />

              <p className="text-gray-600 dark:text-gray-300 mb-6 relative pl-6">
                {testimonial.quote}
              </p>

              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-gray-700 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Trusted by companies worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    quote:
      "ECODrIx transformed our online presence with a stunning website that perfectly represents our brand. The attention to detail and communication throughout the project was exceptional. We saw a 150% increase in leads within the first month!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Corp",
    quote:
      "The e-commerce solution delivered exceptional results, with a 40% increase in conversions. Their technical expertise and problem-solving skills are truly impressive. The team went above and beyond to meet our tight deadline.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "David Wilson",
    role: "Founder",
    company: "Startup Ventures",
    quote:
      "Reliable, professional, and delivered beyond our expectations. Will definitely work with them again for our future projects. The support after launch has been outstanding with 24/7 availability for critical issues.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Digital Solutions",
    quote:
      "The mobile app they developed has been downloaded over 500k times with 4.9-star ratings. Their clean code and documentation made future updates extremely easy for our team to handle.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Peterson",
    role: "CTO",
    company: "Enterprise Systems",
    quote:
      "We hired ECODrIx to modernize our legacy system and the results were phenomenal. 60% performance improvement and 80% reduction in server costs. Their architectural recommendations saved us thousands.",
    avatar: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    name: "Olivia Smith",
    role: "Creative Director",
    company: "Brand Agency",
    quote:
      "As a design-focused agency, we're extremely particular about our digital presence. ECODrIx not only met but exceeded our aesthetic expectations while delivering blazing fast performance.",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];
