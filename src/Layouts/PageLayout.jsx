import React from "react";
import LeftBar from "../SideBar/LeftBar";
import { Outlet } from "react-router-dom";
import MainHome from "../MainHome/MainHome.jsx"

const PageLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex h-screen w-[35%]">
      <LeftBar />
      
      </div>
      <div className="flex h-screen w-screen ">
      <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
