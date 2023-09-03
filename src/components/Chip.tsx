import React from "react";

const Chip = ({ skills }) => {
  return (
    <div className="flex flex-wrap mt-2">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-b from-primary to-primary-light text-white rounded-full px-3 py-1 text-sm font-semibold m-1"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Chip;
