import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-200 flex flex-col items-center font-outfit">
      <header className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-black">Coba.</h1>
        <p className="mt-2 text-3xl text-black">Collaborate through projects</p>
        <Link href="/collaborate" className="mt-4 inline-block bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark text-white rounded-md px-6 py-3 text-lg w-64">
          Collaborate now
        </Link>
      </header>
      <section className="mt-20 w-full max-w-4xl">
        <div className="flex justify-around text-center text-gray-700">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
                <Image src="/create.svg" alt="Create" width={35} height={35} />
                <p className="ml-5 font-semibold text-2xl text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-customBlue-default hover:to-indigo-600">Create</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
                <Image src="/connect.png" alt="Network" width={35} height={35} />
                <p className="ml-5 font-semibold text-2xl text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-customBlue-default hover:to-indigo-600">Connect</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
                <Image src="/collaborate.png" alt="Collaborate" width={35} height={35} />
                <p className="ml-5 font-semibold text-2xl text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-customBlue-default hover:to-indigo-600">Collaborate</p>
            </div>
          </div>
        </div>
        <div className="mt-10 p-6 bg-white rounded-xl shadow-lg">
          {/* Placeholder for content */}
        </div>
      </section>
    </div>
  );
};

export default Landing;
