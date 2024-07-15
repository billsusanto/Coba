import Navbar from '@/src/components/Navbar';
import NewProjectForm from '@/src/components/NewProjectForm';

export default async function CreateProjects() {
  return (
    <div className='bg-beige-default w-full min-h-screen'>
      <Navbar />
      <div className="container mx-auto" style={{ paddingTop: '1.5rem' }}>
        <div className="pt-20 pb-10 text-center">
          <h1 className="t-2 text-5xl text-maroon-default">Create Project</h1>
        </div>
        <div className='w-full mx-auto'>
            <NewProjectForm />
        </div>
      </div>
    </div>
  );
}
