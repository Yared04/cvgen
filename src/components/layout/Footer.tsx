import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="relative w-full flex p-8 md:px-32 justify-between bg-primary text-light-text ">
      <div className="absolute top-[5%] left-1">
        <Image
          className="object-contain w-full h-full"
          width={10}
          height={10}
          src={"/images/home/shape1.svg"}
          alt=""
        />
      </div>
      <div className="flex space-x-3">
        <Link href={"/"}>
          <span>Privacy policy</span>
        </Link>
        <Link href={"/"}>
          <span>Legal Notice</span>
        </Link>
        <Link href={"/"}>
          <span>Terms of service</span>
        </Link>
      </div>
      <div>
        <span>© Copyright 2023 - ResumAI</span>
      </div>
    </div>
  );
};

export default Footer;
