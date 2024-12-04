import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ButtonOutline = ({ text, showIcon = false, className = "" }) => {
  return (
    <button
      className={`bg-white border-primary hover:bg-primary  hover:text-white border text-primary font-gilroy font-semibold text-sm md:text-md transition-all duration-200 py-1 md:py-2 rounded-lg w-full flex items-center justify-center ${className}`}
    >
      <div className="flex items-center justify-center gap-3">
        <p>{text}</p>
        {showIcon && <FaArrowRight />}
      </div>
    </button>
  );
};

export default ButtonOutline;
