// ProjectCard.tsx
import React from 'react';
import { deleteProject } from "@/src/app/actions/projects";
import { SquarePlus } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";
import { User } from "../app/types/user";
import { Project } from "../app/types/project";

interface ProjectCardProps {
  user?: User;
  project?: Project;
  createProject?: boolean;
  enableDelete?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, createProject = false, enableDelete = false }) => {
  if (createProject) {
    return (
      <Link href="/create-project">
        <div className="mb-4 p-4 border-2 border-dotted border-gray-700 bg-gray-100 flex justify-center items-center rounded-xl hover:border-gray-900 hover:scale-105 transform transition-transform duration-300 ease-in-out" style={{ width: '20vw', height: '20vh' }}>
          <SquarePlus size={96} className="text-gray-300" />
        </div>
      </Link>
    );
  }

  const openRoles = project?.openRoles || [];
  const displayOpenRoles = openRoles.length > 2 ? `${openRoles.slice(0, 2).join(', ')}, +${openRoles.length - 2} more` : openRoles.join(', ');

  const interests = project?.interests || [];
  const interestsList = interests.join(', ');

  return (
    <div className="border border-black bg-white shadow-lg rounded-xl flex flex-col justify-between hover:border-blue-500 hover:scale-105 transform transition-transform duration-300 ease-in-out" style={{ width: '20vw', height: 'auto' }}>
      <div className="pl-10 pt-10 pr-10 flex-grow">
        <div className="font-bold text-3xl">
          {project.title} 
        </div>
        <div className="mb-2 text-lg text-gray-500">{project.location}</div>
        <div className="mb-2 text-xl">Open Roles:<br /><span className="text-lg text-gray-500">{displayOpenRoles}</span></div>
        <div className="mb-2 text-xl">Interests:<br /><span className="text-lg text-gray-500">{interestsList}</span></div>
      </div>
      <div className="flex items-center text-xl px-10 py-4 rounded-b-xl">
        <span className="mr-2 text-xl">By:</span>
        <Image
          src={project.authorImage || '/default-avatar.png'}
          alt="Author Image"
          width={60}
          height={60}
          className="rounded-full mr-2"
        />
        <div>
          <span>{project.author}</span>
        </div>
        {!enableDelete && (
          <button className="ml-auto bg-gray-800 text-white text-lg px-3 py-1 rounded-md">
            Collaborate
          </button>
        )}
        {enableDelete && (
          <button
            onClick={() => deleteProject(project.id)}
            className="ml-auto bg-red-600 text-white text-lg px-3 py-1 rounded-md"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
