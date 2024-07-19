'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Steps = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleRight, setIsVisibleRight] = useState(false);
  const [isVisibleLeft, setIsVisibleLeft] = useState(false);
  const sectionRef = useRef(null);
  const sectionRightRef = useRef(null);
  const sectionLeftRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observerRight = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleRight(true);
          observerRight.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRightRef.current) {
      observerRight.observe(sectionRightRef.current);
    }

    return () => {
      if (sectionRightRef.current) {
        observerRight.unobserve(sectionRightRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observerLeft = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleLeft(true);
          observerLeft.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionLeftRef.current) {
      observerLeft.observe(sectionLeftRef.current);
    }

    return () => {
      if (sectionLeftRef.current) {
        observerLeft.unobserve(sectionLeftRef.current);
      }
    };
  }, []);

  return (
    <div className="py-20 relative bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-20">
          <div ref={sectionRef} className={`w-2/5 ${isVisible ? 'fadeInLeft' : ''}`}>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-b from-customBlue-default to-customBlue-dark text-white text-2xl font-semibold rounded-full w-14 h-14 flex items-center justify-center mr-4">
                1
              </div>
              <h2 className="text-5xl text-black font-semibold">Find Projects</h2>
            </div>
            <div className='pl-20'>
                <p className="mb-4 text-gray-600 text-2xl">
                Find fellow students, and collaborate on projects to broaden your knowledge and experience.
                </p>
                <Link href="/collaborate" className="inline-block bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-customBlue-dark border-2 border-customBlue-default rounded-md px-6 py-3 text-xl mt-8">
                    Collaborate now
                </Link>
            </div>
          </div>
          <div className="w-2/5 pl-13 pr-5">
            <div className="group h-80 bg-gray-200 rounded-lg">
              <Image
                src=""
                alt="Placeholder"
                className="w-full h-full object-cover rounded-lg group-hover:shadow-blueShadow shadow-2xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-20">
          <div ref={sectionRightRef} className={`w-2/5 order-2 ${isVisibleRight ? 'fadeInRight' : ''}`}>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-b from-customBlue-default to-customBlue-dark text-white text-2xl font-semibold rounded-full w-14 h-14 flex items-center justify-center mr-4">
                2
              </div>
              <h2 className="text-5xl text-black font-semibold">Join Teams</h2>
            </div>
            <div className='pl-20'>
                <p className="mb-4 text-gray-600 text-2xl">
                Find fellow students, and collaborate on projects to broaden your knowledge and experience.
                </p>
                <Link href="/share" className="inline-block bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-customBlue-dark border-2 border-customBlue-default rounded-md px-6 py-3 text-xl mt-8">
                    Share your Idea
                </Link>
            </div>
          </div>
          <div className="w-2/5 pl-10 pr-8 order-1">
            <div className="group h-80 bg-gray-200 rounded-lg">
              <Image
                src=""
                alt="Placeholder"
                className="w-full h-full object-cover rounded-lg group-hover:shadow-blueShadow shadow-2xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div ref={sectionLeftRef} className={`w-2/5 ${isVisibleLeft ? 'fadeInLeft' : ''}`}>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-b from-customBlue-default to-customBlue-dark text-white text-2xl font-semibold rounded-full w-14 h-14 flex items-center justify-center mr-4">
                3
              </div>
              <h2 className="text-5xl text-black font-semibold">Collaborate</h2>
            </div>
            <div className='pl-20'>
                <p className="mb-4 text-gray-600 text-2xl">
                Find fellow students, and collaborate on projects to broaden your knowledge and experience.
                </p>
                <Link href="/collaborate" className="inline-block bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-customBlue-dark border-2 border-customBlue-default rounded-md px-6 py-3 text-xl mt-8">
                    Collaborate now
                </Link>
            </div>
          </div>
          <div className="w-2/5 pl-13 pr-5">
            <div className="group h-80 bg-gray-200 rounded-lg">
              <Image
                src=""
                alt="Placeholder"
                className="w-full h-full object-cover rounded-lg group-hover:shadow-blueShadow shadow-2xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
