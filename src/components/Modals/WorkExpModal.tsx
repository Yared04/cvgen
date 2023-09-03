import React, { useState } from "react";
import Image from "next/image";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Select from "react-select";
import supabase from "@/utils/supabaseClient";
import { start } from "repl";

const WorkExpModal = ({ close, modal }) => {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
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
  const monthOptions = [
    ...months.map((month) => ({
      value: month.id.toString(),
      label: month.name,
    })),
  ];
  const handleStartMonthChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setStartMonth(selectedOption);
  };
  const handleEndMonthChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setEndMonth(selectedOption);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);
  const yearOptions = years.map((year) => ({
    value: year.toString(),
    label: year.toString(),
  }));

  const handleCurrentlyWorkingChange = (e) => {
    setCurrentlyWorking(e.target.checked);
    if (e.target.checked) {
      setEndMonth(null);
      setEndYear(null);
    }
  };

  const experienceOptions = [
    { value: "1", label: "Internship" },
    { value: "2", label: "Full-time" },
    { value: "3", label: "Part-time" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const startMonthValue = startMonth ? parseInt(startMonth.value, 10) : null;
    const startYearValue = startYear ? parseInt(startYear.value, 10) : null;

    const startDate =
      startYearValue && startMonthValue
        ? new Date(startYearValue, startMonthValue - 1)
        : null;

    // Convert the startDate to the desired format for the backend
    const formattedStartDate = startDate ? startDate.toISOString() : null;

    const endMonthValue = endMonth ? parseInt(endMonth.value, 10) : null;
    const endYearValue = endYear ? parseInt(endYear.value, 10) : null;

    const endDate =
      endYearValue && endMonthValue
        ? new Date(endYearValue, endMonthValue - 1)
        : null;

    // Convert the endDate to the desired format for the backend
    const formattedEndDate = endDate ? endDate.toISOString() : null;
    const curUser = await supabase.auth.getUser();
    const data = {
      company: company,
      position_title: title,
      experience_type: experience,
      description: description,
      location: country + ", " + region,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      currently_working: currentlyWorking,
      user_id: curUser.data.user.id,
    };

    supabase
      .from("work_experience")
      .insert([data])
      .then(() => {
        close(false);
      });
  };

  return (
    <div className="text-text-secondary border p-6 bg-white">
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
              className="border rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              classes="border rounded-md p-2 w-2/5 h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={country}
              onChange={(val) => setCountry(val)}
              id="location"
            />
            <RegionDropdown
              classes="border rounded-md p-2 w-2/5 h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="border rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <Select
              value={experience}
              onChange={(
                selectedOption: { value: string; label: string } | null
              ) => setExperience(selectedOption)}
              options={experienceOptions}
              className="border-1 rounded-md p-2 w-full h-10  text-text-secondary"
              id="experience"
              name="experience"
              placeholder="Experience Type"
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
              isDisabled={currentlyWorking}
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
              isDisabled={currentlyWorking}
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
          className="border rounded-md p-2 w-full h-28 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          id="description"
          name="description"
          placeholder="Description"
        />
        <div className="flex justify-between">
          <button
            onClick={() => close(false)}
            className="hover:bg-gray-700 border text-black w-full font-bold py-2 px-4 m-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-primary w-full hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkExpModal;
