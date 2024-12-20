import React from 'react'

const ProfileDetail = ({profileName,profileEmail,profilePhoto}) => {
  return (
    <div className="flex items-center mb-4">
          <img src={profilePhoto} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
          <div>
            <h3 className="text-md font-medium">{profileName}</h3>
            <p className="text-gray-500 text-xs">{profileEmail}</p>
          </div>
        </div>
  )
}

export default ProfileDetail
