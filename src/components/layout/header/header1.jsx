"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "@/components/themeSwicther";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { contactInfo, navLinks } from "@/lib/client/data";
import { MenuToggle } from "./menu-toggle";
import Announcement from "./announcement";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { Separator } from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";

export const ServiceHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Custom hook to lock body scroll when menu is open
  useLockBodyScroll(mobileMenuOpen);

  // Scroll effect with improved debounce using requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    const updateScrolled = () => {
      const currentScrollY = window.scrollY;
      // Only update state if scroll position has meaningfully changed
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        const isScrolled = currentScrollY > 40;
        setScrolled(isScrolled);
        lastScrollY = currentScrollY;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    };

    // Initial check
    setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside handler with improved cleanup
  const handleClickOutside = useCallback((event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target) &&
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(event.target)
    ) {
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen, handleClickOutside]);

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  return (
    <AnimatePresence>
      <header
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          scrolled
            ? mobileMenuOpen
              ? "bg-background backdrop-blur-md"
              : "bg-background/80 backdrop-blur-md border-b border-border/40"
            : mobileMenuOpen
            ? "bg-background backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Announcement />
        <motion.div
          initial={false}
          animate={{
            paddingTop: scrolled ? "0.75rem" : "1.25rem",
            paddingBottom: scrolled ? "0.75rem" : "1.25rem",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full relative"
        >
          <div className="flex px-4 md:px-8 justify-between items-center max-w-7xl mx-auto">
            <Link
              href="/"
              className="flex items-center group transition-transform hover:scale-105"
              aria-label="Home"
            >
              <Image
                src="/logo.png"
                width={100}
                height={30}
                className="h-10 w-16 object-cover"
                alt="ECODRIX Logo"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex space-x-4 lg:space-x-6"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`relative text-base font-medium transition-colors group py-2 px-1 ${
                      isActive
                        ? pathname !== "/"
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-pink-700 dark:text-pink-400"
                        : pathname !== "/"
                        ? "text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400"
                        : "text-pink-900 dark:text-pink-300 hover:text-pink-600 dark:hover:text-pink-400"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 ${
                        isActive ? "w-full" : "group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              <ThemeSwitcher />
              <MenuToggle
                ref={toggleButtonRef}
                setIsMenuOpen={setMobileMenuOpen}
                isMenuOpen={mobileMenuOpen}
                aria-expanded={mobileMenuOpen}
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden w-full overflow-hidden absolute bg-background/95 backdrop-blur-lg border-t border-border/30 shadow-xl"
              >
                <nav
                  className="pt-4 pb-6 space-y-1 px-4"
                  aria-label="Mobile navigation"
                >
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`block px-4 py-2 rounded-lg transition-all ease-in-out duration-150 font-medium ${
                            isActive
                              ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                              : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
                <Separator />
                <div className="px-4 pb-6">
                  <h3 className="text-sm font-medium text-foreground/70 px-4 mb-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Contact Us
                  </h3>

                  <div className="grid gap-2">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center px-4 py-2.5 text-sm rounded-lg bg-accent/50 text-foreground/80"
                      >
                        {/* Add appropriate icons for each contact method */}
                        {item.includes("Call") && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2 text-indigo-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        )}
                        {item.includes("Email") && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2 text-indigo-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                        {item.includes("Business") && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2 text-indigo-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                        <span>{item.replace(/^[^\s]+\s/, "")}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-2"
                  >
                    <Button
                      variant="primary"
                      asChild
                      className="w-full"
                      size="lg"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get In Touch
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>
    </AnimatePresence>
  );
};
