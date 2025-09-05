import { Icons } from "@/components/icons";
import { motion } from "framer-motion";

// Fallback icon in case verified icon is missing
const VerifiedIcon = ({ className }) =>
  Icons.verified ? (
    <Icons.verified className={className} />
  ) : (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

export function Why() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(180,150,100,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(180,150,100,0.25),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(180,150,100,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(180,150,100,0.2),rgba(255,255,255,0))]" />

        {/* Decorative gold elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>

        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0wLDMwIGgzMCBNMzAsMCB2NjAgTTMwLDMwIGgzMCBNMzAsMzAgdjMwIE0zMCwzMCBoLTMwIE0zMCwzMCB2LTMwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 mb-6">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-yellow-700 dark:text-yellow-400 uppercase tracking-wider">
              Essential Investment
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Why Your Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
              Needs
            </span>{" "}
            a Premium Website
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            In today's digital landscape, a sophisticated online presence is not
            just an option—it's a strategic imperative for growth and success.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              title: "85% of consumers",
              content:
                "research products online before purchasing - don't miss these potential customers",
              stat: "85%",
            },
            {
              title: "Professional credibility:",
              content:
                "75% of users judge a company's credibility based on website design",
              stat: "75%",
            },
            {
              title: "Higher conversions:",
              content:
                "Websites with direct WhatsApp integration see up to 40% more inquiries",
              stat: "40%",
            },
            {
              title: "24/7 availability:",
              content:
                "Your website works for you around the clock, generating leads while you sleep",
              stat: "24/7",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={item}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl p-8 rounded-2xl border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 hover:border-yellow-500/30 transition-all duration-500 relative overflow-hidden">
                {/* Subtle shine effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-12"></div>

                <div className="flex items-start relative z-10">
                  {/* Icon with premium styling */}
                  <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 w-14 h-14 rounded-full flex items-center justify-center shadow-inner dark:shadow-yellow-500/20 border border-yellow-500/10 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                    <VerifiedIcon className="h-7 w-7 text-yellow-600 dark:text-yellow-400" />
                  </div>

                  <div className="ml-6">
                    {/* Stat highlight */}
                    <div className="mb-2">
                      <span className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
                        {item.stat}
                      </span>
                    </div>

                    {/* Content with elegant typography */}
                    <p className="text-base lg:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                      <span className="font-semibold text-yellow-700 dark:text-yellow-400">
                        {item.title}
                      </span>{" "}
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Premium callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-yellow-500/10 dark:bg-yellow-500/10 px-8 py-4 rounded-2xl border border-yellow-500/20 shadow-lg backdrop-blur-sm">
            <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-base font-medium text-yellow-700 dark:text-yellow-400">
              Businesses with premium websites grow{" "}
              <span className="font-bold">2x faster</span> than those without
              one
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
