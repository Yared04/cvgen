import React, { useState } from "react";
import Image from "next/image";
import Select from "react-select";

const EducationModal = () => {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [degree, setDegree] = useState<{ value: string; label: string } | null>(
    null
  );
  const [startMonth, setStartMonth] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [endMonth, setEndMonth] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [startYear, setStartYear] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [endYear, setEndYear] = useState<{
    value: string;
    label: string;
  } | null>(null);

  const months = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];
  const monthOptions = [
    ...months.map((month) => ({
      value: month.id.toString(),
      label: month.name,
    })),
  ];
  const handleStartMonthChange = (selectedOption) => {
    setStartMonth(selectedOption.name);
  };
  const handleEndMonthChange = (selectedOption) => {
    setEndMonth(selectedOption.name);
  };
  const degreeOptions = [
    { value: "1", label: "Bachelor's" },
    { value: "2", label: "Master's" },
    { value: "3", label: "MBA" },
    { value: "4", label: "PhD" },
    { value: "5", label: "PharMD" },
    { value: "6", label: "Associate's" },
  ];

  const handleSelectChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setDegree(selectedOption);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);
  const yearOptions = years.map((year) => ({
    value: year.toString(),
    label: year.toString(),
  }));

  return (
    <div className="text-text-secondary border p-6 w-10/12">
      <span className="flex gap-2 mb-4">
        <Image src="/education.svg" alt="add" width={40} height={40} />
        <h1 className="my-auto text-black font-bold text-xl">Add Education</h1>
      </span>
      <form action="">
        <div className="">
          <label className="font-semibold pl-2" htmlFor="school">
            School Name
          </label>
          <input
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="border rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="school"
            name="school"
            type="text"
            placeholder="School"
            required
          />
        </div>
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-3">
            <label className="font-semibold pl-2" htmlFor="Major">
              Major
            </label>
            <input
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="border rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="Major"
              name="Major"
              type="text"
              placeholder="Major"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="font-semibold pl-2">Degree Type</label>
            <Select
              value={degree}
              onChange={handleSelectChange}
              options={degreeOptions}
              className="border-1 rounded-md p-2 w-full h-10 text-text-secondary"
              placeholder="Degree Type"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="font-semibold pl-2" htmlFor="gpa">
              GPA
            </label>
            <input
              className="border rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="gpa"
              name="gpa"
              type="number"
              placeholder="GPA"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-4">
          <span>
            <label className="font-semibold pl-2" htmlFor="startMonth">
              Start Month
            </label>
            <Select
              id="startMonth"
              value={startMonth}
              required
              onChange={handleStartMonthChange}
              options={monthOptions}
              className="border-1 rounded-md p-2 w-full h-10  text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </span>
          <span>
            <label className="font-semibold pl-2" htmlFor="startYear">
              Start Year
            </label>

            <Select
              id="startYear"
              value={startYear}
              required
              onChange={(
                selectedOption: { value: string; label: string } | null
              ) => setStartYear(selectedOption)}
              options={yearOptions}
              className="border-1 rounded-md p-2 w-full h-10 text-text-secondary"
              placeholder="Year"
            />
          </span>
          <span>
            <label className="font-semibold pl-2" htmlFor="endMonth">
              End Month
            </label>
            <Select
              id="endMonth"
              value={endMonth}
              required
              onChange={handleEndMonthChange}
              options={monthOptions}
              className="border-1 rounded-md p-2 w-full h-10  text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </span>
          <span>
            <label className="font-semibold pl-2" htmlFor="endYear">
              End Year
            </label>

            <Select
              id="endYear"
              value={endYear}
              required
              onChange={(
                selectedOption: { value: string; label: string } | null
              ) => setEndYear(selectedOption)}
              options={yearOptions}
              className="border-1 rounded-md p-2 w-full h-10 text-text-secondary"
              placeholder="Year"
            />
          </span>
        </div>
        <div className="flex justify-between mt-4">
          <button className="hover:bg-gray-700 border text-black w-full font-bold py-2 px-4 m-2 rounded">
            Cancel
          </button>
          <button className="bg-primary w-full hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationModal;
