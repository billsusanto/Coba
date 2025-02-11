"use client";
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { House, FolderGit2, UsersRound, Inbox, X } from "lucide-react";
import Image from "next/image";

const Sidebar: React.FC<{ isVisible: boolean; toggleSidebar: () => void }> = ({
  isVisible,
  toggleSidebar,
}) => {
  const { data: session, status } = useSession();

  const handleLogout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await signOut({ callbackUrl: "/projects" });
  };

  return (
    <div
      className={`fixed lg:relative z-50 transform ${
        isVisible ? "translate-x-0 w-screen sm:w-[20vw] md:w-[20vw] lg:w-[20vw] 2xl:w-[20vw]" : "-translate-x-full"
      } transition-transform duration-300 lg:translate-x-0 lg:static h-[100vh] bg-gray-sidebar flex flex-col flex-shrink-0 p-[1vw] sm:p-[1vw] md:p-[1vw] lg:p-[1.5vw]`}
    >
      {/* Close Button for small devices */}
      <div className="lg:hidden flex justify-end p-4">
        <X className="text-white cursor-pointer" size={30} onClick={toggleSidebar} />
      </div>
      <Link href="/" className="text-5xl text-white p-10 flex justify-center">
        Coba.
      </Link>
      <Link
        href="/projects"
        className="text-2xl text-white p-7 m-2 rounded-xl hover:bg-gray-sidebar-hover flex items-center"
      >
        <FolderGit2 className="mr-4" /> Projects
      </Link>
      {/* <Link
        href="/users"
        className="text-2xl text-white p-7 m-2 rounded-xl hover:bg-gray-sidebar-hover flex items-center"
      >
        <UsersRound className="mr-4" /> Users
      </Link> */}
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
              <div className="flex justify-center items-center text-white text-xl mb-5 w-full">
                {/* <Image
                  src="/default-avatar.png"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="w-12 h-12 rounded-full mr-3"
                /> */}
                <span>{session.user?.name || session.user?.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-gray-sidebar border border-white text-white rounded-xl px-4 py-2 sm:w-full md:w-full text-center text-lg flex items-center justify-center"
              >
                <Image
                  src="/Logout.png"
                  alt="Logout"
                  width={6}
                  height={6}
                  className="w-4 h-4 mr-2"
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
