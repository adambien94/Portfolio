import Image from "next/image";
import Link from "next/link";
import { RichText } from "@/components/rich-text";
import type { ProjectDetail, ProjectScreenshot } from "@/data/projects/types";

function ProjectScreenshot({
  image,
  priority = false,
}: {
  image: ProjectScreenshot;
  priority?: boolean;
}) {
  return (
    <figure className="my-10 sm:my-14">
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0c] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          priority={priority}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-3 text-center text-[14px] text-[#7a7872]">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function ProjectDetailView({ project }: { project: ProjectDetail }) {
  return (
    <article className="mx-auto w-full max-w-[900px]">
      <Link
        href="/#projekty"
        className="mb-10 inline-flex items-center gap-2 text-[14px] text-[#b5b3ad] transition-colors hover:text-white"
      >
        <span aria-hidden>←</span>
        Wszystkie projekty
      </Link>

      <header className="mb-10 sm:mb-14">
        <div className="mb-5 flex items-center gap-2.5">
          <span
            className="size-2.5 shrink-0 rounded-full"
            style={{ backgroundColor: project.accent }}
            aria-hidden
          />
          <p className="text-[14px] font-medium text-white">{project.name}</p>
        </div>

        <h1 className="text-balance text-[32px] leading-[1.15] font-medium tracking-[-0.03em] text-white sm:text-[40px] sm:leading-[1.12]">
          {project.headline}
        </h1>
      </header>

      <div className="prose-portfolio flex flex-col gap-5">
        {project.intro.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}

        {project.highlight ? (
          <p className="!font-[550] !text-white">{project.highlight}</p>
        ) : null}

        {project.screenshotIntro ? <p>{project.screenshotIntro}</p> : null}
      </div>

      <ProjectScreenshot image={project.heroImage} priority />

      {project.sections.map((section, index) => (
        <div key={`${section.paragraphs[0]}-${index}`}>
          <div className="prose-portfolio flex flex-col gap-5">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
          {section.image ? <ProjectScreenshot image={section.image} /> : null}
        </div>
      ))}

      {project.closing?.length ? (
        <div className="prose-portfolio mt-10 flex flex-col gap-5 border-t border-white/[0.06] pt-10 sm:mt-14 sm:pt-14">
          {project.closing.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-1.5 sm:mt-14">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-white/[0.04] px-2.5 py-1 text-[12px] text-[#b5b3ad]"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
