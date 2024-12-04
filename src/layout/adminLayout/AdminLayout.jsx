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
    <div className="  flex min-h-screen w-full bg-[#43204A] ">
      {/* Overlay for mobile view */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={handleToggle}
        ></div>
      )}

      {/* Sidebar */}
      {/* <div
        className={`overflow-auto  min-h-full top-0 left-0 w-3/4 sm:w-72 h-full bg-[#43204A] transition-transform duration-300 transform z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:block`}
      >
        {sidebarOpen ? (
          <SideBar open={sidebarOpen} handleToggle={handleToggle} />
        ) : (
          <SideBar />
        )}
      </div> */}

      {/* Sidebar - adjust z-index so it appears above the overlay */}
      <div
        className={`fixed top-0 overflow-auto left-0 w-3/4 sm:w-72 h-full bg-[#43204A] transition-transform duration-300 transform z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:block`}
      >
        {sidebarOpen ? (
          <SideBar open={sidebarOpen} handleToggle={handleToggle} />
        ) : (
          <SideBar />
        )}
      </div>

      {/* Main content */}
      <div className="flex flex-col w-full min-h-screen bg-white">
        {/* Header / Navbar */}
        <div className="flex items-center  py-3  shadow-lg shadow-[#eeeded] mb-1 px-4">
          <GiHamburgerMenu
            onClick={handleToggle}
            className={`text-gray-800 text-2xl cursor-pointer lg:hidden ${
              sidebarOpen ? "hidden" : "block"
            }`}
          />
          <Header />
        </div>

        {/* Main content area */}
        <div className="flex-grow p-4  mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
