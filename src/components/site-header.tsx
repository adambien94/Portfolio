import { navLinks, profile } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="pointer-events-none sticky top-0 z-50 w-full">
      <div className="bg-gradient-to-b from-background via-background/90 to-transparent pb-3">
        <div className="pointer-events-auto mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-4 md:px-8 md:py-6">
          <a
            href="#top"
            className="text-[15px] font-medium tracking-tight text-white/90 transition-colors hover:text-white"
          >
            {profile.name.split(" ")[0].toLowerCase()}
            <span className="text-[#b5b3ad]">.dev</span>
          </a>

          <div className="flex items-center gap-3 md:gap-5">
            <nav className="hidden items-center gap-4 sm:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-[#b5b3ad] transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a href={`mailto:${profile.email}`} className="buy-button">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
