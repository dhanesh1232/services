"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "@/components/themeSwicther";
import { CloseIcon, Icons, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

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
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 10);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

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

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "tech", label: "Tech" },
    { id: "testimonials", label: "Clients" },
    { id: "contact", label: "Contact" },
  ];

  if (!mounted) {
    return (
      <header className="w-full bg-background px-6 md:px-12 sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto h-16">
          <div className="flex items-center space-x-6">
            <div className="h-8 w-24 bg-background rounded animate-pulse" />
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-16 bg-background rounded animate-pulse"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-background rounded-full animate-pulse" />
            <div className="md:hidden h-8 w-8 bg-background rounded-lg animate-pulse" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <AnimatePresence>
      {mounted && (
        <header
          className={`w-full transition-all duration-300 ${
            scrolled
              ? "bg-background/70 py-3 backdrop-blur-sm shadow-sm"
              : "bg-background/80 py-4 backdrop-blur-md"
          } px-6 md:px-12 sticky top-0 z-50`}
        >
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center justify-start space-x-6">
              <Link href="/" className="flex items-center group">
                <motion.span
                  className="text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 bg-clip-text hover:opacity-90 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  ECODrIx
                </motion.span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6 lg:space-x-8">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;

                  return (
                    <Link
                      key={link.id}
                      href={`#${link.id}`}
                      className={`relative text-base font-medium px-2 py-1 transition-colors group ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      }`}
                    >
                      {link.label}

                      {/* Underline animation */}
                      <motion.div
                        layout
                        className="absolute bottom-0 left-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 origin-left scale-x-0 group-hover:scale-x-100"
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ width: "100%", transformOrigin: "left" }}
                      />
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
                    size={18}
                    className="text-foreground text-xl"
                  />
                ) : (
                  <Icons.cross className="text-foreground text-xl" size={18} />
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
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-6 space-y-4 px-2">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={`#${link.id}`}
                        className={`block px-4 py-2 rounded-lg transition font-medium ${
                          activeSection === link.id
                            ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                            : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      )}
    </AnimatePresence>
  );
};
