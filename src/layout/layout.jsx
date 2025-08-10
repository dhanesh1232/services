"use client";
import { ServiceFooter } from "@/components/layout/footer/footer";
import { ServiceHeader } from "@/components/layout/header/header1";
import CookieConsent from "@/components/layout/overlay/cookies";
import FloatButton from "@/components/layout/overlay/floa-button";
import WebWidgetLoader from "@/components/widget/compo";
import { usePathname } from "next/navigation";

export default function ServicesLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/not-found" ? (
        <>
          <ServiceHeader />
          <main className="flex-1 relative">{children}</main>
          <ServiceFooter />
          <CookieConsent />
          <FloatButton />
          {/*<WebWidgetLoader botId="ECODrIx_test_botId" />*/}
        </>
      ) : (
        <main className="flex-1 relative">{children}</main>
      )}
    </>
  );
}
