"use client";
import { ServiceFooter } from "@/components/layout/footer/footer";
import { ServiceHeader } from "@/components/layout/header/header1";
import { GlobalLoader } from "@/components/layout/loader";
import { NewsletterSection } from "@/components/layout/newsletter";
import CookieConsent from "@/components/layout/overlay/cookies";
import FloatButton from "@/components/layout/overlay/floa-button";
import TopButton from "@/components/layout/overlay/top-button";
import { TopGlow } from "@/components/pages/home/stars";
import { TooltipProvider } from "@/components/ui/tooltip";
import WebWidgetLoader from "@/components/widget/compo";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ServicesLayout({ children }) {
  const pathname = usePathname();
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
    return () => setIsMount(false);
  }, []);
  return isMount ? (
    <>
      {pathname !== "/not-found" ? (
        <TooltipProvider>
          <ServiceHeader />
          <main className="flex-1 relative dark:bg-gray-950 bg-indigo-50">
            {children}
            <NewsletterSection />
            <TopGlow />
          </main>
          <TopButton />
          <ServiceFooter />
          <CookieConsent />
          <FloatButton />
          {/*<WebWidgetLoader botId="ECODrIx_test_botId" />*/}
        </TooltipProvider>
      ) : (
        <main className="flex-1 relative">{children}</main>
      )}
    </>
  ) : (
    <GlobalLoader />
  );
}
