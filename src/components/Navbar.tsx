'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const handleScrollToProjects = (event) => {
    event.preventDefault();
    const element = document.getElementById('projects-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    await signOut({ callbackUrl: '/' });
  };

  return (
    <nav className={`bg-transparent fixed top-0 z-50 w-full transition-transform duration-300 ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="w-100%">
        <div className="flex justify-between h-16">
          <div className="flex items-center sm:px-5 sm:pr-20">
            <Link href="/" className="text-3xl text-gray-600 pl-10">
              Coba.
            </Link>
          </div>
          <div className="flex items-center justify-end flex-1 sm:space-x-10 md:space-x-20 sm:pr-10 md:pr-20 xl:pr-40">
            <Link href="/home" className="text-gray-600 hover:text-black text-xl">
              Home
            </Link>
            {/* <a href="#projects-section" onClick={handleScrollToProjects} className="text-gray-600 hover:text-black text-xl">
              Projects
            </a> */}
            <Link href="/projects" className="text-gray-600 hover:text-black text-xl">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black text-xl">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-10 pr-5">
            {status === 'authenticated' ? (
              <>
                <span className="text-gray-700 text-xl">
                  Hello, {session.user?.name ? session.user.name.split(' ')[0] : session.user?.email?.split('@')[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark text-white rounded-xl px-4 py-2 sm:w-20 md:w-40 text-center text-xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-600 border-2 border-black rounded-xl px-4 py-2 sm:w-20 md:w-40 text-center text-xl">
                  Login
                </Link>
                <Link href="/signup" className="bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark text-beige-default rounded-xl px-4 py-2 sm:w-20 md:w-40 text-center text-xl">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
