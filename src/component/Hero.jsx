import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => (
  <div className='md:text-4xl sm:text-2xl h-full  mb-36  flex flex-col items-center mt-36 m-auto capitalize font-extrabold'>
    <h2>growing with data analytics</h2>
    <h2>grow with data</h2>

    <div className='flex m-1'>
      <h2 className='px-2'>I am a </h2>

      <ReactTyped className='  text-[#00df9a] font-bold'
        strings={[
          'Developer',
          'Designer',
          'Student'
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      ></ReactTyped>
    </div>
  </div>
)

export default Hero
