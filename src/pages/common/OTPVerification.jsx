import React, { useState, useRef } from "react";
import MainHeading from "../../components/common/MainHeading";
import SubHeading from "../../components/common/SubHeading";
import ButtonFilled from "../../components/common/ButtonFilled";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]); // State for OTP input values
  const inputsRef = useRef([]);

  // Handle input change
  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if a digit is entered
      if (value && index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  // Handle backspace to move focus to the previous field
  const handleBackspace = (index, value) => {
    if (value === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");

    // Check if all OTP fields are filled
    if (otpValue.length === 4) {
      console.log("OTP Submitted:", otpValue); // Log OTP to the console
      navigate("/reset-password/create-new-password"); // Navigate to next page
    } else {
      alert("Please fill in all OTP fields.");
    }
  };

  return (
    <div className="w-full h-full py-20 mt-24 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border w-[32rem] gap-9 rounded-md border-gray-200 p-11 flex flex-col items-center justify-center"
      >
        <MainHeading text="OTP Verification" />
        <div className="w-5/6">
          <SubHeading text="Enter the verification code we just sent on your email address." />
        </div>

        {/* OTP Input Fields */}
        <div className="flex gap-4 justify-center w-full mt-4">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              ref={(el) => (inputsRef.current[index] = el)} // Assign refs
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") handleBackspace(index, e.target.value);
              }}
              className={`w-14 h-14 border-2 rounded-md text-center text-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                value
                  ? "border-purple-500" // Highlighted border if input is filled
                  : "border-gray-300" // Default border for empty input
              }`}
            />
          ))}
        </div>

        {/* Verify Button */}
        <ButtonFilled text="Verify" type="submit" />
      </form>
    </div>
  );
};

export default OTPVerification;
