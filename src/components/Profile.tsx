"use client";

import React, { useState, useEffect } from "react";
import ProjectsList from "@/src/components/ProjectList";
import ProfilePage from "@/src/components/ProfilePage";
import Link from "next/link";
import { Project } from "../app/types/project";
import { SearchBar } from "./Searchbar";

export default function Profile({ projects }: { projects: Project[] }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (projects) {
      setLoading(false);
    } else {
      setError("Failed to load projects.");
    }
  }, [projects]);

  return (
    <div className="flex h-full w-full bg-white pr-2vw">
      <div className="flex-grow overflow-auto flex flex-col pt-5">
        <div className="flex justify-between items-center pb-3">
          {/* <SearchBar /> */}
          <div className="flex items-center w-[50vw] py-10"></div>
          <Link href="/create-project">
            <div className="bg-gray-800 text-white text-xl h-14 w-56 px-4 py-2 rounded-lg flex items-center justify-center ml-4">
              Create Project +
            </div>
          </Link>
        </div>

        <section className="flex flex-col w-full h-projectPage">
          <div>
            <ProfilePage />
          </div>

          <div className="flex justify-center w-full h-full px-10"> 
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <ProjectsList
                projects={projects}
                showCreateProjectCard={true}
                enableDelete={true}
                onProjectClick={() => {}}
                scrollDirection="horizontal"
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
