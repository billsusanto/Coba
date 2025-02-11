"use client";

import React, { useState } from "react";
import ProjectsList from "./ProjectList";
import ProjectPage from "./ProjectPage";
import Link from "next/link";
import { Project } from "../app/types/project";
import { SearchBar } from "./Searchbar";

interface ProjectsProps {
  projects: Project[];
  selectedProject: Project | null;
  initialSelectedProject?: Project | null;
}

export default function Projects({
  projects,
  initialSelectedProject,
}: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    initialSelectedProject || (projects.length > 0 ? projects[0] : null)
  );
  // const [searchedProjects, ssp]

  // useEffect(fetch.then(projects=> ssp(projects)))

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="flex w-full h-full pr-2vw">
      <div className="flex-1 flex flex-col pt-5">
        <div className="hidden md:flex justify-between items-center pb-3">
          {/* <SearchBar /> */}
          <div className="flex items-center w-[50vw] py-10"></div>
          <Link href="/create-project">
            <div className="bg-gray-800 text-white text-xl h-14 w-56 px-4 py-2 rounded-lg flex items-center justify-center ml-4">
              Create Project +
            </div>
          </Link>
        </div>

        <section className="flex w-full h-[80vh]">
          <div className="w-3/10 h-full overflow-y-auto">
            <div className="container">
              <div className="flex flex-wrap">
                <ProjectsList
                  projects={projects}
                  onProjectClick={handleProjectClick}
                  showCreateProjectCard={false}
                  enableDelete={false}
                />
              </div>
            </div>
          </div>
          {selectedProject && <ProjectPage project={selectedProject} />}
        </section>
      </div>
    </div>
  );
}
