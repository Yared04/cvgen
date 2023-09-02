import React from "react";
import Profile from "./Profile";

const OurTeam: React.FC = () => {
  const teams = [
    {
      name: "Yared Tegegn",
      job: "Ui Designer",
      image: "/images/home/team/yared.svg",
    },
    {
      name: "Henok Matheas",
      job: "Product Designer",
      image: "/images/home/team/henok.svg",
    },
    {
      name: "Natnael Tadele",
      job: "App Developer",
      image: "/images/home/team/naty.svg",
    },
    {
      name: "Zerabruk Muluneh",
      job: "Content Writer",
      image: "/images/home/team/zera.svg",
    },
    {
      name: "Zerihun Moges",
      job: "Content Writer",
      image: "/images/home/team/yared.svg",
    },
  ];
  return (
    <div className="w-full flex flex-col p-16 items-center text-center space-y-8" id="team">
      <div className="flex flex-col items-center space-y-4 max-w-2xl">
        <p className="font-bold text-3xl">Meet Our Team</p>
        <p>
          Our team is a diverse and passionate group of industry professionals,
          including experienced software Engineers, whose collective goal is to
          revolutionize the job application process.
        </p>
      </div>
      <div className="flex justify-evenly w-full space-x-3">
        {teams.map((team, index) => (
          <Profile
            key={index}
            name={team.name}
            job={team.job}
            image={team.image}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
