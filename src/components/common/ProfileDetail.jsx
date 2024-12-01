import React from 'react'

const ProfileDetail = ({profileName,profileEmail,profilePhoto}) => {
  return (
    <div className="flex items-center mb-4">
          <img src={profilePhoto} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-medium">{profileName}</h3>
            <p className="text-gray-500 text-sm">{profileEmail}</p>
          </div>
        </div>
  )
}

export default ProfileDetail
