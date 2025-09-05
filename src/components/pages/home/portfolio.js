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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(180,150,100,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(180,150,100,0.25),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(180,150,100,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(180,150,100,0.2),rgba(255,255,255,0))]" />

        {/* Decorative gold elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl" />

        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg�IjEiPjxwYXRoIGQ9Ik0wLDMwIGgzMCBNMzAsMCB2NjAgTTMwLDMwIGgzMCBNMzAsMzAgdjMwIE0zMCwzMCBoLTMw IE0zMCwzMCB2LTMwIi8+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 mb-6">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-yellow-700 dark:text-yellow-400 uppercase tracking-wider">
              Premium Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
              Exclusive
            </span>{" "}
            Creations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A curated collection of premium projects crafted with precision,
            innovation, and exceptional attention to detail
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
            <motion.div key={index} variants={item} className="group relative">
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 hover:border-yellow-500/30 transition-all duration-500 overflow-hidden relative">
                {/* Subtle shine effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-12 z-0"></div>

                {/* Image container */}
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    width={800}
                    height={500}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL={item.blurData}
                  />

                  {/* Premium overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-2 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 px-3 py-1.5 rounded-full border border-yellow-500/20 group-hover:bg-yellow-500/20 group-hover:border-yellow-500/30 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium call-to-action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-yellow-500/10 dark:bg-yellow-500/10 px-8 py-4 rounded-2xl border border-yellow-500/20 shadow-lg backdrop-blur-sm mb-8">
            <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-md font-medium text-yellow-700 dark:text-yellow-400">
              Ready to create something extraordinary together?
            </span>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-block relative overflow-hidden group bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white font-medium py-4 px-10 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-yellow-500/30"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
      "Premium online store with advanced cart functionality and seamless payment integration.",
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
      "Sophisticated dashboard with real-time data visualization for enterprise clients.",
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
      "Elegant responsive website with CMS integration for seamless content management.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blurData: "L35O%C~X9F~q~q-;%M%M-;%M-;%M",
    tags: ["Next.js", "Tailwind", "Sanity"],
    demoLink: "#",
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure banking application with advanced biometric authentication.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blurData: "L15O%C~X9F~q~q-;%M%M-;%M-;%M",
    tags: ["React Native", "Node.js", "Firebase"],
    demoLink: "#",
  },
  {
    title: "SaaS Platform",
    description:
      "Cloud-based software solution with premium subscription model.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blurData: "L25O%C~X9F~q~q-;%M%M-;%M-;%M",
    tags: ["Next.js", "GraphQL", "Stripe"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Minimalist portfolio with sophisticated 3D animations and premium dark mode.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blurData: "L35O%C~X9F~q~q-;%M%M-;%M-;%M",
    tags: ["React", "Three.js", "Framer Motion"],
    demoLink: "#",
    codeLink: "#",
  },
];
