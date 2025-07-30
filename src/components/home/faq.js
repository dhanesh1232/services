"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(i === activeIndex ? null : i);
  };

  // Group FAQs by category
  const faqCategories = [
    {
      name: "General",
      items: faqs.filter((faq) => !faq.category || faq.category === "general"),
    },
    {
      name: "Process",
      items: faqs.filter((faq) => faq.category === "process"),
    },
    {
      name: "Technical",
      items: faqs.filter((faq) => faq.category === "technical"),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 bg-background" id="faq">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap sticky top-16 z-10 gap-2 justify-center mb-8">
            {faqCategories.map((category, i) => (
              <button
                key={i}
                onClick={() => {
                  const firstItemIndex = faqs.findIndex(
                    (f) => f.category === category.name.toLowerCase()
                  );
                  if (firstItemIndex !== -1) {
                    document.getElementById(`category-${i}`)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="px-4 py-2 text-sm font-medium rounded-full bg-background text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ content */}
          <div className="space-y-6">
            {faqCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                id={`category-${catIndex}`}
                className="scroll-mt-16"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  {category.name}
                </h3>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ staggerChildren: 0.05 }}
                  className="space-y-4"
                >
                  {category.items.map((faq, i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-sm transition-shadow"
                    >
                      <button
                        onClick={() => toggle(faq.id)}
                        className={`w-full text-left flex hover:bg-blue-200/10 items-center justify-between p-5 focus:outline-none ${
                          activeIndex === faq.id
                            ? "border-b border border-border"
                            : ""
                        }`}
                        aria-expanded={activeIndex === faq.id}
                      >
                        <span className="text-base font-medium text-foreground text-left">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-indigo-600 dark:text-indigo-400 transition-transform duration-200 ${
                            activeIndex === faq.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {activeIndex === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="px-5 pb-5 text-muted-foreground space-y-3"
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
                                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
                                >
                                  {faq.link.text}{" "}
                                  <ExternalLink className="ml-1.5" />
                                </a>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-backgruond inline-block px-6 py-4 rounded-xl">
            <p className="text-muted-foreground mb-4">
              {`Didn't find what you're looking for?`}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium py-2.5 px-6 rounded-lg transition duration-300"
            >
              Contact our team
              <svg
                className="w-4 h-4 ml-2"
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
            </a>
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
