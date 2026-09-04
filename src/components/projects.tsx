import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { getProjectDetail } from "@/data/projects";

export function Projects() {
  return (
    <section id="projekty" className="scroll-mt-24 px-5 py-16 md:px-8 md:pb-28 md:pt-10">
      <div className="mx-auto w-full max-w-[900px]">
        <div className="mx-auto mb-10 max-w-[700px] sm:mb-14">
          <h2 className="text-[26px] leading-tight font-medium tracking-[-0.02em] text-foreground sm:text-[28px]">
            Projekty
          </h2>
          <p className="mt-3 max-w-[540px] text-[17px] leading-7 text-foreground-secondary sm:text-[18px]">
            Wybrane rzeczy, nad którymi pracowałem — od bibliotek UI po pełne
            produkty. Placeholderowe opisy, gotowe do podmiany na Twoje.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {projects.map((project) => {
            const image = getProjectDetail(project.id)?.heroImage;

            return (
              <Link
                key={project.id}
                href={project.href}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-[border-color,transform] duration-300 hover:border-foreground/16 hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
                  {image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 450px"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: `radial-gradient(ellipse 70% 55% at 50% 40%, ${project.accent}33, transparent 70%)`,
                      }}
                    />
                  )}
                </div>

                <div className="relative z-10 flex items-start gap-3 border-t border-border px-5 py-4">
                  <span
                    className="mt-1.5 size-2 shrink-0 rounded-full"
                    style={{ backgroundColor: project.accent }}
                    aria-hidden
                  />
                  <p className="text-[14px] leading-5 text-muted-foreground">
                    <span className="font-medium text-foreground">{project.name}</span>
                    {", "}
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-1.5 px-5 pb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-foreground/[0.04] px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
