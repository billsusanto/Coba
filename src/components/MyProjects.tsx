'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import ProjectsList from '@/src/components/ProjectList';
import Navbar from '@/src/components/Navbar';
import { getAllProjectsByEmail } from '../app/actions/projects';

export default function MyProjects() {
  const { data: session } = useSession();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, [session]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white w-full min-h-screen">
      <Navbar />
      <div className="w-full mx-9" style={{ paddingLeft: '1.5rem', paddingTop: '1.5rem' }}>
        <div className="pt-20 pb-10">
          <h1 className="t-2 text-5xl text-black">My Projects</h1>
        </div>

        <div className="flex no-scrollbar overflow-x-auto -mx-2 pb-10 w-full">
          <ProjectsList projects={projects} enableDelete={true}/>
        </div>
      </div>
    </div>
  );
}
