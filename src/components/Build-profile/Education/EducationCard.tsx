import React from 'react'
import Image from 'next/image'

const EducationCard = () => {
  return (
    <div className='flex  items-center gap-4 mt-5 '>
        <div className='p-3 bg-primary rounded-full'>
        <div className='relative w-[1.2rem] h-[1.2rem] '>
            <Image alt = " gaducation icon" src="/graduation-cap.svg" fill/>
        </div>
        </div>
        <div>

        <p className='font-semibold text-lg capitalize' >Addis Ababa University</p>
        <p className='text-text-secondary'>Bachelors of Science</p>
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

export default EducationCard