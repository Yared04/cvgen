import Image from 'next/image'
import React, { useState } from 'react'
import WorkCard from './WorkCard'


const WorkExperince = () => {
  const [display, setDisplay] = useState(false)
  return (
    <div className='border-2 p-4 mx-3 rounded-md'>
        <div className='flex  justify-between items-center' onClick={() => setDisplay(prev => !prev)}>

        <div>
            <p className='font-bold text-2xl capitalize'>Work Experince</p>
            {/* <p className='text-text-secondary capitalize mt-4 font-semibold'>no Experince Added</p> */}
        </div>
        <div className='bg-[#E9F9FF] shadow-sm p-2 rounded-md'>
        <div className='relative w-[1.2rem] h-[1.2rem]'>
            <Image alt = " plus icon" src="/plus.svg" fill/>
        </div>
        </div>
        </div>

        {
          display &&
        <div className='mt-12'>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        </div>
        }


    </div>
  )
}

export default WorkExperince