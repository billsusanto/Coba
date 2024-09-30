"use client";

import React, { useEffect, useState } from "react";
import { getAllUsers } from "../app/actions/users";

interface User {
  email: string;
  name: string;
  major: string;
  school: string;
  bio: string;
  technologies: string[];
  socials: string[];
  profilePicture: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await getAllUsers();
      if (response.ok) {
        setUsers(response.users);
      } else {
        console.error("Failed to fetch users.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex size-full">
      <main className="px-10 pt-12 flex-1">
        <h1 className="text-5xl font-bold mb-5">All Users</h1>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.email}
                className="bg-white p-5 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-bold">{user.email}</h2>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
