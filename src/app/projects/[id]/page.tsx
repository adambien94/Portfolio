import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectDetailView } from "@/components/project-detail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllProjectIds, getProjectById, getProjectDetail } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const detail = getProjectDetail(id);
  const project = getProjectById(id);

  if (!project) {
    return { title: "Projekt — Adam Bien" };
  }

  return {
    title: `${project.name} — Adam Bien`,
    description: detail?.headline ?? project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  const detail = getProjectDetail(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 px-5 py-10 md:px-8 md:py-16">
        {detail ? (
          <ProjectDetailView project={detail} />
        ) : (
          <div className="mx-auto w-full max-w-[700px]">
            <Link
              href="/#projekty"
              className="mb-10 inline-flex items-center gap-2 text-[14px] text-[#b5b3ad] transition-colors hover:text-white"
            >
              <span aria-hidden>←</span>
              Wszystkie projekty
            </Link>
            <h1 className="text-[32px] font-medium tracking-[-0.03em] text-white">
              {project.name}
            </h1>
            <p className="prose-portfolio mt-5">{project.description}</p>
            <p className="mt-8 text-[15px] text-[#7a7872]">
              Pełny opis tego projektu pojawi się wkrótce.
            </p>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
