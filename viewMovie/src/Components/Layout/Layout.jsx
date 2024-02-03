import React from "react";
import SideBar from "../SideBar/SideBar";
import "../../App.css";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";

const Layout = () => {
  return (
    <div className=" flex  justify-center items-center min-h-screen   ">
      <div className="layout">
        <SideBar />
         <div className=" bg-slate-900  ">
        <div >
        <Home/>
        {<Outlet />}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Layout;
