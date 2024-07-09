import React from 'react';
import Link from 'next/link';
import Typewriter from "typewriter-effect";

const Login = () => {
  return (
    <div>
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
            <h2 className="mt-6 text-center text-5xl font-semibold text-gray-900">Log in</h2>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md -space-y-px">
              <div>
                <label htmlFor="email-address" className="" style={{ fontSize: '1.7rem' }}>Email</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-customBlue-default focus:border-customBlue-default focus:z-10 mt-2 mb-5"
                  style={{ fontSize: '1.2rem' }}
                  placeholder="Enter your email"
                />
              </div>
              <div>
              <label htmlFor="password" className="" style={{ fontSize: '1.7rem' }}>Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-customBlue-default focus:border-customBlue-default focus:z-10 mt-2"
                  style={{ fontSize: '1.2rem' }}
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href="#" className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-customBlue-default to-customBlue-dark text-lg">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 text-lg font-medium rounded-md text-white bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-r from-white to-blue-100 flex items-center relative">
        <h1 className="text-6xl font-semibold text-black absolute left-1/4">
          <Typewriter
            options={{ loop: true }}
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

export default Login;