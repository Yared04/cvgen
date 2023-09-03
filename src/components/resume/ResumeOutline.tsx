import Image from 'next/image'
import React,{useContext, useEffect, useState } from 'react'
import { AppContext } from '@/pages/_app'
import supabase from "@/utils/supabaseClient";
interface UserProps {
  profile_picture: string;
  phone_number: string;
  full_name: string;
  email: string;
  phone: string;
  address: string;
}
  

const ResumeOutline = () => {
    const {state, setState} = useContext(AppContext)
    const [user, setUser] = useState({} as UserProps);

  useEffect(() => {
    const getCurUser = async () => {
      const { data, error } = await supabase
        .from("user_profile")
        .select("*")
        .eq("user_id", (await supabase.auth.getUser()).data.user.id);
      if (error) return console.log(error);
      setUser(data[0]);
    };

    getCurUser();
  }, []);
  return (
        <div className='flex h-[80vh] w-full rounded-xl border-2'>      
        <div className='bg-[#E6E6E4] w-[50%] flex flex-col gap-3  items-center '>
            <p className='font-bold text-2xl'>{user.full_name}</p>
            <p className='font-semibold text-md capitalize'>software engineering</p>
            <div className='relative w-[5rem] h-[5rem]'>
                <Image alt='profile image' className=' rounded-full object-cover  w-[9rem] h-[9rem]' fill src={user.profile_picture}/>
            </div>
            <div>

            <span className="flex gap-2">
        <img src="./address.svg" alt="address" />
        <p className="font-semibold">Address</p>
      </span>

      <p className="text-text-secondary text-sm pl-7 mb-4">south street</p>
      <span className="flex gap-2">
        <img src="./email.svg" alt="email" />
        <p className="font-semibold">Email</p>
      </span>
      <p className="text-text-secondary text-sm pl-7 mb-4">{user.email}</p>
      <span className="flex gap-2">
        <img src="./phone.svg" alt="phone" />
        <p className="font-semibold">Phone Number</p>
      </span>
      <p className="text-text-secondary text-sm pl-7 mb-4">{user.phone_number}</p>
            </div>

        </div>
        <div className='pl-12 w-full overflow-scroll overflow-x-hidden'>
            <p>
            {
                state.coverLetter
            }
            </p>
        </div>
        </div>
  )
}

export default ResumeOutline