import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from "typewriter-effect";

import Navbar from '../components/Navbar';
import Stats from '../components/Stats';
import Steps from '../components/Steps';

const Landing = () => {
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const [fadeIn, setFadeIn] = useState(false);
    const useScroll = () => {
        const [scrollPosition, setScrollPosition] = useState(0);
      
        const handleScroll = () => {
          const position = window.pageYOffset;
          setScrollPosition(position);
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll, { passive: true });
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
        return scrollPosition;
      };

    const scrollPosition = useScroll();
    

    const handleMouseEnter = (tab: string) => {
      setHoveredTab(tab);
    };
  
    const handleMouseLeave = () => {
      setHoveredTab(null);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 7600);

        if (scrollPosition > 0) {
            setFadeIn(true);
            clearTimeout(timer);
        }

        return () => clearTimeout(timer);
    }, [scrollPosition]);

  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center">
            <div className='w-full h-two-third-screen flex items-center justify-center'>
                <header className="mt-20 text-center">
                <h1 className="text-7xl font-bold text-black mb-5">
                    <Typewriter
                        options={{ cursor: "", delay: 50, deleteSpeed: 40 }}
                        onInit={(typewriter) => {
                        typewriter
                            .start()
                            .typeString("C")
                            .pauseFor(600)
                            .typeString("reate")
                            .pauseFor(300)
                            .deleteChars(5)
                            .pauseFor(600)
                            .typeString("onnect")
                            .pauseFor(300)
                            .deleteChars(6)
                            .pauseFor(600)
                            .typeString("ollaborate")
                            .pauseFor(300)
                            .deleteChars(10)
                            .pauseFor(600)
                            .typeString("oba.")
                        }}
                    />
                </h1>
                <p className="mt-2 text-4xl text-black mb-5">Collaborate through projects</p>
                <Link href="/collaborate" className="mt-4 inline-block bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark text-white rounded-md px-6 py-3 text-lg w-64">
                    Collaborate now
                </Link>
                </header>
            </div>
            
            <div className={`mt-10 w-full min-h-half-screen bg-gradient-to-b from-white via-indigo-300 to-white flex flex-col items-center mb-20 transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex justify-around text-center w-1/2 mb-10">
                    <div className="flex flex-col items-center mr-20">
                        <div 
                        className="flex items-center"
                        onMouseEnter={() => handleMouseEnter('Create')} 
                        onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src={hoveredTab === 'Create' ? "/create.svg" : "/create.png"}
                                alt="Create"
                                width={35}
                                height={35}
                            />
                            <p className={`ml-5 font-semibold text-2xl text-black ${hoveredTab === 'Create' ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600' : ''}`}>Create</p>
                        </div>
                        <div className="mt-2 w-full">
                            <div className={`h-1 ${hoveredTab === 'Create' ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine' : 'invisible'}`}></div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mr-20">
                        <div 
                        className="flex items-center"
                        onMouseEnter={() => handleMouseEnter('Connect')} 
                        onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src={hoveredTab === 'Connect' ? "/connect.svg" : "/connect.png"}
                                alt="Connect"
                                width={35}
                                height={35}
                            />
                            <p className={`ml-5 font-semibold text-2xl text-black ${hoveredTab === 'Connect' ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600' : ''}`}>Connect</p>
                        </div>
                        <div className="mt-2 w-full">
                            <div className={`h-1 ${hoveredTab === 'Connect' ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine' : 'invisible'}`}></div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div 
                        className="flex items-center"
                        onMouseEnter={() => handleMouseEnter('Collaborate')} 
                        onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src={hoveredTab === 'Collaborate' ? "/collaborate.svg" : "/collaborate.png"}
                                alt="Collaborate"
                                width={35}
                                height={35}
                            />
                            <p className={`ml-5 font-semibold text-2xl text-black ${hoveredTab === 'Collaborate' ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600' : ''}`}>Collaborate</p>
                        </div>
                        <div className="mt-2 w-full">
                            <div className={`h-1 ${hoveredTab === 'Collaborate' ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine' : 'invisible'}`}></div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full min-h-half-screen mb-20">
                    <div className="w-3/5 h-half-screen bg-white rounded-xl shadow-2xl">
                        {/* Placeholder for content */}
                    </div>
                </div>
            </div>
        </div>
        <Stats />
            <div id="projects-section"></div>
        <Steps />
    </div>
  );
};

export default Landing;
