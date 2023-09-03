import supabase from "@/utils/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [hasSession, setHasSession] = useState(false);
  useEffect(() => {
    const getCurUser = async () => {
      var session = await supabase.auth.getSession();
      setHasSession(
        session.data.session != null && session.data.session.access_token != ""
      );
    };

    getCurUser();
  }, []);
  return (
    <div className="flex w-full py-4 px-2 md:px-16 text-white bg-primary items-center justify-between">
      <Link href="/">
        <div className="flex items-center space-x-1">
          <Image
            className="w-6 h-6 object-contain"
            width={20}
            height={20}
            src={"/images/home/logo.svg"}
            alt="logo"
          />
          <span className="">ResumAI</span>
        </div>
      </Link>
      <div className="flex items-center space-x-6 text-l font-medium">
        <Link href={"/"}>Home</Link>
        <Link href={"/#services"}>Services</Link>
        <Link href={"/#team"}>Team</Link>
      </div>
      <div></div>

      {!hasSession ? <SignInComponent /> : <ProfileComponent />}
    </div>
  );
};

export default Header;

const SignInComponent = ({}) => {
  return (
    <div className="flex text-sm items-center space-x-2">
      <Link href={"/login"}>
        <div className="flex p-2">
          <p>Sign In</p>
        </div>
      </Link>
      <Link href={"/signup"}>
        <div className="flex p-2 items-center bg-[#979797] bg-opacity-20 rounded-md">
          <p>Sign Up</p>
        </div>
      </Link>
    </div>
  );
};

const ProfileComponent = () => {
  const router = useRouter();
  async function logOutHandler() {
    var response = await supabase.auth.signOut();
    router.push("/login");
  }
  return (
    <div className="flex items-center justify-center">
      <Link href={"/profile"}>
        <div className="text-white cursor-pointer">
          <FontAwesomeIcon
            icon={faUser}
            className="text-white w-6 h-6 text-3xl"
          />
          <span className="text-white ml-2">Profile</span>
        </div>
      </Link>

      <div className="text-white cursor-pointer" onClick={logOutHandler}>
        <span className="text-[#ff0000] ml-4">Logout</span>
      </div>
    </div>
  );
};
