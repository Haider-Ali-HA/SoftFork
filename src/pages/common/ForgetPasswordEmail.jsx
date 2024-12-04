import React, { useState } from "react";
import MainHeading from "../../components/common/MainHeading";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import SubHeading from "../../components/common/SubHeading";
import { useNavigate } from "react-router-dom";

const ForgetPasswordEmail = () => {
  const navigate = useNavigate();

  // State to handle all form inputs
  const [formData, setFormData] = useState({
    email: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Log form data to console
    navigate("/reset-password/otp-verification"); // Navigate to the next page
  };

  return (
    <div className="w-full h-full py-20 mt-24 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border w-[32rem] gap-9 rounded-md border-gray-200 p-11 flex flex-col items-center justify-center"
      >
        <MainHeading text="Forget Password?" />
        <div className="w-5/6">
          <SubHeading text="Don't worry! It occurs. Please enter the email address linked with your account." />
        </div>

        {/* Input Field */}
        <InputField
          typeText="email"
          placeholderText="Enter your email address"
          inputLabel="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <ButtonFilled text="Send Code" className="h-12 md:h-14 sm:text-xl" type="submit" />
      </form>
    </div>
  );
};

export default ForgetPasswordEmail;
