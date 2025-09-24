"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Mail, MoveRight, Rocket } from "lucide-react";
import { collectUserMetadata } from "@/lib/client/metadata";

export const NewsletterSection = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const metadata = collectUserMetadata();
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({
          email,
          metadata,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      if (!res.ok && res.status) {
        throw new Error(result.message || "Failed to send message");
      }
      setIsSubscribed(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const isValid = () => {
    const e = email.trim();
    if (!e || e.length > 254 || e.length === 0) return false;
    if (typeof e !== "string") return false;
    const strictRE =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return strictRE.test(e);
  };

  return (
    <section
      className={`relative py-20 ${className} px-6 md:px-12 lg:px-24 text-center overflow-hidden`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-400 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="absolute -top-2 -right-2 bg-amber-500 rounded-full p-1"
            >
              <Rocket className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stay Updated{" "}
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            className="inline-block"
          >
            🚀
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get the latest tips on web development, AI automation, and digital
          growth delivered straight to your inbox.
        </motion.p>

        {isSubscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-100 dark:bg-green-900/30 py-6 px-8 rounded-xl border border-green-200 dark:border-green-800"
          >
            <Check className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
              You're Subscribed!
            </h3>
            <p className="text-green-700 dark:text-green-300">
              Thanks for joining our newsletter. We'll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-inherit py-6 pl-12 pr-4 rounded-full border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <Button
              disabled={!isValid() || isLoading}
              type="submit"
              className={`text-white py-6 px-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 gap-2 ${
                isLoading ? "opacity-80 cursor-not-allowed" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Subscribing...</span>
                </div>
              ) : (
                <>
                  Subscribe
                  <motion.span
                    animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MoveRight className="w-5 h-5" />
                  </motion.span>
                </>
              )}
            </Button>
          </motion.form>
        )}

        <motion.p
          className="text-xs text-gray-500 dark:text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          No spam, unsubscribe anytime. We respect your privacy.
        </motion.p>
      </div>
    </section>
  );
};
