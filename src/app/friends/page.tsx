"use client";

import React, { useEffect, useState } from "react";
import { getFriends } from "../actions/friends";
import { useSession } from "next-auth/react";

interface Friend {
  id: string;
  email: string;
}

export default function FriendsList() {
  const { data: session } = useSession();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user?.email) {
      loadFriends(session.user.email);
    }
  }, [session]);

  const loadFriends = async (userId: string) => {
    try {
      const response = await getFriends(userId);
      if (response.ok) {
        setFriends(response.friends);
      } else {
        console.error("Failed to fetch friends.");
      }
    } catch (error) {
      console.error("Error fetching friends:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex size-full justify-center items-center">
      {process.env.NODE_ENV === "development" ? (
        <main className="p-10 flex-1 ml-64">
          <h1 className="text-3xl font-bold mb-5">Your Friends</h1>
          {friends.length === 0 ? (
            <p>You have no friends added yet.</p>
          ) : (
            <ul className="space-y-4">
              {friends.map((friend) => (
                <li
                  key={friend.id}
                  className="bg-white p-5 rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-bold">{friend.email}</h2>
                </li>
              ))}
            </ul>
          )}
        </main>
      ) : (
        <p>This page is still under construction 🚧</p>
      )}
    </div>
  );
}
