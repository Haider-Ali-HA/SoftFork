import React from "react";
import ProgressBar from "../common/ProgressBar";
import ButtonFilled from "../common/ButtonFilled";
import ProfileDetail from "../common/ProfileDetail";
import { SlOptions } from "react-icons/sl";


const ProjectCard = ({
  title,
  author,
  authorEmail,
  description,
  requiredAmount,
  daysRemaining,
  funded,
  barColor,
  profilePhoto,
  showSeries = false,
  seriesName
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
      <SlOptions  className="absolute top-2 right-2 cursor-pointer" color="#9B9B9B"/>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {
          showSeries ? (
            <div className="flex justify-between items-center">
              <ProfileDetail profileName={author} profileEmail={authorEmail} profilePhoto={profilePhoto} />
              <div className="bg-[#7A70BA] bg-opacity-[10%] rounded-md text-[#7A70BA] flex items-center justify-center p-2 text-sm">
                {seriesName}
              </div>
            </div>
          ) : (
            <>
              <ProfileDetail profileName={author} profileEmail={authorEmail} profilePhoto={profilePhoto} />
            </>
          )
        }
        <p className="text-light text-xs mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-[#3D434A] font-bold text-lg">${requiredAmount} Required</p>
          <div className="text-right">
            <p className="text-gray-500 text-sm">{funded}% Funded</p>
            <p className="text-gray-500 text-sm">{daysRemaining} Days remaining</p>
          </div>
        </div>
        <ProgressBar fill={funded} color={barColor} />
        <div className="w-full mt-4">
          <ButtonFilled text="Fund a Project" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;