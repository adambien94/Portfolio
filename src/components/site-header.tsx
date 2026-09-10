import Link from "next/link";
import { navLinks, profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="pointer-events-none  top-0 z-1 w-full">
      <div className="">
        <div className="pointer-events-auto mx-auto flex w-full max-w-[1640px] items-center justify-between px-5 py-4 md:px-8 md:py-6">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-foreground/90 transition-colors hover:text-foreground"
          >
            {profile.domain}
            <span className="text-muted-foreground">.eu</span>
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <nav className="hidden items-center gap-4 sm:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  className="link-muted text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            {/* <a href={`mailto:${profile.email}`} className="buy-button">
              Contact
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
}
