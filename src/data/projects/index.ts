import { commercialExperience, projects } from "@/data/portfolio";
import { clinicPlatformProject } from "./clinic-platform";
import { doorsProject } from "./doors";
import { flowboardProject } from "./flowboard";
import { lerniProject } from "./lerni";
import { mindiaProject } from "./mindia";
import { recruitmentPlatformProject } from "./recruitment-platform";
import { reportingSpaProject } from "./reporting-spa";
import { tvshowProject } from "./tvshow";
import { wastePortalExtensionProject } from "./waste-portal-extension";
import { weseleoProject } from "./weseleo";
import type { ProjectDetail } from "./types";

const projectDetails: Record<string, ProjectDetail> = {
  doors: doorsProject,
  "clinic-platform": clinicPlatformProject,
  flowboard: flowboardProject,
  lerni: lerniProject,
  mindia: mindiaProject,
  "recruitment-platform": recruitmentPlatformProject,
  "reporting-spa": reportingSpaProject,
  TvShow: tvshowProject,
  "waste-portal-extension": wastePortalExtensionProject,
  weseleo: weseleoProject,
};

export type ProjectListItem = (typeof projects)[number];

export type CommercialProjectListItem =
  (typeof commercialExperience.projects)[number];

export function getProjectById(
  id: string,
): ProjectListItem | CommercialProjectListItem | undefined {
  return (
    projects.find((project) => project.id === id) ??
    commercialExperience.projects.find((project) => project.id === id)
  );
}

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails[id];
}

export function getAllProjectIds(): string[] {
  return [
    ...projects.map((project) => project.id),
    ...commercialExperience.projects.map((project) => project.id),
  ];
}

export function getProjectsWithDetails(): ProjectDetail[] {
  return Object.values(projectDetails);
}
