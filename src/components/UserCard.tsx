import React from "react";

interface UserProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  photo: string;
}

export const UserCard = ({ name, email, phone, address, photo }: UserProps) => {
  return (
    <div className="border-2 p-8 rounded-md">
      <h1 className="font-bold text-xl align-start">Basic Information</h1>
      <div className="flex gap-2 my-4 items-center ">
        <img
          className="rounded-full object-cover w-16 h-16"
          src={photo}
          alt="profile picture"
        />
        <h2 className=" font-semibold">{name}</h2>
      </div>
      <span className="flex gap-2">
        <img src="./address.svg" alt="address" />
        <p className="font-semibold">Address</p>
      </span>

      <p className="text-text-secondary text-sm pl-7 mb-4">{address}</p>
      <span className="flex gap-2">
        <img src="./email.svg" alt="email" />
        <p className="font-semibold">Email</p>
      </span>
      <p className="text-text-secondary text-sm pl-7 mb-4">{email}</p>
      <span className="flex gap-2">
        <img src="./phone.svg" alt="phone" />
        <p className="font-semibold">Phone Number</p>
      </span>
      <p className="text-text-secondary text-sm pl-7 mb-4">{phone}</p>
    </div>
  );
};
