import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceFooter } from "@/components/layout/footer/footer";
import { ThemeProvider } from "@/components/theme.provider";
import { ServiceHeader } from "@/components/layout/header/header1";
import { defaultMeta } from "@/lib/client/seo";
import CookieConsent from "@/components/layout/overlay/cookies";
import FloatButton from "@/components/layout/overlay/floa-button";
import WebWidgetLoader from "@/components/widget/compo";
import { Toaster } from "@/components/ui/sonner";

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
      <body
        className={`${inter.className} overflow-x-hidden overflow-y-auto min-h-full`}
      >
        <ThemeProvider>
          <ServiceHeader />
          <main className="flex-1 relative">{children}</main>
          <ServiceFooter />
          <CookieConsent />
          <FloatButton />
          <WebWidgetLoader botId="ECODrIx_test_botId" />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
