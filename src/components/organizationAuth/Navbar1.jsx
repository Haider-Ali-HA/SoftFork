import React from "react";
import GlobalEarth from "../../assets/navbar/global.png";
import SoftForkLogo from "/SoftForkLogo.svg";

const Navbar1 = () => {
  return (
    <div className=" fixed top-0 z-30 bg-white  left-0 h-20 px-7 md:px-20 w-full shadow-md shadow-[#f0f0f0] items-center  flex justify-between">
      <div className="flex gap-3 items-center">
        <img src={SoftForkLogo} className="w-9" alt="softfork logo" />
        <h1 className="text-primary text-lg font-bold font-gilroy">SoftFork</h1>
      </div>
      <div>
        <button className="border  flex gap-4 justify-between items-center rounded-md border-gray-300 px-3 py-2 bg-white">
          <span className="text-secondary font-roboto">English</span>

          <img src={GlobalEarth} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar1;
