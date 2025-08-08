// hooks/useScrollSpy.js
import { useEffect, useState } from "react";

export function useScrollSpy(containerRef, options) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(
      container.querySelectorAll(options.sectionSelector)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: `-${options.offset || 0}px 0px 0px 0px`,
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [containerRef, options.sectionSelector, options.offset]);

  return activeId;
}
