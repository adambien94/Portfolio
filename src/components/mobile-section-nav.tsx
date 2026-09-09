"use client";

import { useEffect, useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function sectionId(href: string) {
  return href.startsWith("#") ? href.slice(1) : href;
}

export function MobileSectionNav() {
  const [activeId, setActiveId] = useState(sectionId(navLinks[0].href));
  const [activeIndex, setActiveIndex] = useState(0);
  const ratiosRef = useRef<Map<string, number>>(new Map());
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const listRef = useRef<HTMLDivElement | null>(null);
  const scrollLockRef = useRef<string | null>(null);
  const scrollUnlockTimerRef = useRef<number | null>(null);
  const [indicator, setIndicator] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(sectionId(link.href)))
      .filter(
        (section): section is HTMLElement => section instanceof HTMLElement,
      );

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

        const lockedTarget = scrollLockRef.current;
        if (lockedTarget) {
          if (bestId !== lockedTarget) return;
          scrollLockRef.current = null;
          if (scrollUnlockTimerRef.current !== null) {
            window.clearTimeout(scrollUnlockTimerRef.current);
            scrollUnlockTimerRef.current = null;
          }
        }

        const nextIndex = sections.findIndex(
          (section) => section.id === bestId,
        );
        setActiveId(bestId);
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
    return () => {
      if (scrollUnlockTimerRef.current !== null) {
        window.clearTimeout(scrollUnlockTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const tab = tabRefs.current[activeIndex];
    const list = listRef.current;

    if (!tab || !list) return;

    const updateIndicator = () => {
      const listRect = list.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      setIndicator({
        width: tabRect.width,
        left: tabRect.left - listRect.left,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  const handleValueChange = (value: string) => {
    const nextIndex = navLinks.findIndex(
      (link) => sectionId(link.href) === value,
    );

    scrollLockRef.current = value;
    if (scrollUnlockTimerRef.current !== null) {
      window.clearTimeout(scrollUnlockTimerRef.current);
    }
    scrollUnlockTimerRef.current = window.setTimeout(() => {
      scrollLockRef.current = null;
      scrollUnlockTimerRef.current = null;
    }, 1200);

    setActiveId(value);
    if (nextIndex >= 0) setActiveIndex(nextIndex);
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed w-9/10 mx-auto inset-x-0 bottom-0 z-50 sm:hidden"
      style={{
        paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="pointer-events-auto mx-auto max-w-sm px-5">
        <Tabs value={activeId} onValueChange={handleValueChange}>
          <div className="liquid-glass-nav">
            <div aria-hidden className="liquid-glass-nav__sheen" />

            <TabsList
              ref={listRef}
              className="relative z-10 h-14 w-full rounded-full p-2 bg-transparent shadow-none"
            >
              <span
                aria-hidden
                className="liquid-glass-nav__indicator"
                style={{
                  width: indicator.width || undefined,
                  transform: `translateX(${indicator.left}px)`,
                }}
              />

              {navLinks.map((link, index) => {
                const id = sectionId(link.href);
                const isActive = activeId === id;

                return (
                  <TabsTrigger
                    key={link.href}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    value={id}
                    className={cn(
                      "relative z-10 h-full min-h-0 flex-1 rounded-full border-transparent px-3 text-sm font-base tracking-[-0.01em] shadow-none transition-colors duration-300",
                      "bg-transparent hover:bg-transparent dark:hover:bg-transparent",
                      "data-active:border-transparent data-active:bg-transparent data-active:shadow-none",
                      "dark:data-active:border-transparent dark:data-active:bg-transparent",
                      "after:hidden",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground/85 hover:text-foreground/80",
                    )}
                  >
                    {link.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
        </Tabs>
      </div>
    </nav>
  );
}
