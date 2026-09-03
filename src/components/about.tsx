import { RichText } from "@/components/rich-text";
import { about, profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="o-mnie" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[700px]">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-[26px] leading-tight font-medium tracking-[-0.02em] text-foreground sm:text-[28px]">
            {about.title}
          </h2>
          <p className="text-[14px] text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>

        <div className="prose-portfolio flex flex-col gap-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-button px-4 py-2 text-[14px]"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-button px-4 py-2 text-[14px]"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="ghost-button px-4 py-2 text-[14px]"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
