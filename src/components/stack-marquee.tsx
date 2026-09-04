"use client";

import { useEffect, useRef, useState } from "react";

type StackMarqueeProps = {
  items: readonly string[];
};

type MarqueeRowConfig = {
  duration: number;
  direction: "normal" | "reverse";
};

const ROW_CONFIG: MarqueeRowConfig[] = [
  { duration: 280, direction: "normal" },
  { duration: 300, direction: "reverse" },
  { duration: 320, direction: "normal" },
];

function splitIntoRows(items: readonly string[], rowCount: number) {
  const rows = Array.from({ length: rowCount }, () => [] as string[]);

  items.forEach((item, index) => {
    rows[index % rowCount]?.push(item);
  });

  return rows.filter((row) => row.length > 0);
}

function MarqueeBadge({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-border bg-surface px-3.5 py-2 font-mono text-[13px] leading-none font-medium whitespace-nowrap text-foreground-secondary">
      {label}
    </div>
  );
}

function MarqueeRow({
  items,
  duration,
  direction,
  isPlaying,
}: {
  items: string[];
  duration: number;
  direction: "normal" | "reverse";
  isPlaying: boolean;
}) {
  return (
    <div>
      <div
        className="stack-marquee-track flex w-max will-change-transform"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction,
          animationPlayState: isPlaying ? "running" : "paused",
        }}
      >
        {Array.from({ length: 3 }, (_, copyIndex) => (
          <div
            key={copyIndex}
            aria-hidden={copyIndex > 0}
            className="flex shrink-0 gap-2.5 pr-2.5"
          >
            {items.map((item) => (
              <MarqueeBadge key={`${copyIndex}-${item}`} label={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function StackMarquee({ items }: StackMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const rows = splitIntoRows(items, ROW_CONFIG.length);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlaying(entry?.isIntersecting ?? false);
      },
      { threshold: 0, rootMargin: "120px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mt-10 select-none overflow-hidden py-1"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div className="flex flex-col gap-2.5">
        {rows.map((rowItems, index) => (
          <MarqueeRow
            key={index}
            items={rowItems}
            duration={ROW_CONFIG[index]?.duration ?? 300}
            direction={ROW_CONFIG[index]?.direction ?? "normal"}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
}
