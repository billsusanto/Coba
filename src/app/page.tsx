'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import CountUp from 'react-countup';
import Navbar from '../components/Navbar';

export default function LandingPage() {
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
        <div className="w-full h-two-third-screen flex items-center justify-center">
          <header className="mt-20 text-center">
            <h1 className="text-7xl font-bold text-black mb-5">
              <Typewriter
                options={{ cursor: '', delay: 50, deleteSpeed: 40 }}
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .typeString('C')
                    .pauseFor(600)
                    .typeString('reate')
                    .pauseFor(300)
                    .deleteChars(5)
                    .pauseFor(600)
                    .typeString('onnect')
                    .pauseFor(300)
                    .deleteChars(6)
                    .pauseFor(600)
                    .typeString('ollaborate')
                    .pauseFor(300)
                    .deleteChars(10)
                    .pauseFor(600)
                    .typeString('oba.');
                }}
              />
            </h1>
            <p className="mt-2 text-4xl text-black mb-5">
              Collaborate through projects
            </p>
            <Link
              href="/collaborate"
              className="mt-4 inline-block bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark text-white rounded-md px-6 py-3 text-lg w-64"
            >
              Collaborate now
            </Link>
          </header>
        </div>

        <div
          className={`mt-10 w-full min-h-half-screen bg-gradient-to-b from-white via-indigo-300 to-white flex flex-col items-center mb-20 transition-all duration-1000 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-around text-center w-1/2 mb-10">
            <div className="flex flex-col items-center mr-20">
              <div
                className="flex items-center"
                onMouseEnter={() => handleMouseEnter('Create')}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={hoveredTab === 'Create' ? '/create.svg' : '/create.png'}
                  alt="Create"
                  width={35}
                  height={35}
                />
                <p
                  className={`ml-5 font-semibold text-2xl text-black ${
                    hoveredTab === 'Create'
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600'
                      : ''
                  }`}
                >
                  Create
                </p>
              </div>
              <div className="mt-2 w-full">
                <div
                  className={`h-1 ${
                    hoveredTab === 'Create'
                      ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine'
                      : 'invisible'
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex flex-col items-center mr-20">
              <div
                className="flex items-center"
                onMouseEnter={() => handleMouseEnter('Connect')}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={
                    hoveredTab === 'Connect' ? '/connect.svg' : '/connect.png'
                  }
                  alt="Connect"
                  width={35}
                  height={35}
                />
                <p
                  className={`ml-5 font-semibold text-2xl text-black ${
                    hoveredTab === 'Connect'
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600'
                      : ''
                  }`}
                >
                  Connect
                </p>
              </div>
              <div className="mt-2 w-full">
                <div
                  className={`h-1 ${
                    hoveredTab === 'Connect'
                      ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine'
                      : 'invisible'
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div
                className="flex items-center"
                onMouseEnter={() => handleMouseEnter('Collaborate')}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={
                    hoveredTab === 'Collaborate'
                      ? '/collaborate.svg'
                      : '/collaborate.png'
                  }
                  alt="Collaborate"
                  width={35}
                  height={35}
                />
                <p
                  className={`ml-5 font-semibold text-2xl text-black ${
                    hoveredTab === 'Collaborate'
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-indigo-600'
                      : ''
                  }`}
                >
                  Collaborate
                </p>
              </div>
              <div className="mt-2 w-full">
                <div
                  className={`h-1 ${
                    hoveredTab === 'Collaborate'
                      ? 'bg-gradient-to-r from-customBlue-default to-indigo-600 animate-drawLine'
                      : 'invisible'
                  }`}
                ></div>
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
      <Steps />
    </div>
  );
}

function Stats() {
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
    <div
      ref={ref}
      className="relative flex justify-around py-8 bg-white rounded-lg overflow-hidden"
    >
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
            <Image
              src="/universities.png"
              alt="Universities"
              width={40}
              height={40}
            />
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
            <Image
              src="/projects.png"
              alt="Active Projects"
              width={40}
              height={40}
            />
          </div>
          <div className="text-2xl text-black">Active Projects</div>
        </div>
      </div>
    </div>
  );
}

function Steps() {
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
    <div className="py-20 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-20">
          <div
            ref={sectionRef}
            className={`w-2/5 ${isVisible ? 'fadeInLeft' : ''}`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-b from-customBlue-default to-customBlue-dark text-white text-2xl font-semibold rounded-full w-14 h-14 flex items-center justify-center mr-4">
                1
              </div>
              <h2 className="text-5xl font-semibold">Find Projects</h2>
            </div>
            <div className="pl-20">
              <p className="mb-4 text-2xl">
                Find fellow students, and collaborate on projects to broaden
                your knowledge and experience.
              </p>
              <Link
                href="/collaborate"
                className="inline-block bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 border-2 border-blue-500 rounded-md px-6 py-3 text-xl mt-8"
              >
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
          <div
            ref={sectionRightRef}
            className={`w-2/5 order-2 ${isVisibleRight ? 'fadeInRight' : ''}`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-b from-customBlue-default to-customBlue-dark text-white text-2xl font-semibold rounded-full w-14 h-14 flex items-center justify-center mr-4">
                2
              </div>
              <h2 className="text-5xl font-semibold">Join Teams</h2>
            </div>
            <div className="pl-20">
              <p className="mb-4 text-2xl">
                Find fellow students, and collaborate on projects to broaden
                your knowledge and experience.
              </p>
              <Link
                href="/share"
                className="inline-block bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 border-2 border-blue-500 rounded-md px-6 py-3 text-xl mt-8"
              >
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
          <div
            ref={sectionLeftRef}
            className={`w-2/5 ${isVisibleLeft ? 'fadeInLeft' : ''}`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-b from-customBlue-default to-customBlue-dark text-white text-2xl font-semibold rounded-full w-14 h-14 flex items-center justify-center mr-4">
                3
              </div>
              <h2 className="text-5xl font-semibold">Collaborate</h2>
            </div>
            <div className="pl-20">
              <p className="mb-4 text-2xl">
                Find fellow students, and collaborate on projects to broaden
                your knowledge and experience.
              </p>
              <Link
                href="/collaborate"
                className="inline-block bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 border-2 border-blue-500 rounded-md px-6 py-3 text-xl mt-8"
              >
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
}
