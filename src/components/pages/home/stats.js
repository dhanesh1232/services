"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { RandomStars, RightGlow } from "./stars";
import { useResponsiveCarousel } from "@/hooks/slide-breakpoints";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  {
    value: "100%",
    label: "Code Quality",
    icon: Icons.award,
    description: "Maintainable and robust code standards",
  },
  {
    value: "5K+",
    label: "Commits",
    icon: Icons.clock,
    description: "Continuous development iteration",
  },
];

const StatIcon = ({ icon: Icon, className }) => (
  <div className="mb-4 inline-flex p-3 bg-purple-500/20 rounded-xl">
    {Icon ? (
      <Icon className={className} />
    ) : (
      <div className={`${className} bg-purple-500/20 rounded-full`} />
    )}
  </div>
);

export function ServicesStats() {
  const slideRef = useRef(null);
  const { slidesPerView } = useResponsiveCarousel({
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
  });

  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
    })
  );

  return (
    <section className="relative isolate overflow-hidden bg-inherit text-inherit px-6 pt-14 lg:px-8">
      {/* Background elements */}
      <RandomStars />
      <RightGlow />

      <div className="mx-auto max-w-7xl py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Our Digital{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Transforming visions into digital reality with measurable results
            and exceptional service delivery.
          </p>
        </motion.div>

        {/* STATS SECTION - Single Row Layout */}
        <div className="w-full">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className={`w-full gap-6 transition-all duration-500`}
            aria-hidden="true"
            ref={slideRef}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4 gap-0">
              {stats.map((stat, index) => (
                <CarouselItem
                  key={stat.label}
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
                    index={index}
                    animation
                    key={stat.label}
                    className="relative group overflow-hidden rounded-2xl border border-gray-700/30 bg-slate-800/50 shadow-xl backdrop-blur-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <CardContent className="relative z-10 pt-6 text-center">
                      <StatIcon
                        icon={stat.icon}
                        className="h-6 w-6 text-purple-400"
                      />

                      <h3 className="mb-2 text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {stat.value}
                      </h3>

                      <CardTitle className="mb-2 text-lg font-medium text-foreground">
                        {stat.label}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {stat.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-gray-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300" />
            <CarouselNext className="right-0 translate-x-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-gray-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
