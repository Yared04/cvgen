import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
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
      <div className="flex items-center space-x-6 text-sm font-small">
        <Link href={"/"}>Home</Link>
        <Link href={"/features"}>Features</Link>
        <Link href={"/"}>Team</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div></div>

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
    </div>
  );
};

export default Header;
