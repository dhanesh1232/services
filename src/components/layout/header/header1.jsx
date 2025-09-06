"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "@/components/themeSwicther";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navLinks } from "@/lib/client/data";

export const ServiceHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

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
              : "bg-background/50 backdrop-blur-md border-b border-border/50"
            : mobileMenuOpen
            ? "bg-background backdrop-blur-md shadow-xl"
            : "bg-transparent"
        } fixed top-0 z-50`}
      >
        <div className="w-full relative">
          <div className="flex px-4 md:px-8 justify-between items-center max-w-7xl mx-auto">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                width={100}
                height={30}
                className="h-10 w-16 object-cover"
                alt="ECODrix Logo"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`relative text-base font-medium px-2 py-1 transition-colors group underline-offset-2 ${
                      isActive
                        ? pathname !== "/"
                          ? "text-indigo-600 dark:text-indigo-400 underline"
                          : "text-pink-700 dark:text-pink-400 underline"
                        : pathname !== "/"
                        ? "text-gray-900 dark:text-gray-100 hover:text-indigo-600 hover:underline"
                        : "text-pink-900 dark:text-pink-300 hover:underline hover:text-pink-600 dark:hover:text-pink-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

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
                    return (
                      <motion.div
                        key={link.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          className={`block px-2 py-2 rounded-lg transition font-medium ${
                            pathname === link.href
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
