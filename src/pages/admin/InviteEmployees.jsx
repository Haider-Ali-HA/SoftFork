import React, { useState } from "react";
import ImportEmployees from "../organizationAuth/ImportEmployees";
import InputField from "../../components/common/InputField";
import ButtonFilled from "../../components/common/ButtonFilled";
import UploadOutline from "../../components/common/UploadOutline";
import LoaderModel from "../../components/common/LoaderModel";

const InviteEmployees = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleProfilePicUpload = (file) => {
    setFormData({ ...formData, profilePic: file });
  };

  const handleInviteAll = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <div className="min-h-full ">
      <div className="shadow-[0px_0px_20px_#e2e2e2] bg-white rounded-xl">
        <ImportEmployees address="inviteEmployee" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="shadow-[0px_0px_20px_#e2e2e2] rounded-xl mt-4 bg-white flex flex-col gap-10 py-10 px-4 md:px-0 md:pl-10"
      >
        <div className="flex items-center relative md:w-[34rem]">
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
        <UploadOutline
          text="Upload Employee List"
          buttonText="Upload Pic"
          onFileSelect={handleProfilePicUpload}
        />
        <div className="w-64 -mt-5">
          <ButtonFilled
            text="Invite All"
            className=" h-12 md:h-14  md:text-xl"
            type="button"
            onClick={handleInviteAll}
          />
        </div>
      </form>
      <LoaderModel
        identifier="inviteEmployeeTable"
        path="inviteEmployee"
        open={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default InviteEmployees;
