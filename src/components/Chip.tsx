import React from "react";

const Chip = ({ Options }) => {
  return (
    <div className="flex flex-wrap mt-2">
      {Options.map((option) => (
        <div
          key={option.value}
          className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold m-1"
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default Chip;
