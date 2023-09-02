import Image from "next/image";
import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      image: "/images/home/service/1.svg",
      title: "AI-Powered Personalized CVs and Cover Letters",
      desc: "Streamline your job application process with AI-generated CVs and cover letters tailored to specific companies, saving you time and effort while increasing your chances of success.",
    },
    {
      image: "/images/home/service/2.svg",
      title: "Effortless Customization",
      desc: "Easily create customized CVs and cover letters with just one input, eliminating manual adjustments and repetitive customization, and empowering you to focus on your job search.",
    },
    {
      image: "/images/home/service/3.svg",
      title: "Unlimited High-Quality Cover Letters at Your Fingertips",
      desc: "Access an unlimited number of high-quality cover letters by simply providing the company name and the job position.",
    },
  ];
  return (
    <div className="relative flex p-16 md:p-32 bg-primary-extra-light w-full">
      <div className="absolute top-[10%] right-[5%] z-10">
        <Image
          className="object-contain w-32 h-32 text-primary"
          width={10}
          height={10}
          src={"/images/home/black-dots.svg"}
          alt=""
        />
      </div>

      <div className="absolute bottom-[2%] left-[2%] z-10">
        <Image
          className="object-contain w-32 h-32 text-primary"
          width={10}
          height={10}
          src={"/images/home/black-dots.svg"}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start max-w-3xl">
        <p className="text-4xl font-bold">Services We Provide</p>
        <div className="flex flex-col space-y-6 p-8 ">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Image
                className="w-16 h-16"
                width={20}
                height={20}
                src={service.image}
                alt=""
              />
              <div className="space-y-4">
                <p className="font-semibold">{service.title}</p>
                <p className="text-light-text">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
