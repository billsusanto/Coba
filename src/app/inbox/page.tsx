"use client";

import React, { useEffect, useState } from "react";
import {
  getCollaborationRequests,
  acceptCollaborationRequest,
} from "../actions/collaborate";
import { addFriend } from "../actions/friends";
import { useSession } from "next-auth/react";

interface CollaborationRequest {
  id: string;
  title: string;
  author: string;
  location: string;
  description: string;
  collaborate_requests: string[];
}

export default function Inbox() {
  const { data: session } = useSession();
  const [requests, setRequests] = useState<CollaborationRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session && session.user && session.user.email) {
      getRequests(session.user.email);
    }
  }, [session]);

  const getRequests = async (ownerEmail: string) => {
    try {
      const response = await getCollaborationRequests(ownerEmail);
      if (response.ok && Array.isArray(response.collaborationRequests)) {
        setRequests(response.collaborationRequests as CollaborationRequest[]);
      } else {
        console.error("Failed to fetch collaboration requests.");
      }
    } catch (error) {
      console.error("Error fetching collaboration requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (projectId: string, collaboratorEmail: string) => {
    try {
      const result = await acceptCollaborationRequest(
        projectId,
        collaboratorEmail
      );
      if (result.success) {
        console.log(
          "Accepted collaboration for project:",
          projectId,
          "with:",
          collaboratorEmail
        );
        if (session && session.user && session.user.email) {
          await addFriend(session.user.email, collaboratorEmail);
          await addFriend(collaboratorEmail, session.user.email);
        }
      } else {
        console.error("Failed to accept collaboration request:", result.error);
      }
    } catch (error) {
      console.error("Error accepting collaboration:", error);
    }
  };

  const handleDecline = async (
    projectId: string,
    collaboratorEmail: string
  ) => {
    alert("This feature is still under construction 🚧");
    console.log(
      "Declined collaboration for project:",
      projectId,
      "with:",
      collaboratorEmail
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex size-full justify-center items-center">
      <main className="p-10 pt-16 flex-1">
        <h1 className="text-5xl font-bold mb-5">Inbox</h1>
        {requests.length === 0 ? (
          <p>No collaboration requests at the moment.</p>
        ) : (
          <ul className="space-y-4">
            {requests.map((request) => (
              <li
                key={request.id}
                className="bg-white p-8 rounded-lg border border-gray-300 shadow-md flex items-center"
              >
                {/* Insert user image here */}
                <div className="flex-grow">
                  <p className="font-semibold text-2xl">
                    {request.author}
                    <span className="font-normal"> requested to join </span>
                    {request.title}
                  </p>
                </div>
                <div className="flex space-x-14">
                  <button
                    onClick={() => handleAccept(request.id, request.author)}
                    className="text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDecline(request.id, request.author)}
                    className="text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
