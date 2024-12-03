import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../assets/sidebar/dashboard.png";
import image2 from "../../assets/sidebar/funds.png";
import image3 from "../../assets/sidebar/employees.png";
import image4 from "../../assets/sidebar/projects.png";
import image5 from "../../assets/sidebar/reports.png";
import image6 from "../../assets/sidebar/employees.png";
import image7 from "../../assets/sidebar/create-project.png";
import image8 from "../../assets/sidebar/chat.png";
import image9 from "../../assets/sidebar/settings.png";
import logo from "/SoftForkLogo.svg";
import { ImCross } from "react-icons/im";
import { FiSettings } from "react-icons/fi";

const SideBar = ({ open, handleToggle }) => {
  const [isAccountSettingsActive, setIsAccountSettingsActive] = useState(false);

  const handleAccountClick = (isActive) => {
    setIsAccountSettingsActive(isActive);
  };

  return (
    <div className={` py-4 flex-1  h-full bg-[#43204A] z-50 `}>
      {/* Logo Image */}
      <div className="flex w-full items-center  gap-3">
        <img
          src={logo}
          className="w-10 lg:w-16 pl-5 py-5 lg:py-5 filter invert brightness-0"
          alt="logo"
        />
        <h1 className="text-white text-2xl font-bold">SoftFork</h1>
        {open && (
          <ImCross
            onClick={handleToggle}
            className="text-white text-2xl z-40 lg:hidden mr-0 w-full cursor-pointer"
          />
        )}
      </div>

      <div className="bg-primary rounded-lg py-1 w-[7rem] ml-3 my-5 text-white ">
        <p className="text-center">GENERAL</p>
      </div>

      {/* Dashboard Link */}
      <NavLink onClick={handleToggle} to="/admin/dashboard">
        {({ isActive }) => (
          <div
            onClick={() => setIsAccountSettingsActive(false)}
            className={`flex items-center px-4 py-4 my-2  w-full transition-colors duration-300 text-white ${
              isActive ? "bg-gray-300 bg-opacity-25" : ""
            }`}
          >
            <img
              src={image1}
              alt="Dashboard"
              className={`w-5 h-5 ${
                isActive ? "filter brightness-0 invert" : ""
              }`}
            />
            <h1 className="ml-3">Dashboard</h1>
          </div>
        )}
      </NavLink>

      {/* Funds Link */}
      <NavLink onClick={handleToggle} to="/admin/funds">
        {({ isActive }) => (
          <div
            onClick={() => setIsAccountSettingsActive(false)}
            className={`flex items-center px-4 py-4 my-2 w-full transition-colors duration-300 text-white ${
              isActive ? "bg-gray-300 bg-opacity-25" : ""
            }`}
          >
            <img
              src={image2}
              alt="Funds"
              className={`w-5 h-5 ${
                isActive ? "filter brightness-0 invert" : ""
              }`}
            />
            <h1 className="ml-3">Funds</h1>
          </div>
        )}
      </NavLink>

      {/* Employees Link */}
      <NavLink onClick={handleToggle} to="/admin/employees">
        {({ isActive }) => (
          <div
            onClick={() => setIsAccountSettingsActive(false)}
            className={`flex items-center px-4 py-4 my-2 w-full transition-colors duration-300 text-white ${
              isActive ? "bg-gray-300 bg-opacity-25" : ""
            }`}
          >
            <img
              src={image3}
              alt="Employees"
              className={`w-5 h-5 ${
                isActive ? "filter brightness-0 invert" : ""
              }`}
            />
            <h1 className="ml-3">Employees</h1>
          </div>
        )}
      </NavLink>

      {/* Projects Link */}
      <NavLink onClick={handleToggle} to="/admin/projects">
        {({ isActive }) => (
          <div
            onClick={() => setIsAccountSettingsActive(false)}
            className={`flex items-center px-4 py-4 my-2 w-full transition-colors duration-300 text-white ${
              isActive ? "bg-gray-300 bg-opacity-25" : ""
            }`}
          >
            <img
              src={image4}
              alt="Projects"
              className={`w-5 h-5 ${
                isActive ? "filter brightness-0 invert" : ""
              }`}
            />
            <h1 className="ml-3">Projects</h1>
          </div>
        )}
      </NavLink>

      {/* View Reports Link */}
      <NavLink onClick={handleToggle} to="/admin/view-reports">
        {({ isActive }) => (
          <div
            onClick={() => setIsAccountSettingsActive(false)}
            className={`flex items-center px-4 py-4 my-2 w-full transition-colors duration-300 text-white ${
              isActive ? "bg-gray-300 bg-opacity-25" : ""
            }`}
          >
            <img
              src={image5}
              alt="View Reports"
              className={`w-5 h-5 ${
                isActive ? "filter brightness-0 invert" : ""
              }`}
            />
            <h1 className="ml-3">View Reports</h1>
          </div>
        )}
      </NavLink>

      {/* Invite Employees Link */}
      <NavLink onClick={handleToggle} to="/admin/invite-employees">
        {({ isActive }) => (
          <div
            onClick={() => setIsAccountSettingsActive(false)}
            className={`flex items-center px-4 py-4 my-2 w-full transition-colors duration-300 text-white ${
              isActive ? "bg-gray-300 bg-opacity-25" : ""
            }`}
          >
            <img
              src={image6}
              alt="Invite Employees"
              className={`w-5 h-5 ${
                isActive ? "filter brightness-0 invert" : ""
              }`}
            />
            <h1 className="ml-3">Invite Employees</h1>
          </div>
        )}
      </NavLink>

      {/* Create Project Link */}
      <NavLink onClick={handleToggle} to="/admin/create-project">
        {({ isActive }) => (
          <div
            onClick={() => setIsAccountSettingsActive(false)}
            className={`flex items-center px-4 py-4 my-2 w-full transition-colors duration-300 text-white ${
              isActive ? "bg-gray-300 bg-opacity-25" : ""
            }`}
          >
            <img
              src={image7}
              alt="Create Project"
              className={`w-5 h-5 ${
                isActive ? "filter brightness-0 invert" : ""
              }`}
            />
            <h1 className="ml-3">Create Project</h1>
          </div>
        )}
      </NavLink>

      {/* Chat Link */}
      <NavLink onClick={handleToggle} to="/admin/chat">
        {({ isActive }) => (
          <div
            onClick={() => setIsAccountSettingsActive(false)}
            className={`flex items-center px-4 py-4 my-2 w-full transition-colors duration-300 text-white ${
              isActive ? "bg-gray-300 bg-opacity-25" : ""
            }`}
          >
            <img
              src={image8}
              alt="Chat"
              className={`w-5 h-5 ${
                isActive ? "filter brightness-0 invert" : ""
              }`}
            />
            <h1 className="ml-3">Chat</h1>
          </div>
        )}
      </NavLink>

      {/* Settings Link */}
      <NavLink onClick={handleToggle} to="/admin/settings">
        {({ isActive }) => (
          <div
            onClick={() => setIsAccountSettingsActive(false)}
            className={`flex items-center px-4 py-4 my-2 w-full transition-colors duration-300 text-white ${
              isActive ? "bg-gray-300 bg-opacity-25" : ""
            }`}
          >
            <img
              src={image9}
              alt="Settings"
              className={`w-5 h-5 ${
                isActive ? "filter brightness-0 invert" : ""
              }`}
            />
            <h1 className="ml-3">Settings</h1>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default SideBar;
