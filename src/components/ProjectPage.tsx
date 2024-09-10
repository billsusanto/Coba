import React, {useState} from 'react';
import { Project } from '../app/types/project';
import { requestToCollaborate } from '../app/actions/collaborate';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

interface ProjectPageProps {
  project: Project | null;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  const { data: session } = useSession();
  const [isClicked, setIsClicked] = useState(false);
  const openRoles = project?.openRoles || [];
  const displayOpenRoles = openRoles.length > 2 ? `${openRoles.slice(0, 2).join(', ')}, +${openRoles.length - 2} more` : openRoles.join(', ');

  const interests = project?.interests || [];
  const interestsList = interests.join(', ');

  const handleCollaborateClick = async () => {
    if (!project || !session || !session.user) {
      console.error('Project or user information is missing');
      return;
    }

    try {
      const response = await requestToCollaborate(project.id, session.user.email);
      if (response.success) {
        alert('Collaboration request sent successfully!');
      } else {
        alert('Failed to send collaboration request.');
      }
    } catch (error) {
      console.error('Error sending collaboration request:', error);
      alert('An error occurred while sending the collaboration request.');
    }
  };

  return (
    <div className="w-projectPage h-projectPage">
      <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-xl p-10 pt-7 h-full">
        {project ? (
          <>
            <h2 className="text-6xl font-bold mb-4">{project.title}</h2>
            <p className="text-xl text-gray-600 mb-2">{project.location}</p>
            <div className="flex items-center mb-4">
              <Image
                src={project.authorImage || 'default-avatar.png'}
                alt="Author Image"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-xl font-bold">{project.author}</p>
                <p className="text-gray-600">{project.authorTitle}</p>
              </div>
              <button
                onClick={handleCollaborateClick}
                className={`ml-auto text-lg px-3 py-1 rounded-md transition-all duration-200 ${
                  isClicked
                    ? "bg-white text-black border border-black"
                    : "bg-gray-800 text-white hover:bg-white hover:text-black hover:border hover:border-black"
                }`}
              >
                {isClicked ? "Sent" : "Collaborate"}
              </button>
            </div>
            <hr className="my-8 border-t-2 border-gray-200"/>
            <div className="mb-4">
              <h3 className="text-3xl font-bold mb-2">Project Description:</h3>
              <p className='text-2xl text-gray-600'>{project.description}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-3xl font-bold mb-2">Open Positions:</h3>
              <p className='text-2xl text-gray-600'>{displayOpenRoles || "No open positions"}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-3xl font-bold mb-2">Tags:</h3>
              <p className='text-2xl text-gray-600'>{interestsList || "No tags"}</p>
            </div>
            <hr className="my-8 border-t-2 border-gray-200"/>
            <div className="mb-4">
              <h3 className="text-3xl font-bold mb-2">Masterplan:</h3>
              <p className='text-2xl text-gray-600 blur-section'>{project.masterplan || "No masterplan available"}</p>
            </div>
          </>
        ) : (
          <p>No project selected.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
