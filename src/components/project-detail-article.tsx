"use client";

import { PortfolioImage } from "@/components/portfolio-image";
import { RichText } from "@/components/rich-text";
import { Lightbox } from "@/components/editorial-lightbox/lightbox";
import type { LightboxItem } from "@/components/editorial-lightbox/lightbox";
import type { ProjectDetail, ProjectScreenshot } from "@/data/projects/types";
import Link from "next/link";

function ProjectScreenshotTrigger({
  image,
  index,
  priority = false,
  fill,
  width,
  height,
  className,
  sizes,
}: {
  image: ProjectScreenshot;
  index: number;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
}) {
  return (
    <Lightbox.Trigger index={index} className="block w-full">
      {({ imageRef }) =>
        fill ? (
          <PortfolioImage
            ref={imageRef}
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            className={className}
            sizes={sizes}
          />
        ) : (
          <PortfolioImage
            ref={imageRef}
            src={image.src}
            alt={image.alt}
            width={width!}
            height={height!}
            priority={priority}
            className={className}
            sizes={sizes}
          />
        )
      }
    </Lightbox.Trigger>
  );
}

function ProjectScreenshotRow({
  images,
  indexBySrc,
}: {
  images: ProjectScreenshot[];
  indexBySrc: Map<string, number>;
}) {
  const isFullWidthRow = images.length === 3;

  return (
    <figure className="my-10 sm:my-14">
      <div className={isFullWidthRow ? "w-full" : "mx-auto w-full sm:w-2/3"}>
        <div
          className={
            isFullWidthRow
              ? "grid grid-cols-3 gap-3 sm:gap-4"
              : "grid grid-cols-2 gap-3 sm:gap-4"
          }
        >
          {images.map((image) => (
            <div
              key={image.src}
              className={
                isFullWidthRow
                  ? "relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-[var(--card-shadow)]"
                  : "overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-[var(--card-shadow)]"
              }
            >
              {isFullWidthRow ? (
                <ProjectScreenshotTrigger
                  image={image}
                  index={indexBySrc.get(image.src)!}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, 290px"
                />
              ) : (
                <ProjectScreenshotTrigger
                  image={image}
                  index={indexBySrc.get(image.src)!}
                  width={390}
                  height={844}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 50vw, 300px"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

function ProjectScreenshot({
  image,
  index,
  priority = false,
}: {
  image: ProjectScreenshot;
  index: number;
  priority?: boolean;
}) {
  return (
    <figure className="my-10 sm:my-14">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-[var(--card-shadow)]">
        <ProjectScreenshotTrigger
          image={image}
          index={index}
          priority={priority}
          width={1920}
          height={1080}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-3 text-center text-sm text-foreground-subtle">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

type ProjectDetailArticleProps = {
  project: ProjectDetail;
  lightboxItems: LightboxItem[];
  indexBySrc: Map<string, number>;
};

export function ProjectDetailArticle({
  project,
  lightboxItems,
  indexBySrc,
}: ProjectDetailArticleProps) {
  const backHref = project.backHref ?? "/#projekty";
  const backLabel = project.backLabel ?? "All projects";

  return (
    <Lightbox.Root>
      <article className="mx-auto w-full max-w-[900px]">
        <Link
          href={backHref}
          className="link-muted mb-10 inline-flex items-center gap-2 text-sm"
        >
          <span aria-hidden>←</span>
          {backLabel}
        </Link>

        <header className="mb-10 sm:mb-14">
          <div className="mb-5 flex items-center gap-2.5">
            <span
              className="size-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: project.accent }}
              aria-hidden
            />
            <p className="text-sm font-medium text-foreground">{project.name}</p>
          </div>

          <h1 className="text-balance text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-foreground sm:text-4xl sm:leading-[1.12]">
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

        {project.heroImage ? (
          <ProjectScreenshot
            image={project.heroImage}
            index={indexBySrc.get(project.heroImage.src)!}
            priority
          />
        ) : null}

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
              <ProjectScreenshotRow images={section.images} indexBySrc={indexBySrc} />
            ) : section.image ? (
              <ProjectScreenshot
                image={section.image}
                index={indexBySrc.get(section.image.src)!}
              />
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

        {project.stack?.length ? (
          <div className="mt-10 flex flex-wrap gap-1.5 sm:mt-14">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-foreground/[0.04] px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}
      </article>

      {lightboxItems.length ? (
        <Lightbox.Gallery
          items={lightboxItems}
          ariaLabel={`${project.name} project screenshots`}
        />
      ) : null}
    </Lightbox.Root>
  );
}
