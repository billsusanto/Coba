import React from 'react';
import Image from 'next/image';

const StatsComponent = () => {
  return (
    <div className="relative flex justify-around py-8 bg-white rounded-lg overflow-hidden">
      <div style={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(to right, #60a5fa, #4f46e5)',
      }} />
      <div style={{
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(to right, #60a5fa, #4f46e5)',
      }} />
      <div className="flex justify-around py-8 w-full">
        <div className="text-center">
          <div className="flex items-start justify-start mb-2">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mr-2">23</div>
            <Image src="/universities.png" alt="Universities" width={30} height={30} />
          </div>
          <div className="text-lg text-black">Universities</div>
        </div>
        <div className="text-center">
          <div className="flex items-start justify-start mb-2">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mr-2">200+</div>
            <Image src="/students.png" alt="Students" width={30} height={30} />
          </div>
          <div className="text-lg text-black">Students</div>
        </div>
        <div className="text-center">
          <div className="flex items-start justify-start mb-2">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mr-2">430</div>
            <Image src="/projects.png" alt="Active Projects" width={30} height={30} />
          </div>
          <div className="text-lg text-black">Active Projects</div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
