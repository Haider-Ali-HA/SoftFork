import React, { useState } from "react";
import MainHeading from "../../components/common/MainHeading";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import SubHeading from "../../components/common/SubHeading";
import { useNavigate } from "react-router-dom";
import Model from "../../components/common/Model";

const CreateNewPassword = () => {
  const navigate = useNavigate();

  // State to handle all form inputs
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

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

    // Open the modal
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);

  };

  return (
    <div className="w-full h-full py-20 mt-24 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border w-[32rem] gap-9 rounded-md border-gray-200 p-11 flex flex-col items-center justify-center"
      >
        {/* Main Heading */}
        <MainHeading text="Create new password" />

        <div className="w-5/6">
          {/* Subheading */}
          <SubHeading text="Your new password must be unique from those previously used." />
        </div>

        {/* Input Fields */}
        <InputField
          typeText="password"
          placeholderText="New Password"
          inputLabel="Enter your new password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
        />
        <InputField
          typeText="password"
          placeholderText="Confirm New Password"
          inputLabel="Confirm Your New Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <ButtonFilled text="Reset Password" type="submit" />
      </form>

      {/* Modal Component */}
      <Model
        open={isModalOpen}
        handleClose={handleCloseModal}
        title="Password Changed!"
        content="Your password has been changed successfully."
        buttonText="Okay"
      />
    </div>
  );
};

export default CreateNewPassword;
