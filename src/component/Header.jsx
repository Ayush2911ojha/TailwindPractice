import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const [head, setHead] = useState(false);
 
    const handleHead = () => {
    setHead(prev => !prev);
}

  return (
    <div className=' flex cursor-pointer justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

          <ul className={ 'max-md:hidden flex' }>
        <li className='p-4 capitalize'>home</li>
        <li className='p-4 capitalize'>about</li>
        <li className='p-4 capitalize'>contact</li>

        <li className='p-4 capitalize'>services</li>
      </ul>
          <div className='md:hidden' onClick={handleHead}>
              { head?  <AiOutlineMenu size={20} />: <AiOutlineClose size={20}/>}
       
      </div>

          <div className={!head?' md:hidden fixed left-0 top-0 w-[60%]  h-full border-r border-r-gray-900 bg-[#000300] m-4 ease-in-out duration-500': 'fixed left-[-100%]' }>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className=' p-4 uppercase'>
          <li className='p-4 border-b border-gray-600  '>home</li>
          <li className='p-4 border-b border-gray-600  '>about</li>
          <li className='p-4 border-b border-gray-600  '>contact</li>

          <li className='p-4 '>services</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
