import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl  md:text-4xl'>Learn anything, anytime, anywhere</h1>
      <p className='flex flex-col text-gray-500 sm:text-sm max-w-2xl lg:max-w-4xl'>
        Unlock your potential with our diverse collection of courses. Whether you're looking to advance your career, explore new hobbies, or gain valuable skills, we've got you covered.
      </p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600'>Get started</button>
        <button className='flex items-center gap-2'>Learn more<img src={assets.arrow_icon} alt='arrow_icon' /></button>
      </div>
    </div>
  )
}

export default CallToAction