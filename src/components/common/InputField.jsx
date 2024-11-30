import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputField = ({ typeText, placeholderText, extraText, inputLabel }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Normalize the input values to lowercase for consistent comparison
  const normalizedTypeText = typeText?.toLowerCase();
  const normalizedExtraText = extraText?.toLowerCase();

  // Determine the input type
  const inputType =
    normalizedTypeText === "password" && normalizedExtraText === "sign up"
      ? showPassword
        ? "text"
        : "password"
      : normalizedTypeText === "password"
      ? "text" // If extraText is not "sign up", always show the text
      : normalizedTypeText;

  return (
    <div className="relative w-full">
      <label
        className=" text-xl font-semibold cursor-pointer"
        htmlFor={inputLabel}
      >
        {" "}
        {inputLabel}
      </label>
      <input
        id={inputLabel}
        type={inputType}
        className="w-full mt-2 border border-[#ADADAD] rounded-lg placeholder:text-[#808080] px-4 py-3 md:py-4 outline-none"
        placeholder={placeholderText}
        required
      />
      {normalizedTypeText === "password" &&
        normalizedExtraText === "sign up" && (
          <span
            className="absolute right-4 top-[35%] cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <AiOutlineEye className="text-xl mt-5" />
            ) : (
              <AiOutlineEyeInvisible className="text-xl mt-5" />
            )}
          </span>
        )}
    </div>
  );
};

export default InputField;
