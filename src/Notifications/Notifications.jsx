import React from "react";
import LeftBar from "../SideBar/LeftBar";
import { CgSearch } from "react-icons/cg";
const Notifications = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex h-screen w-[35%]">
        <LeftBar />
      </div>

      <div className=" flex bg-gray-200 h-screen w-screen ">
        <div className="flex flex-col bg-slate-200 w-full  items-center">
          <div className="post-section flex flex-col items-center bg-slate-300 h-screen w-[60%]  rounded-lg">
            notification
            <div className="searchbar my-6 h-12 w-full flex justify-center  ">
              <div className="searchbar-input flex w-[90%] bg-slate-500 h-auto rounded-xl items-center align-middle focus:border-blue-500 focus:outline-none">
                <CgSearch className="flex size-6 mx-3 text-white align-middle" />
                <input
                  type="text"
                  placeholder="Search "
                  className="searchbar-input-field bg-inherit outline-none   text-white h-10 w-5/6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
