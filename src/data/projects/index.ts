import { projects } from "@/data/portfolio";
import { flowboardProject } from "./flowboard";
import { lerniProject } from "./lerni";
import type { ProjectDetail } from "./types";

const projectDetails: Record<string, ProjectDetail> = {
  flowboard: flowboardProject,
  lerni: lerniProject,
};

export type ProjectListItem = (typeof projects)[number];

export function getProjectById(id: string): ProjectListItem | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails[id];
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id);
}

export function getProjectsWithDetails(): ProjectDetail[] {
  return Object.values(projectDetails);
}
