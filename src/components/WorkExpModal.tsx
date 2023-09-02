import React, { useState } from "react";
import Image from "next/image";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const WorkExpModal = () => {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState(false);

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

  const handleCurrentlyWorkingChange = (e) => {
    setCurrentlyWorking(e.target.checked);
    if (e.target.checked) {
      setEndMonth("");
      setEndYear("");
    }
  };

  return (
    <div className="text-text-secondary border-2 p-6">
      <span className="flex gap-2 mb-4">
        <Image src="/workExp.png" alt="add" width={40} height={40} />
        <h1 className="my-auto text-black font-bold text-xl">
          Add Work Experience
        </h1>
      </span>
      <form action="">
        <div className="grid grid-cols-2 gap-5">
          <div className="">
            <label className="font-semibold pl-2" htmlFor="company">
              Company
            </label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="company"
              name="company"
              type="text"
              placeholder="Company"
            />
          </div>
          <div>
            <label className="font-semibold block pl-2" htmlFor="location">
              Location
            </label>
            <CountryDropdown
              classes="border-2 rounded-md p-2 w-2/5 h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={country}
              onChange={(val) => setCountry(val)}
              id="location"
            />
            <RegionDropdown
              classes="border-2 rounded-md p-2 w-2/5 h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
              id="location"
            />
          </div>
          <div className="">
            <label className="font-semibold pl-2" htmlFor="title">
              Position Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="title"
              name="title"
              type="text"
              placeholder="Title"
            />
          </div>
          <div>
            <label className="font-semibold pl-2" htmlFor="experience">
              Experience Type
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="experience"
              name="experience"
              placeholder="Experience Type"
            >
              <option className="" value="1">
                Internship
              </option>
              <option className="" value="2">
                Full Time
              </option>
              <option className="" value="3">
                Part Time
              </option>
            </select>
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
              disabled={currentlyWorking} // Disable the field when currentlyWorking is true
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
              disabled={currentlyWorking} // Disable the field when currentlyWorking is true
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
        <div className="flex items-center gap-2 m-4 ml-2">
          <input
            type="checkbox"
            id="currentlyWorking"
            checked={currentlyWorking}
            onChange={handleCurrentlyWorkingChange}
          />
          <label className="font-semibold " htmlFor="currentlyWorking">
            I currently Work here
          </label>
        </div>
        <label htmlFor="description">
          <h1 className="font-semibold pl-2">Description</h1>
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 rounded-md p-2 w-full h-28 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          id="description"
          name="description"
          placeholder="Description"
        />
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

export default WorkExpModal;
