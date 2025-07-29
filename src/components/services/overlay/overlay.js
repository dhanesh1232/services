"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { RocketIcon, ConstructionIcon, CalendarIcon } from "@/components/icons"; // You'll need to create or import these icons
import { footerLinks } from "../footer";

export default function Overlay({ modal, onClose }) {
  function formatSlugToTitle(slug) {
    if (typeof slug !== "string") return "";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const title = formatSlugToTitle(modal);
  const isService = footerLinks.services.some(
    (service) => service.href === modal
  );

  return (
    <Dialog open={!!modal} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-lg">
        <DialogClose
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </DialogClose>

        <div className="text-center p-6">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mb-4">
            {isService ? (
              <RocketIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            ) : (
              <ConstructionIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            )}
          </div>

          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-bold text-gray-900 dark:text-white">
              {title} {isService ? "Service" : "Page"}
            </DialogTitle>
          </DialogHeader>

          <DialogDescription asChild>
            <div className="mt-4 text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                {`We're currently`} working hard to bring you...
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 mt-4">
                <CalendarIcon className="h-5 w-5" />
                <span>Expected launch: Aug 2025</span>
              </div>
            </div>
          </DialogDescription>

          <div className="mt-6">
            <button
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Got it!
            </button>
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              Want early access?{" "}
              <a
                href="#contact"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
                onClick={onClose}
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
