import Profile from "@/src/components/Profile";
import { getAllProjectsByEmail } from "../actions/projects";
import { getServerAuthSession } from "@/src/server/auth";
import { redirect } from "next/navigation";

export default async function ProjectsPage({
  params,
}: {
  params: { id?: string };
}) {
  const session = await getServerAuthSession();
  if (!session?.user.email) {
    redirect("/login");
  }
  const res = await getAllProjectsByEmail(session.user.email);

  return (
    <main className="w-screen min-h-screen">
      <Profile projects={res.projects} />
    </main>
  );
}
