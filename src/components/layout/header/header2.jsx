"use client";

import { CloseIcon, MenuIcon } from "@/components/icons";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavLink = ({ href, children, isActive = false }) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-orange-500"
        : "text-gray-600 dark:text-gray-300 hover:text-orange-500"
    }`}
  >
    {children}
  </a>
);
const Button = ({ children, variant = "primary", className = "" }) => {
  const baseClasses =
    "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105";
  const variants = {
    primary:
      "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-gray-900 dark:focus:ring-gray-300",
    secondary:
      "bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-600 shadow-sm border border-gray-200 dark:border-gray-700",
    outline:
      "bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900 focus:ring-gray-300 dark:focus:ring-gray-600",
  };
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
const MobileMenu = ({ isOpen, navItems }) => (
  <div
    className={`
      md:hidden absolute top-full z-50 left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 shadow-lg
      transition-all duration-300 ease-in-out
      ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }
  `}
  >
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
        >
          {item}
        </a>
      ))}
    </div>
    <div className="pt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
      <div className="px-5">
        <Button variant="outline" className="w-full">
          Buy Template
        </Button>
      </div>
    </div>
  </div>
);

const navLinks = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "tech", label: "Tech" },
  { id: "testimonials", label: "Clients" },
  { id: "contact", label: "Contact" },
];
const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink] = useState(navLinks[0].id);
  const navItems = ["About", "Features", "Blog", "Pricing", "Contact"];

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

  return (
    <header
      className={`w-full border-b border-border transition-all duration-300 ${
        scrolled
          ? "bg-background/70 py-3 backdrop-blur-sm shadow-sm"
          : "bg-background/80 py-4 backdrop-blur-md"
      } px-6 md:px-12 sticky top-0 z-50`}
    >
      <div className="relative z-20">
        <div className="max-w-7xl px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link href="/" className="flex items-center group">
                <motion.span
                  className="text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 bg-clip-text hover:opacity-90 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  ECODrIx
                </motion.span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-1 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-full">
              {navLinks.map((item) => (
                <NavLink
                  key={item.id}
                  href={`#${item.id.toLowerCase()}`}
                  isActive={activeLink === item.id}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="hidden md:block">
              <Button variant="outline">Buy Template</Button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
        <MobileMenu isOpen={isMenuOpen} navItems={navItems} />
      </div>
    </header>
  );
};

export default function Header() {
  return (
    <div className="w-full overflow-hidden bg-background z-40">
      <div className="relative">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[40rem] h-[40rem] bg-gradient-to-tr from-orange-200 dark:from-orange-800/30 to-transparent opacity-20 dark:opacity-10 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none">
          <div className="w-[40rem] h-[40rem] bg-gradient-to-bl from-orange-200 dark:from-orange-800/30 to-transparent opacity-20 dark:opacity-10 rounded-full blur-3xl" />
        </div>
      </div>
      <HeaderSection />
    </div>
  );
}
