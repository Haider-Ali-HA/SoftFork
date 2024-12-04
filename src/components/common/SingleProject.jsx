import React from "react";
import ProgressBar from "../../components/common/ProgressBar";
import { PiDotsThreeBold } from "react-icons/pi";

const SingleProject = ({ title, user, tags, tasks, funding, progress }) => {
  return (
    <div>
      <div className=" mx-auto bg-white shadow-[0px_0px_15px_#e2e2e2] w-80 rounded-lg p-4">
        {/* Title */}
        <div className="flex w-full justify-between items-center">
          <h3 className="text-gray-800  text-lg font-semibold">{title}</h3>
          <PiDotsThreeBold className="cursor-pointer" />
        </div>
        {/* User Info */}
        <div className="flex items-center gap-3 mt-3">
          <img
            src={user.image}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="text-gray-700 font-medium">{user.name}</h4>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>
        {/* Tags */}
        <div className="flex items-center gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-100 text-[#6427aa] text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Task Info */}
        <div className="flex items-center justify-between mt-5 text-gray-500 text-sm">
          <span>
            <span className="bg-gray-100 rounded-full px-2 py-1">
              {tasks.total}
            </span>{" "}
            Tasks
          </span>
          <span>
            <span className="bg-gray-100 rounded-full px-2 py-1">
              {tasks.resolved}
            </span>{" "}
            Resolved
          </span>
          <span>
            <span className="bg-gray-100 rounded-full px-2 py-1">
              {tasks.comments}
            </span>{" "}
            Comments
          </span>
        </div>
        {/* Progress Bar */}
        <div className="mt-5 flex flex-col">
          <div className="flex items-end">
            <div className="w-full">
              <p className="text-lg font-bold text-gray-800">
                {funding.amountSeeded}
              </p>
            </div>
            <div className="flex flex-col w-full items-end">
              <p className="text-gray-500 text-sm">
                {funding.percentageFunded}
              </p>
              <p className="text-gray-500 text-sm">{funding.daysRemaining}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
            <ProgressBar
              total={progress.total}
              fill={progress.fill}
              color={progress.color}
              inPercent={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
