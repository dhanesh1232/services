import { Verified } from "lucide-react";
import { motion } from "framer-motion";
export function Why() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600 bg-clip-text text-transparent"
        >
          Why Your Business{" "}
          <span className="text-gray-900 dark:text-slate-200">Needs</span> a
          Website Today
        </motion.h2>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {[
            {
              title: "85% of consumers",
              content:
                "research products online before purchasing - don't miss these potential customers",
            },
            {
              title: "Professional credibility:",
              content:
                "75% of users judge a company's credibility based on website design",
            },
            {
              title: "Higher conversions:",
              content:
                "Websites with direct WhatsApp integration see up to 40% more inquiries",
            },
            {
              title: "24/7 availability:",
              content:
                "Your website works for you around the clock, generating leads while you sleep",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={item}
              className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-200 dark:border-slate-700/50 shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center shadow-inner dark:shadow-indigo-500/30">
                  <Verified className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="ml-4 text-lg text-gray-700 dark:text-slate-300">
                  <span className="font-semibold text-indigo-700 dark:text-indigo-400">
                    {item.title}
                  </span>{" "}
                  {item.content}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-indigo-100 dark:bg-indigo-500/10 px-6 py-3 rounded-full border border-indigo-200 dark:border-indigo-500/20">
            <span className="w-2.5 h-2.5 bg-indigo-600 dark:bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-400">
              Small businesses with websites grow 2x faster than those without
              one
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
