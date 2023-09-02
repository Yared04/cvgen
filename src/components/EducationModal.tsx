import React, { useState } from "react";
import Image from "next/image";

const EducationModal = () => {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [degree, setDegree] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");

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

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  return (
    <div className="text-text-secondary border-2 p-6 w-10/12">
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
            className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="Major"
              name="Major"
              type="text"
              placeholder="Major"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="font-semibold pl-2" htmlFor="degree">
              Degree Type
            </label>
            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="degree"
              name="degree"
              placeholder="Degree Type"
              required
            >
              <option className="" value="1">
                Bachelor's
              </option>
              <option className="" value="2">
                Master's
              </option>
              <option className="" value="3">
                MBA
              </option>
              <option className="" value="4">
                PhD
              </option>
              <option value="5">PharMD</option>
              <option value="6">Associate's</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="font-semibold pl-2" htmlFor="gpa">
              GPA
            </label>
            <input
              className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <select
              id="startMonth"
              value={startMonth}
              required
              onChange={(e) => setStartMonth(e.target.value)}
              className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option className="font-bold" value="">
                Month
              </option>
              {months.map((month) => (
                <option key={month.id} value={month.id}>
                  {month.name}
                </option>
              ))}
            </select>
          </span>

          <span>
            <label className="font-semibold pl-2" htmlFor="startYear">
              Start Year
            </label>

            <select
              id="startYear"
              value={startYear}
              required
              onChange={(e) => setStartYear(e.target.value)}
              className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option className="font-bold" value="">
                Year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </span>

          <span>
            <label className="font-semibold pl-2" htmlFor="endMonth">
              End Month
            </label>
            <select
              id="endMonth"
              value={endMonth}
              required
              onChange={(e) => setEndMonth(e.target.value)}
              className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option className="font-bold" value="">
                Month
              </option>
              {months.map((month) => (
                <option key={month.id} value={month.id}>
                  {month.name}
                </option>
              ))}
            </select>
          </span>
          <span>
            <label className="font-semibold pl-2" htmlFor="endYear">
              End Year
            </label>
            <select
              id="endYear"
              value={endYear}
              required
              onChange={(e) => setEndYear(e.target.value)}
              className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option className="font-bold" value="">
                Year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </span>
        </div>
        <div className="flex justify-between">
          <button className="hover:bg-gray-700 border-2 text-black w-full font-bold py-2 px-4 m-2 rounded">
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
