import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceFooter } from "@/components/services/footer";
import CookieConsent from "@/components/services/overlay/cookies";
import { ThemeProvider } from "@/components/theme.provider";
import { ServiceHeader } from "@/components/layout/header/header1";
import { defaultMeta } from "@/lib/client/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  ...defaultMeta,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider>
          <div className="flex flex-col h-full overflow-y-auto scrollbar-transparent min-h-[100dvh] bg-background text-foreground">
            <ServiceHeader />
            <main className="flex-1 relative">{children}</main>
            <ServiceFooter />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
