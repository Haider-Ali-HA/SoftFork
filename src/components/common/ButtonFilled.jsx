import React from "react";

const ButtonFilled = ({ text, onClick, className = "", ...props }) => {
  return (
    <button
      className={`bg-primary font-gilroy shadow-xl font-semibold text-sm transition-all duration-200 md:text-md hover:opacity-90 text-white py-1 md:py-2 rounded-lg w-full ${className}`}
      onClick={onClick}
      {...props} // Spread additional props
    >
      {text}
    </button>
  );
};

export default ButtonFilled;
