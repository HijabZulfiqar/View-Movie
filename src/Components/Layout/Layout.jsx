import React from "react";


import { Outlet } from "react-router-dom";

import SideBar from "../SideBar/SideBar";

const Layout = () => {
  return (
   
    <div className=" flex flex-row min-h-screen gap-x-0">
    <SideBar/>
    <div className=" bg-slate-900 h-screen w-screen overflow-auto ">
    <div className=" min-h-0">
      
        {<Outlet />}
        </div>
      </div>
    </div>
      
    
  );
};

export default Layout;
