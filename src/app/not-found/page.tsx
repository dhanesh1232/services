import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center px-6">
      <div className="relative">
        <h1 className="text-[150px] font-extrabold text-gray-900 dark:text-gray-100 animate-pulse">
          404
        </h1>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full">
          <div className="w-24 h-24 mx-auto mb-8">
            <svg
              className="w-full h-full text-blue-500 dark:text-blue-400 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 animate-fade-in">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8 leading-relaxed">
        The page you're looking for seems to have vanished into the digital
        void. Let's get you back on track!
      </p>
      <Link
        href="/"
        className="group relative px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-lg hover:scale-105"
      >
        <span className="relative z-10">Return to Homepage</span>
        <div className="absolute inset-0 w-full h-full bg-white/20 dark:bg-black/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      </Link>
    </section>
  );
}

export const metadata = {
  layout: "none",
};
