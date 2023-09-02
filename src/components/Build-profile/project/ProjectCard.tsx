import React from 'react'
import Image from 'next/image'
import {GoProjectRoadmap} from "react-icons/go"

const ProjectCard = () => {
  return (
    <div className='flex  items-center gap-4 mt-5 '>
        <div className='bg-primary p-3 rounded-full'>
            <GoProjectRoadmap color='white' size={22}/>
        </div>
        <div>

        <p className='font-semibold text-lg capitalize' >Next.js Developer</p>
        <p className='text-text-secondary capitalize'>Road Map</p>
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

export default ProjectCard