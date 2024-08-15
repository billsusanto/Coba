'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getAllProjectsByEmail } from '../actions/projects';
import Sidebar from '@/src/components/Sidebar';
import ProjectsList from '@/src/components/ProjectList';
import ProfilePage from '@/src/components/ProfilePage';
import Link from 'next/link';

const MyProfile = () => {
  const { data: session } = useSession();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      if (session && session.user && session.user.email) {
        try {
          const result = await getAllProjectsByEmail(session.user.email);
          setProjects(result.projects);
        } catch (err) {
          setError('Failed to load projects.');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="flex max-w-screen min-h-screen bg-gray-300 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col pt-5 pr-24">
        <div className="flex justify-between items-center pl-64">
          <div className="flex items-center w-2/5 rounded-full p-10">
            <input
              type="text"
              placeholder="Search Projects"
              className="bg-white pl-10 pr-5 py-2 border w-full h-14 text-xl rounded-full focus:outline-none focus:shadow-outline placeholder-gray-500"
            />
            {/* <img src='/Filter.png' className='ml-5'/> */}
          </div>
          <Link href="/create-project">
            <div className="bg-gray-800 text-white text-xl h-14 w-56 px-4 py-2 rounded-lg flex items-center justify-center ml-4">
              Create Project +
            </div>
          </Link>
        </div>
        <section className="flex w-full h-projectPage ml-72">
          <div className="w-3/10 h-full overflow-y-auto">
            <div className="container">
              <div className="flex flex-wrap">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <ProjectsList
                    projects={projects}
                    showCreateProjectCard={true}
                    enableDelete={true}
                    onProjectClick={false as any}
                  />
                )}
              </div>
            </div>
          </div>
          <ProfilePage />
        </section>
      </div>
    </div>
  );
};

export default MyProfile;
