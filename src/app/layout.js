import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceFooter } from "@/components/services/footer";
import CookieConsent from "@/components/services/overlay/cookies";
import { ThemeProvider } from "@/components/theme.provider";
import { ServiceHeader } from "@/components/layout/header/header1";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://services.ecodrix.com"),
  title: "Web Development Services",
  description:
    "Discover ECODrIx's professional services in web development, AI-powered chatbot solutions, and marketing automation. We help businesses scale with smart, reliable, and scalable digital solutions.",
  keywords: [
    "web development",
    "AI chatbot development",
    "WhatsApp chatbot",
    "Instagram chatbot",
    "Facebook chatbot",
    "custom websites",
    "marketing automation",
    "SaaS development",
    "Next.js services",
    "ECODrIx services",
  ],
  openGraph: {
    title: "Web & AI Chatbot Development Services",
    description:
      "Explore top-notch services including AI chatbots, multi-platform integrations, and custom website development with ECODrIx.",
    url: "https://services.ecodrix.com/services",
    type: "website",
    images: [
      {
        url: "https://services.ecodrix.com/og-services.png", // replace with actual image URL
        width: 1200,
        height: 630,
        alt: "ECODrIx Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & AI Chatbot Development Services | ECODrIx",
    description:
      "Smart digital solutions by ECODrIx — AI chatbots, SaaS platforms, and modern web development.",
    images: ["https://services.ecodrix.com/og-services.png"], // same image or Twitter-specific
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
            <ServiceHeader />
            <main className="flex-1 relative overflow-y-auto scrollbar-transparent">
              {children}
            </main>
            <ServiceFooter />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
