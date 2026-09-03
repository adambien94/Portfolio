import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-10 md:px-8">
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-[14px] text-[#b5b3ad]">
          <span className="font-medium text-white">
            {profile.name.split(" ")[0].toLowerCase()}
          </span>
          .dev
          <span className="mx-2 text-white/20">·</span>
          zbudowane z Next.js
        </p>
        <p className="text-[13px] text-[#7a7872]">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
