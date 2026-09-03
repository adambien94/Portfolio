import { about, profile } from "@/data/portfolio";

function renderRichText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export function About() {
  return (
    <section id="o-mnie" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[700px]">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-[26px] leading-tight font-medium tracking-[-0.02em] text-white sm:text-[28px]">
            {about.title}
          </h2>
          <p className="text-[14px] text-[#b5b3ad]">
            {profile.role} · {profile.location}
          </p>
        </div>

        <div className="prose-portfolio flex flex-col gap-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{renderRichText(paragraph)}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 px-4 py-2 text-[14px] text-[#d2d2d0] transition-colors hover:border-white/20 hover:text-white"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 px-4 py-2 text-[14px] text-[#d2d2d0] transition-colors hover:border-white/20 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-white/10 px-4 py-2 text-[14px] text-[#d2d2d0] transition-colors hover:border-white/20 hover:text-white"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
