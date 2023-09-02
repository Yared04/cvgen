import React from 'react'
import {MdWorkOutline} from "react-icons/md"
import Image from 'next/image'
const WorkCard = () => {
  return (
    <div className='flex  items-center gap-4 mt-5 '>
        <div className='bg-primary p-3 rounded-full'>
            <MdWorkOutline color='white' size={22}/>
        </div>
        <div>

        <p className='font-semibold text-lg' >Web Development,<span className='text-text-secondary font-normal'>Esklate</span></p>
        <p className='text-text-secondary'>Addis Ababa, Ethiopia</p>
        <p className='text-sm text-text-secondary'>Jan 2022- April 2023</p>
        </div>
        <div className='self-start flex gap-2'>
        <div className='relative w-[1rem] h-[1rem]'>
            <Image alt = " edit icon" src="/edit.svg" fill/>
        </div>
        <div className='relative w-[1.2rem] h-[1.2rem]'>
            <Image alt = " edit icon" src="/delete.svg" fill/>
        </div>
        </div>
    </div>
  )
}

export default WorkCard