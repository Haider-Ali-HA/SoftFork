import React from "react";
import MainHeading from "../../components/common/MainHeading";
import SubHeading from "../../components/common/SubHeading";
import ButtonFilled from "../../components/common/ButtonFilled";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="md:p-5 font-gilroy">
      <div className="flex flex-col items-center py rounded-xl shadow-2xl shadow-[#d6d5d5]  justify-center gap-5 h-[80vh]">
        <MainHeading text="No Project Found" />
        <SubHeading text="This list is currently empty. Click the 'Create a New Project' button to start a new project." />
        <Link to="/admin/show-all-projects">
          <ButtonFilled text="Create a New Project" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;