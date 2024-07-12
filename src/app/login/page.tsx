'use client';

import Login from '@/src/components/Login';
import { signIn } from 'next-auth/react';

export default function App() {
  return (
    <main>
      {/* <Login /> */}
      <button onClick={() => signIn('github', { callbackUrl: '/projects' })}>
        👩‍💻 Login with GitHub
      </button>
    </main>
  );
}
