import React from 'react'
import ProfileDetail from '../common/ProfileDetail'
import ButtonFilled from '../common/ButtonFilled'
import ButtonOutline from '../common/ButtonOutline'
import { NavLink } from 'react-router-dom'

const ProposalVotingCard = ({
    title,
    project,
    description,
    skills,
    author,
    authorEmail,
    profilePhoto,
    price,
    deadline,
}) => {
    return (
        <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between">
                <h3 className="text-3xl text-[#3D434A] font-bold mb-2">{title}</h3>
                <h3 className="text-3xl text-[#3D434A] font-bold mb-2">${price}</h3>
            </div>
            <p className="text-light text-xs mb-4">{description}</p>
            <div className="flex justify-between ">
                <div className="flex flex-wrap gap-2 mb-4">
                    {skills.map((skill, skillIndex) => (
                        <div
                            key={skillIndex}
                            className="bg-[#404040] bg-opacity-[70%] text-white px-4 py-2 rounded-md text-sm"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
                <p className='mt-2 font-semibold text-[#3D434A]'>Project: {project}</p>
            </div>
            <div className="flex items-end justify-between ">
                <ProfileDetail
                    profileName={author}
                    profileEmail={authorEmail}
                    profilePhoto={profilePhoto}
                />
            </div>
            <p className="text-[#4A4A4A] text-sm text-right pb-1 -mt-4 font-semibold">Voting Deadline: {deadline}</p>
            <div className="flex gap-2 justify-between items-center">
                <NavLink className="w-full" to="#">
                    <ButtonOutline text="Delete" />
                </NavLink>
                <NavLink className="w-full" to="#">
                    <ButtonFilled text="Edit" />
                </NavLink>
            </div>
        </div>
    )
}

export default ProposalVotingCard
