'use client';

import { signOut } from 'next-auth/react';

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
    </>
  );
}
