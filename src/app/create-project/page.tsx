import NewProjectForm from "@/src/components/NewProjectForm";

export default async function CreateProjects() {
  return (
    <div className="flex w-full h-screen">
      <div className="container mx-auto" style={{ paddingTop: "0.5rem" }}>
        <div className=""></div>
        <div className="w-full">
          <NewProjectForm />
        </div>
      </div>
    </div>
  );
}
