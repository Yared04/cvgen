import React, { Component } from "react";

interface SelectionCardProps {
  name: string;
}

export const ChooseSection = ({}) => {
  return (
    <div className="flex flex-col items-start w-full">
      <h1 className="text-4xl font-extrabold text-left pl-2">What do you want to create?</h1>
      <div className="flex justify-center pt-4 w-full">
        <SelectionCard name={"Specific Resume"} />
        <SelectionCard name={"General Resume"} />
      </div>
      <div className="flex items-left pt-4 w-[95%]">
        <SelectionCard name={"Cover Letter"} />
      </div>
      
    </div>
  );
};

const SelectionCard = ({ name }: SelectionCardProps) => {
  return (
    <div className="w-[50%] shadow m-4 p-4 flex rounded-sm">
        <p className="text-lg text-primary text-xl font-bold">{name}</p>
    </div>
  );
};