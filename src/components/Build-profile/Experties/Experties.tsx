import React,{useState} from 'react'
import Image from 'next/image'

const Experties = () => {
    const [display,setDisplay] = useState(false)
  return (
        <div className='border-2 p-4 mt-2 mx-3 rounded-md' onClick={() => setDisplay(prev => !prev)}>
        <div className='flex  justify-between items-center'>

        <div>
            <p className='font-bold text-2xl capitalize'>skills</p>
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
            <div className='mt-4 flex flex-wrap gap-4'>
                <p className=' bg-primary px-4 py-2 rounded-[4rem] text-white'>Node.js</p>
                <p className=' bg-primary px-4 py-2 rounded-[4rem] text-white'>Node.js</p>
                <p className=' bg-primary px-4 py-2 rounded-[4rem] text-white'>Node.js</p>
                <p className=' bg-primary px-4 py-2 rounded-[4rem] text-white'>Node.js</p>
            </div>
            }
        

    </div>
  )
}

export default Experties