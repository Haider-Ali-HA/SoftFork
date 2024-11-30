import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-[#772787] font-gilroy text-base md:text-lg hover:opacity-90 text-white py-2 md:py-4 rounded-lg w-full">
      {text}
    </button>
  );
};

export default Button;
