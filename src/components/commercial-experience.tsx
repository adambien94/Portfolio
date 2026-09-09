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
          <h2 className="text-2xl leading-tight font-medium tracking-[-0.02em] text-foreground sm:text-3xl">
            {commercialExperience.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-foreground-secondary sm:text-lg">
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

        <div className="mt-10 sm:mt-12">
          <span className="text-base font-medium sm:text-lg">
            Recent projects
          </span>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground-subtle">
            The final projects from my previous role most of which I built solo
            from scratch through to deployment.
          </p>
        </div>

        <ul className="mt-6 flex flex-col gap-3 sm:mt-8">
          {commercialExperience.projects.map((project) => (
            <li key={project.id}>
              <Link
                href={project.href}
                className="group -mx-2 block rounded-md px-2 py-2 transition-colors hover:bg-foreground/[0.04] sm:-mx-3 sm:px-3"
              >
                <span className="block text-base font-base leading-snug text-foreground">
                  {project.name}
                </span>
                <span className="mt-0.5 block text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 sm:mt-16">
          <div>
            <span className="text-base font-medium sm:text-lg">Others</span>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground-subtle">
              Earlier commercial work listed for context, without a dedicated
              case study.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-border bg-surface-elevated/60 p-1 sm:p-1.5">
            <ul className="grid gap-px sm:grid-cols-2">
              {commercialExperience.otherProjects.map((project) => (
                <li
                  key={project.id}
                  className="cursor-default rounded-lg bg-background/70 px-4 py-4 sm:px-5 sm:py-4"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-medium leading-snug text-foreground-secondary">
                      {project.name}
                    </span>
                    {project.period ? (
                      <span className="shrink-0 font-mono text-[11px] leading-none tracking-wide text-foreground-subtle uppercase">
                        {project.period}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  {project.stack?.length ? (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-foreground/[0.04] px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
