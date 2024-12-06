import React, { useState } from "react";
import profilePhoto from "../../assets/header/profile-photo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import BellIcon from "../../assets/header/bell-icon.png";
import MessageIcon from "../../assets/header/message-icon.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between  items-center pl-2   bg-white">
      <div className="">
        <h2 className="text-xl md:text-2xl    font-semibold text-[#151D48]">
          Admin Dashboard
        </h2>
      </div>

      <div className="flex items-center ">
        <div className="w-2/6 py-2 rounded-full hidden lg:block ">
          {/* search */}
          <div className="flex items-center w-full relative">
            <CiSearch className="absolute ml-3 text-gray-600 text-xl" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-2 pl-10 outline-none rounded-full bg-gray-100"
            />
          </div>
        </div>

        <div className="p-2 flex  items-center gap-2 ">
          {/* notification */}
          <div className="  hidden lg:flex">
            <img src={BellIcon} alt="notification" className="w-9 h-9 ml-2" />
            <img
              src={MessageIcon}
              alt="notification"
              className="w-9 h-9 ml-2"
            />
          </div>
          {/* profile */}
          <div className="flex items-center z-50 gap-2">
            <div className="">
              <img src={profilePhoto} alt="profile-photo" />
            </div>
            <div className="">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <MdKeyboardArrowDown size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 right-0 bg-white z-50 shadow-lg rounded-lg p-4 lg:hidden">
          <div className="w-full py-2 rounded-full">
            {/* search */}
            <div className="flex items-center w-full relative">
              <CiSearch className="absolute ml-3 text-gray-600 text-xl" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-full p-2 pl-10 outline-none rounded-full bg-gray-100"
              />
            </div>
          </div>
          <div className="flex  items-start mt-4">
            <img src={BellIcon} alt="notification" className="w-9 h-9 mb-2" />
            <img
              src={MessageIcon}
              alt="notification"
              className="w-9 h-9 mb-2"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-[#151D48]">Alen Miller</h2>
            <p className="text-[#737791] font-light">Admin</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
