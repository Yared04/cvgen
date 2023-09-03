import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeIntro: React.FC = () => {
  return (
    <div className="relative grid grid-rows-12 w-full bg-gradient-to-b from-primary to-primary-light text-white overflow-clip">
      <div className="row-span-11 grid grid-cols-2 w-full ">
        <div className="flex flex-col items-center text-center space-y-6 p-16 md:p-24">
          <p className="text-5xl font-bold">Ready for Building your CV</p>
          <p className="text-md font-light leading-8 p-8">
            Revolutionize your job application process with ResumAI - the
            AI-powered platform that automates personalized CVs and cover
            letters for specific companies, saving you time while maximizing
            your chances of success
          </p>
          <div>
            <Link href={"/sections"}>
              <button className="bg-white rounded-md text-center text-primary py-4 px-6 text-md font-semibold">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
        <div className="p-16 relative">
          <div className="absolute bottom-[3%] right-[20%] z-10">
            <Image
              className="object-contain w-32 h-32 "
              width={10}
              height={10}
              src={"/images/home/dots.svg"}
              alt=""
            />
          </div>
          <div className="relative w-full h-full z-20 p-8">
            <Image
              className="object-contain w-full h-full "
              width={10}
              height={10}
              src={"/images/home/three.svg"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="absolute w-96 h-96 -bottom-28 -right-28">
        <Image
          className="object-contain w-full h-full"
          width={10}
          height={10}
          src={"/images/home/circle.svg"}
          alt=""
        />
      </div>
      <div className="absolute bottom-1 left-[15%] z-10">
        <Image
          className="object-contain w-32 h-32"
          width={10}
          height={10}
          src={"/images/home/dots.svg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeIntro;
