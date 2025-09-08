// File: @/hooks/use-lock-body-scroll.js
import { useEffect } from "react";

/**
 * Custom hook that locks the body scroll when activated
 * @param {boolean} locked - Whether to lock the body scroll
 */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (locked) {
      // Store original body styles so we can revert on unmount
      const originalStyle = window.getComputedStyle(document.body).overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const originalScrollPosition = window.scrollY;

      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Lock body scroll
      document.body.style.overflow = "hidden";

      // Add padding to prevent layout shift when scrollbar disappears
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      // Fix the scroll position
      document.body.style.position = "fixed";
      document.body.style.top = `-${originalScrollPosition}px`;
      document.body.style.width = "100%";

      return () => {
        // Revert all changes when unmounting
        document.body.style.overflow = originalStyle;
        document.body.style.paddingRight = originalPaddingRight;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        // Restore scroll position
        window.scrollTo(0, originalScrollPosition);
      };
    }
  }, [locked]);
}

export default useLockBodyScroll;
