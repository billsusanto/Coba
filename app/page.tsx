import Image from "next/image";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import StatsComponent from "@/components/StatsComponent";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <StatsComponent />
    </main>
  );
}
