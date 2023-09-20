import React from 'react'
import { IoLogoGithub, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5"

const Sidebar = () => {
  return (
    <div className=' w-[110.99px] h-screen fixed flex flex-col justify-around items-center border-r-[1px] mx-4'>
        <h2 className=' -rotate-90 tracking-wide'>HOME PAGE</h2>
        <div className=' flex flex-col gap-7 mb-10 text-[20px]'>
          <IoLogoGithub className=' cursor-pointer hover:scale-110 transition-all ease-in-out'/>
          <IoLogoFacebook className=' cursor-pointer hover:scale-110 transition-all ease-in-out' />
          <IoLogoLinkedin className=' cursor-pointer hover:scale-110 transition-all ease-in-out'/>
        </div>
        
    </div>
  )
}

export default Sidebar