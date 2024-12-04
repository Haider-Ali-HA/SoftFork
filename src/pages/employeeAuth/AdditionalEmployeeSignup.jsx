import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import UploadFilled from "../../components/common/UploadFilled";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import SecondHeading from "../../components/common/SecondHeading";
import TagInputField from "../../components/common/TagInputField";
import { Link, useNavigate } from "react-router-dom";

const AdditionalEmployeeSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: "",
    department: "",
    pic: null, // Store uploaded profile picture
  });
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(""); // Error state for validation
  const [skillsError, setSkillsError] = useState(""); // Error for skills validation

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
    setError(""); // Clear error if a file is uploaded
  };

  const handleSkillsChange = (newSkills) => {
    setSkills(newSkills);
    setSkillsError(""); // Clear skills error if updated
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if profile picture and skills are uploaded
    if (!formData.pic) {
      setError("Profile picture is required.");
      return;
    }
    if (skills.length === 0) {
      setSkillsError("At least one skill is required.");
      return;
    }

    // Log form data and proceed to the next step (next page)
    console.log({ ...formData, skills });
    navigate("/employee-auth/security-question");
  };

  return (
    <div className="w-full h-full py-20 mt-24 flex items-center justify-center lg:gap-[10%] px-4">
      <Link
        to="/employee-auth/necessary-signup"
        className="cursor-pointer hidden sm:block p-2 shadow-[0px_8px_12px_#cfcfcf] rounded-full"
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

        {/* Upload Profile Picture */}
        <UploadFilled
          text="Upload Profile Picture"
          buttonText="Upload Picture"
          onFileSelect={handlePictureUpload}
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Job Title Input */}
        <InputField
          typeText="text"
          inputLabel="Job Title/Role"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
        />

        {/* Department Input */}
        <InputField
          typeText="text"
          inputLabel="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        {/* Skills Input */}
        <TagInputField
          label="Enter Your Skills"
          placeholder="Type a skill and press Enter"
          tags={skills}
          setTags={handleSkillsChange}
        />
        {skillsError && <p className="text-red-500 mt-2">{skillsError}</p>}

        {/* Submit Button */}
        <ButtonFilled text="Next" className="h-12 md:h-14 sm:text-xl" type="submit" />
      </form>
      <Link
        to="/employee-auth/security-question"
        className="cursor-pointer hidden sm:block p-2 shadow-[0px_8px_12px_#cfcfcf] rounded-full"
      >
        <BsArrowRightShort className="text-3xl" />
      </Link>
    </div>
  );
};

export default AdditionalEmployeeSignup;
