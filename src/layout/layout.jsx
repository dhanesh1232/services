"use client";
import { ServiceFooter } from "@/components/layout/footer/footer";
import { ServiceHeader } from "@/components/layout/header/header1";
import { GlobalLoader } from "@/components/layout/loader";
import CookieConsent from "@/components/layout/overlay/cookies";
import FloatButton from "@/components/layout/overlay/floa-button";
import { TopGlow } from "@/components/pages/home/stars";
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
        <>
          <ServiceHeader />
          <main className="flex-1 relative dark:bg-slate-900 bg-indigo-50">
            {children}
            <TopGlow />
          </main>
          <ServiceFooter />
          <CookieConsent />
          <FloatButton />
          {/*<WebWidgetLoader botId="ECODrIx_test_botId" />*/}
        </>
      ) : (
        <main className="flex-1 relative">{children}</main>
      )}
    </>
  ) : (
    <GlobalLoader />
  );
}
