import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadOutline from "../../components/common/UploadOutline";
import InputField from "../../components/common/InputField";
import SecondHeading from "../../components/common/SecondHeading";
import TextAreaField from "../../components/common/TextAreaField";
import TagInputField from "../../components/common/TagInputField";
import DatePickerInput from "../../components/common/DatePickerInput";
import ButtonFilled from "../../components/common/ButtonFilled";

const CreateSingleProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tokenAllocation: "",
    taskTitle: "",
    taskOverview: "",
    payout: "",
    deadline: "",
    email: "",
  });
  const [skills, setSkills] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const [errors, setErrors] = useState({});
  const [skillsError, setSkillsError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleProfilePicUpload = (file) => {
    setProfilePic(file);
    setErrors((prevErrors) => ({
      ...prevErrors,
      profilePic: "",
    }));
  };

  const handleSkillsChange = (newSkills) => {
    setSkills(newSkills);
    setSkillsError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const newErrors = {};
    if (!profilePic) newErrors.profilePic = "Project Icon is required.";
    if (!formData.tokenAllocation)
      newErrors.tokenAllocation = "Token Allocation is required.";
    if (!formData.taskTitle) newErrors.taskTitle = "Task Title is required.";
    if (!formData.taskOverview)
      newErrors.taskOverview = "Task Overview is required.";
    if (skills.length === 0) setSkillsError("At least one skill is required.");
    if (!formData.payout) newErrors.payout = "Payout is required.";
    if (!formData.deadline) newErrors.deadline = "Deadline is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0 || skills.length === 0) {
      return;
    }

    // Log data and navigate
    console.log("Form Data:", { ...formData, skills, profilePic });
  };

  const handleInviteSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
      return;
    }
    console.log("Inviting employee with email:", formData.email);
    console.log("Profile Pic:", profilePic);
  };

  const handleInviteAll = () => {
    console.log("Inviting all employees");
    // Add logic to handle inviting all employees
  };

  return (
    <div className="min-h-screen shadow-[0px_0px_20px_#e2e2e2] p-4 px-9">
      {/* Project Creation Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <UploadOutline
          text="Select Project Icon"
          buttonText="Select Icon"
          onFileSelect={handleProfilePicUpload}
        />
        {errors.profilePic && (
          <p className="text-red-500 mt-2">{errors.profilePic}</p>
        )}

        <div className="w-full lg:w-3/4">
          <InputField
            typeText="text"
            inputLabel="Token Allocation"
            name="tokenAllocation"
            value={formData.tokenAllocation}
            onChange={handleChange}
          />
          {errors.tokenAllocation && (
            <p className="text-red-500 mt-2">{errors.tokenAllocation}</p>
          )}
        </div>

        <div className="w-full lg:w-3/4">
          <div className="w-44 -ml-2 mb-8">
            <SecondHeading text="Task Details" />
          </div>
          <InputField
            typeText="text"
            inputLabel="Task Title"
            name="taskTitle"
            value={formData.taskTitle}
            onChange={handleChange}
          />
          {errors.taskTitle && (
            <p className="text-red-500 mt-2">{errors.taskTitle}</p>
          )}
        </div>

        <div className="w-full lg:w-3/4">
          <TextAreaField
            inputLabel="Task Overview"
            name="taskOverview"
            value={formData.taskOverview}
            onChange={handleChange}
          />
          {errors.taskOverview && (
            <p className="text-red-500 mt-2">{errors.taskOverview}</p>
          )}
        </div>

        <div className="w-full lg:w-3/4">
          <TagInputField
            label="Required Skills"
            placeholder="Type a skill and press Enter"
            tags={skills}
            setTags={handleSkillsChange}
          />
          {skillsError && <p className="text-red-500 mt-2">{skillsError}</p>}
        </div>

        <div className="w-full lg:w-3/4">
          <InputField
            typeText="text"
            inputLabel="Payout"
            name="payout"
            value={formData.payout}
            onChange={handleChange}
          />
          {errors.payout && (
            <p className="text-red-500 mt-2">{errors.payout}</p>
          )}
        </div>

        <div className="w-full lg:w-3/4">
          <DatePickerInput
            inputLabel="Deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
          {errors.deadline && (
            <p className="text-red-500 mt-2">{errors.deadline}</p>
          )}
        </div>

        <div className="w-full lg:w-3/4">
          <ButtonFilled text="Add New Task" type="submit" />
        </div>
      </form>

      {/* Invite Employees Section */}
      <form onSubmit={handleInviteSubmit} className="flex flex-col gap-5 my-10">
        <div className="w-56  -ml-2 mb-4">
          <SecondHeading text="Add Employee" />
        </div>
        <div className="flex items-center relative lg:w-[34rem]">
          <InputField
            typeText="email"
            placeholderText="example@gmail.com"
            extraText="email"
            inputLabel="Enter employee email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="border absolute bottom-2 right-2">
            <ButtonFilled text="Send Invite" type="submit" />
          </span>
        </div>
        {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}

        <UploadOutline
          text="Upload Employee List"
          buttonText="Upload Pic"
          onFileSelect={handleProfilePicUpload}
        />

        <div className="w-64">
          <ButtonFilled
            text="Create Project"
            type="button"
            onClick={handleInviteAll}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateSingleProject;
