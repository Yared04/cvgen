import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex w-full py-2 px-2 md:px-16 ">
      <div className="flex items-center">
        <Image
          className="w-6 h-6 object-contain"
          width={20}
          height={20}
          src={"/images/home/logo.svg"}
          alt="logo"
        />
        <span>ResumAI</span>
      </div>
    </div>
  );
};

export default Header;
