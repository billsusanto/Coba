"use client";
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { House, FolderGit2, UsersRound, Inbox } from "lucide-react";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const { data: session, status } = useSession();
  const handleLogout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await signOut({ callbackUrl: "/projects" });
  };

  return (
    <div className="w-16 sm:w-20 md:w-48 lg:w-64 h-screen bg-gray-sidebar flex flex-col flex-shrink-0 p-2 sm:p-3 md:p-4 lg:p-5">
      <Link href="/" className="text-5xl text-white p-10 flex justify-center">
        Coba.
      </Link>
      {/* <Link href="/home" className="text-2xl text-white p-7 m-2 rounded-xl hover:bg-gray-sidebar-hover flex items-center">
        <House className="mr-4" /> Home
      </Link> */}
      <Link
        href="/projects"
        className="text-2xl text-white p-7 m-2 rounded-xl hover:bg-gray-sidebar-hover flex items-center"
      >
        <FolderGit2 className="mr-4" /> Projects
      </Link>
      <Link
        href="/users"
        className="text-2xl text-white p-7 m-2 rounded-xl hover:bg-gray-sidebar-hover flex items-center"
      >
        <UsersRound className="mr-4" /> Users
      </Link>
      <Link
        href="/inbox"
        className="text-2xl text-white p-7 m-2 rounded-xl hover:bg-gray-sidebar-hover flex items-center"
      >
        <Inbox className="mr-4" /> Inbox
      </Link>

      <div className="mt-auto flex flex-col items-center p-5">
        {status === "authenticated" ? (
          <>
            <Link href="/my-profile">
              <div className="flex items-center text-white text-xl mb-10 w-full">
                <Image
                  src="/default-avatar.png"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <span>
                  {session.user?.name ? session.user.name : session.user?.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-gray-sidebar border border-white text-white rounded-xl px-4 py-3 sm:w-full md:w-full text-center text-xl flex items-center justify-center"
              >
                <Image
                  src="/Logout.png"
                  alt="Logout"
                  width={6}
                  height={6}
                  className="w-6 h-6 mr-4"
                />
                Logout
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-white border border-white rounded-xl px-4 py-2 sm:w-20 md:w-40 text-center text-xl mb-2"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-customBlue-light via-customBlue-default to-customBlue-dark text-white rounded-xl px-4 py-2 sm:w-20 md:w-40 text-center text-xl"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
