import React from "react";
import SoftForkLogo from "/SoftForkLogo.svg";
import { NavLink } from "react-router-dom";
import notificationIcon from "/icons/notificationWithBadge.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar3 = ({ showBtn = true }) => {
  const [showMenu, setShowMenu] = React.useState(false); // State to toggle the menu

  const navLinks = [
    { name: "Fund", link: "/fund" },
    { name: "Build", link: "/build" },
    { name: "Earn", link: "/earn" },
    { name: "Spend", link: "/spend" },
    { name: "Profile", link: "/profile" },
  ];

  const handleMenuToggle = () => {
    setShowMenu(!showMenu); // Toggle menu visibility
  };

  return (
    <div className="p-4 w-full max-w-[1400px] mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="flex gap-3 items-center">
        <img src={SoftForkLogo} className="w-9" alt="softfork logo" />
        <h1 className="text-primary text-lg font-black">SoftFork</h1>
      </div>

      {/* Hamburger Icon for small screens */}
      <div className="lg:hidden flex items-center" onClick={handleMenuToggle}>
        {showMenu ? (
          <FaTimes className="text-primary text-3xl cursor-pointer" />
        ) : (
          <FaBars className="text-primary text-3xl cursor-pointer" />
        )}
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

      {/* Right side content for larger screens */}
      <div className="hidden lg:flex items-center gap-4">
        <img src={notificationIcon} alt="notification" className="w-7" />
        {showBtn ? (
          <div className="flex items-center justify-center text-white bg-[#0DAC2A] p-2 rounded-lg text-sm">
            <p>Token: 250</p>
          </div>
        ) : (
          <div className="flex items-center justify-center bg-transparent p-2 rounded-lg text-sm pr-12">
            {/* Empty placeholder */}
          </div>
        )}
      </div>

      {/* Hamburger Menu for smaller screens */}
      {showMenu && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-10 flex flex-col items-center p-4 shadow-lg">
          {/* Close menu icon */}
          <div className="flex justify-end w-full">
            <FaTimes
              className="text-primary text-3xl cursor-pointer"
              onClick={handleMenuToggle}
            />
          </div>

          {/* Navigation links inside the menu */}
          <div className="flex flex-col items-center gap-4 mt-4">
            {navLinks.map((link, index) => (
              <NavLink
                to={link.link}
                key={index}
                className="text-primary font-semibold text-lg py-2"
                onClick={() => setShowMenu(false)} // Close menu after clicking a link
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Notifications and Token info */}
          <div className="flex flex-row-reverse items-center gap-4 mt-6">
            <img src={notificationIcon} alt="notification" className="w-7" />
            {showBtn && (
              <div className="flex items-center justify-center text-white bg-[#0DAC2A] p-2 rounded-lg text-sm">
                <p>Token: 250</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar3;
