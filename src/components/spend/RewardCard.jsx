import React from 'react'
import ButtonFilled from '../common/ButtonFilled'

const RewardCard = ({image}) => {
    return (
        <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
            <div className="w-full bg-red-100 rounded-lg">
            <img src={image} alt="reward" className='w-full rounded-lg object-cover aspect-[3/2]' />
            </div>
            <ButtonFilled text="Redeem Now" />
        </div>
    )
}

export default RewardCard
