import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import ProjectModal from "@/components/Modals/ProjectModal";

const Projects = () => {
  const [display, setDisplay] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);
  const dropdownRef = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      const isDropdown = dropdownRef.current.contains(target);
      if (
        !showModal ||
        modal.current.contains(target) ||
        trigger.current.contains(target) ||
        isDropdown
      )
        return;
      setShowModal(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  return (
    <div>
      <div
        className="border-2 p-4 mt-2 mx-3 rounded-md"
        onClick={() => setDisplay((prev) => !prev)}
      >
        <div className="flex  justify-between items-center">
          <div>
            <p className="font-bold text-2xl capitalize">Projects</p>
            {/* <p className='text-text-secondary capitalize mt-4 font-semibold'>no Experince Added</p> */}
          </div>
          <div className="bg-[#E9F9FF] shadow-sm p-2 rounded-md">
            <div
              onClick={() => {
                setShowModal(!showModal);
              }}
              className="relative w-[1.2rem] h-[1.2rem] cursor-pointer"
              ref={trigger}
            >
              <Image alt=" plus icon" src="/plus.svg" fill />
            </div>
          </div>
        </div>
        {display && (
          <div className="mt-12">
            <ProjectCard />
            <ProjectCard />
          </div>
        )}
        {showModal && (
          <div
            className={`fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-70 px-4 py-5 z-50`}
          >
            <ProjectModal
              close={setShowModal}
              modal={modal}
              dropdown={dropdownRef}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
