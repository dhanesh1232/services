import { FiCheckCircle } from "react-icons/fi";
import { Button } from "../../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/client/data";
import Image from "next/image";

// Fallback icon component
const FallbackIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

export const ServiceSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="py-32 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900"
    >
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(180,150,100,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(180,150,100,0.25),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(180,150,100,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(180,150,100,0.2),rgba(255,255,255,0))]" />

        {/* Decorative gold elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>

        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg�IjEiPjxwYXRoIGQ9Ik0wLDMwIGgzMCBNMzAsMCB2NjAgTTMwLDMwIGgzMCBNMzAsMzAgdjMwIE0zMCwzMCBoLTMwIE0zMCwzMCB2LTMwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 mb-6">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-yellow-700 dark:text-yellow-400 uppercase tracking-wider">
              Premium Offerings
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
              Exclusive
            </span>{" "}
            Professional Services
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Bespoke digital solutions meticulously crafted to elevate your brand
            presence and accelerate business growth
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group select-none relative"
            >
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl p-6 rounded-xl border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 hover:border-yellow-500/30 transition-all duration-500 relative overflow-hidden h-full">
                {/* Subtle shine effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-12"></div>

                <Link
                  href={service.href.startsWith("/") ? service.href : "#"}
                  target={service.href.startsWith("/") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block h-full"
                  aria-label={`Learn more about ${service.title}`}
                  onClick={(e) => {
                    if (!service.href.startsWith("/")) {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="relative">
                    {/* Icon with premium styling */}
                    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20 dark:shadow-yellow-500/30 transform group-hover:scale-110 transition-transform duration-500">
                      {service.icon ? (
                        <service.icon className="w-8 h-8 text-white" />
                      ) : (
                        <FallbackIcon className="w-8 h-8 text-white" />
                      )}
                    </div>

                    {/* Large decorative icon */}
                    <div className="absolute -right-4 -top-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      {service.icon ? (
                        <service.icon className="w-24 h-24 text-yellow-600 dark:text-yellow-400" />
                      ) : (
                        <FallbackIcon className="w-24 h-24 text-yellow-600 dark:text-yellow-400" />
                      )}
                    </div>

                    {/* Image with premium overlay */}
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        priority={true}
                        quality={90}
                        placeholder="blur"
                        blurDataURL={service.image}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-700 dark:text-gray-300 group/feature"
                        >
                          <FiCheckCircle className="w-5 h-5 mr-3 text-yellow-500 group-hover/feature:scale-110 transition-transform duration-300" />
                          <span className="group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors duration-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-20 gap-10"
        >
          <div className="inline-flex items-center gap-4 bg-yellow-500/10 dark:bg-yellow-500/10 px-8 py-4 rounded-2xl border border-yellow-500/20 shadow-lg backdrop-blur-sm">
            <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-base font-semibold text-yellow-700 dark:text-yellow-400">
              Trusted by discerning clients and premium brands worldwide
            </span>
          </div>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="group relative overflow-hidden"
          >
            <Link href="/services" className="relative overflow-hidden">
              <span className="relative z-10 font-semibold group-hover:text-white transition-colors duration-300">
                Discover All Services
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 group-hover:text-white transform transition-all duration-300 relative z-10" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
