import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-8">
      <div className="mx-auto flex w-full max-w-[1640px] flex-col items-start justify-between gap-4 md:px-8 sm:flex-row sm:items-center">
        <p className="text-[14px] text-muted-foreground">
          <span className="font-medium text-foreground">{profile.domain}</span>
          .me
          <span className="mx-2 text-foreground/20">·</span>
          built with Next.js
        </p>
        <p className="text-[13px] text-foreground-subtle">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
