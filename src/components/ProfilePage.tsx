'use client';

import React, { useState, useEffect } from 'react';
import { editProfile, getUserData } from '../app/actions/profile';
import { useSession } from 'next-auth/react';

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState({
    email: '',
    name: '',
    major: '',
    school: '',
    bio: '',
    technologies: '',
    socials: '',
  });
  const [initialUser, setInitialUser] = useState(null);

  useEffect(() => {
    if (status === 'authenticated' && session.user) {
      const fetchUser = async () => {
        const userData = await getUserData(session.user.email);
        setUser(userData);
        setInitialUser(userData);
      };
      fetchUser();
    }
  }, [status, session]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const changes = {};

    Object.keys(user).forEach((key) => {
      if (user[key] !== initialUser[key]) {
        if (key === 'technologies' || key === 'socials') {
          changes[key] = user[key].split(',').map((item) => item.trim());
        } else {
          changes[key] = user[key];
        }
      }
    });

    if (Object.keys(changes).length === 0) {
      alert('No changes detected');
      return;
    }

    try {
      await editProfile({ email: user.email, ...changes });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile');
    }
  };

  if (status !== 'authenticated') {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex bg-gray-300 min-h-screen w-profilePage pt-5">
      <div className="flex-1">
        <div className="bg-white p-10 rounded-lg shadow-md border border-black w-full">
          <div className="flex items-center">
            <img
              src="default-avatar.png"
              alt="Profile Image"
              className="w-36 h-36 rounded-full"
            />
            <div className="ml-6">
              <input
                type="text"
                name="name"
                placeholder={session.user.name}
                value={user.name}
                onChange={handleChange}
                className="text-3xl font-bold text-black w-full mt-2 p-2 rounded-lg"
              />
              <input
                type="text"
                name="school"
                placeholder='Enter your school'
                value={user.school}
                onChange={handleChange}
                className="text-lg font-semibold text-black w-full p-2 rounded-lg"
              />
              <input
                type="text"
                name="major"
                placeholder='Enter your major'
                value={user.major}
                onChange={handleChange}
                className="text-lg text-gray-500 w-full p-2 rounded-lg"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-10 border border-gray-300 rounded-xl h-profilePage p-6 relative">
            <div className="pt-4">
              <label className="block text-3xl font-bold mb-2">Bio:</label>
              <textarea
                name="bio"
                value={user.bio}
                placeholder='Tell others more about yourself!'
                onChange={handleChange}
                className="w-full p-2 border rounded-lg text-xl"
              />
            </div>
            <div className="pt-4">
              <label className="block text-3xl font-bold mb-2">Technologies:</label>
              <input
                type="text"
                name="technologies"
                placeholder='i.e. Next.js'
                value={user.technologies}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg text-xl"
              />
            </div>
            <div className="pt-4">
              <label className="block text-3xl font-bold mb-2">Socials:</label>
              <input
                type="text"
                name="socials"
                placeholder='Share your social links!'
                value={user.socials}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg text-xl"
              />
            </div>
            <div className="absolute bottom-6 right-6">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
