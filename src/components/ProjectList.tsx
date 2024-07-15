'use client';
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <ul className="flex list-none">
      {projects && projects.length > 0 ? (
        <>
          {projects.map((project) => (
            <li key={project.id} className="mb-4 pr-10">
              <ProjectCard project={project} />
            </li>
          ))}
        </>
      ) : null}
      <li className="mb-4 pr-10">
        <ProjectCard createProject />
      </li>
    </ul>
  );
};

export default ProjectsList;
