'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

const Home = () => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

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
          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-5 relative">
              <div className="flex">
                <Image src="" alt="Project 1" width={100} height={100} className="rounded-md" />
                <div className="ml-5">
                  <h3 className="text-2xl font-semibold">Search Engine Project</h3>
                  <p className="text-gray-600">Irvine, California</p>
                  <p className="mt-2"><span className="font-semibold">Creator:</span> Bad Ape</p>
                  <div className="flex items-center mt-2">
                    <Image src="" alt="Bad Ape" width={40} height={40} className="rounded-full" />
                    <div className="ml-3">
                      <p className="font-semibold">Bad Ape</p>
                      <p className="text-gray-500 text-sm">Computer Science @ UCI</p>
                    </div>
                  </div>
                  <p className="mt-2"><span className="font-semibold">Positions:</span> Front-End Developer, Head of Marketing, +2 more</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center">
                  <Image src="" alt="Members" width={60} height={20} />
                  <p className="ml-2 text-gray-600">+5</p>
                </div>
                <Link href="#" className="bg-gradient-to-r from-blue-400 to-maroon-dark text-white rounded-md px-4 py-2">Collaborate</Link>
              </div>
              <div className="absolute top-5 right-5">
                <button className="focus:outline-none">
                  <Image src="" alt="Bookmark" width={24} height={24} />
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-5 relative">
              <div className="flex">
                <Image src="" alt="Project 2" width={100} height={100} className="rounded-md" />
                <div className="ml-5">
                  <h3 className="text-2xl font-semibold">Virtual Reality</h3>
                  <p className="text-gray-600">Remote</p>
                  <p className="mt-2"><span className="font-semibold">Creator:</span> Ceasar</p>
                  <div className="flex items-center mt-2">
                    <Image src="" alt="Ceasar" width={40} height={40} className="rounded-full" />
                    <div className="ml-3">
                      <p className="font-semibold">Ceasar</p>
                      <p className="text-gray-500 text-sm">Computer Science @ UCI</p>
                    </div>
                  </div>
                  <p className="mt-2"><span className="font-semibold">Positions:</span> Front-End Developer</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center">
                  <Image src="" alt="Members" width={60} height={20} />
                  <p className="ml-2 text-gray-600">+1</p>
                </div>
                <Link href="#" className="bg-gradient-to-r from-blue-400 to-maroon-dark text-white rounded-md px-4 py-2">Collaborate</Link>
              </div>
              <div className="absolute top-5 right-5">
                <button className="focus:outline-none">
                  <Image src="" alt="Bookmark" width={24} height={24} />
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
