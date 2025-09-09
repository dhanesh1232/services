"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { FeedbackDialog } from "../../layout/overlay/feedback";
import { testimonials } from "@/lib/client/data";
import { Icons } from "@/components/icons";
import { RandomStars, RightGlow } from "./stars";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const [feedbacks, setFeedbacks] = useState(testimonials);

  /*useEffect(() => {
    const fetchFeedback = async () => {
      const res = await fetch("/api/feedback", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const newFeedbacks = data?.data?.feedback || [];
      console.log(newFeedbacks);
      setFeedbacks((prev) => {
        const merged = [...prev, ...newFeedbacks];
        const unique = merged.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.id === item.id)
        );
        return unique;
      });
    };
    fetchFeedback();
  }, []);*/

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (index) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(index);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
  };

  const goToPrev = () => {
    goToSlide((currentIndex - 1 + feedbacks.length) % feedbacks.length);
  };

  const goToNext = () => {
    goToSlide((currentIndex + 1) % feedbacks.length);
  };

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
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
            {feedbacks.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
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
                    <Icons.quoteLeft className="text-indigo-600 dark:text-indigo-400 text-xl" />
                  </div>

                  <p className="text-gray-600 dark:text-slate-400 mb-6">
                    {testimonial.description}
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
            {feedbacks.map((_, index) => (
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
          {feedbacks.map((testimonial, index) => (
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
                <Icons.quoteLeft className="text-indigo-600 dark:text-indigo-400 text-xl" />
              </div>

              <p className="text-gray-600 dark:text-slate-400 mb-6">
                {testimonial.description}
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
      <RandomStars />
      <RightGlow />
    </section>
  );
};
