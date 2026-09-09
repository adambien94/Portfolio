"use client";

import { PortfolioImage } from "@/components/portfolio-image";
import { RichText } from "@/components/rich-text";
import { Lightbox } from "@/components/editorial-lightbox/lightbox";
import type { LightboxItem } from "@/components/editorial-lightbox/lightbox";
import type { ProjectDetail, ProjectScreenshot } from "@/data/projects/types";
import Link from "next/link";

const screenshotTriggerFrameClass =
  "overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-[var(--card-shadow)]";

function ProjectScreenshotTrigger({
  image,
  index,
  priority = false,
  fill,
  width,
  height,
  imageClassName,
  frameClassName,
  sizes,
}: {
  image: ProjectScreenshot;
  index: number;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  imageClassName?: string;
  frameClassName?: string;
  sizes?: string;
}) {
  return (
    <Lightbox.Trigger
      index={index}
      className={`block w-full scroll-my-10 ${screenshotTriggerFrameClass}${frameClassName ? ` ${frameClassName}` : ""}`}
    >
      {({ imageRef }) =>
        fill ? (
          <PortfolioImage
            ref={imageRef}
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            className={imageClassName}
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
            className={imageClassName}
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
            <figure key={image.src}>
              <ProjectScreenshotTrigger
                image={image}
                index={indexBySrc.get(image.src)!}
                fill={isFullWidthRow}
                frameClassName={
                  isFullWidthRow ? "relative aspect-[16/10]" : undefined
                }
                imageClassName={
                  isFullWidthRow ? "object-cover object-top" : "h-auto w-full"
                }
                width={isFullWidthRow ? undefined : 390}
                height={isFullWidthRow ? undefined : 844}
                sizes={
                  isFullWidthRow
                    ? "(max-width: 768px) 50vw, 290px"
                    : "(max-width: 640px) 50vw, 300px"
                }
              />
              {image.caption ? (
                <figcaption className="mt-2 text-center text-xs text-foreground-subtle sm:text-sm">
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
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
    <figure className="my-10 sm:my-14 sm:w-full mx-auto">
      <ProjectScreenshotTrigger
        image={image}
        index={index}
        priority={priority}
        width={1920}
        height={1080}
        imageClassName="h-auto w-full"
        sizes="(max-width: 768px) 100vw, 900px"
      />
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
    <Lightbox.Root
      scrollTriggerIntoView={[
        { type: "onOpenComplete", behavior: "instant" },
        { type: "onChange", behavior: "instant" },
      ]}
    >
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
            <p className="text-sm font-medium text-foreground">
              {project.name}
            </p>
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
            <p className="!font-[550] !text-foreground">
              <RichText text={project.highlight} />
            </p>
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
          <section
            key={section.title ?? `${section.paragraphs[0]}-${index}`}
            className={
              index > 0 || !project.heroImage ? "mt-10 sm:mt-14" : undefined
            }
          >
            {section.title ? (
              <h2 className="mb-5 text-xl leading-tight font-medium tracking-[-0.02em] text-foreground sm:mb-6 sm:text-2xl">
                {section.title}
              </h2>
            ) : null}
            <div className="prose-portfolio flex flex-col gap-5">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
            {section.images?.length ? (
              <ProjectScreenshotRow
                images={section.images}
                indexBySrc={indexBySrc}
              />
            ) : section.image ? (
              <ProjectScreenshot
                image={section.image}
                index={indexBySrc.get(section.image.src)!}
              />
            ) : null}
          </section>
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
                className="rounded-md border bg-foreground/[0.04] px-2.5 py-1 text-xs text-muted-foreground"
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
