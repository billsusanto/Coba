import Landing from "@/src/components/Landing";
import { redirect } from "next/navigation";

export default function App() {
  redirect("/projects");
  // return (
  //   <main>
  //     <Landing />
  //   </main>
  // );
}
