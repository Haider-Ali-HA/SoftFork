import React from "react";

const ButtonFilled = ({ text ,onClick }) => {
  return (
    <button
      className="bg-primary font-gilroy shadow-xl font-semibold text-base transition-all duration-200 md:text-lg hover:opacity-90 text-white py-2 md:py-4 rounded-lg w-full"
      onClick={onClick} // Attach the onClick handler
    >
      {text}
    </button>
  );
};

export default ButtonFilled;
