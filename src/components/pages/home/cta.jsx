"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-transparent py-16 text-center rounded-2xl my-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-1/4 w-24 h-24 bg-blue-500 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-emerald-500 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Scale Your Business?
        </motion.h2>

        <motion.p
          className="mb-8 text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's build a modern website, AI chatbot, or automation tailored for
          your growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Button
            asChild
            variant="outline-success"
            className="relative overflow-hidden group px-8 py-6 text-lg font-medium rounded-full"
            size="lg"
          >
            <Link href="/contact">
              <span className="relative z-10">Get Free Consultation</span>

              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{
                  x: isHovered ? [0, 10, -10, 0] : 0,
                  transition: { duration: 0.5 },
                }}
              />
            </Link>
          </Button>
        </motion.div>

        {/* Additional trust indicators */}
        <motion.p
          className="mt-6 text-sm text-slate-500 dark:text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          No obligation • 30-minute strategy session • 100% free
        </motion.p>
      </div>
    </section>
  );
};
