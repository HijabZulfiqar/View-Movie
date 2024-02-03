import React from 'react'
import SideBar from '../SideBar/SideBar'
import "../../App.css"

const Layout = () => {
  return (
    <div className=" flex  justify-center items-center min-h-screen   ">
   
    <div className='layout'>
    <SideBar/>
    <div className='bg-[#457B9D] w-full'>

    </div>
    </div>
       
    </div>

  )
}

export default Layout
