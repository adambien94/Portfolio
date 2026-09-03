import { HeroGraphic } from "@/components/hero-graphic";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
        <div className="animate-fade-up mb-10 w-full sm:mb-14">
          <HeroGraphic />
        </div>

        <h1 className="animate-fade-up-delay-1 text-balance text-[36px] leading-[1.08] font-[575] tracking-[-0.03em] text-foreground sm:text-[48px] sm:leading-[1.08]">
          {profile.headline.split("\n").map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>

        <p className="animate-fade-up-delay-2 mt-5 max-w-[540px] text-balance text-[17px] leading-7 text-accent-foreground sm:mt-6 sm:text-[20px] sm:leading-7">
          {profile.subheadline}
        </p>

        <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projekty" className="buy-button px-5 py-2.5 text-[15px]">
            Zobacz projekty
          </a>
          <a
            href="#o-mnie"
            className="ghost-button px-5 py-2.5 text-[15px]"
          >
            O mnie
          </a>
        </div>
      </div>
    </section>
  );
}
