import React from 'react'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";


const About = () => {
  return (
    <div className=' flex flex-col items-center px-44 text-center justify-center mt-5 gap-5'>
        <h2 className=' text-[40px] font-bold'>
            I'm a Fullstack web developer based in MERN
        </h2>
        <BiSolidQuoteAltLeft className=' bg-green-600 rounded-full text-white text-[44px] p-3' />
        <div className=' text-[17px] font-semibold text-gray-500'>
            I am a passionate & dedicated fullstack web developer with skills & experiences in mongoDB, express, react & nodeJS
        </div>
        <BiSolidQuoteAltRight className=' bg-green-600 rounded-full text-white text-[44px] p-3' />

    </div>
  )
}

export default About