import Image from 'next/image'
import React,{useContext} from 'react'
import { AppContext } from '@/pages/_app'

const ResumeOutline = () => {
    const {state, setState} = useContext(AppContext)
  return (
        <div className='flex h-[80vh] w-full rounded-xl border-2'>      
        <div className='bg-[#E6E6E4] w-[50%] flex flex-col gap-3  items-center '>
            <p className='font-bold text-2xl'>Natenaiel Tadele</p>
            <p className='font-semibold text-md'>software engineering</p>
            <div className='relative w-[5rem] h-[5rem]'>
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