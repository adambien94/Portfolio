import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-8">
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-[14px] text-muted-foreground">
          <span className="font-medium text-foreground">
            {profile.name.split(" ")[0].toLowerCase()}
          </span>
          .dev
          <span className="mx-2 text-foreground/20">·</span>
          zbudowane z Next.js
        </p>
        <p className="text-[13px] text-foreground-subtle">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
