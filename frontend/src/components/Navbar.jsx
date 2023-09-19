import React, {useState} from 'react'

import {FaBars, FaTimes} from 'react-icons/fa'
import {VscGithub} from 'react-icons/vsc'
import {GrLinkedin} from 'react-icons/gr'


const navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='pb-[10vh]'>
      <div className="fixed w-full h-[80px] flex justify-between items-center bg-[#183D3D] text-gray-300 px-6 md:px-8 ">
          <div className='z-10 cursor-pointer'>
            <h1 className='text-3xl font-bold text-cyan-300'>S H</h1>
          </div>

        {/* menu */}
          <ul className='hidden md:flex flex-row gap-11'>
              <li className='hover:text-cyan-300 duration-300 text-lg tracking-wide'>Home</li>
              <li className='hover:text-cyan-300 duration-300 text-lg tracking-wide'>About</li>
              <li className='hover:text-cyan-300 duration-300 text-lg tracking-wide'>Skills</li>
              <li className='hover:text-cyan-300 duration-300 text-lg tracking-wide'>Projects</li>
              <li className='hover:text-cyan-300 duration-300 text-lg tracking-wide'>Contact</li>
            </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {
            !nav ? <FaBars color='cyan' size="1.5em" /> : <FaTimes color='cyan' size="1.5em" /> 
          }
        </div> 

        {/* mobile menu */}
          <ul 
          className={!nav ? 'hidden': 'md:hidden absolute top-0 left-0 flex justify-center items-center flex-col bg-[#183D3D] h-[100vh] w-[100vw] tracking-[2px] font-light text-2xl'}>
              <li className='w-full text-center p-11'>Home</li>
              <li className='w-full text-center p-11'>About</li>
              <li className='w-full text-center p-11'>Skills</li>
              <li className='w-full text-center p-11'>Projects</li>
              <li className='w-full text-center p-11'>Contact</li>
            </ul>

      </div>

      
    </div>
  )
}

export default navbar
