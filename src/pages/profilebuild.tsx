import { BuildProfile } from "@/components/Build-profile/BuildProfile";
import Education from "@/components/Build-profile/Education/Education";
import { UserCard } from "@/components/UserCard";
import supabase from "@/utils/supaBaseClient";
import React, { useEffect, useState } from "react";
interface UserProps {
  profile_picture: string;
  phone_number: string;
  full_name: string;
  email: string;
  phone: string;
  address: string;
}

const profilebuild = () => {
  const [user, setUser] = useState({} as UserProps);

  useEffect(() => {
    const getCurUser = async () => {
      const { data, error } = await supabase
        .from("user_profile")
        .select("*")
        .eq("user_id", (await supabase.auth.getUser()).data.user.id);
      if (error) return console.log(error);
      setUser(data[0]);
    };

    getCurUser();
  }, []);
  return (
    <div className="px-6 min-h-[100vh]">
      <p className="w-fit m-auto text-3xl font-bold p-5 ">Build Your Profile</p>
      <div className="flex w-full gap-12 ">
        <div className="w-[25%]">
          <UserCard
            name={user.full_name}
            email={user.email}
            phone={user.phone_number}
            address={user.address}
            photo={user.profile_picture}
          />
        </div>
        <BuildProfile />
      </div>
    </div>
  );
};

export default profilebuild;
