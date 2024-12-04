import React from "react";
import MainHeading from "../../components/common/MainHeading";
import SubHeading from "../../components/common/SubHeading";
import ButtonFilled from "../../components/common/ButtonFilled";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="font-gilroy min-h-full">
      <div className="flex flex-col items-center py bg-white rounded-xl shadow-[0px_0px_20px_#e2e2e2]  justify-center gap-5 h-[80vh]">
        <MainHeading text="No Project Found" />
        <SubHeading text="This list is currently empty. Click the 'Create a New Project' button to start a new project." />
        <Link to="/admin/show-all-projects">
          <ButtonFilled
            className=" h-12 md:h-14 sm:text-xl"
            text="Create a New Project"
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
