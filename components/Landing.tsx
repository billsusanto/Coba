import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from './Navbar';
import StatsComponent from './StatsComponent';
import Steps from './Steps';

const Landing = () => {
  const [isHoveredCreate, setIsHoveredCreate] = useState(false);
  const [isHoveredConnect, setIsHoveredConnect] = useState(false);
  const [isHoveredCollaborate, setIsHoveredCollaborate] = useState(false);

  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center">
        <div className='mt-10 mb-10'>
            <header className="mt-10 text-center">
            <h1 className="text-7xl font-bold text-black mb-5">Coba.</h1>
            <p className="mt-2 text-4xl text-black mb-5">Collaborate through projects</p>
            <Link href="/collaborate" className="mt-4 inline-block bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark text-white rounded-md px-6 py-3 text-lg w-64">
                Collaborate now
            </Link>
            </header>
        </div>
        
        <div className="mt-10 w-full min-h-half-screen bg-gradient-to-b from-white via-indigo-300 to-white flex flex-col items-center mb-20">
            <div className="flex justify-around text-center w-1/2 mb-10">
            <div className="flex flex-col items-center mr-20">
                <div 
                className="flex items-center"
                onMouseEnter={() => setIsHoveredCreate(true)}
                onMouseLeave={() => setIsHoveredCreate(false)}
                >
                <Image
                    src={isHoveredCreate ? "/create.svg" : "/create.png"}
                    alt="Create"
                    width={35}
                    height={35}
                />
                <p className={`ml-5 font-semibold text-2xl text-black ${isHoveredCreate ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600' : ''}`}>Create</p>
                </div>
                <div className="mt-2 w-full">
                <div className={`h-1 ${isHoveredCreate ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine' : 'invisible'}`}></div>
                </div>
            </div>

            <div className="flex flex-col items-center mr-20">
                <div 
                className="flex items-center"
                onMouseEnter={() => setIsHoveredConnect(true)}
                onMouseLeave={() => setIsHoveredConnect(false)}
                >
                <Image
                    src={isHoveredConnect ? "/connect.svg" : "/connect.png"}
                    alt="Connect"
                    width={35}
                    height={35}
                />
                <p className={`ml-5 font-semibold text-2xl text-black ${isHoveredConnect ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600' : ''}`}>Connect</p>
                </div>
                <div className="mt-2 w-full">
                <div className={`h-1 ${isHoveredConnect ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine' : 'invisible'}`}></div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div 
                className="flex items-center"
                onMouseEnter={() => setIsHoveredCollaborate(true)}
                onMouseLeave={() => setIsHoveredCollaborate(false)}
                >
                <Image
                    src={isHoveredCollaborate ? "/collaborate.svg" : "/collaborate.png"}
                    alt="Collaborate"
                    width={35}
                    height={35}
                />
                <p className={`ml-5 font-semibold text-2xl text-black ${isHoveredCollaborate ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600' : ''}`}>Collaborate</p>
                </div>
                <div className="mt-2 w-full">
                    <div className={`h-1 ${isHoveredCollaborate ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine' : 'invisible'}`}></div>
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
        <StatsComponent />
        <Steps />
    </div>
  );
};

export default Landing;