import Link from "next/link";
import { navLinks, profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="pointer-events-none sticky top-0 z-50 w-full">
      <div className="bg-gradient-to-b from-background via-background/90 to-transparent pb-3">
        <div className="pointer-events-auto mx-auto flex w-full max-w-[1640px] items-center justify-between px-5 py-4 md:px-8 md:py-6">
          <Link
            href="/"
            className="text-[15px] font-medium tracking-tight text-foreground/90 transition-colors hover:text-foreground"
          >
            {profile.name.split(" ")[0].toLowerCase()}
            <span className="text-muted-foreground">.dev</span>
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <nav className="hidden items-center gap-4 sm:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  className="link-muted text-[14px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <a href={`mailto:${profile.email}`} className="buy-button">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
