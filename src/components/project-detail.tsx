import Image from "next/image";
import Link from "next/link";
import { RichText } from "@/components/rich-text";
import type { ProjectDetail, ProjectScreenshot } from "@/data/projects/types";

function ProjectScreenshotRow({ images }: { images: ProjectScreenshot[] }) {
  return (
    <figure className="my-10 sm:my-14">
      <div className="mx-auto w-2/3">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {images.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-[var(--card-shadow)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={390}
                height={844}
                className="h-auto w-full"
                sizes="(max-width: 768px) 30vw, 300px"
              />
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

function ProjectScreenshot({
  image,
  priority = false,
}: {
  image: ProjectScreenshot;
  priority?: boolean;
}) {
  return (
    <figure className="my-10 sm:my-14">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-[var(--card-shadow)]">
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
        <figcaption className="mt-3 text-center text-[14px] text-foreground-subtle">
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
        className="link-muted mb-10 inline-flex items-center gap-2 text-[14px]"
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
          <p className="text-[14px] font-medium text-foreground">{project.name}</p>
        </div>

        <h1 className="text-balance text-[32px] leading-[1.15] font-medium tracking-[-0.03em] text-foreground sm:text-[40px] sm:leading-[1.12]">
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
          <p className="!font-[550] !text-foreground">{project.highlight}</p>
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
          {section.images?.length ? (
            <ProjectScreenshotRow images={section.images} />
          ) : section.image ? (
            <ProjectScreenshot image={section.image} />
          ) : null}
        </div>
      ))}

      {project.closing?.length ? (
        <div className="prose-portfolio mt-10 flex flex-col gap-5 border-t border-border pt-10 sm:mt-14 sm:pt-14">
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
            className="rounded-md bg-foreground/[0.04] px-2.5 py-1 text-[12px] text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
