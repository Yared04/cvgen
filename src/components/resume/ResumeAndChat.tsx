import React from 'react'
import Chat from './Chat'
import ResumeOutline from './ResumeOutline'

const ResumeAndChat = () => {
  return (
    <div className='flex gap-6 p-5'>
        <div className='w-1/2'>
        <Chat/>
        </div>
        <div className='w-[50%]'>
            <ResumeOutline/>
        </div>

    </div>
  )
}

export default ResumeAndChat