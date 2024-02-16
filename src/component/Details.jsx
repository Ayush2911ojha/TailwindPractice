import React from 'react'
import { AiFillAccountBook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { ReactTyped } from 'react-typed'

const Details = () => {
  return (
    <div className='h-36 p-28 bg-slate-600'>
      <div className='items-center  md:flex gap-10 justify-center h-full'>
        <div className='  relative h-36 w-36 bg-white  justify-center items-center  rounded-md'>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-14 w-14 bg-black rounded-full'></div>
        </div>

        <div>
          <ReactTyped
            className=' text-2xl text-[#60ea80] font-bold'
            strings={['Ayush ojha']}
            typeSpeed={80}
            backSpeed={30}
            loop
          ></ReactTyped>
          <ul className='mb-2'>
            <li className='flex items-center gap-3'>
              <AiFillGithub size={20} />
              Github
            </li>
            <li className='flex items-center gap-3'>
              <AiFillAccountBook size={20} /> Leetcode
            </li>
            <li className='flex items-center gap-3'>
              <AiFillLinkedin size={20} /> LinkeeIn{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details
