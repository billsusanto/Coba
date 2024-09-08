import Sidebar from "@/src/components/Sidebar";
import NewProjectForm from "@/src/components/NewProjectForm";

export default async function CreateProjects() {
  return (
    <div className="bg-white w-full min-h-screen">
      <Sidebar />
      <div className="container mx-auto" style={{ paddingTop: "1.5rem" }}>
        <div className="pt-20 pb-10 text-center"></div>
        <div className="w-full mx-auto bg-red-500">
          <NewProjectForm />
        </div>
      </div>
    </div>
  );
}
