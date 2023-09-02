import React from 'react'
import WorkExperince from './work-experince/WorkExperince'
import Education from './Education/Education'
import Projects from './project/Projects'
import Experties from './Experties/Experties'
export const BuildProfile = () => {
  return (
    <div className='w-full'>
        <WorkExperince/>
        <Education/>
        <Projects/>
        <Experties/>
    </div>
  )
}
