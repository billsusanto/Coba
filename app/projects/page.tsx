import { getAllProjects } from '../actions/projects';
import NewProjectForm from './NewProjectForm';
import ProjectsList from './ProjectsList';

export default async function ProjectsPage() {
  const state = await getAllProjects();

  return (
    <>
      <h1>Projects 👋</h1>
      <ProjectsList projects={state.projects} />
      <NewProjectForm />
    </>
  );
}
