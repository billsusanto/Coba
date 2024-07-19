'use client';
import React from 'react';
import Link from 'next/link';
import Typewriter from "typewriter-effect";
import { signIn } from 'next-auth/react';

const SignUp = () => {
  return (
    <div className='bg-white'>
      <nav className="bg-transparent fixed top-0 z-50 w-full">
        <div className="w-100%">
          <div className="flex justify-between h-16">
            <div className="flex items-center sm:px-5 sm:pr-20">
              <Link href="/" className="text-3xl text-gray-600 pl-10">
                Coba.
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex min-h-screen">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-5xl font-semibold text-black">Create Account</h2>
            </div>
            <button
              type="button"
              className="group relative w-full flex justify-center py-3 px-4 text-lg font-medium rounded-md text-white bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark"
              onClick={() => signIn('google', { callbackUrl: '/my-projects' })}
            >
              {/* <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="w-6 h-6 mr-2" /> */}
              Sign up with Google
            </button>
            <button
              type="button"
              className="group relative w-full flex justify-center py-3 px-4 text-lg font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
              onClick={() => signIn('github', { callbackUrl: '/my-projects' })}
            >
              {/* <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg> */}
              Sign up with GitHub
            </button>
            <div className="text-center text-lg">
              <span>Already have an account? </span>
              <Link href="/login" className="text-green-600">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center relative">
          <h1 className="text-6xl font-semibold text-black absolute left-1/4">
            <Typewriter
              options={{ loop: true, cursor: '' }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Create projects")
                  .pauseFor(200)
                  .deleteAll()
                  .typeString("Connect with others")
                  .pauseFor(200)
                  .deleteAll()
                  .typeString("Collaborate on ideas")
                  .pauseFor(200)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
