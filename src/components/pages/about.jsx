"use client";

import Link from "next/link";
import React from "react";
import { Icons } from "../icons";

// Predefined WhatsApp messages
const webDevMessage = encodeURIComponent(
  "Hi, I'm interested in your web development services. I need a custom website built for my business. Please share more details or a free demo."
);
const seoMessage = encodeURIComponent(
  "Hi, I'm looking to improve my website's search engine ranking and online visibility. Can you provide SEO services or a free consultation?"
);
const aiAutomationMessage = encodeURIComponent(
  "Hi, I'm interested in AI-powered solutions for automating my business workflows, chatbots, or CRM integration. Please share more details or a free demo."
);
const fullServiceMessage = encodeURIComponent(
  "Hi, I'm looking for comprehensive web solutions including website development, SEO, AI automation, and chatbots. Can you share details or a free demo?"
);

export default function ServicesPage() {
  const services = [
    { name: "Web Development", message: webDevMessage },
    { name: "SEO & Digital Marketing", message: seoMessage },
    { name: "AI & Automation Solutions", message: aiAutomationMessage },
    { name: "Full-Service Solutions", message: fullServiceMessage },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "95%", label: "Client Retention" },
    { number: "5 Day", label: "Quick Delivery" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-20 pb-12 bg-inherit">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-900 to-blue-800 dark:from-slate-800 dark:to-indigo-900 rounded-xl p-6 md:p-12 text-white shadow-xl transform hover:scale-[1.02] transition-transform">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in">
              Transform Your Business with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                Digital Innovation
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-100 leading-relaxed">
              We combine strategic thinking, technical excellence, and
              AI-powered automation to deliver solutions that grow your
              business.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 relative">
              <span className="absolute -left-8 top-3 w-6 h-1 bg-gradient-to-r from-emerald-500 to-teal-400"></span>
              Who We Are
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              We are a team of web developers, marketers, and AI experts
              delivering high-quality, innovative solutions that drive
              measurable results.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-shadow"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Cards */}
          <div className="grid gap-4">
            {services.map((service, i) => (
              <Link
                key={i}
                href={`https://wa.me/918790063821?text=${service.message}`}
                target="_blank"
                className="group bg-gradient-to-br from-slate-900 to-slate-800 dark:from-indigo-900 dark:to-slate-900 p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-300 group-hover:text-white transition-colors">
                  {`Click to chat with us on WhatsApp and learn more about our ${service.name.toLowerCase()}.`}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Approach Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">
            Our Winning Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Icons.users className="w-8 h-8 text-emerald-400" />,
                title: "Collaborative Discovery",
                desc: "We understand your business and audience before proposing solutions.",
              },
              {
                icon: <Icons.target className="w-8 h-8 text-emerald-400" />,
                title: "Strategic Planning",
                desc: "Tailored roadmaps that align technology with your business goals.",
              },
              {
                icon: <Icons.trendingUp className="w-8 h-8 text-emerald-400" />,
                title: "Agile Execution",
                desc: "Iterative development with continuous optimization and quick wins.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-slate-900 to-slate-800 dark:from-indigo-900 dark:to-slate-800 p-6 rounded-xl shadow-lg text-white hover:transform transition-all duration-300"
              >
                <div className="w-14 h-14 group-hover:scale-105 transition-all ease-in-out duration-150 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-indigo-900 via-slate-900 to-emerald-900 rounded-xl p-12 text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Chat with us on WhatsApp to get started with tailored solutions for
            your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`https://wa.me/918143963821?text=${fullServiceMessage}`}
              target="_blank"
              className="bg-gradient-to-r inline-flex items-center gap-2 justify-center from-emerald-500 to-teal-400 text-white hover:from-emerald-600 hover:to-teal-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Icons.whatsapp />
              Schedule a Free Demo
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
