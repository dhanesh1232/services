import * as React from "react";

/**
 * A reusable hook to calculate slides per view based on responsive breakpoints.
 *
 * @param {Object} breakpoints - Custom breakpoint configuration.
 * Example:
 * {
 *   xs: 1,      // <480px
 *   sm: 2,      // ≥480px
 *   md: 3,      // ≥768px
 *   lg: 4,      // ≥1024px
 *   xl: 5,      // ≥1280px
 * }
 *
 * @returns {Object} { slidesPerView, isClient }
 */
export function useResponsiveCarousel(breakpoints = {}) {
  const defaultBreakpoints = {
    xxs: 1,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
    ...breakpoints,
  };

  const [slidesPerView, setSlidesPerView] = React.useState(
    defaultBreakpoints.md
  );
  const [isClient, setIsClient] = React.useState(false);

  const handleResize = React.useCallback(() => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    let newSlidesPerView;

    if (width >= 1280) newSlidesPerView = defaultBreakpoints.xl;
    else if (width >= 1024 && width < 1280)
      newSlidesPerView = defaultBreakpoints.lg;
    else if (width >= 768 && width < 1024)
      newSlidesPerView = defaultBreakpoints.md;
    else if (width >= 640 && width < 768)
      newSlidesPerView = defaultBreakpoints.sm;
    else if (width >= 480 && width < 640)
      newSlidesPerView = defaultBreakpoints.xs;
    else newSlidesPerView = defaultBreakpoints.xxs;

    setSlidesPerView(newSlidesPerView);
  }, [defaultBreakpoints]);

  React.useEffect(() => {
    setIsClient(true);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return { slidesPerView, isClient };
}
