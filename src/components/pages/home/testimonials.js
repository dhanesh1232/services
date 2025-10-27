"use client";
import { motion } from "framer-motion";
import * as React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FeedbackDialog } from "@/components/layout/overlay/feedback";
import { testimonials } from "@/lib/client/data";
import { Icons } from "@/components/icons";
import { RandomStars, RightGlow } from "./stars";
import { useResponsiveCarousel } from "@/hooks/slide-breakpoints";

export const TestimonialsSection = () => {
  const carouselRef = React.useRef(null);
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
    })
  );
  const [feedbacks] = React.useState(testimonials);
  const { slidesPerView } = useResponsiveCarousel({
    xxs: 1,
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 4,
  });

  const StarRating = ({ rating = 5 }) => (
    <div className="flex text-amber-400">
      {[...Array(5)].map((_, i) => (
        <Icons.star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-current" : "text-amber-400/30"
          }`}
        />
      ))}
    </div>
  );

  React.useEffect(() => {
    console.log(carouselRef, carouselRef.current);
  });

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/30"
          >
            <Icons.heart className="w-3 h-3 mr-1" />
            Trusted by Companies Worldwide
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-600 bg-clip-text text-transparent mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Discover what our clients say about working with us and the impact
            we've made together
          </p>
        </motion.div>

        <div className="relative">
          <Carousel
            ref={carouselRef}
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4 gap-0">
              {feedbacks.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  index={index}
                  className={`${
                    slidesPerView >= 4
                      ? "basis-1/4"
                      : slidesPerView === 3
                      ? "basis-1/3"
                      : slidesPerView === 2
                      ? "basis-1/2"
                      : slidesPerView === 1
                      ? "basis-full"
                      : "basis-full"
                  }`}
                >
                  <Card
                    animation
                    index={index}
                    className="group overflow-hidden relative h-full bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
                  >
                    <CardContent className="p-4 overflow-hidden">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-10 transition-opacity ease-in-out duration-300">
                        <Icons.quote className="w-14 h-14 text-indigo-600 dark:text-indigo-400" />
                      </div>

                      {/* Header with Avatar */}
                      <div className="flex items-start gap-4 mb-6">
                        <Avatar className="w-12 h-12 border-2 border-indigo-500/20 shadow-lg group-hover:shadow-indigo-500/20 transition-shadow duration-500">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 dark:text-slate-200 truncate">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-slate-400 truncate">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-slate-500 truncate">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="mb-4">
                        <StarRating rating={testimonial.rating} />
                      </div>

                      {/* Testimonial Text */}
                      <CardDescription>
                        <blockquote className="text-muted-foreground leading-relaxed line-clamp-4">
                          {testimonial.description}
                        </blockquote>
                      </CardDescription>

                      {/* Hover Effect Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-lg -m-2" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation Arrows */}
            <CarouselPrevious className="left-0 -translate-x-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-gray-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300" />
            <CarouselNext className="right-0 translate-x-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-gray-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300" />
          </Carousel>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 px-8 py-6 rounded-lg border border-indigo-500/20">
            <div className="text-left gap-0">
              <h3 className="font-semibold text-foreground">
                Share Your Experience
              </h3>
              <p className="text-muted-foreground text-sm">
                Help us improve by sharing your valuable feedback
              </p>
            </div>
            <FeedbackDialog />
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <RandomStars />
      <RightGlow />
    </section>
  );
};
