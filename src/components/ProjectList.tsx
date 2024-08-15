'use client';
import React from 'react';
import ProjectCard from "./ProjectCard";
import { Project } from '../app/types/project';

interface ProjectsListProps {
  projects: Project[];
  showCreateProjectCard?: boolean;
  enableDelete?: boolean;
  onProjectClick?: (project: Project) => void | false;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects, showCreateProjectCard = true, enableDelete = true, onProjectClick }) => {
  return (
    <ul className="flex flex-col list-none h-full overflow-y-auto pt-5">
      {projects && projects.length > 0 ? (
        <>
          {projects.map((project) => (
            <li key={project.id} className="mb-4 pr-10 pl-5" onClick={() => onProjectClick(project)}>
              <ProjectCard project={project} enableDelete={enableDelete} />
            </li>
          ))}
        </>
      ) : null}
      {showCreateProjectCard && (
        <li className="mb-4 pr-10 pl-5">
          <ProjectCard createProject />
        </li>
      )}
    </ul>
  );
};

export default ProjectsList;
