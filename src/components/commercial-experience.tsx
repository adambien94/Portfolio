import { RichText } from "@/components/rich-text";
import { commercialExperience } from "@/data/portfolio";

export function CommercialExperience() {
  return (
    <section
      id="doswiadczenie"
      className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto w-full max-w-[700px]">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-[26px] leading-tight font-medium tracking-[-0.02em] text-foreground sm:text-[28px]">
            {commercialExperience.title}
          </h2>
          <p className="mt-3 text-[17px] leading-7 text-foreground-secondary sm:text-[18px]">
            {commercialExperience.subtitle}
          </p>
        </div>

        <div className="prose-portfolio flex flex-col gap-5">
          {commercialExperience.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-1.5">
          {commercialExperience.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-foreground/[0.04] px-2.5 py-1 text-[12px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
