import React,{useState} from 'react'
import Image from 'next/image'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const [display, setDisplay] = useState(false)
  return (
    <div>
        <div className='border-2 p-4 mt-2 mx-3 rounded-md'  onClick={() => setDisplay(prev => !prev)}>
        <div className='flex  justify-between items-center'>

        <div>
            <p className='font-bold text-2xl capitalize'>Projects</p>
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
            <ProjectCard/>
            <ProjectCard/>
        </div>
        }

    </div>
    </div>
  )
}

export default Projects