import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme.provider";
import { defaultMeta } from "@/lib/client/seo";
import { Toaster } from "@/components/ui/sonner";
import ServicesLayout from "@/layout/layout";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMeta;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="facebook-domain-verification"
          content="tzm40ou2etty073d0g68u6ydepfogy"
        />
      </head>
      <body
        className={`${inter.className} overflow-x-hidden overflow-y-auto min-h-full`}
      >
        <ThemeProvider>
          <ServicesLayout>{children}</ServicesLayout>
        </ThemeProvider>
        <Toaster />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MY2BTJCYHJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MY2BTJCYHJ');
          `}
        </Script>
      </body>
    </html>
  );
}
