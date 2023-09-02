import Image from 'next/image'
import React from 'react'

const ResumeOutline = () => {
  return (
        <div className='flex h-full w-full rounded-xl'>      
        <div className='bg-[#E6E6E4] w-[30%] flex flex-col gap-3 justify-center items-center '>
            <p className='font-bold text-[3rem]'>Natenaiel Tadele</p>
            <p className='font-semibold text-2xl'>software engineering</p>
            <div className='relative w-[9rem] h-[9rem]'>
                <Image alt='profile image' className=' rounded-full object-cover  w-[9rem] h-[9rem]' fill src='/images/home/team/naty.svg'/>
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
      <p className="text-text-secondary text-sm pl-7 mb-4">naty@email.com</p>
      <span className="flex gap-2">
        <img src="./phone.svg" alt="phone" />
        <p className="font-semibold">Phone Number</p>
      </span>
      <p className="text-text-secondary text-sm pl-7 mb-4">0917154826</p>
            </div>

        </div>
        <div className='pl-12'>
            <p>Dear,</p>
            <p>sincerly</p>

        </div>
        </div>
  )
}

export default ResumeOutline