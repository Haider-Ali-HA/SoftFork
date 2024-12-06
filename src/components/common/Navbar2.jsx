import React from "react";
import SoftForkLogo from "/SoftForkLogo.svg";
import { NavLink } from "react-router-dom";
import notificationIcon from "/icons/notification.png";
import profile1 from "/images/profile1.png";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";

const Navbar2 = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false); // State to toggle the menu

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu); // Toggle menu visibility
  };

  const navLinks = [
    { name: "Fund", link: "/fund" },
    { name: "Build", link: "/build" },
    { name: "Earn", link: "/earn" },
    { name: "Spend", link: "/spend" },
    { name: "Profile", link: "/profile" },
  ];

  return (
    <div className="p-4 w-full max-w-[1400px] mx-auto flex mb-2 justify-between items-center">
      <div className="flex gap-3 items-center">
        <img src={SoftForkLogo} className="w-9" alt="softfork logo" />
        <h1 className="text-primary text-lg font-black">SoftFork</h1>
      </div>

      {/* Hamburger Icon for small screens */}
      <div className="lg:hidden flex items-center" onClick={handleMenuToggle}>
        <FaBars className="text-primary text-2xl cursor-pointer" />
      </div>

      {/* Navigation links for larger screens */}
      <div className="hidden lg:flex items-center justify-center gap-4">
        {navLinks.map((link, index) => (
          <NavLink
            to={link.link}
            key={index}
            className="text-primary font-semibold text-sm"
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Right side content with profile and notifications */}
      <div className="hidden lg:flex  p-3 items-center gap-4 relative justify-center">
        <img src={notificationIcon} alt="notification" />
        <div className="flex items-center gap-2">
          <div className="">
            <img src={profile1} alt="profile-photo" className="w-9 h-9" />
          </div>
          <div className="">
            <div className="flex justify-between items-center">
              <h2 className="text-[#151D48]">Alen Miller</h2>
            </div>
            <div className="flex items-center justify-center gap-1">
              <p className="text-[#737791] w-full font-light">Admin</p>
              {showDropdown ? (
                <FaChevronUp
                  className="cursor-pointer"
                  onClick={handleDropdown}
                  size={10}
                />
              ) : (
                <FaChevronDown
                  className="cursor-pointer"
                  onClick={handleDropdown}
                  size={10}
                />
              )}
            </div>
          </div>
        </div>

        {showDropdown && (
          <div className="absolute top-16 right-0 bg-white rounded-md shadow-md p-2 w-full mt-2">
            <div className="flex flex-col gap-2">
              <NavLink
                to="#"
                className="text-[#151D48] flex font-semibold text-sm"
              >
                <AiOutlineBell className="text-[#151D48]" size={22} />
                <div className="">
                  <p>
                    New Funding <br />
                    opportunities (Backer)
                  </p>
                </div>
              </NavLink>
              {/* Add more notifications here */}
            </div>
          </div>
        )}
      </div>

      {/* Hamburger Menu for smaller screens */}
      {showMenu && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white  z-10 flex flex-col items-center p-4 shadow-lg">
          <div className="flex justify-end w-full items-center ">
            {/* Close Icon (Cross) */}
            <FaTimes
              className="text-primary text-3xl cursor-pointer"
              onClick={handleMenuToggle}
            />
          </div>

          {/* Navigation links inside the menu */}
          {navLinks.map((link, index) => (
            <NavLink
              to={link.link}
              key={index}
              className="text-primary font-semibold text-lg py-3"
              onClick={() => setShowMenu(false)} // Close menu after clicking
            >
              {link.name}
            </NavLink>
          ))}

          {/* Notifications and Profile inside the menu */}
          <div className="flex items-center gap-4 mt-4">
            <img
              src={notificationIcon}
              alt="notification"
              className="w-7 h-7"
            />
            <div className="flex items-center gap-2">
              <img
                src={profile1}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h2 className="text-[#151D48] text-sm">Alen Miller</h2>
                <p className="text-[#737791] text-xs">Admin</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
