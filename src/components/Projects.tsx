'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProjectsList from './ProjectList';
import ProjectPage from './ProjectPage';
import Link from 'next/link';
import { Project } from '../app/types/project';

export default function Projects({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects.length > 0 ? projects[0] : null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="flex max-w-screen min-h-screen bg-gray-300 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col pt-5 pr-24">
        <div className="flex justify-between items-center pb-5 pl-64">
          <div className="flex items-center w-2/5 rounded-full p-10">
            <input
              type="text"
              placeholder="Search Projects"
              className="bg-white pl-10 pr-5 py-2 border w-full h-14 text-xl rounded-full focus:outline-none focus:shadow-outline placeholder-gray-500"
            />
          </div>
          <Link href="/create-project">
            <div className="bg-gray-800 text-white text-xl h-14 w-56 px-4 py-2 rounded-lg flex items-center justify-center ml-4">
              Create Project +
            </div>
          </Link>
        </div>
        <section className="flex w-full h-projectPage pl-72">
          <div className="w-3/10 h-full overflow-y-auto">
            <div className="container">
              <div className="flex flex-wrap">
                <ProjectsList
                  projects={projects}
                  onProjectClick={handleProjectClick} // Pass the click handler
                  showCreateProjectCard={false}
                  enableDelete={false}
                />
              </div>
            </div>
          </div>
          {selectedProject && <ProjectPage project={selectedProject} />} {/* Render the selected project */}
        </section>
      </div>
    </div>
  );
};
