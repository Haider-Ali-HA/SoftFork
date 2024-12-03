import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./SideBar";
import Header from "./Header";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative flex h-full w-full bg-[#ffffff]">
      {/* Overlay for mobile view */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={handleToggle}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed overflow-auto  top-0 left-0 w-3/4 sm:w-72 h-full bg-[#43204A] transition-transform duration-300 transform z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:block`}
      >
        <SideBar open={sidebarOpen} handleToggle={handleToggle} />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 h-full bg-white">
        {/* Header / Navbar */}
        <div className="flex items-center bg-white py-3  shadow-2xl shadow-[#eeeeee] px-4">
          <GiHamburgerMenu
            onClick={handleToggle}
            className={`text-gray-800 text-2xl cursor-pointer lg:hidden ${
              sidebarOpen ? "hidden" : "block"
            }`}
          />
            <Header />
        </div>

        {/* Main content area */}
        <div className="flex-grow   p-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
