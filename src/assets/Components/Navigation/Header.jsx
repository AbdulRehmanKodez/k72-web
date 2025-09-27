import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className=' fixed w-[1300px] h-[80px]  z-10 flex items-center justify-end top-10 '>
        <button className= ' bg-black h-[40px] w-[100px]  border-white border-[3px]  rounded-3xl hover:bg-gray-500  '>Hire Me</button>
        <i className=" ri-more-2-fill text-2xl "></i>
    </div>
  )
}   

export default Header