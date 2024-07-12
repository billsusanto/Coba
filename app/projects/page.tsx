import { getAllProjects } from '../actions/projects';
import ProjectsList from '@/components/ProjectList';

export default async function ProjectsPage() {
  const state = await getAllProjects();

  return (
    <>
      <h1>Projects 👋</h1>
      <ProjectsList projects={state.projects} />
    </>
  );
}