import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import Image from "next/image";

export function ResumeSkillsSelect({ close, modal }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  //   const [skillsOptions, setSkillsOptions] = useState([]);

  //   useEffect(() => {
  //     fetchSkills();
  //   }, []);

  //   const fetchSkills = async () => {
  //     try {
  //       const response = await axios.get("https://api.example.com/skills", {
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "dbe297bdeamsh85d8f3caa48d500p110468jsnfc1e37698cae",
  //           "X-RapidAPI-Host": "iys-skill-api.p.rapidapi.com",
  //         },
  //       });
  //       const skills = response.data.skills.map((skill) => ({
  //         value: skill.name,
  //         label: skill.name,
  //       }));
  //       setSkillsOptions(skills);
  //     } catch (error) {
  //       console.error("Error fetching skills:", error);
  //     }
  //   };

  const skillsOptions = [
    { value: "Front-end Development", label: "Front-end Development" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Microsoft Office", label: "Microsoft Office" },
    { value: "Leadership", label: "Leadership" },
    // Add more skills as needed
  ];

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const handleSubmit = () => {
    console.log(selectedOptions);
  };

  return (
    <div
      className="text-text-secondary border p-6 w-10/12 bg-white"
      ref={modal}
    >
      <span className="flex gap-2 mb-4">
        <Image src="/education.svg" alt="add" width={40} height={40} />
        <h1 className="my-auto text-black font-bold text-xl">Edit Skills</h1>
      </span>
      <h3>Select Skills for Resume</h3>
      <Select
        value={selectedOptions}
        onChange={handleSelectChange}
        options={skillsOptions}
        isMulti
        placeholder="Select Skills"
        hideSelectedOptions
        className="pl-2"
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
    </div>
  );
}

export default ResumeSkillsSelect;
