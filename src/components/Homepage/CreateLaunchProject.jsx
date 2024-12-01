import React from 'react'
import ButtonOutline from '../common/ButtonOutline'
import MainHeading from '../common/MainHeading'
import SubHeading from '../common/SubHeading'

const CreateLaunchProject = () => {
    return (
        <div>
            <div className="mt-6"></div>
            <MainHeading text={"Create and Launch Your Project Idea."} />
            <SubHeading text={`Bring your idea to life and connect with \nbackers ready to fund your vision.`} />



            <div className="w-[10%] mx-auto mt-10 mb-14">
                <ButtonOutline text="Show All" showIcon />
            </div>
        </div>
    )
}

export default CreateLaunchProject
