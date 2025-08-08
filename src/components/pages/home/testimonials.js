"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { FeedbackDialog } from "../../layout/overlay/feedback";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

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
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900">
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600 bg-clip-text text-transparent mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            What our clients say about working with us
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
                  className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-indigo-500/10 border border-gray-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Avatar className="border-2 border-indigo-500/20">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.split(" ")[0][0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-slate-200">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-slate-400">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-100 dark:bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-inner dark:shadow-indigo-500/30">
                    <FaQuoteLeft className="text-indigo-600 dark:text-indigo-400 text-xl" />
                  </div>

                  <p className="text-gray-600 dark:text-slate-400 mb-6">
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

          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-indigo-500/20 border border-gray-200 dark:border-slate-700/50 z-10"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-5 h-5 text-gray-900 dark:text-slate-200" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-indigo-500/20 border border-gray-200 dark:border-slate-700/50 z-10"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-5 h-5 text-gray-900 dark:text-slate-200" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-indigo-600 dark:bg-indigo-500 w-6"
                    : "bg-gray-300 dark:bg-slate-700"
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
              className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-indigo-500/10 border border-gray-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Avatar className="border-2 border-indigo-500/20">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name.split(" ")[0][0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-slate-200">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="bg-indigo-100 dark:bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-inner dark:shadow-indigo-500/30">
                <FaQuoteLeft className="text-indigo-600 dark:text-indigo-400 text-xl" />
              </div>

              <p className="text-gray-600 dark:text-slate-400 mb-6">
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
          className="text-center"
        >
          <div className="inline-flex mt-4 items-center gap-3 bg-indigo-100 dark:bg-indigo-500/10 px-4 py-1.5 md:py-2 rounded-full border border-indigo-200 dark:border-indigo-500/20">
            <span className="w-2.5 h-2.5 bg-indigo-600 dark:bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-400">
              Trusted by companies worldwide
            </span>
          </div>
        </motion.div>
        <div className="w-full flex flex-col items-center justify-center my-5">
          <p className="text-center text-gray-600 dark:text-slate-400 my-2">
            Please share your valuable feedback with us
          </p>
          <FeedbackDialog />
        </div>
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
