import Projects from "@/src/components/Projects";
import { getAllProjects } from "../actions/projects";
import { getProjectById } from "../actions/projects";
import { getServerAuthSession } from "@/src/server/auth";

export default async function ProjectsPage({ params }: { params: { id?: string } }) {
  const res = await getAllProjects();
  const session = await getServerAuthSession();
  
  const selectedProjectId = params?.id;
  let selectedProject = null;

  if (selectedProjectId) {
    const projectRes = await getProjectById(selectedProjectId);
    selectedProject = projectRes.project;
  }

  return (
    <main>
      <Projects projects={res.projects} selectedProject={selectedProject} />
    </main>
  );
}
