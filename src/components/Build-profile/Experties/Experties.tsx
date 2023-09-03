import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SkillsModal from "@/components/Modals/SkillsModal";
import supabase from "@/utils/supaBaseClient";
import Chip from "@/components/Chip";

const Experties = () => {
  const [display, setDisplay] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [expertise, setExpertise] = useState({});

  const trigger = useRef(null);
  const modal = useRef(null);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase
        .from("skill")
        .select("*")
        .eq("user_id", (await supabase.auth.getUser()).data.user.id);
      if (error) return console.log(error);
      setExpertise(data[0]);
    };
    fetchSkills();
  }, []);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !showModal ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setShowModal(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  return (
    <div
      className="border-2 p-4 mt-2 mx-3 rounded-md"
      onClick={() => setDisplay((prev) => !prev)}
    >
      <div className="flex  justify-between items-center">
        <div>
          <p className="font-bold text-2xl capitalize">skills</p>
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
        <div className="mt-5">{<Chip skills={expertise.skills} />}</div>
      )}
      {showModal && (
        <div
          className={`fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-70 px-4 py-5 z-50`}
        >
          <SkillsModal close={setShowModal} modal={modal} />
        </div>
      )}
    </div>
  );
};

export default Experties;
