import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MoveRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RandomStars } from "../stars";
import { Web } from "./slides/web";

export const message = encodeURIComponent(
  "Hi, I'm interested in your premium digital services. Please share more details about your exclusive offerings."
);

const NightSkyHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen isolate px-6 pt-14 lg:px-8 bg-transparent overflow-hidden">
      {isVisible && <RandomStars />}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-20">
        <div className="text-center">
          {/* Animated title with gradient text */}
          <h1
            className={`text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Transform Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
              Digital Vision
            </span>{" "}
            Into Reality
          </h1>

          {/* Animated description */}
          <p
            className={`mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 transition-all duration-1000 ease-out delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            We create innovative digital solutions that help businesses thrive
            in the modern world. Let's build something amazing together.
          </p>

          {/* Enhanced CTA buttons with animations */}
          <div
            className={`mt-10 flex items-center justify-center sm:flex-row flex-col gap-y-3 sm:gap-x-6 transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href={`https://wa.me/918790063821?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="rounded-md inline-flex items-center gap-2 bg-green-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Icons.whatsapp
                aria-hidden="true"
                className="w-4 sm:w-5 h-4 sm:h-5"
              />
              Get started
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-yellow-500" />
            </Link>

            <Button
              asChild
              variant="outline"
              className="group border-2 dark:border-gray-700 border-gray-300 hover:border-indigo-400 dark:hover:border-indigo-400 transition-all duration-300 hover:shadow-lg"
            >
              <Link
                href="/services"
                className="text-xs sm:text-sm font-semibold group inline-flex items-center gap-1 leading-6 text-gray-900 dark:text-white px-4 py-3"
              >
                Explore Services
                <MoveRight
                  className="inline-block group-hover:translate-x-1 transition-all ease-in-out duration-300"
                  aria-hidden="true"
                  size={16}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-bounce delay-1000">
        <div className="w-6 h-10 border-2 border-gray-900 dark:border-gray-100 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
        </div>
      </div>
      {isVisible && <Web className="absolute inset-0" />}
    </div>
  );
};

export default NightSkyHero;
