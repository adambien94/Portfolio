import type { ReactNode } from "react";

export function HeroGraphic() {
  return (
    <div
      aria-hidden
      className="relative mx-auto h-[240px] w-full max-w-[420px] sm:h-[300px] sm:max-w-[520px]"
    >
      {/* Hand / cursor */}
      <div className="animate-float-a absolute top-2 left-[8%] sm:top-4 sm:left-[12%]">
        <Blob className="h-16 w-16 sm:h-20 sm:w-20" variant="star">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 text-muted-foreground sm:h-8 sm:w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path
              d="M9 9.5V5.75a1.75 1.75 0 0 1 3.5 0V9"
              strokeLinecap="round"
            />
            <path
              d="M12.5 9V6.5a1.75 1.75 0 0 1 3.5 0V10"
              strokeLinecap="round"
            />
            <path
              d="M16 10V8.25a1.75 1.75 0 0 1 3.5 0V14.5a6 6 0 0 1-6 6h-.5A6.5 6.5 0 0 1 6.5 14V11.5a1.75 1.75 0 0 1 3.5 0V9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Blob>
      </div>

      {/* Sliders */}
      <div className="animate-float-b absolute top-0 left-1/2 -translate-x-1/2">
        <Blob className="h-[72px] w-[88px] sm:h-20 sm:w-28" variant="wide">
          <svg
            viewBox="0 0 40 24"
            className="h-8 w-12 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="M6 4v16M20 4v16M34 4v16" strokeLinecap="round" />
            <circle cx="6" cy="9" r="2.4" fill="currentColor" stroke="none" />
            <circle cx="20" cy="15" r="2.4" fill="currentColor" stroke="none" />
            <circle cx="34" cy="7" r="2.4" fill="currentColor" stroke="none" />
          </svg>
        </Blob>
      </div>

      {/* Lightbulb */}
      <div className="animate-float-c absolute top-6 right-[6%] sm:top-8 sm:right-[10%]">
        <Blob className="h-14 w-14 sm:h-16 sm:w-16" variant="round">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M9 18h6M10 21h4" strokeLinecap="round" />
            <path
              d="M8.5 14.5C7 13.2 6 11.5 6 9.5a6 6 0 1 1 12 0c0 2-1 3.7-2.5 5"
              strokeLinecap="round"
            />
          </svg>
        </Blob>
      </div>

      {/* Ball path - center */}
      <div className="animate-float-b absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-[46%]">
        <Blob
          className="h-[110px] w-[170px] sm:h-[130px] sm:w-[210px]"
          variant="cloud"
        >
          <svg
            viewBox="0 0 120 60"
            className="h-12 w-24 text-muted-foreground sm:h-14 sm:w-28"
            fill="none"
          >
            <path
              d="M8 42 C28 42, 28 18, 48 18 C68 18, 68 42, 88 42 C100 42, 108 32, 112 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="3 6"
            />
            <circle cx="48" cy="18" r="5.5" fill="currentColor" />
            <circle cx="88" cy="42" r="4" fill="currentColor" opacity="0.55" />
          </svg>
        </Blob>
      </div>

      {/* Clock */}
      <div className="animate-float-a absolute right-[4%] bottom-[18%] sm:right-[8%] sm:bottom-[14%]">
        <Blob className="h-16 w-16 sm:h-[76px] sm:w-[76px]" variant="bubble">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <circle cx="12" cy="12" r="8" />
            <path
              d="M12 8v4.5l3 1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Blob>
      </div>

      {/* Code */}
      <div className="animate-float-c absolute bottom-2 left-[22%] sm:bottom-4 sm:left-[28%]">
        <Blob className="h-12 w-[72px] sm:h-14 sm:w-20" variant="chip">
          <span className="font-mono text-sm tracking-tight text-muted-foreground sm:text-base">
            {"</>"}
          </span>
        </Blob>
      </div>
    </div>
  );
}

type BlobVariant = "star" | "wide" | "round" | "cloud" | "bubble" | "chip";

function Blob({
  children,
  className,
  variant,
}: {
  children: ReactNode;
  className?: string;
  variant: BlobVariant;
}) {
  const radii: Record<BlobVariant, string> = {
    star: "42% 58% 48% 52% / 48% 42% 58% 52%",
    wide: "48% 52% 55% 45% / 55% 40% 60% 45%",
    round: "55% 45% 48% 52% / 48% 55% 45% 52%",
    cloud: "55% 45% 60% 40% / 50% 55% 45% 50%",
    bubble: "50% 50% 45% 55% / 55% 45% 55% 45%",
    chip: "40% 60% 55% 45% / 50% 40% 60% 50%",
  };

  return (
    <div
      className={`flex items-center justify-center bg-muted shadow-[inset_0_1px_0_var(--blob-highlight)] ${className ?? ""}`}
      style={{ borderRadius: radii[variant] }}
    >
      {children}
    </div>
  );
}
