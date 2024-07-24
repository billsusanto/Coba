import React from 'react';
import { Project } from '../app/types/project';

interface ProjectPageProps {
  project: Project | null;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <div className="w-projectPage h-projectPage pt-5">
      <div className="bg-white rounded-lg border border-black shadow-md p-5 h-full">
        {project ? (
          <>
            <h2 className="text-6xl font-bold mb-4">{project.title}</h2>
            <p>This is a place where you can add extra information about the projects or any other relevant text you want to display alongside the project list.</p>
            {/* Add more text or elements here as needed */}
          </>
        ) : (
          <p>No project selected.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
