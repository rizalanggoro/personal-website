import { createServerFn } from "@tanstack/react-start";
import fs from "fs";
import path from "path";

export interface Project {
  id: string;
  title: string;
  year: number | string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  role: string;
  impact: string[];
  github: string | null;
  demo: string | null;
}

const projectsFile = path.join(process.cwd(), "content/projects/projects.json");

export const getProjects = createServerFn({ method: "GET" }).handler(
  async () => {
    if (!fs.existsSync(projectsFile)) {
      return [];
    }
    const raw = fs.readFileSync(projectsFile, "utf8");
    return JSON.parse(raw) as Project[];
  }
);
