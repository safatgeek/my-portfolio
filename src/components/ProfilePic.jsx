import React from 'react'
import picture from "../pic/myPhoto1.png"

const ProfilePic = () => {
  return (
    <div className=' fixed'>
        <img src={picture} className=' h-screen object-cover' />
    </div>
  )
}

export default ProfilePic