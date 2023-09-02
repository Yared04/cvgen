import { Inter } from "next/font/google";
import HomeIntro from "@/components/home/HomeIntro";
import Services from "@/components/home/Services";
import OurTeam from "@/components/home/OurTeam";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`w-full ${inter.className}`}>
      <HomeIntro />
      <Services />
      <OurTeam />
      <div className="w-full flex items-center py-8 bg-primary-extra-light">
        <Image
          className="w-full h-8"
          width={20}
          height={20}
          src={"/images/home/a2sv.svg"}
          alt=""
        />
      </div>
    </main>

  );
}
