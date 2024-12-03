import React from 'react'
import { SlOptions } from 'react-icons/sl'
import ProgressBar from '../common/ProgressBar'
import ButtonFilled from '../common/ButtonFilled'

const ProjectCard2 = ({
    title,
    status,
    image,
    description,
    funded,
}) => {

    return (
        <div className='w-full p-1'>
            <div className="flex justify-between">
                <div className="flex gap-6  ">
                    <h3 className='text-lg font-semibold text-[#3D434A]'>{title}</h3>
                    {
                        status === "Seeding" ? (
                            <div className="py-[0.5px]  text-xs text-center text-[#00A2FF] bg-[#48A3D7] bg-opacity-[30%] flex items-center justify-center p-2 px-4 rounded-md">
                                {status}
                            </div>
                        ) : (
                            status === "Funded" ? (
                                <div className="text-[#0DA759] bg-[#0DA759] bg-opacity-[30%] py-[0.5px]  text-xs text-center flex items-center justify-center p-2 px-4 rounded-md">
                                    {status}
                                </div>
                            ) : (
                                status === "Expired" && (
                                    <div className="text-[#D77748] bg-[#D77748] bg-opacity-[30%] py-[0.5px] text-xs text-center flex items-center justify-center p-2 px-4 rounded-md">
                                        {status}
                                    </div>
                                )
                            )
                        )

                    }
                </div>
                <div className=""><SlOptions /></div>
            </div>
            <div className="mt-4">
                <img src={image} alt="" className="w-full object-contain" />
                <p className="mt-2 text-light text-sm">{description}</p>
                <div className="flex justify-between mt-4 mb-1">
                    <p className='font-semibold text-sm'> {funded}% Funded</p>
                    <p className='text-right font-semibold mt-3 text-sm'>Complete...</p>
                </div>
                <ProgressBar funded={funded} color={"#7A70BA"} />
                <ButtonFilled className='mt-2' text="Manage Project" />



            </div>
        </div>
    )
}

export default ProjectCard2
