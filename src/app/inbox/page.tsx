'use client';

import React, { useEffect, useState } from 'react';
import { getCollaborationRequests } from '../actions/collaborate';
import { addFriend } from '../actions/friends';
import { useSession } from 'next-auth/react';
import Sidebar from '@/src/components/Sidebar';

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
    if (session && session.user) {
      getRequests(session.user.email);
    }
  }, [session]);

  const getRequests = async (ownerEmail: string) => {
    try {
      const response = await getCollaborationRequests(ownerEmail);
      if (response.ok) {
        setRequests(response.collaborationRequests);
      } else {
        console.error('Failed to fetch collaboration requests.');
      }
    } catch (error) {
      console.error('Error fetching collaboration requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (projectId: string, collaboratorEmail: string) => {
    try {
      // Add the collaborator as a friend when accepting collaboration
      if (session && session.user) {
        await addFriend(session.user.email, collaboratorEmail);
        await addFriend(collaboratorEmail, session.user.email);
      }
      console.log('Accepted collaboration for project:', projectId, 'with:', collaboratorEmail);
    } catch (error) {
      console.error('Error accepting collaboration:', error);
    }
  };

  const handleDecline = async (projectId: string, collaboratorEmail: string) => {
    console.log('Declined collaboration for project:', projectId, 'with:', collaboratorEmail);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-10 flex-1 ml-64">
        <h1 className="text-3xl font-bold mb-5">Collaboration Requests</h1>
        {requests.length === 0 ? (
          <p>No collaboration requests at the moment.</p>
        ) : (
          <ul className="space-y-4">
            {requests.map((request) => (
              <li key={request.id} className="bg-white p-5 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">{request.title}</h2>
                <p>{request.description}</p>
                <p className="text-gray-500">{request.location}</p>
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">Collaboration Requests:</h3>
                  <ul className="space-y-2">
                    {request.collaborate_requests.map((collaboratorEmail) => (
                      <li key={collaboratorEmail} className="flex space-x-3">
                        <span className="flex-1">{collaboratorEmail}</span>
                        <button
                          onClick={() => handleAccept(request.id, collaboratorEmail)}
                          className="bg-green-500 text-white px-4 py-2 rounded-md"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleDecline(request.id, collaboratorEmail)}
                          className="bg-red-500 text-white px-4 py-2 rounded-md"
                        >
                          Decline
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
