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

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="work"
      className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-gray-700/50 transition duration-300"
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
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-indigo-600/90 text-white px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/*<div className="flex gap-3">
                    {item.demoLink && (
                      <Link
                        href={item.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-white hover:text-indigo-300 transition"
                      >
                        <FiExternalLink /> Live Demo
                      </Link>
                    )}
                    {item.codeLink && (
                      <Link
                        href={item.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-white hover:text-indigo-300 transition"
                      >
                        <FiGithub /> View Code
                      </Link>
                    )}
                  </div>*/}
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
          className="text-center mt-16"
        >
          <Link
            href="#contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced portfolio data with blurData and links
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
