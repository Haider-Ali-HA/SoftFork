import React, { useState } from "react";
import SoftForkLogo from "/SoftForkLogo.svg";
import Linkedin from "../../assets/footer/linkedin.png";
import Twitter from "../../assets/footer/twitter.png";
import Messenger from "../../assets/footer/messenger.png";
import Twoo from "../../assets/footer/twoo.png";
import Model from "./Model";
import ButtonFilled from "./ButtonFilled";
import ButtonOutline from "./ButtonOutline";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [open, setOpen] = useState(false); // State for modal visibility

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-white text-black py-20 px-7 lg:px-20 flex flex-col gap-10 font-manrope">
      <hr className="border-[#E5E5EA]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 xl:gap-0">
        <div className="flex flex-col gap-7">
          <div className="flex gap-3 items-center">
            <img src={SoftForkLogo} className="w-9" alt="softfork logo" />
            <h1 className="text-primary text-lg font-black">SoftFork</h1>
          </div>
          <p className="w-52 text-secondary text-sm md:text-base">
            Simple innate summer fat appear basket his desire joy.
          </p>
          <div className="flex gap-5 items-center">
            <img className="w-5" src={Linkedin} alt="linkedin icon" />
            <img className="w-5" src={Messenger} alt="messenger icon" />
            <img className="w-5" src={Twitter} alt="twitter icon" />
            <img className="w-5" src={Twoo} alt="twoo icon" />
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl mb-4">Company</h1>
          <ul className="flex flex-col gap-4 text-sm md:text-base">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-xl mb-4">Resources</h1>
          <ul className="flex flex-col gap-4 text-sm md:text-base">
            <li>Templates</li>
            <li>Tutorials</li>
            <li>Free resources</li>
            <li>Contact templates</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-xl">Join Our Newsletter</h1>
          <div className="flex">
            <input
              className="bg-[#F9F9F9] px-[4%] py-3 outline-none rounded-l-full text-sm md:text-base"
              type="email"
              placeholder="Your email address"
            />
            <button className="bg-[#23265B] text-sm md:text-base py-3 px-[7%] hover:bg-opacity-90 text-white rounded-r-full">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-sm md:text-base w-5/6">
            * Will send you weekly updates for your better finance management.
          </p>
        </div>
      </div>
      <hr className="border-[#E5E5EA]" />
      <p className="text-center text-sm md:text-base">
        Copyright @ SoftFork {currentYear}. All Rights Reserved.
      </p>
      {/* Button to trigger modal */}
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        Open Modal
      </button>
      {/* Modal Component */}
      <Model
        open={open}
        handleClose={handleClose}
        title="Welcome to SoftFork"
        content="Thank you for exploring our platform!"
      />
      <ButtonFilled text="Submit" />
      <ButtonOutline text="Cancel" extraText="anything"/>
    </div>
  );
};

export default Footer;
