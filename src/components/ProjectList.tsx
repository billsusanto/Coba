"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../app/types/project";

interface ProjectsListProps {
  projects: Project[];
  showCreateProjectCard?: boolean;
  enableDelete?: boolean;
  onProjectClick: (project: Project) => void;
  scrollDirection?: "vertical" | "horizontal";
}

const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
  showCreateProjectCard = true,
  enableDelete = true,
  onProjectClick,
  scrollDirection = "vertical",
}) => {
  const scrollClass =
    scrollDirection === "horizontal"
      ? "flex-row overflow-x-scroll pt-10"
      : "flex-col overflow-y-scroll";

  return (
    <ul
      className={`flex w-full ${scrollClass} list-none h-full rounded-md pb-10`}
    >
      {projects.map((project) => (
        <li
          key={project.id}
          className="mb-4 px-8"
          onClick={() => onProjectClick(project)}
        >
          <ProjectCard project={project} enableDelete={enableDelete} />
        </li>
      ))}
      {showCreateProjectCard && (
        <li className="mb-4 pr-10 pl-5">
          <ProjectCard createProject />
        </li>
      )}
    </ul>
  );
};

export default ProjectsList;
