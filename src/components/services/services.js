import { FiCheckCircle } from "react-icons/fi";
import { MdDesignServices } from "react-icons/md";
export const ServiceSection = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive web development solutions designed to elevate your
            online presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500 transition duration-300"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <FiCheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Custom Web Development",
    description:
      "Tailored solutions built from scratch to meet your specific business requirements.",
    features: [
      "Responsive design",
      "Custom functionality",
      "Performance optimization",
      "Ongoing support",
      "SEO-friendly structure",
      "Cross-browser compatibility",
    ],
    icon: ({ className }) => (
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "E-commerce Solutions",
    description:
      "Powerful online stores that drive sales and provide seamless shopping experiences.",
    features: [
      "Payment integration",
      "Product management",
      "Secure checkout",
      "Inventory tracking",
      "Mobile optimization",
      "Analytics dashboard",
    ],
    icon: ({ className }) => (
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
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that enhance user engagement and satisfaction.",
    features: [
      "User research",
      "Wireframing",
      "Prototyping",
      "Usability testing",
      "Design systems",
      "Accessibility compliance",
    ],
    icon: ({ className }) => <MdDesignServices className={className} />,
  },
  {
    title: "Progressive Web Apps",
    description:
      "Fast, reliable web applications that work offline and feel like native apps.",
    features: [
      "Offline functionality",
      "Push notifications",
      "App-like interface",
      "Fast loading",
      "Installable",
      "Background sync",
    ],
    icon: ({ className }) => (
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
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "API Development",
    description:
      "Robust backend services and integrations to power your applications.",
    features: [
      "RESTful APIs",
      "GraphQL endpoints",
      "Authentication",
      "Database integration",
      "Third-party services",
      "Documentation",
    ],
    icon: ({ className }) => (
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
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "Make your website blazing fast and improve search engine rankings.",
    features: [
      "Page speed analysis",
      "Code optimization",
      "Image compression",
      "Lazy loading",
      "Caching strategies",
      "CDN integration",
    ],
    icon: ({ className }) => (
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];
