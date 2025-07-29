"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = getCookieConsent();
    if (!consent) setVisible(true);
  }, []);

  const getCookieConsent = () => {
    if (typeof window === "undefined") return null;

    const consent = localStorage.getItem("services_cookie_consent");
    if (!consent) return null;

    try {
      const data = JSON.parse(consent);
      if (
        data.status === "declined" &&
        data.expires &&
        new Date(data.expires) < new Date()
      ) {
        localStorage.removeItem("services_cookie_consent");
        return null;
      }
      return data.status;
    } catch {
      return consent; // fallback for old format
    }
  };

  const acceptCookies = () => {
    const consentData = {
      status: "accepted",
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(
      "services_cookie_consent",
      JSON.stringify(consentData)
    );
    setVisible(false);
  };

  const declineCookies = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const consentData = {
      status: "declined",
      timestamp: new Date().toISOString(),
      expires: tomorrow.toISOString(),
    };
    localStorage.setItem(
      "services_cookie_consent",
      JSON.stringify(consentData)
    );
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-6xl mx-auto bg-gray-800 text-white px-6 py-4 text-sm md:text-base rounded-lg shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-gray-700"
        >
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <CookieIcon />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">
                  We value your privacy
                </h3>
                <p className="text-gray-300">
                  We use cookies to enhance your browsing experience, analyze
                  website traffic, and serve better content. Essential cookies
                  help our site work, and analytics tools like Google Analytics
                  and Hotjar help us improve.{" "}
                  <a
                    href="/cookie-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400 hover:text-blue-300 transition"
                  >
                    Learn more
                  </a>{" "}
                  about how we use cookies.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={declineCookies}
              className="px-5 py-2 rounded-md border border-gray-600 text-white hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CookieIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
      <path d="M8.5 8.5v.01"></path>
      <path d="M16 15.5v.01"></path>
      <path d="M12 12v.01"></path>
      <path d="M11 17v.01"></path>
      <path d="M7 14v.01"></path>
    </svg>
  );
}
