import React from "react";
import CreateLaunchProject from "../../components/common/CreateLaunchProject";
import ButtonOutline from "../../components/common/ButtonOutline";
import { Link } from "react-router-dom";

const AdminCreateProject = () => {
  return (
    <div className="min-h-full  bg-white shadow-[0px_0px_20px_#e2e2e2] p-5 py-20">
      <CreateLaunchProject />

      <div className="w-48 mx-auto mt-8 mb-12">
        <Link to="/admin/create-single-project">
          <ButtonOutline text="Create Project" showIcon />
        </Link>
      </div>
    </div>
  );
};

export default AdminCreateProject;
