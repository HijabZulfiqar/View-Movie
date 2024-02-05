import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md" 
import dropdown from "../../assets/dropdown.png";
import dd from "../../assets/dd.png"
const DropDown = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className='relative'>
        <div className='flex items-center gap-5   px-4 py-2  max-w-[14.9rem] lg:max-w-none'
        onClick={() => menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)}
        >
            <img className=' w-3 h-3' src={dropdown} alt=""  />
          <p className='text-lg text-white select-none'>Movies</p>
          <img className=' w-3 h-3' src={dd} alt=""  />
     
        </div>
        {menuOpen && <ul className='flex flex-col mt-2 gap-3 text-gray-800 border   px-12 py-2  drop-shadow-md rounded-md border-gray-100 bg-white max-w-[14.9rem] lg:max-w-none absolute z-20'>
          <li className='select-none cursor-pointer hover:text-gray-600 transition-all' >fun</li>
          <li className='select-none cursor-pointer hover:text-gray-600 transition-all' >sad</li>
          <li className='select-none cursor-pointer hover:text-gray-600 transition-all' >happy</li>
          <li className='select-none cursor-pointer hover:text-gray-600 transition-all' >emotional</li>
          <li className='select-none cursor-pointer hover:text-gray-600 transition-all' >anger</li>
        </ul>}
      </div>
    </>
  )
}

export default DropDown
