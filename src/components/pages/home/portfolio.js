"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { RandomStars } from "./stars";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/mediaQuery";
import { Icons } from "@/components/icons";

export const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isSmallMobile = useMediaQuery("(max-width:480px)");
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start start", "end start"],
  });

  // Memoize portfolio items to prevent unnecessary re-renders
  const portfolioItems = useMemo(
    () => [
      { isPlaceholder: true },
      {
        title: "E-commerce Platform",
        description:
          "A premium online store with advanced cart functionality and seamless payment integration. Built with cutting-edge technology to deliver exceptional user experience and maximize conversion rates.",
        image:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        blurData: "L5H2EC=PM+yV0g-mq.wG9c010J}I",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind"],
        features: [
          "Advanced shopping cart with persistent storage",
          "Seamless payment integration with Stripe",
          "Product filtering and search functionality",
          "User authentication and profile management",
          "Order tracking and history",
          "Responsive design for all devices",
        ],
        color: "yellow-500",
      },
      {
        title: "Analytics Dashboard",
        description:
          "A sophisticated dashboard with real-time data visualization for enterprise clients. Features advanced filtering, custom reporting, and predictive analytics capabilities.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        blurData: "L9AB*A%LTw%g~qV@?bj[5gbHVSj[",
        tags: ["Next.js", "TypeScript", "Tailwind", "Chart.js", "GraphQL"],
        features: [
          "Real-time data visualization with interactive charts",
          "Customizable dashboard with drag-and-drop widgets",
          "Advanced filtering and data segmentation",
          "Export functionality for reports",
          "Role-based access control",
          "Predictive analytics and trend forecasting",
        ],
        color: "blue-500",
      },
      {
        title: "Corporate Website",
        description:
          "An elegant responsive website with CMS integration for seamless content management. Designed to reflect brand identity while ensuring optimal performance across all devices.",
        image:
          "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        blurData: "L35O%C~X9F~q~q-;%M%M-;%M-;%M",
        tags: ["Next.js", "Tailwind", "Sanity", "Framer Motion", "SEO"],
        features: [
          "Headless CMS integration for easy content management",
          "SEO optimized structure and performance",
          "Smooth animations and transitions",
          "Multi-language support",
          "Blog and news section",
          "Contact forms with spam protection",
        ],
        color: "blue-500",
      },
      {
        title: "Mobile Banking App",
        description:
          "A secure banking application with advanced biometric authentication. Offers seamless money transfers, bill payments, and investment tracking with military-grade encryption.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        blurData: "L15O%C~X9F~q~q-;%M%M-;%M-;%M",
        tags: [
          "React Native",
          "Node.js",
          "Firebase",
          "Biometrics",
          "Encryption",
        ],
        features: [
          "Biometric authentication (Face ID, Touch ID)",
          "Secure money transfers and bill payments",
          "Investment portfolio tracking",
          "Transaction history and statements",
          "Budgeting and financial planning tools",
          "Push notifications for transactions",
        ],
        color: "pink-500",
      },
      {
        title: "SaaS Platform",
        description:
          "A cloud-based software solution with premium subscription model. Scalable architecture with automated deployment, monitoring, and customer management systems.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        blurData: "L25O%C~X9F~q~q-;%M%M-;%M-;%M",
        tags: [
          "Next.js",
          "GraphQL",
          "Stripe",
          "AWS",
          "Docker",
          "Microservices",
        ],
        features: [
          "Multi-tier subscription management",
          "Automated billing with Stripe integration",
          "User management and role-based permissions",
          "API integration and webhook support",
          "Usage analytics and reporting",
          "White-label customization options",
        ],
        color: "orange-500",
      },
      {
        title: "Portfolio Website",
        description:
          "A minimalist portfolio with sophisticated 3D animations and premium dark mode. Custom-designed interactions and micro-animations create an immersive browsing experience.",
        image:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        blurData: "L35O%C~X9F~q~q-;%M%M-;%M-;%M",
        tags: ["React", "Three.js", "Framer Motion", "GSAP", "WebGL"],
        features: [
          "Interactive 3D elements with Three.js",
          "Smooth animations with Framer Motion and GSAP",
          "Dark/light mode toggle",
          "Project filtering and categorization",
          "Contact form with validation",
          "Performance optimized for fast loading",
        ],
        color: "purple-500",
      },
      { isPlaceholder: true },
    ],
    []
  );

  // Calculate progress through portfolio items
  const progress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, portfolioItems.length]
  );

  // Debounced scroll handler to prevent rapid state updates
  const handleScrollChange = useCallback(
    (latest) => {
      setIsScrolling(true);

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a new timeout
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      const newIndex = Math.min(Math.floor(latest), portfolioItems.length - 1);
      setActiveIndex(Math.max(0, newIndex));
    },
    [portfolioItems.length]
  );

  useEffect(() => {
    const unsubscribe = progress.onChange(handleScrollChange);
    return () => {
      unsubscribe();
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [progress, handleScrollChange]);

  // Transform values for smooth animations
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );

  // Memoize the active item to prevent unnecessary re-renders
  const activeItem = useMemo(() => {
    return portfolioItems[activeIndex] || {};
  }, [activeIndex, portfolioItems]);

  // Check if current item is a placeholder
  const isPlaceholder = activeItem.isPlaceholder;

  return (
    <>
      {/* Trigger element that creates scroll space */}
      <section
        ref={triggerRef}
        className="relative"
        style={{ height: `${(portfolioItems.length + 1) * 100}vh` }}
      >
        {/* Sticky portfolio section */}
        <div
          ref={sectionRef}
          className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-transparent flex items-center justify-center"
          id="portfolio-section"
        >
          <RandomStars className="z-0" />

          <motion.div
            style={{ opacity, scale }}
            className="w-full h-full flex items-center justify-center relative z-10 py-4"
          >
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-5 md:px-6 lg:px-8 h-full flex flex-col justify-center">
              {activeIndex === 0 && (
                <div className="text-center mb-4 md:mb-6">
                  <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-3 py-1 md:px-4 md:py-2 rounded-full border border-yellow-500/20 mb-3">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-500 rounded-full animate-pulse" />
                    <span className="text-xs md:text-sm font-medium text-yellow-700 dark:text-yellow-400 uppercase tracking-wider">
                      Premium Portfolio
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
                      Exclusive
                    </span>{" "}
                    Creations
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 mb-4">
                    A curated collection of premium projects crafted with
                    precision, innovation, and exceptional attention to detail
                  </p>
                  <div className="inline-flex items-center gap-2 text-muted-foreground">
                    explore more
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Icons.chevronsRight />
                    </motion.span>
                  </div>
                </div>
              )}

              {!isPlaceholder &&
                activeIndex !== 0 &&
                activeIndex !== portfolioItems.length - 1 && (
                  <div className="flex flex-col h-full md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
                    {/* Image container (top on mobile, left on desktop) */}
                    <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1">
                      <motion.div
                        key={`image-${activeIndex}`}
                        initial={{
                          opacity: 0,
                          x: isMobile ? 0 : -30,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full max-w-md"
                      >
                        <div className="overflow-hidden relative rounded-xl md:rounded-2xl shadow-lg md:shadow-xl group">
                          <div
                            className="relative"
                            style={{
                              width: "100%",
                              height: isSmallMobile
                                ? "200px"
                                : isMobile
                                ? "250px"
                                : "400px",
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              fill
                              priority={activeIndex <= 2} // Only priority load first few images
                              src={activeItem.image}
                              alt={activeItem.title}
                              className="object-cover transition-all duration-700 group-hover:scale-105"
                              placeholder="blur"
                              blurDataURL={activeItem.blurData}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                            {/* Mobile overlay with title */}
                            {isMobile && (
                              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                                <h4 className="text-white font-bold text-lg mb-1">
                                  {activeItem.title}
                                </h4>
                                <p className="text-gray-300 text-xs">
                                  {activeItem.tags.slice(0, 2).join(" • ")}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Progress indicator for mobile */}
                        {isMobile && (
                          <div className="mt-3 flex items-center justify-center">
                            <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full bg-${portfolioItems[activeIndex].color}`}
                                initial={{ width: "0%" }}
                                animate={{
                                  width: `${
                                    (activeIndex /
                                      (portfolioItems.length - 2)) *
                                    100
                                  }%`,
                                }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                            <span className="text-xs inline-flex items-center text-gray-500 dark:text-gray-400 ml-2">
                              <span
                                className={`text-${portfolioItems[activeIndex].color}`}
                              >
                                {activeIndex}
                              </span>
                              /{portfolioItems.length - 2}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    </div>

                    <div className="w-full md:w-1/2 order-2 md:order-2 flex flex-col justify-center">
                      <motion.div
                        key={`content-${activeIndex}`}
                        initial={{
                          opacity: 0,
                          x: isMobile ? 0 : 30,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 0.1,
                        }}
                        className="h-full flex flex-col justify-center"
                      >
                        {/* Progress indicator for desktop */}
                        {!isMobile && (
                          <div className="mb-4 flex items-center">
                            <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-3">
                              <motion.div
                                className={`h-full bg-${portfolioItems[activeIndex].color} rounded-full`}
                                initial={{ width: "0%" }}
                                animate={{
                                  width: `${
                                    (activeIndex /
                                      (portfolioItems.length - 2)) *
                                    100
                                  }%`,
                                }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                            <span className="text-xs inline-flex items-center text-gray-500 dark:text-gray-400 whitespace-nowrap">
                              <span
                                className={`text-${portfolioItems[activeIndex].color}`}
                              >
                                {activeIndex}
                              </span>
                              /{portfolioItems.length - 2}
                            </span>
                          </div>
                        )}

                        {!isMobile && (
                          <motion.h3
                            className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-slate-200 mb-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {activeItem.title}
                          </motion.h3>
                        )}

                        <motion.p
                          className="text-sm sm:text-base text-gray-600 dark:text-slate-400 mb-3 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {activeItem.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="mb-3"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Key Features
                          </h4>
                          <ul className="space-y-1">
                            {activeItem.features
                              .slice(0, isMobile ? 3 : 4)
                              .map((feature, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center gap-2 justify-start"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + i * 0.1 }}
                                >
                                  <span className="bg-yellow-500 h-2 rounded-full animate-pulse w-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                    {feature}
                                  </span>
                                </motion.li>
                              ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          className="flex flex-wrap gap-1.5 mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          {activeItem.tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              className="text-xs bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded-full border border-yellow-500/20"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7 + i * 0.05 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                )}

              {activeIndex === portfolioItems.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center mb-4"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                      Ready to Create Something{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
                        Amazing
                      </span>
                      ?
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                      Let's collaborate to bring your vision to life with the
                      same level of craftsmanship and attention to detail.
                    </p>
                  </div>
                  <Button
                    asChild
                    size={isMobile ? "sm" : "lg"}
                    className={`
        relative bg-gradient-to-r from-green-600 to-green-500 
        hover:from-green-700 hover:to-green-600 
        shadow-xl hover:shadow-green-500/40 
        transition-all duration-300
        text-sm sm:text-base lg:text-lg
        h-10 sm:h-12 lg:h-14
        px-4 sm:px-6 lg:px-8
        rounded-full border-0 overflow-hidden group
        w-full sm:w-auto
      `}
                  >
                    <Link
                      href="/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contact on WhatsApp"
                      className="flex items-center justify-center gap-2 sm:gap-3 group text-white font-medium"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <span className="relative z-10 whitespace-nowrap">
                        Begin Your Journey
                      </span>
                      <Icons.arrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform ease-in-out group-hover:translate-x-1 relative z-10" />
                    </Link>
                  </Button>
                </motion.div>
              )}

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                animate={{
                  opacity:
                    activeIndex < portfolioItems.length - 1 && !isScrolling
                      ? 1
                      : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center text-gray-400 dark:text-gray-600">
                  <span className="text-xs mb-1">Scroll to explore</span>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-transparent rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
