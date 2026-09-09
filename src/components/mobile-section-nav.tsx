"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function MobileSectionNav() {
  const [activeHref, setActiveHref] = useState(navLinks[0].href);
  const ratiosRef = useRef<Map<string, number>>(new Map());

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

        setActiveHref(`#${bestId}`);
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

  return (
    <nav
      aria-label="Section navigation"
      className="mobile-section-nav pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"
    >
      <div className="pointer-events-auto mx-auto max-w-md px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="mobile-section-nav-bar relative flex items-stretch justify-between gap-0.5 rounded-2xl p-1">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;

            return (
              <a
                key={link.href}
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
