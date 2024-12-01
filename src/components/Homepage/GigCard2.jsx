import React from 'react'
import ProfileDetail from '../common/ProfileDetail'
import ButtonFilled from '../common/ButtonFilled'
import ButtonOutline from '../common/ButtonOutline'

const GigCard2 = ({
    key,
    title,
    author,
    authorEmail,
    profilePhoto,
    status,
    price,
    duration,
}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 m-1">

            <div className="grid grid-cols-2">
                <div className="">
                    <h3 className="text-3xl text-[#3D434A] font-bold mb-2">{title}</h3>
                    <ProfileDetail
                        profileName={author}
                        profileEmail={authorEmail}
                        profilePhoto={profilePhoto}
                    />
                    <p className='text-sm text-light'>{duration}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                    {status === "Active" ? (
                        <div className="px-1 py-2 border border-[#0da64d] rounded-md bg-[#0da64d] bg-opacity-[10%] flex items-center justify-center">{status}</div>
                    ) : (
                        <div className="px-1 py-2 bg-[#FF0000] bg-opacity-[10%] flex items-center justify-center">{status}</div>
                    )}
                    <div className="flex flex-col items-end">
                        <h3 className="text-3xl text-[#3D434A] font-bold mb-2">${price}</h3>
                        <h6 className="text-lg text-[#3D434A] font-bold mb-2">Fixed</h6>
                    </div>
                </div>
            </div>
            <div className="w-[30%] gap-2 mx-auto flex items-start">
                <ButtonOutline text="View Project Details" />
                <ButtonFilled text="Upload Work" />

            </div>
        </div>
    )
}

export default GigCard2
