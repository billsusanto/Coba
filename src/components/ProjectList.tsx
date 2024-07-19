'use client';
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
  projects: Project[];
  showCreateProjectCard?: boolean;
  enableDelete?: boolean;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects, showCreateProjectCard = true, enableDelete = true }) => {
  return (
    <ul className="flex flex-col list-none">
      {projects && projects.length > 0 ? (
        <>
          {projects.map((project) => (
            <li key={project.id} className="mb-4 pr-10">
              <ProjectCard project={project} enableDelete={enableDelete}/>
            </li>
          ))}
        </>
      ) : null}
      {showCreateProjectCard && (
        <li className="mb-4 pr-10">
          <ProjectCard createProject/>
        </li>
      )}
    </ul>
  );
};

export default ProjectsList;
