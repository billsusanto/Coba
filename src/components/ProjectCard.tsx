import React, { useState } from "react";
import { deleteProject } from "@/src/app/actions/projects";
import { SquarePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { User } from "../app/types/user";
import { Project } from "../app/types/project";
import { useSession } from "next-auth/react";
import { requestToCollaborate } from "../app/actions/collaborate";

interface ProjectCardProps {
  user?: User;
  project?: Project;
  createProject?: boolean;
  enableDelete?: boolean;
  scrollDirection?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  createProject = false,
  enableDelete = false,
  scrollDirection = "vertical",
}) => {
  const { data: session } = useSession();
  const [isClicked, setIsClicked] = useState(false);

  if (createProject) {
    return (
      <div className="">
        <Link href="/create-project">
          <div className="border-2 border-dotted border-gray-700 bg-gray-100 flex justify-center items-center rounded-xl shadow-md hover:shadow-xl transform transition-all w-[20vw] h-[26vh]">
            <SquarePlus size={96} className="text-gray-300" />
          </div>
        </Link>
      </div>
    );
  }

  const scrollClass = scrollDirection === "horizontal" ? "mr-5" : "mb-5";

  const handleCollaborateClick = async () => {
    if (!project || !session || !session.user) {
      console.error("Project or user information is missing");
      return;
    }

    try {
      const response = await requestToCollaborate(
        project.id,
        session.user.email ?? ""
      );
      if (response.success) {
        alert("Collaboration request sent successfully!");
      } else {
        alert("Failed to send collaboration request.");
      }
    } catch (error) {
      console.error("Error sending collaboration request:", error);
      alert("An error occurred while sending the collaboration request.");
    }
  };

  // const openRoles = project?.openRoles || [];
  // const displayOpenRoles =
  //   openRoles.length > 2
  //     ? `${openRoles.slice(0, 2).join(", ")}, +${openRoles.length - 2} more`
  //     : openRoles.join(", ");

  const interests = project?.interests || [];
  // const interestsList = interests.join(", ");

  return (
    <div
      className={`bg-gray-50 shadow-md rounded-lg border border-gray-300 flex flex-col hover:shadow-xl transform transition-all cursor-pointer w-[20vw] h-[300px] ${scrollClass}`}
    >
      <div className="pl-10 pt-10 pr-10 flex-grow">
        <div className="font-bold text-3xl">{project?.title}</div>
        <div className="mb-2 text-lg text-gray-500">{project?.location}</div>
        {interests.length > 0 &&
          interests.some((interest) => interest.trim() !== "") && (
            <div className="mb-4 text-xl">
              Interests:
              <div className="flex flex-wrap gap-2 mt-2">
                {interests
                  .filter((interest) => interest.trim() !== "")
                  .flatMap((interest) => interest.split(',')) 
                  .map((interest, index) => (
                    <span
                      key={index}
                      className="inline-block px-4 py-2 border border-black rounded-full text-black text-base font-sm hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      {interest.trim()}
                    </span>
                  ))}
              </div>
            </div>
          )}
      </div>
      <div className="flex items-center text-xl px-10 py-4 rounded-b-xl">
        <span className="mr-2 text-xl">By:</span>
        <Image
          src={project?.authorImage || "/default-avatar.png"}
          alt="Author Image"
          width={60}
          height={60}
          className="rounded-full mr-2"
        />
        <div>
          <span>{project?.author}</span>
        </div>
        {!enableDelete && (
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
        )}

        {enableDelete && (
          <button
            onClick={() => project?.id && deleteProject(project.id)}
            className="ml-auto text-white bg-red-500 text-lg px-3 py-1 rounded-md"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
