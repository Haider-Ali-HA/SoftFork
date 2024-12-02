import React, { useState } from "react";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import SecondHeading from "../../components/common/SecondHeading";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import UploadFilled from "../../components/common/UploadFilled";

const AdditionalEmployeeSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: "",
    department: "",
    pic: null, // To store the uploaded profile picture
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePictureUpload = (file) => {
    setFormData({
      ...formData,
      pic: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Logs form data
    navigate("/employee-auth/security-question"); // Navigates to the specified route
  };

  return (
    <div className="w-full h-full py-20 mt-24 flex items-center justify-center lg:gap-[10%] px-4">
      <Link
        to="/employee-auth/necessary-signup"
        className="hidden sm:block p-2 shadow-[0px_8px_12px_#cfcfcf] rounded-full "
      >
        <BsArrowLeftShort className="text-3xl" />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="w-[45rem] gap-9 rounded-md border-gray-200 px-2 sm:p-11 flex flex-col items-center justify-center"
      >
        <div className="w-full flex">
          <div>
            <SecondHeading text="Additional Fields for Signup" />
          </div>
        </div>
        <UploadFilled
          text="Upload Profile Picture"
          buttonText="Upload Picture"
          onFileSelect={handlePictureUpload}
        />

        <InputField
          typeText="text"
          inputLabel="Job Title/Role"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
        />
        <InputField
          typeText="text"
          inputLabel="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        <ButtonFilled text="Next" type="submit" />
      </form>
      <Link
        to="/employee-auth/security-question"
        className="hidden sm:block p-2 shadow-[0px_8px_12px_#cfcfcf] rounded-full"
      >
        <BsArrowRightShort className="text-3xl" />
      </Link>
    </div>
  );
};

export default AdditionalEmployeeSignup;
