"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "@/components/themeSwicther";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const navLinks = [
  { id: "services", label: "Services", href: "/services" },
  { id: "work", label: "Work" },
  { id: "tech", label: "Tech" },
  { id: "testimonials", label: "Clients" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "contact", label: "Contact", href: "/contact" },
];
export const ServiceHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [activeSection, setActiveSection] = useState("");
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Mount effect
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Scroll effect with debounce
  useEffect(() => {
    // Initial check for page load with scroll position
    const initialCheck = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);
    };

    // Run initial check
    initialCheck();

    let timeoutId;
    const handleScroll = () => {
      // Clear previous timeout to debounce
      clearTimeout(timeoutId);

      // Set immediate visual feedback
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);

      // Additional debounced check (optional)
      timeoutId = setTimeout(() => {
        const currentScrolled = window.scrollY > 40;
        setScrolled(currentScrolled);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array

  // Click outside handler with cleanup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        } else {
          setActiveSection(""); // No active section = nothing highlighted
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  if (!mounted) {
    return (
      <header className="w-full bg-background px-6 md:px-12 sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto h-16">
          <div className="flex items-center space-x-6">
            <Skeleton className="h-8 w-24 rounded animate-pulse" />
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-16 rounded animate-pulse" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full animate-pulse" />
            <Skeleton className="md:hidden h-8 w-8 rounded-lg animate-pulse" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <AnimatePresence>
      <motion.header
        initial={false}
        animate={{
          paddingTop: scrolled ? 5 : 10,
          paddingBottom: scrolled ? 5 : 10,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`w-full ${
          scrolled
            ? mobileMenuOpen
              ? "bg-background backdrop-blur-md"
              : "bg-background/50 backdrop-blur-md"
            : mobileMenuOpen
            ? "bg-background backdrop-blur-md shadow-xl"
            : "bg-transparent"
        } fixed top-0 z-50`}
      >
        <div className="w-full relative">
          <div className="flex px-4 md:px-8 justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center justify-start space-x-6">
              <Link href="/" className="flex items-center group">
                <motion.span
                  className="text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-indigo-50 via-blue-500 to-purple-500 bg-clip-text hover:opacity-90 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  ECODrIx
                </motion.span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6 lg:space-x-8">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  const href = link.href ? link.href : `#${link.id}`;
                  return (
                    <Link
                      key={link.id}
                      href={href}
                      className={`relative text-base font-medium px-2 py-1 transition-colors group ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <Button
                variant="ghost"
                className="md:hidden text-xl"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                size="icon"
                ref={toggleButtonRef}
              >
                {!mobileMenuOpen ? (
                  <Icons.alignRight
                    size={15}
                    className="text-foreground font-normal"
                  />
                ) : (
                  <Icons.cross
                    className="text-foreground font-normal"
                    size={15}
                  />
                )}
              </Button>
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
                transition={{ duration: 0.3 }}
                className={`md:hidden w-full overflow-hidden absolute bg-background backdrop-blur-md`}
              >
                <div className="pt-4 pb-6 space-y-2 px-2">
                  {navLinks.map((link) => {
                    const href = link.href ? link.href : `#${link.id}`;
                    return (
                      <motion.div
                        key={link.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          href={href}
                          className={`block px-2 py-2 rounded-lg transition font-medium ${
                            activeSection === link.id
                              ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                              : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};
