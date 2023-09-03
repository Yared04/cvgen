import { Inter } from "next/font/google";
import HomeIntro from "@/components/home/HomeIntro";
import Services from "@/components/home/Services";
import OurTeam from "@/components/home/OurTeam";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Login from "./login";
import supabase from "@/utils/supaBaseClient";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Login></Login>;
  } else {
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
}
