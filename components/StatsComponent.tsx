import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

const StatsComponent = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={ref} className="relative flex justify-around py-8 bg-white rounded-lg overflow-hidden">
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '2px',
          background: 'linear-gradient(to right, #60a5fa, #4f46e5)',
        }}
      />
      <div
        style={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          background: 'linear-gradient(to right, #60a5fa, #4f46e5)',
        }}
      />
      <div className="flex justify-around py-8 w-full">
        <div className="text-center">
          <div className="flex items-start justify-start mb-2">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 ml-4 mr-2">
              {inView && <CountUp start={0} end={23} duration={3} />}
            </div>
            <Image src="/universities.png" alt="Universities" width={40} height={40} />
          </div>
          <div className="text-2xl text-black">Universities</div>
        </div>
        <div className="text-center">
          <div className="flex items-start justify-start mb-2">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mr-2">
              {inView && <CountUp start={0} end={200} duration={3} />}+
            </div>
            <Image src="/students.png" alt="Students" width={40} height={40} />
          </div>
          <div className="text-2xl text-black">Students</div>
        </div>
        <div className="text-center">
          <div className="flex items-start justify-start mb-2">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 ml-2 mr-4">
              {inView && <CountUp start={0} end={430} duration={3} />}
            </div>
            <Image src="/projects.png" alt="Active Projects" width={40} height={40} />
          </div>
          <div className="text-2xl text-black">Active Projects</div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;