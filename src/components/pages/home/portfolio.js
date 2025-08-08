"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const PortfolioSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600 bg-clip-text text-transparent mb-4">
            Recent Work
          </h2>
          <p className="text-gray-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            Examples of projects delivered to satisfied clients
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-gray-50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  width={800}
                  height={500}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={item.blurData}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-indigo-100 dark:bg-indigo-500/10 px-6 py-3 rounded-full border border-indigo-200 dark:border-indigo-500/20 mb-8">
            <span className="w-2.5 h-2.5 bg-indigo-600 dark:bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-400">
              Ready to start your project?
            </span>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const portfolioItems = [
  {
    title: "E-commerce Platform",
    description:
      "Full-featured online store with cart functionality and payment integration.",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blurData: "L5H2EC=PM+yV0g-mq.wG9c010J}I",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive dashboard with real-time data visualization for enterprises.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blurData: "L9AB*A%LTw%g~qV@?bj[5gbHVSj[",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Corporate Website",
    description:
      "Modern responsive website with CMS integration for content management.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blurData: "L35O%C~X9F~q~q-;%M%M-;%M-;%M",
    tags: ["Next.js", "Tailwind", "Sanity"],
    demoLink: "#",
  },
  {
    title: "Mobile Banking App",
    description: "Secure banking application with biometric authentication.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blurData: "L15O%C~X9F~q~q-;%M%M-;%M-;%M",
    tags: ["React Native", "Node.js", "Firebase"],
    demoLink: "#",
  },
  {
    title: "SaaS Platform",
    description: "Cloud-based software solution with subscription model.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blurData: "L25O%C~X9F~q~q-;%M%M-;%M-;%M",
    tags: ["Next.js", "GraphQL", "Stripe"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist portfolio with 3D animations and dark mode.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blurData: "L35O%C~X9F~q~q-;%M%M-;%M-;%M",
    tags: ["React", "Three.js", "Framer Motion"],
    demoLink: "#",
    codeLink: "#",
  },
];
