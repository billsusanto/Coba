'use client';
import { deleteProject } from "@/src/app/actions/projects";
import { SquarePlus } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";

interface ProjectCardProps {
    project?: Project;
    createProject?: boolean;
    enableDelete?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, createProject = false, enableDelete = false }) => {
    if (createProject) {
      return (
        <Link href="/create-project">
            <div className="mb-4 p-4 border-2 border-dotted border-gray-700 bg-gray-100 flex justify-center items-center" style={{ width: '20vw', height: '51vh' }}>
                <SquarePlus size={96} className="text-gray-300" />
            </div>
        </Link>
      );
    }

    const openRoles = project?.openRoles || [];

    let displayOpenRoles;
    if (openRoles.length > 2) {
      displayOpenRoles = `${openRoles.slice(0, 2).join(', ')}, +${openRoles.length - 2} more`;
    } else {
      displayOpenRoles = openRoles.join(', ');
    }

    const interests = project?.interests || [];
    let interestsList = interests.join(', ');

    return (
      <div className="mb-4 border border-gray-300 bg-gray-100 shadow-2xl" style={{ width: '20vw', height: 'auto' }}>
        <div className="w-full h-64 relative">
          <Image src="/projectProfile.webp" alt="Project Profile" layout="fill" objectFit="cover" className="" />
        </div>
        <div className="p-4">
          <div className="font-semibold text-4xl">
              {project.title} <span className="text-2xl">by {project.author}</span>
          </div>
          <div className="mb-2 text-xl text-gray-500">{interestsList}</div>
          <div className="mb-2 text-xl text-gray-500">{project.location}</div>
          <div className="mb-2 text-xl">Description:<br /><span className="text-gray-500">{project.description}</span></div>
          <div className="mb-2 text-xl">Open Roles:<br /><span className="text-gray-500">{displayOpenRoles}</span></div>
          {/* Uncomment if needed */}
          {/* <div className="mb-2">Start Date: {new Date(project.startDate).toLocaleDateString()}</div>
          <div className="mb-2">End Date: {new Date(project.endDate).toLocaleDateString()}</div> */}
          <div className="mb-2 text-xl">Masterplan:<br /><span className="text-gray-500">{project.masterplan}</span></div>
          {enableDelete && (
            <button
              onClick={() => deleteProject(project.id)}
              className="mt-4 p-2 border-none rounded bg-red-500 text-white cursor-pointer hover:bg-red-600"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    );
};

export default ProjectCard;
