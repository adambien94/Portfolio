import Link from "next/link";
import { RichText } from "@/components/rich-text";
import { StackMarquee } from "@/components/stack-marquee";
import { commercialExperience } from "@/data/portfolio";

export function CommercialExperience() {
  return (
    <section
      id="doswiadczenie"
      className="scroll-mt-18 px-5 py-16 md:px-8 md:pb-24"
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

        <StackMarquee items={commercialExperience.stack} />

        <ul className="mt-10 flex flex-col gap-3 sm:mt-12">
          {commercialExperience.projects.map((project) => (
            <li key={project.id}>
              <Link
                href={project.href}
                className="group -mx-2 block rounded-md px-2 py-2 transition-colors hover:bg-foreground/[0.04] sm:-mx-3 sm:px-3"
              >
                <span className="block text-[17px] font-medium leading-snug text-foreground">
                  {project.name}
                </span>
                <span className="mt-0.5 block text-[17px] leading-relaxed text-muted-foreground">
                  {project.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
