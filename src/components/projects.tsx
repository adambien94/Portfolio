import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projekty" className="scroll-mt-24 px-5 py-16 md:px-8 md:pb-28 md:pt-10">
      <div className="mx-auto w-full max-w-[900px]">
        <div className="mx-auto mb-10 max-w-[700px] sm:mb-14">
          <h2 className="text-[26px] leading-tight font-medium tracking-[-0.02em] text-white sm:text-[28px]">
            Projekty
          </h2>
          <p className="mt-3 max-w-[540px] text-[17px] leading-7 text-[#d2d2d0] sm:text-[18px]">
            Wybrane rzeczy, nad którymi pracowałem — od bibliotek UI po pełne
            produkty. Placeholderowe opisy, gotowe do podmiany na Twoje.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#161614] transition-[border-color,transform] duration-300 hover:border-white/16 hover:-translate-y-0.5"
            >
              <div className="relative flex flex-1 items-center justify-center px-6 pt-10 pb-6">
                <div
                  className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300 group-hover:opacity-70"
                  style={{
                    background: `radial-gradient(ellipse 70% 55% at 50% 40%, ${project.accent}22, transparent 70%)`,
                  }}
                />
                <span className="relative z-10 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[14px] text-[#ededed] backdrop-blur-sm transition-colors group-hover:border-white/25 group-hover:text-white">
                  {project.previewLabel}
                </span>
              </div>

              <div className="relative z-10 flex items-start gap-3 border-t border-white/[0.06] px-5 py-4">
                <span
                  className="mt-1.5 size-2 shrink-0 rounded-full"
                  style={{ backgroundColor: project.accent }}
                  aria-hidden
                />
                <p className="text-[14px] leading-5 text-[#b5b3ad]">
                  <span className="font-medium text-white">{project.name}</span>
                  {", "}
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-1.5 px-5 pb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-[#b5b3ad]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
