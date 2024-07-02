import Image from "next/image";
import Navbar from "@/components/Navbar";
import StatsComponent from "@/components/StatsComponent";

export default function Home() {
  return (
    <main>
      <Navbar />
      <StatsComponent />
    </main>
  );
}
