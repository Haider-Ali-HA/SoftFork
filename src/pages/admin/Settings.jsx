import React, { useState } from "react";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import UploadOutline from "../../components/common/UploadOutline";
import SecondHeading from "../../components/common/SecondHeading";
import TextAreaField from "../../components/common/TextAreaField";

const Settings = () => {
  const [adminData, setAdminData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [orgData, setOrgData] = useState({
    companyName: "",
    headOfficeAddress: "",
    telephoneNumber: "",
    companyEmail: "",
    website: "",
    description: "",
  });
  const [adminProfilePic, setAdminProfilePic] = useState(null);
  const [orgLogo, setOrgLogo] = useState(null);

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleOrgChange = (e) => {
    const { name, value } = e.target;
    setOrgData({ ...orgData, [name]: value });
  };

  const handleAdminPicUpload = (file) => {
    setAdminProfilePic(file);
  };

  const handleOrgLogoUpload = (file) => {
    setOrgLogo(file);
  };

  const handleSaveAdminChanges = () => {
    console.log("Admin Data:", adminData);
    console.log("Admin Profile Pic:", adminProfilePic);
  };

  const handleSaveOrgChanges = () => {
    console.log("Organization Data:", orgData);
    console.log("Organization Logo:", orgLogo);
  };

  return (
    <div className="min-h-full md:p-6 bg-white">
      {/* Admin Profile Setup */}
      <div className="bg-white  shadow-[0px_0px_20px_#e2e2e2]  rounded-xl p-6 mb-10">
        <div className="md:w-72 mb-4 md:-ml-2">
          <SecondHeading text="Admin Profile Setup" />
        </div>
        <form className="flex flex-col gap-4">
          <UploadOutline
            text="Upload Profile Picture"
            buttonText="Select Picture"
            onFileSelect={handleAdminPicUpload}
          />
          <div className="flex gap-3 flex-col lg:flex-row">
            <InputField
              inputLabel="Your First Name"
              name="firstName"
              value={adminData.firstName}
              onChange={handleAdminChange}
            />
            <InputField
              inputLabel="Your Last Name"
              name="lastName"
              value={adminData.lastName}
              onChange={handleAdminChange}
            />
          </div>
          <div className="flex gap-3 flex-col lg:flex-row">
            <div className="flex flex-col w-full">
              <InputField
                inputLabel="Your Email"
                typeText="email"
                name="email"
                value={adminData.email}
                onChange={handleAdminChange}
                placeholderText="example@gmail.com"
              />
              <div>
                <p className="text-[#0080FF]   text-end">
                  Update Email
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <InputField
                inputLabel="Your Password"
                typeText="password"
                name="password"
                value={adminData.password}
                onChange={handleAdminChange}
                placeholderText="123***************"
              />
              <div>
                <p className="text-[#0080FF]    text-end">
                  Update Password
                </p>
              </div>
            </div>
          </div>
          <div className="w-48">
            <ButtonFilled
              className=" h-12 md:h-14 text-base md:text-xl"
              text="Save  Changes"
              onClick={handleSaveAdminChanges}
            />
          </div>
        </form>
      </div>

      {/* Organization Profile Setup */}
      <div className="bg-white shadow-[0px_0px_20px_#e2e2e2]  rounded-xl p-6">
        <div className="md:w-96 mb-4 -ml-3">
          <SecondHeading text=" Organization Profile Setup" />
        </div>
        <form className="flex flex-col gap-4">
          <UploadOutline
            text="Upload Company Logo"
            buttonText="Select Logo"
            onFileSelect={handleOrgLogoUpload}
          />
          <div className="flex gap-3 flex-col lg:flex-row">
            <InputField
              inputLabel="Your company's name*"
              name="companyName"
              value={orgData.companyName}
              onChange={handleOrgChange}
            />
            <InputField
              inputLabel="Head Office Address"
              name="headOfficeAddress"
              value={orgData.headOfficeAddress}
              onChange={handleOrgChange}
            />
          </div>
          <div className="flex gap-3 flex-col lg:flex-row">
            <InputField
              inputLabel="Company Telephone Number"
              name="telephoneNumber"
              value={orgData.telephoneNumber}
              onChange={handleOrgChange}
            />
            <InputField
              inputLabel="Company Email Address"
              typeText="email"
              name="companyEmail"
              value={orgData.companyEmail}
              onChange={handleOrgChange}
            />
          </div>
          <InputField
            inputLabel="Company Website"
            typeText="url"
            name="website"
            value={orgData.website}
            onChange={handleOrgChange}
          />

          <TextAreaField
            inputLabel="Company Description"
            name="description"
            value={orgData.description}
            onChange={handleOrgChange}
          />
          <div className="w-48">
            <ButtonFilled
              className=" h-12 md:h-14 text-base md:text-xl"
              text="Save  Changes"
              onClick={handleSaveAdminChanges}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
