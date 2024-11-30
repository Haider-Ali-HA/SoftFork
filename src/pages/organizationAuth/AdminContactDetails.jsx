import React, { useState } from "react";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import SecondHeading from "../../components/common/SecondHeading";
import Upload from "../../components/common/Upload";
import { useNavigate } from "react-router-dom";

const AdminContactDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    position: "",
    password: "",
    confirmPassword: "",
    profilePic: null, // To store the uploaded profile picture
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProfilePicUpload = (file) => {
    setFormData({
      ...formData,
      profilePic: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/organization-auth/funding-details");
  };

  return (
    <div className="w-full h-full py-20 mt-24 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[45rem] gap-9 rounded-md border-gray-200 p-11 flex flex-col items-center justify-center"
      >
        <div className="w-full flex">
          <SecondHeading text="Admin/Primary Contact Details" />
        </div>

        <Upload
          text="Upload Profile Pic"
          buttonText="Upload Pic"
          onFileSelect={handleProfilePicUpload}
        />

        <div className="flex gap-5">
          <InputField
            typeText="text"
            inputLabel="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputField
            typeText="text"
            inputLabel="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <InputField
          typeText="email"
          inputLabel="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          typeText="text"
          inputLabel="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <InputField
          typeText="text"
          inputLabel="Position/Role"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
        <div className="flex gap-5">
          <InputField
            typeText="password"
            inputLabel="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <InputField
            typeText="password"
            inputLabel="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

       
          <ButtonFilled text="Next" type='submit' />
       
      </form>
    </div>
  );
};

export default AdminContactDetails;
