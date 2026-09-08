import { ProjectDetailArticle } from "@/components/project-detail-article";
import {
  collectProjectLightboxItems,
  createLightboxIndexMap,
} from "@/lib/collect-project-lightbox-items";
import type { ProjectDetail } from "@/data/projects/types";

export function ProjectDetailView({ project }: { project: ProjectDetail }) {
  const lightboxItems = collectProjectLightboxItems(project);
  const indexBySrc = createLightboxIndexMap(lightboxItems);

  return (
    <ProjectDetailArticle
      project={project}
      lightboxItems={lightboxItems}
      indexBySrc={indexBySrc}
    />
  );
}
