"use client";
import { Icons } from "@/components/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { LeftGlow, RandomStars } from "./stars";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [activeItems, setActiveItems] = useState([]);

  const faqCategories = [
    {
      name: "General",
      value: "general",
      items: faqs.filter((faq) => !faq.category || faq.category === "general"),
    },
    {
      name: "Process",
      value: "process",
      items: faqs.filter((faq) => faq.category === "process"),
    },
    {
      name: "Technical",
      value: "technical",
      items: faqs.filter((faq) => faq.category === "technical"),
    },
  ];

  return (
    <section
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent"
      id="faq"
    >
      <RandomStars />
      <LeftGlow />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap sticky top-16 z-10 gap-2 justify-center mb-8 bg-inherit backdrop-blur-md py-2 rounded-lg">
            {faqCategories.map((category, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveCategory(category.value);
                  document
                    .getElementById(`category-${category.value}`)
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  activeCategory === category.value
                    ? "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30"
                    : "bg-gray-50 dark:bg-slate-800/50 backdrop-blur-xl text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/10 border border-gray-200 dark:border-slate-700/50"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          <Accordion
            type="multiple"
            value={activeItems}
            onValueChange={setActiveItems}
            className="space-y-8"
          >
            {faqCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                id={`category-${category.value}`}
                className="scroll-mt-24"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-6 pb-2 border-b border-gray-200 dark:border-slate-700/50"
                >
                  {category.name}
                </motion.h3>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ staggerChildren: 0.05 }}
                  className="space-y-2"
                >
                  {category.items.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={faq.id}
                      className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur-xl rounded-lg border border-gray-200 dark:border-slate-700/50 overflow-hidden hover:shadow-md transition-all duration-300 data-[state=open]:border-indigo-500/50"
                    >
                      <AccordionTrigger className="group flex w-full items-center justify-between p-6 text-left focus:outline-none border-0">
                        {faq.question}
                      </AccordionTrigger>

                      <AccordionContent className="overflow-hidden text-gray-600 dark:text-slate-400 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-6 pb-6 space-y-3"
                        >
                          {faq.answer.split("\n").map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}

                          {faq.link && (
                            <div className="pt-2">
                              <a
                                href={faq.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium transition-colors"
                              >
                                {faq.link.text}
                                <Icons.external className="ml-1.5 w-4 h-4" />
                              </a>
                            </div>
                          )}
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </motion.div>
              </div>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 bg-indigo-100 dark:bg-indigo-500/10 px-6 py-3 rounded-full border border-indigo-200 dark:border-indigo-500/20">
            <span className="w-2.5 h-2.5 bg-indigo-600 dark:bg-indigo-500 rounded-full animate-pulse"></span>
            <p className="text-sm font-medium text-indigo-700 dark:text-indigo-400">
              {`Didn't find what you're looking for?`}
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex group gap-2 items-center justify-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Contact Us
              <svg
                className="w-4 h-4 group-hover:translate-x-2 ease-in-out duration-200 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced FAQ data with categories and IDs
const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We specialize in custom web development including:\n\n• Responsive website design & development\n• E-commerce solutions\n• Web applications\n• CMS implementations\n• API integrations\n• Ongoing maintenance and support",
    category: "general",
    link: {
      text: "View all services",
      url: "#services",
    },
  },
  {
    id: 2,
    question: "How much does a website cost?",
    answer:
      "We offer high-converting, performance-optimized websites at accessible prices:\n\n" +
      "• Starter Website (4–5 pages): $180 – $350\n" +
      "• Business Website with CMS: $400 – $850\n" +
      "• E-commerce Store: $750 – $1,500\n" +
      "• Custom SaaS / Web Application: Starting at $1,200\n\n" +
      "Each project includes responsive design, SEO setup, and expert consultation. We offer flexible pricing based on features and timeline.",
    category: "general",
  },
  {
    id: 3,
    question: "What's your development process?",
    answer:
      "Our 5-phase process ensures quality results:\n\n1. Discovery: Requirements gathering\n2. Design: Wireframes & prototypes\n3. Development: Agile sprints\n4. Testing: QA & revisions\n5. Launch: Deployment & training\n\nWe provide weekly updates and involve you at every stage.",
    category: "process",
  },
  {
    id: 4,
    question: "How long does a project take?",
    answer:
      "Timelines vary by project scope:\n\n• Simple website: 4-6 weeks\n• E-commerce site: 6-10 weeks\n• Custom web app: 8-16 weeks\n\nWe provide a detailed timeline after our initial consultation.",
    category: "process",
  },
  {
    id: 5,
    question: "What tech stack do you use?",
    answer:
      "We use modern, proven technologies:\n\nFrontend: React, Next.js, Tailwind CSS\nBackend: Node.js, Express\nDatabase: MongoDB, PostgreSQL\nHosting: Vercel, AWS, Netlify\n\nWe select the best tools for your specific needs.",
    category: "technical",
  },
  {
    id: 6,
    question: "Do you work with existing websites?",
    answer:
      "Yes! We can:\n\n• Redesign and modernize your current site\n• Improve performance and SEO\n• Add new features and functionality\n• Fix bugs and technical issues\n\nWe'll analyze your site and recommend the best approach.",
    category: "general",
  },
  {
    id: 7,
    question: "What about SEO and mobile optimization?",
    answer:
      "All our websites include:\n\n• Mobile-first responsive design\n• Core Web Vitals optimization\n• Basic SEO setup (metadata, sitemaps)\n• Fast loading performance\n\nWe also offer advanced SEO services if needed.",
    category: "technical",
  },
  {
    id: 8,
    question: "Can you integrate with our other systems?",
    answer:
      "Absolutely. We regularly integrate with:\n\n• Payment processors (Stripe, PayPal)\n• CRMs (HubSpot, Salesforce)\n• Marketing tools (Mailchimp, Klaviyo)\n• Custom APIs and databases\n\nWe'll ensure seamless connectivity with your tech stack.",
    category: "technical",
  },
  {
    id: 9,
    question: "Do you provide content writing?",
    answer:
      "While we focus on development, we:\n\n• Can work with your existing content\n• Partner with professional copywriters\n• Provide content structure guidance\n• Optimize technical SEO elements\n\nWe recommend budgeting for professional copy if needed.",
    category: "general",
  },
  {
    id: 10,
    question: "What ongoing support do you offer?",
    answer:
      "We provide several support options:\n\n• Hourly support for ad-hoc requests\n• Monthly maintenance plans\n• Retainer agreements for ongoing work\n• Emergency support packages\n\nWe'll recommend the best option for your needs.",
    category: "process",
    link: {
      text: "See maintenance plans",
      url: "#",
    },
  },
];
