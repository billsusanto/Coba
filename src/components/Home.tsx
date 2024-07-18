'use client';

import React, { useState, useEffect } from 'react';
import { getAllProjects } from '../app/actions/projects';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import ProjectsList from './ProjectList';

const Home = () => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await getAllProjects();
        setProjects(result.projects);
      } catch (error) {
        setError('Failed to load projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleMouseEnter = (tab: string) => {
    setHoveredTab(tab);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <div className='bg-beige-default min-h-screen'>
      <Navbar />
      <div className="flex flex-col items-center h-one-third-screen bg-beige-default">
        <header className="text-center mt-20">
          <h1 className="text-7xl font-semibold text-maroon-default mb-5 mt-10">Coba.</h1>
          <p className="text-5xl text-maroon-light mb-10">Collaborate through projects</p>
          <div className="flex justify-center mt-10">
            <input 
              type="text" 
              placeholder="Search for projects" 
              className="w-search-bar h-14 px-6 rounded-full text-maroon-light bg-gold-light border border-gold-dark shadow-xl focus:outline-none focus:ring-2 focus:ring-maroon-default"
            />
          </div>
        </header>
      </div>

      <section className="w-full mt-20">
        <div className="container mx-auto">
          <div className="flex justify-around text-gray-600 mb-20">
            <div className="flex flex-col items-center">
              <div 
                className="flex items-center"
                onMouseEnter={() => handleMouseEnter('Computer Science')} 
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={hoveredTab === 'Computer Science' ? "/ComputerScience.svg" : "/ComputerScience.png"}
                  alt="Computer Science"
                  width={35}
                  height={35}
                />
                <p className={`ml-5 font-semibold text-2xl text-maroon-default ${hoveredTab === 'Computer Science' ? 'text-transparent bg-clip-text bg-gradient-to-r from-maroon-default to-maroon-dark' : ''}`}>Computer Science</p>
              </div>
              <div className="mt-2 w-full">
                <div className={`h-1 ${hoveredTab === 'Computer Science' ? 'bg-gradient-to-r from-maroon-default to-maroon-dark animate-drawLine' : 'invisible'}`}></div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div 
                className="flex items-center"
                onMouseEnter={() => handleMouseEnter('Business')} 
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={hoveredTab === 'Business' ? "/Business.svg" : "/Business.png"}
                  alt="Business"
                  width={35}
                  height={35}
                />
                <p className={`ml-5 font-semibold text-2xl text-maroon-default ${hoveredTab === 'Business' ? 'text-transparent bg-clip-text bg-gradient-to-r from-maroon-default to-maroon-dark' : ''}`}>Business</p>
              </div>
              <div className="mt-2 w-full">
                <div className={`h-1 ${hoveredTab === 'Business' ? 'bg-gradient-to-r from-maroon-default to-maroon-dark animate-drawLine' : 'invisible'}`}></div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div 
                className="flex items-center"
                onMouseEnter={() => handleMouseEnter('Arts')} 
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={hoveredTab === 'Arts' ? "/Arts.svg" : "/Arts.png"}
                  alt="Arts"
                  width={35}
                  height={35}
                />
                <p className={`ml-5 font-semibold text-2xl text-maroon-default ${hoveredTab === 'Arts' ? 'text-transparent bg-clip-text bg-gradient-to-r from-maroon-default to-maroon-dark' : ''}`}>Arts</p>
              </div>
              <div className="mt-2 w-full">
                <div className={`h-1 ${hoveredTab === 'Arts' ? 'bg-gradient-to-r from-maroon-default to-maroon-dark animate-drawLine' : 'invisible'}`}></div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div 
                className="flex items-center"
                onMouseEnter={() => handleMouseEnter('Engineering')} 
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={hoveredTab === 'Engineering' ? "/Engineering.svg" : "/Engineering.png"}
                  alt="Engineering"
                  width={35}
                  height={35}
                />
                <p className={`ml-5 font-semibold text-2xl text-maroon-default ${hoveredTab === 'Engineering' ? 'text-transparent bg-clip-text bg-gradient-to-r from-maroon-default to-maroon-dark' : ''}`}>Engineering</p>
              </div>
              <div className="mt-2 w-full">
                <div className={`h-1 ${hoveredTab === 'Engineering' ? 'bg-gradient-to-r from-maroon-default to-maroon-dark animate-drawLine' : 'invisible'}`}></div>
              </div>
            </div>
          </div>
          
          <div className="flex no-scrollbar overflow-x-auto -mx-2 pb-10 w-full">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <ProjectsList projects={projects} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
