import { FiCheckCircle } from "react-icons/fi";
import { Button } from "../../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/client/data";
import Image from "next/image";
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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className="py-32 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.25),rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 mb-6">
            Professional Services
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive web development solutions designed to elevate your
            online presence and drive business growth
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
              className="group select-none bg-white dark:bg-slate-800/50 backdrop-blur-xl p-4 rounded-xl border border-gray-100 dark:border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10 transition-all duration-500 relative overflow-hidden"
            >
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
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="bg-gradient-to-br from-indigo-500 to-violet-500 dark:from-indigo-400 dark:to-violet-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/30 transform group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute -right-4 -top-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <service.icon className="w-24 h-24 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                      priority={true}
                      quality={90}
                      placeholder="blur"
                      blurDataURL={service.image}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <FiCheckCircle className="w-5 h-5 mr-3 text-indigo-500" />
                        <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-20 gap-10"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 dark:from-indigo-500/20 dark:to-violet-500/20 px-8 py-4 rounded-full border border-indigo-200 dark:border-indigo-500/30">
            <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full animate-pulse"></span>
            <span className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              Trusted by startups and established businesses worldwide
            </span>
          </div>

          <Button size="lg" variant="outline" asChild className="group">
            <Link href="/services" className="relative overflow-hidden">
              <span className="relative z-10 font-semibold group-hover:text-white transition-colors duration-300">
                Explore All Services
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 group-hover:text-white transform transition-all duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
