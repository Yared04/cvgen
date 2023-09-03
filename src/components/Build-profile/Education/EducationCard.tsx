import React from "react";
import Image from "next/image";

const EducationCard = ({ edu }) => {
  return (
    <div className="flex  items-center gap-4 mt-5 ">
      <div className="p-3 bg-primary rounded-full">
        <div className="relative w-[1.2rem] h-[1.2rem] ">
          <Image alt=" gaducation icon" src="/graduation-cap.svg" fill />
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg capitalize">{edu.school_name}</p>
        <p className="text-text-secondary">{edu.degree_type}</p>
        <p className="text-sm text-text-secondary">
          {edu.start_date}- {edu.end_date}
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

export default EducationCard;
