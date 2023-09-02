import Image from "next/image";
import { Inter } from "next/font/google";
import HomeIntro from "@/components/home/HomeIntro";
import Services from "@/components/home/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center justify-between ${inter.className}`}
    >
      <HomeIntro />
      <Services />
    </main>
  );
}
