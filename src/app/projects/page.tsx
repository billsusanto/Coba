import Projects from "@/src/components/Projects";
import { getAllProjects } from "../actions/projects";
import { getProjectById } from "../actions/projects";
import { getServerAuthSession } from "@/src/server/auth";
import { Project } from "../types/project";

export default async function ProjectsPage({
  params,
}: {
  params: { id?: string };
}) {
  const res = await getAllProjects();
  const session = await getServerAuthSession();

  const selectedProjectId = params?.id;
  let selectedProject: Project | null = null;

  if (selectedProjectId) {
    const projectRes = await getProjectById(selectedProjectId);
    selectedProject = projectRes.project ?? null;
  }

  return <Projects projects={res.projects} selectedProject={selectedProject} />;
}
