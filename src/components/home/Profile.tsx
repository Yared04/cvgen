import Image from "next/image";
import React from "react";
import { TfiTwitterAlt } from "react-icons/tfi";
import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";

interface ProfileProps {
  name: string;
  job: string;
  image: string;
}
const Profile: React.FC<ProfileProps> = ({ name, job, image }) => {
  return (
    <div className="flex flex-col max-w-32 space-y-4 p-4">
      <div className="relative w-32 h-32">
        <div className="absolute top-0 left-0 z-0">
          <Image
            className="object-contain w-[50%] h-[50%] text-primary"
            width={10}
            height={10}
            src={"/images/home/black-dots.svg"}
            alt=""
          />
        </div>
        <div className="relative z-10 w-full h-full overflow-clip rounded-full">
          <Image
            className="object-cover w-full h-full"
            width={10}
            height={10}
            src={image}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col space-y-1 text-center items-center">
        <p>{name}</p>
        <p className="text-xs text-light-text">{job}</p>
      </div>

      <div className="flex w-full px-4 py-1 text-light-text justify-between opacity-50">
        <RiFacebookFill className="w-6 h-6" />
        <TfiTwitterAlt className="w-6 h-6" />
        <RiInstagramFill className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Profile;
