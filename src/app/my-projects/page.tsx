// import { getAllProjects, getAllProjectsByEmail } from '../actions/projects';
// import { useSession } from 'next-auth/react';
// import ProjectsList from '@/src/components/ProjectList';
// import Navbar from '@/src/components/Navbar';

// export default async function MyProjects() {
//   const { data: session } = useSession();
//   const myProjects = await getAllProjectsByEmail(session.user.email);

//   return (
//     <div className='bg-beige-default w-full min-h-screen'>
//       <Navbar />
//       <div className="w-full mx-9" style={{ paddingLeft: '1.5rem', paddingTop: '1.5rem' }}>
//         <div className="pt-20 pb-10">
//           <h1 className="t-2 text-5xl text-maroon-default">My Projects</h1>
//         </div>

//         <div className="flex no-scrollbar overflow-x-auto -mx-2 pb-10 w-full">
//           <ProjectsList projects={myProjects.projects} />
//         </div>
//       </div>
//     </div>
//   );
// }

// pages/my-projects.js
import MyProjects from "@/src/components/MyProjects";

export default function App() {
  return <MyProjects />;
}
