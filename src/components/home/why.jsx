import { Verified } from "lucide-react";

export default function Why() {
  return (
    <section className="mt-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-background rounded-xl p-8">
        <h2 className="text-3xl font-bold text-foreground text-center mb-6">
          Why Your Business <span className="text-gray-900">Needs</span> a
          Website Today
        </h2>

        <ul className="space-y-4">
          <li className="flex items-start">
            <Verified className="flex-shrink-0 h-6 w-6 text-blue-500 mt-1" />
            <p className="ml-3 text-base lg:text-lg text-muted-foreground">
              <span className="font-semibold">85% of consumers</span> research
              products online before purchasing - don't miss these potential
              customers
            </p>
          </li>

          <li className="flex items-start">
            <Verified className="flex-shrink-0 h-6 w-6 text-blue-500 mt-1" />
            <p className="ml-3 text-base lg:text-lg text-muted-foreground">
              <span className="font-semibold">Professional credibility:</span>{" "}
              75% of users judge a company's credibility based on website design
            </p>
          </li>

          <li className="flex items-start">
            <Verified className="flex-shrink-0 h-6 w-6 text-blue-500 mt-1" />
            <p className="ml-3 text-base lg:text-lg text-muted-foreground">
              <span className="font-semibold">Higher conversions:</span>{" "}
              Websites with direct WhatsApp integration see up to 40% more
              inquiries
            </p>
          </li>

          <li className="flex items-start">
            <Verified className="flex-shrink-0 h-6 w-6 text-blue-500 mt-1" />
            <p className="ml-3 text-base lg:text-lg text-muted-foreground">
              <span className="font-semibold">24/7 availability:</span> Your
              website works for you around the clock, generating leads while you
              sleep
            </p>
          </li>
        </ul>

        <div className="mt-8 bg-transparent p-2 rounded-full border border-border">
          <p className="text-gray-500 text-center text-xs md:text-sm">
            <span className="font-bold text-blue-800">Did you know?</span> Small
            businesses with websites grow 2x faster than those without one.
          </p>
        </div>
      </div>
    </section>
  );
}
