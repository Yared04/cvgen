import React, { Component } from "react";
import { SelectionCard } from "./SelectionCard";
import Image from "next/image";

export const ChooseSection = ({}) => {
  return (
    <div className="flex flex-col items-start w-full p-12 relative overflow-hidden">
      <h1 className="text-4xl font-extrabold text-left pl-8">What do you want to create?</h1>
      <div className="flex justify-center pt-4 w-full">
        <SelectionCard name={"Specific Resume"} hasDetails={true} />
        <SelectionCard name={"General Resume"} />
      </div>
      <div className="flex items-left pt-4 w-[95%]">
        <SelectionCard name={"Cover Letter"} hasDetails={true} detailsOn={true} />

      </div>
          <div className="absolute w-96 h-96 bottom-56 -right-36">
        <Image
          className="object-contain w-full h-full"
          width={10}
          height={10}
          src={"/images/home/full-circle.svg"}
          alt=""
        />
      </div>
      <div className="absolute bottom-96 right-[5%] z-10">
        <Image
          className="object-contain w-32 h-32"
          width={10}
          height={10}
          src={"/images/home/black-dots.svg"}
          alt=""
        />
      </div>
      <div className="pb-48"></div>
    </div>
  );
};
