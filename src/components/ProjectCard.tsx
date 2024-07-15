import { deleteProject } from "@/src/app/actions/projects";
import { SquarePlus } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";

interface ProjectCardProps {
    project?: Project;
    createProject?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, createProject = false }) => {
    if (createProject) {
      return (
        <Link href="/create-project">
            <div className="mb-4 p-4 border-4 border-dotted border-gold-default bg-gold-light flex justify-center items-center" style={{ width: '20vw', height: '45vh' }}>
                <SquarePlus size={96} className="text-gold-default" />
            </div>
        </Link>
      );
    }
  const { openPositions } = project;

  let displayOpenPositions;
  if (openPositions.length > 2) {
    displayOpenPositions = `${openPositions.slice(0, 2).join(', ')}, +${openPositions.length - 2} more`;
  } else {
    displayOpenPositions = openPositions.join(', ');
  }

  return (
    <div className="mb-4 border border-gray-300 bg-gold-light shadow-2xl" style={{ width: '20vw', height: '45vh' }}>
      <div className="w-full h-64 relative">
        <Image src="/projectProfile.webp" alt="Project Profile" layout="fill" objectFit="cover" className="" />
      </div>
      <div className="p-4 text-maroon-default">
        <div className="font-semibold text-4xl">
            {project.title} <span className="text-2xl">by {project.author}</span>
        </div>
        
        <div className="mb-2 text-xl">{project.location}</div>
        {/* <div className="mb-2 text-2xl text-maroon-default">Description:<br /><span className="text-gold-dark">{project.description}</span></div> */}
        <div className="mb-2 text-xl">Open Positions:<br /><span className="text-gold-dark">{displayOpenPositions}</span></div>
        {/* Uncomment if needed */}
        {/* <div className="mb-2">Start Date: {new Date(project.startDate).toLocaleDateString()}</div>
        <div className="mb-2">End Date: {new Date(project.endDate).toLocaleDateString()}</div> */}
        <button
          onClick={() => deleteProject(project.id)}
          className="mt-4 p-2 border-none rounded bg-red-500 text-white cursor-pointer hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
