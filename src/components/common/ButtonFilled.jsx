import React from "react";

const ButtonFilled = ({ text }) => {
  return (
    <button className="bg-primary font-gilroy font-semibold text-base transition-all duration-200 md:text-lg hover:opacity-90 text-white py-2 md:py-4 rounded-lg w-full">
      {text}
    </button>
  );
};

export default ButtonFilled;
