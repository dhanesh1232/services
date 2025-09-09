"use client";

import Link from "next/link";
import { legal, services } from "@/lib/client/data";

export const footerLinks = {
  services: [
    ...services.slice(0, 5).map((each) => {
      return {
        id: each.id,
        name: each.title,
        href: "/services",
      };
    }),
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Process", href: "/#process" },
  ],
  legal: legal,
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ecodrix__360/",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/ecodrix",
    icon: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
  },
];

export const ServiceFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-gray-100 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 relative">
      <div className="max-w-full mx-auto px-6 md:px-12 py-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                ECODrIx
              </span>
            </div>
            <p className="text-muted-foreground">
              Professional web development services to help your business thrive
              online.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-indigo-600 dark:hover:text-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2 flex flex-col">
                {links.map((link) => {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-gmuted-foreground hover:text-indigo-500 hover:underline dark:hover:blue-indigo-600 transition-colors`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-border flex flex-col sm:flex-row justify-between items-center text-sm text-gmuted-foreground">
          <p className="text-center sm:text-left">
            &copy; {currentYear}{" "}
            <strong className="font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
              ECODrIx
            </strong>{" "}
            All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <Link
              role="button"
              href="privacy-policy"
              className="hover:text-indigo-600 hover:underline hover:cursor-pointer dark:hover:text-blue-600 transition-colors"
            >
              Privacy
            </Link>
            <Link
              role="button"
              href="terms-and-conditions"
              className="hover:text-indigo-600 hover:underline hover:cursor-pointer dark:hover:text-blue-600 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
