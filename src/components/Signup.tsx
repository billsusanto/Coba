'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

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
              <h2 className="mt-6 text-center text-5xl font-semibold text-gray-900">
                Sign Up
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md -space-y-px">
                <div>
                  <label
                    htmlFor="first-name"
                    className=""
                    style={{ fontSize: '1.7rem' }}
                  >
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-customBlue-default focus:border-customBlue-default focus:z-10 mt-2 mb-5"
                    style={{ fontSize: '1.2rem' }}
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className=""
                    style={{ fontSize: '1.7rem' }}
                  >
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-customBlue-default focus:border-customBlue-default focus:z-10 mt-2 mb-5"
                    style={{ fontSize: '1.2rem' }}
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email-address"
                    className=""
                    style={{ fontSize: '1.7rem' }}
                  >
                    Email
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-customBlue-default focus:border-customBlue-default focus:z-10 mt-2 mb-5"
                    style={{ fontSize: '1.2rem' }}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className=""
                    style={{ fontSize: '1.7rem' }}
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-customBlue-default focus:border-customBlue-default focus:z-10 mt-2"
                    style={{ fontSize: '1.2rem' }}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="min-h-6">
                    {error &&
                      formData.password !== formData.confirmPassword && (
                        <p className="text-red-500 text-sm">{error}</p>
                      )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirm-password"
                    className=""
                    style={{ fontSize: '1.7rem' }}
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-customBlue-default focus:border-customBlue-default focus:z-10 mt-2"
                    style={{ fontSize: '1.2rem' }}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <div className="min-h-6">
                    {error &&
                      formData.password !== formData.confirmPassword && (
                        <p className="text-red-500 text-sm">{error}</p>
                      )}
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 text-lg font-medium rounded-md text-white bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark"
                >
                  Sign Up
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
                  .typeString('Create projects')
                  .pauseFor(200)
                  .deleteAll()
                  .typeString('Connect with others')
                  .pauseFor(200)
                  .deleteAll()
                  .typeString('Collaborate on ideas')
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
