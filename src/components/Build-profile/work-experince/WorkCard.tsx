import React from "react";
import { MdWorkOutline } from "react-icons/md";
import Image from "next/image";
const WorkCard = ({ work }) => {
  return (
    <div className="flex  items-center gap-4 mt-5 ">
      <div className="bg-primary p-3 rounded-full">
        <MdWorkOutline color="white" size={22} />
      </div>
      <div>
        <p className="font-semibold text-lg">
          {work.position_title}
          <span className="text-text-secondary font-normal ml-4">
            {work.company}
          </span>
        </p>
        <p className="text-text-secondary">{work.location}</p>
        <p className="text-sm text-text-secondary">
          {work.start_date}- {work.end_date}
        </p>
      </div>
      <div className="self-start flex gap-2">
        <div className="relative w-[1rem] h-[1rem]">
          <Image alt=" edit icon" src="/edit.svg" fill />
        </div>
        <div className="relative w-[1.2rem] h-[1.2rem]">
          <Image alt=" edit icon" src="/delete.svg" fill />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
