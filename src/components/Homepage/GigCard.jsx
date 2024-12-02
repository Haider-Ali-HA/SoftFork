import React from 'react'
import ProfileDetail from '../common/ProfileDetail'
import ButtonFilled from '../common/ButtonFilled'
import ButtonOutline from '../common/ButtonOutline'

const GigCard = ({
    title,
    description,
    skills,
    author,
    authorEmail,
    profilePhoto,
    price,
    datePosted,
    showReadMore = false,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="flex justify-between">
    <h3 className="text-3xl text-[#3D434A] font-bold mb-2">{title}</h3>
    <h3 className="text-3xl text-[#3D434A] font-bold mb-2">${price}</h3>
    </div>
    <p className="text-light text-xs mb-4">{description}</p>
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
    <div className="flex items-end  justify-between">
    <ProfileDetail
        profileName={author}
        profileEmail={authorEmail}
        profilePhoto={profilePhoto}
    />
    <p className="text-[#4A4A4A] text-md pb-4 font-semibold">Posted {datePosted}</p>
    </div>
    <div className="flex gap-2 justify-between items-center">
    {showReadMore && (
        <ButtonOutline text="Read More About Gig" />
    )}
        <ButtonFilled text="Apply Now" />
    </div>
</div>
  )
}

export default GigCard
