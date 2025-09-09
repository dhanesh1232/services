"use client";
import Link from "next/link";
import React from "react";
import { Icons } from "../icons";
import Head from "next/head";

const message = encodeURIComponent(
  "Hi, I'm interested in your web development services. I need a website. Please share more details or a free demo."
);
export default function About() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ECODrIx Services",
              description:
                "Digital innovation and web development services provider specializing in custom solutions",
              url: "https://services.ecodrix.com",
              logo: "https://services.ecodrix.com/logo.png",
              foundingDate: "2022",
              sameAs: [
                "https://twitter.com/ecodrix",
                "https://www.linkedin.com/company/ecodrix",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8790063821",
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-transparent">
        <div className="max-w-6xl w-full bg-transparent mx-auto">
          {/* Hero Section with Gradient */}
          <section className="text-center mb-20">
            <div className="bg-gradient-to-r from-indigo-900 to-blue-800 dark:from-slate-800 dark:to-indigo-900 rounded-xl p-4 md:p-7 lg:p-12 text-white shadow-xl transform hover:scale-[1.02] transition-transform">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                Transforming Businesses Through{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                  Digital Innovation
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-100 max-w-4xl mx-auto leading-relaxed">
                We combine strategic thinking with technical excellence to
                deliver solutions that drive measurable growth and sustainable
                competitive advantage.
              </p>
            </div>
          </section>

          {/* Who We Are with Stats */}
          <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 relative">
                <span className="absolute -left-8 top-3 w-6 h-1 bg-gradient-to-r from-emerald-500 to-teal-400"></span>
                Who We Are
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Founded in 2022, we've grown from a passionate startup to a
                trusted digital partner for businesses across multiple
                industries. Our team of strategists, developers, and marketers
                brings diverse perspectives united by a common goal: your
                success.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { number: "5+", label: "Projects Completed" },
                  { number: "90%", label: "Client Retention" },
                  { number: "5 Day", label: "Quick Delivery" },
                  { number: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <div
                    key={index}
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

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-indigo-900 dark:to-slate-900 rounded-xl p-4 md:p-6 lg:p-8 text-white shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Our Core Services
              </h3>
              <ul className="space-y-2 md:space-y-4">
                {[
                  "Custom Web Development",
                  "E-Commerce Solutions",
                  "SEO & Content Strategy",
                  "Paid Media Management",
                  "Chatbot & AI Integration",
                  "Conversion Rate Optimization",
                  "Brand Strategy",
                  "Manage Website With Whatsapp",
                ].map((service, index) => (
                  <li key={index} className="flex items-start group">
                    <Icons.checkCircle className="text-emerald-400 group-hover:text-emerald-300 mt-1 mr-3 flex-shrink-0 transition-colors" />
                    <span className="text-slate-100 group-hover:text-white transition-colors">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Our Approach with Icons */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Our Winning Approach
              </h2>
              <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                We follow a proven methodology that delivers consistent results
                across all engagements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Icons.users className="w-8 h-8 text-emerald-400" />,
                  title: "Collaborative Discovery",
                  desc: "We begin by deeply understanding your business, audience, and objectives through workshops and data analysis.",
                },
                {
                  icon: <Icons.target className="w-8 h-8 text-emerald-400" />,
                  title: "Strategic Planning",
                  desc: "Our customized roadmaps align technical solutions with business goals for maximum impact.",
                },
                {
                  icon: (
                    <Icons.trendingUp className="w-8 h-8 text-emerald-400" />
                  ),
                  title: "Agile Execution",
                  desc: "We implement solutions in iterative phases, allowing for continuous optimization and quick wins.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-900 to-slate-800 dark:from-indigo-900 dark:to-slate-800 md:p-6 p-4 lg:p-8 rounded-xl shadow-lg text-white hover:transform transition-all duration-300"
                >
                  <div className="w-14 h-14 group-hover:scale-105 transition-all ease-in-out duration-150 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-full flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Values with Visual Cards */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                These principles guide every decision we make and every solution
                we deliver
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Icons.shield className="w-6 h-6" />,
                  title: "Integrity",
                  desc: "We build trust through transparency and ethical practices",
                  gradient: "from-emerald-600 to-teal-500",
                },
                {
                  icon: <Icons.lightbulb className="w-6 h-6" />,
                  title: "Innovation",
                  desc: "We challenge conventions to deliver breakthrough solutions",
                  gradient: "from-blue-600 to-indigo-500",
                },
                {
                  icon: <Icons.users className="w-6 h-6" />,
                  title: "Partnership",
                  desc: "Your success is our success - we're invested in your growth",
                  gradient: "from-purple-600 to-pink-500",
                },
                {
                  icon: <Icons.refresh className="w-6 h-6" />,
                  title: "Continuous Learning",
                  desc: "We stay ahead through constant skill development",
                  gradient: "from-rose-600 to-red-500",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${value.gradient} p-4 md:p-6 rounded-xl flex flex-col shadow-lg hover:shadow-2xl transform group transition-all duration-300`}
                >
                  <div className="mb-4 text-white group-hover:scale-105 flex items-center justify-center w-10 h-10 bg-transparent shadow-md rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {value.title}
                  </h3>
                  <p className="text-white/90">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Culture Section */}
          <section className="mb-20 bg-gradient-to-br from-slate-900 to-indigo-900 dark:from-slate-800 dark:to-indigo-900 rounded-xl p-4 md:p-8 lg:p-10 text-white shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                  Our Culture of Excellence
                </h2>
                <p className="text-lg text-slate-100 mb-6 leading-relaxed">
                  What sets us apart is our commitment to fostering a culture
                  where creativity meets discipline. We celebrate diversity of
                  thought and maintain rigorous quality standards.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      title: "Continuous Training",
                      desc: "200+ hours annual training per team member",
                    },
                    {
                      title: "Quality Assurance",
                      desc: "5-stage review process for all deliverables",
                    },
                    {
                      title: "Client-Centric",
                      desc: "Dedicated account managers for every project",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full p-2 mr-4 mt-1 group-hover:scale-110 transition-transform">
                        <Icons.checkCircle className="text-white w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-slate-200 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-indigo-900 p-4 md:p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                  Technologies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6">
                  {[
                    "React",
                    "Shopify",
                    "Google Cloud",
                    "AWS",
                    "HubSpot",
                    "Zoho",
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="bg-slate-700/50 hover:bg-slate-700 rounded-lg p-4 flex items-center justify-center h-20 transition-colors group"
                    >
                      <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-indigo-900 via-slate-900 to-emerald-900 rounded-xl p-12 text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business objectives
              with our proven digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`https://wa.me/918790063821?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
                className="bg-gradient-to-r inline-flex items-center gap-2 justify-center from-emerald-500 to-teal-400 text-white hover:from-emerald-600 hover:to-teal-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Icons.whatsapp />
                Schedule
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
