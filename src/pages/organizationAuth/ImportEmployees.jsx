import React, { useState } from "react";
import Rippling from "../../assets/auth/rippling.png";
import Slack from "../../assets/auth/slack.png";
import AddEmail from "../../assets/auth/add.png";
import SecondHeading from "../../components/common/SecondHeading";
import SubHeading from "../../components/common/SubHeading";
import LoaderModel from "../../components/common/LoaderModel";

const ImportEmployees = ({ address }) => {
  const [open, setOpen] = useState(false);
  const path = address;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      className={`w-full h-full py-20 ${
        path === "inviteEmployee" ? "mt-0" : "mt-24"
      } flex items-center justify-center flex-col px-8 md:px-14 gap-10`}
    >
      <div className="w-full mx-5 md:w-[35rem]">
        <SecondHeading text="Import Employees from Email Provider, Slack, or Rippling" />
      </div>
      <div className="w-full mx-5 md:w-[60%]">
        <SubHeading text="Choose your preferred method to import your organization’s employee list. Connect with an email provider, Slack, or Rippling for seamless import." />
      </div>
      <div className="flex gap-5 items-center justify-center flex-wrap w-full">
        <div className="border-gray-200 border px-3 h-24 rounded-xl w-44 flex items-center justify-center">
          <img className="w-32 md:w-44" src={Slack} alt="slack image" />
        </div>
        <div className="border-gray-200 border px-3 h-24 rounded-xl w-44 flex items-center justify-center">
          <img className="w-32 md:w-44" src={Rippling} alt="rippling image" />
        </div>
        <div
          className="cursor-pointer border-gray-200 border rounded-xl gap-3 w-44 h-24 py-2 flex flex-col items-center justify-center"
          onClick={handleOpen}
        >
          <img
            className="w-7 h-7 mx-8"
            src={AddEmail}
            alt="add email provider icon"
          />
          <p className="w-full mx-4 text-center">EMAIL PROVIDER</p>
        </div>
      </div>
      <LoaderModel
        identifier={
          path === "inviteEmployee"
            ? "inviteEmployeeTable"
            : "importEmployeeTable"
        }
        path={address}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ImportEmployees;
