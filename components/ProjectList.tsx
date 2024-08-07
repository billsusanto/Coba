'use client';

import { deleteProject } from "@/app/actions/projects";

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <ul className="list-disc pl-5">
      {projects && projects.length > 0 && (
        <>
          {projects.map((project) => (
            <li
              key={project.id}
              className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
            >
              <div className="font-bold mb-2">{project.title}</div>
              <div className="mb-2">{project.description}</div>
              <div className="mb-2">Open Positions: {project.openPositions.join(', ')}</div>
              <div className="mb-2">Status: {project.status}</div>
              {/* <div className="mb-2">Start Date: {new Date(project.startDate).toLocaleDateString()}</div>
              <div className="mb-2">End Date: {new Date(project.endDate).toLocaleDateString()}</div> */}
              <button
                onClick={() => deleteProject(project.id)}
                className="ml-2 p-1 border-none rounded bg-red-500 text-white cursor-pointer hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
