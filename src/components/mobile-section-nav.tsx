"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function MobileSectionNav() {
  const [activeHref, setActiveHref] = useState(navLinks[0].href);
  const [activeIndex, setActiveIndex] = useState(0);
  const ratiosRef = useRef<Map<string, number>>(new Map());
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratiosRef.current.set(entry.target.id, entry.intersectionRatio);
        }

        let bestId = sections[0].id;
        let bestRatio = -1;

        for (const section of sections) {
          const ratio = ratiosRef.current.get(section.id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = section.id;
          }
        }

        const nextIndex = sections.findIndex((section) => section.id === bestId);
        setActiveHref(`#${bestId}`);
        setActiveIndex(nextIndex >= 0 ? nextIndex : 0);
      },
      {
        rootMargin: "-12% 0px -42% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const tab = tabRefs.current[activeIndex];
    const bar = tab?.closest(".mobile-section-nav-bar");

    if (!tab || !bar) return;

    const updateIndicator = () => {
      const barRect = bar.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      setIndicator({
        width: tabRect.width,
        left: tabRect.left - barRect.left,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  return (
    <nav
      aria-label="Section navigation"
      className="mobile-section-nav pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"
    >
      <div className="mobile-section-nav-scrim pointer-events-auto mx-auto max-w-md px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="mobile-section-nav-bar relative flex items-stretch justify-between gap-0.5 rounded-2xl p-1">
          <span
            aria-hidden
            className="mobile-section-nav-indicator absolute top-1 bottom-1 rounded-xl transition-[transform,width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: indicator.width || undefined,
              transform: `translateX(${indicator.left}px)`,
            }}
          />
          {navLinks.map((link, index) => {
            const isActive = activeHref === link.href;

            return (
              <a
                key={link.href}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "mobile-section-nav-tab relative z-10 flex flex-1 flex-col items-center justify-center rounded-xl px-2 py-2.5 text-center transition-colors duration-300",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground active:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "text-[11px] font-medium tracking-wide transition-all duration-300",
                    isActive && "scale-[1.02]",
                  )}
                >
                  {link.label}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-1 h-0.5 w-4 rounded-full bg-yellow transition-all duration-300",
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-0",
                  )}
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
