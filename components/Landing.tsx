import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from './Navbar';
import StatsComponent from './StatsComponent';
import Steps from './Steps';

const Landing = () => {
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);

    const handleMouseEnter = (tab: string) => {
      setHoveredTab(tab);
    };
  
    const handleMouseLeave = () => {
      setHoveredTab(null);
    };

  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center">
            <div className='mt-20 mb-10'>
                <header className="mt-20 text-center">
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
        <StatsComponent />
        <Steps />
    </div>
  );
};

export default Landing;

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// import Navbar from './Navbar';
// import StatsComponent from './StatsComponent';
// import Steps from './Steps';
// import landingImage from '../public/landing.webp';

// const Landing = () => {
//   const [hoveredTab, setHoveredTab] = useState<string | null>(null);

//   const handleMouseEnter = (tab: string) => {
//     setHoveredTab(tab);
//   };

//   const handleMouseLeave = () => {
//     setHoveredTab(null);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div 
//         className="flex flex-col items-center h-screen bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${landingImage.src})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
//         <div className='mt-20 mb-10 z-20'>
//           <header className="mt-20 text-center">
//             <h1 className="text-7xl font-bold text-white mb-5">Coba.</h1>
//             <p className="mt-2 text-4xl text-white mb-5">Collaborate through projects</p>
//             <Link href="/collaborate" className="mt-4 inline-block bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark text-white rounded-md px-6 py-3 text-lg w-64">
//               Collaborate now
//             </Link>
//           </header>
//         </div>
//       <div className="mt-10 w-full flex flex-col items-center mb-5 z-20">
//         <div className="flex justify-around text-center w-1/2 mb-10">
//           <div className="flex flex-col items-center mr-20">
//             <div 
//               className="flex items-center"
//               onMouseEnter={() => handleMouseEnter('Create')} 
//               onMouseLeave={handleMouseLeave}
//             >
//               <Image
//                 src={hoveredTab === 'Create' ? "/create.svg" : "/create.png"}
//                 alt="Create"
//                 width={35}
//                 height={35}
//               />
//               <p className={`ml-5 font-semibold text-2xl text-black ${hoveredTab === 'Create' ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600' : ''}`}>Create</p>
//             </div>
//             <div className="mt-2 w-full">
//               <div className={`h-1 ${hoveredTab === 'Create' ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine' : 'invisible'}`}></div>
//             </div>
//           </div>

//           <div className="flex flex-col items-center mr-20">
//             <div 
//               className="flex items-center"
//               onMouseEnter={() => handleMouseEnter('Connect')} 
//               onMouseLeave={handleMouseLeave}
//             >
//               <Image
//                 src={hoveredTab === 'Connect' ? "/connect.svg" : "/connect.png"}
//                 alt="Connect"
//                 width={35}
//                 height={35}
//               />
//               <p className={`ml-5 font-semibold text-2xl text-black ${hoveredTab === 'Connect' ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600' : ''}`}>Connect</p>
//             </div>
//             <div className="mt-2 w-full">
//               <div className={`h-1 ${hoveredTab === 'Connect' ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine' : 'invisible'}`}></div>
//             </div>
//           </div>

//           <div className="flex flex-col items-center">
//             <div 
//               className="flex items-center"
//               onMouseEnter={() => handleMouseEnter('Collaborate')} 
//               onMouseLeave={handleMouseLeave}
//             >
//               <Image
//                 src={hoveredTab === 'Collaborate' ? "/collaborate.svg" : "/collaborate.png"}
//                 alt="Collaborate"
//                 width={35}
//                 height={35}
//               />
//               <p className={`ml-5 font-semibold text-2xl text-black ${hoveredTab === 'Collaborate' ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600' : ''}`}>Collaborate</p>
//             </div>
//             <div className="mt-2 w-full">
//               <div className={`h-1 ${hoveredTab === 'Collaborate' ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine' : 'invisible'}`}></div>
//             </div>
//           </div>
//         </div>
//         </div>

//         <div className="flex justify-center items-center w-full min-h-half-screen mb-20 z-20">
//           <div className="w-3/5 h-half-screen bg-white rounded-xl shadow-2xl">
//             {/* Placeholder for content */}
//           </div>
//         </div>
//       </div>
//       <StatsComponent />
//       <Steps />
//     </div>
//   );
// };

// export default Landing;