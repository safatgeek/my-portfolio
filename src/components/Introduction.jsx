import React from 'react'
import photo from "../pic/myPic.jpg"
const Introduction = () => {
  return (
    <div className=' flex justify-center flex-col items-center mt-14'>
        <div className=' border-r-[1px] h-[120px]'></div>
        <div className=' h-[5px] w-[5px] bg-green-600 rounded-full'></div>
        <h2 className=' mt-5 text-black font-medium text-[13px] tracking-wider'>HELLO! MY NAME IS</h2>
        <h2 className=' mt-5 text-black font-bold text-[70px] tracking-widest'>TANJIM</h2>
        <h2 className=' mt-5 text-black font-bold text-[70px] tracking-widest'>SAFAT</h2>
        <h2 className=' mt-5 text-black font-medium text-[17px] tracking-wider'>FULL STACK DEVELOPER</h2>
        <div className=' bg-gray-300 rounded-full mt-5'>
            <img src={photo} className=' p-5 h-[160px] w-[160px] rounded-full'/>
        </div>
    </div>
  )
}

export default Introduction