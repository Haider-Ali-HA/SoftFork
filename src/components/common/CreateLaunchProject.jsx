import React from 'react'
import ButtonOutline from './ButtonOutline'
import MainHeading from './MainHeading'
import SubHeading from './SubHeading'
import one from "/icons/one.png"
import two from "/icons/two.png"
import three from "/icons/three.png"



const CreateLaunchProject = () => {
    return (
        <div>
            <div className="mt-6"></div>
            <MainHeading text={"Create and Launch Your Project Idea."} />
            <SubHeading text={`Bring your idea to life and connect with \nbackers ready to fund your vision.`} />
            <div className="mb-4"></div>

            <div className=" py-12">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-3 px-1 items-center max-sm:w-fit  max-sm:mx-auto ">
                        {/* Step 1 */}
                        <div className="relative flex flex-col items-start ">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 w-full h-1 bg-purple-600 hidden sm:block">
                                <div className="absolute -top-5 right-1/2">
                                    <div className="bg-[#F4F4F4] p-3 rounded-md flex items-center jusify-center">
                                        <div className="p-2 bg-[#C4C4C4] rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10">
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-800">Post Your Idea</h3>
                            <p className="text-gray-500 -mt-2 text-left">
                                Provide a pitch, video, and <br /> project details.
                            </p>
                        </div>

                        <div className="w-[40%] max-sm:w-[50%]">
                            <img src={one} alt="" className='' />
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex flex-col items-start ">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 w-full h-1 bg-purple-600 hidden sm:block">
                                <div className="absolute -top-5 right-[20%]">
                                    <div className="bg-[#F4F4F4] p-3 rounded-md flex items-center jusify-center">
                                        <div className="p-2 bg-[#C4C4C4] rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10">
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-800">Engage Funders</h3>
                            <p className="text-gray-500 mt-2 text-left">
                                Your project is visible <br /> to backers.
                            </p>
                        </div>

                        <div className="w-[55%] max-sm:w-[50%]">
                            <img src={two} alt="" className='' />
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex flex-col items-start">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 w-full h-1 bg-purple-600 hidden sm:block">
                                <div className="absolute -top-5 right-[30%]">
                                    <div className="bg-[#F4F4F4] p-3 rounded-md flex items-center jusify-center">
                                        <div className="p-2 bg-[#C4C4C4] rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10">
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-800">Receive Funding</h3>
                            <p className="text-gray-500 mt-2 text-left">
                                Get support and bring <br /> your idea to life.
                            </p>
                        </div>

                        <div className="w-[55%] max-sm:w-[50%]">
                            <img src={three} alt="" className='' />
                        </div>

                    </div>
                </div>
            </div>


            <div className="w-[13%] mx-auto mt-8 mb-12">
                <ButtonOutline text="Create Project" showIcon />
            </div>

        </div>
    )
}

export default CreateLaunchProject
