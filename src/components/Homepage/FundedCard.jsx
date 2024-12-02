import React from 'react'
import notificationIcon from "/icons/notification.png"
import ProfileDetail from '../common/ProfileDetail';
import { SlOptions } from 'react-icons/sl';
import ButtonFilled from '../common/ButtonFilled';

const FundedCard = ({
    title,
    author,
    authorEmail,
    skills, //array
    tasks, //number
    resolved, //number
    comments, //number
    seeded, //number
    daysRemaining,
    profilePhoto,
    key
}) => {
    return (
        <div key={key} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
            <SlOptions className="absolute top-2 right-2 cursor-pointer" color="#9B9B9B" />
            <div className="p-1">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <div className="flex justify-between items-center">
                    <ProfileDetail profileName={author} profileEmail={authorEmail} profilePhoto={profilePhoto} />
                    <img src={notificationIcon} alt="" />
                </div>

                <div className="flex gap-2 p-1 py-2">
                {skills.map((skill, index) => (
                   <div
                   key={index}
                   className={`rounded-md flex items-center justify-center p-2 text-sm mt-2`}
                   style={{
                     backgroundColor: `${skill.color}1A`, // Adding opacity to the background
                     color: skill.color, // Setting the text color
                   }}
                 >
                   {skill.name}
                 </div>
                ))}
                </div>

                <div className="flex justify-between py-2">
                    <div className="flex gap-1 items-center">
                        <p className='px-1 bg-[#F4F7F9]'>{tasks}</p>
                        <p className='text-light'>Tasks</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <p className='px-1 bg-[#F4F7F9]'>{resolved}</p>
                        <p className='text-light'>Resolved</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <p className='px-1 bg-[#F4F7F9]'>{comments}</p>
                        <p className='text-light'>Comment</p>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <p className="text-[#3D434A] font-bold text-lg">${seeded} Seeded</p>
                    <div className="text-right">
                        <p className="text-gray-500 text-sm">{daysRemaining} Days remaining</p>
                    </div>
                </div>
                <div className="w-full mt-4">
                    <ButtonFilled text="View Details" />
                </div>
            </div>
        </div>
    );
};

export default FundedCard
