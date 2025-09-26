"use client";
import { ServiceFooter } from "@/components/layout/footer/footer";
import { ServiceHeader } from "@/components/layout/header/header1";
import { GlobalLoader } from "@/components/layout/loader";
import CookieConsent from "@/components/layout/overlay/cookies";
import FloatButton from "@/components/layout/overlay/float-button";
import TopButton from "@/components/layout/overlay/top-button";
import { TopGlow } from "@/components/pages/home/stars";
import { TooltipProvider } from "@/components/ui/tooltip";
import WebWidgetLoader from "@/components/widget/compo";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BotWidget } from "./test";

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
          <main className="flex-1 relative dark:from-slate-950 dark:to-slate-900 bg-gradient-to-b from-white to-white">
            {children}
            <TopGlow className="-z-10" />
          </main>
          <ServiceFooter />
          <TopButton />
          <CookieConsent />
          <FloatButton />
          {/* <WebWidgetLoader botId="ECODrIx_test_botId" /> */}
          <BotWidget />
        </TooltipProvider>
      ) : (
        <main className="flex-1 relative">{children}</main>
      )}
    </>
  ) : (
    <GlobalLoader />
  );
}
