import { BuildProfile } from '@/components/Build-profile/BuildProfile';
import Education from '@/components/Build-profile/Education/Education';
import { UserCard } from '@/components/UserCard'
import React from 'react'
interface UserProps {
    name: string;
    email: string;
    phone: string;
    address: string;
    photo: string;
  }
const profilebuild = () => {
  return (
    <div className='px-6'>
        <p className='w-fit m-auto text-3xl font-bold p-5 '>Build Your Profile</p>
    <div className='flex w-full gap-12 '>
        <div className='w-[25%]'>
            <UserCard name='yared' email='yared@email.com' phone='0911236748' address='kasanchis' photo='./_DSC0249.JPG'/>
        </div>
        <BuildProfile/>
    </div>
    </div>
  )
}

export default profilebuild