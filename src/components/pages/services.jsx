"use client";

import { services } from "@/lib/client/data";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
export default function ServicePage() {
  return (
    <div className="min-h-full py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900  dark:to-slate-950/95">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development solutions designed to elevate your
            online presence and transform your digital vision into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="group bg-gray-100 dark:bg-slate-900/90  backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 blur-xl" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-indigo-500 transition-colors duration-300">
                {service.title}
              </h3>

              <div className="relative mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl" />
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-indigo-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help bring your vision to life. Contact us
            today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex group gap-2 items-center px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 w-full sm:w-auto justify-center"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition ease-in-out duration-150" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
