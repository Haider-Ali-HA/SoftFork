import React from 'react'
import CreateLaunchProject from '../../components/common/CreateLaunchProject'
import { Tooltip } from '@mui/material'
import filterIcon from "/icons/Filter.png"
import MainHeading from '../../components/common/MainHeading'
import SubHeading from '../../components/common/SubHeading'
import searchIcon from "/icons/Search.png"
import webDesign from "/images/webDesign.png"
import appDesign from "/images/appDesign.png"
import logoDesign from "/images/logoDesign.png"
import webDevelopement from "/images/webDevelopment.png"
import ButtonOutline from '../../components/common/ButtonOutline'
import ProjectCard2 from '../../components/build/ProjectCard2'
import Navbar3 from '../../components/common/Navbar3'

const Build = () => {


    return (
        <>
            <Navbar3 />
            <div className="w-full px-4">
                <CreateLaunchProject />

                <MainHeading text={"Manage Projects"} />
                <SubHeading text={`Bring your idea to life and connect with \nbackers ready to fund your vision.`} />
                <div className="mb-8"></div>

                <div className="flex gap-5 w-full justify-end">
                    <Tooltip title="Filter list">
                        <button
                            className="border px-6 h-11 text-base rounded-lg flex gap-2 items-center justify-center border-gray-500"
                        >
                            <img src={filterIcon} alt="filter icon" />
                            Filter
                        </button>
                    </Tooltip>

                    <Tooltip title="Search">
                        <div className="relative rounded-lg">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <img src={searchIcon} alt="search icon" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search…"
                                aria-label="search"
                                className="pl-10 pr-3 py-2 w-40 border border-gray-400 rounded-md outline-none"
                            />
                        </div>
                    </Tooltip>
                </div>

                {/* project cards 2 */}

                <div className="w-[13%] mx-auto mt-8 mb-12">
                    <ButtonOutline text="Create Project" showIcon />
                </div>

                <div className="grid grid-cols-1 p-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {
                        projectsData.map((project, index) => (
                            <ProjectCard2
                                key={index}
                                title={project.title}
                                status={project.status}
                                image={project.image}
                                description={project.description}
                                funded={project.funded}
                            />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Build

const projectsData = [
    {
        title: 'Website Design',
        status: "Seeding",
        image: webDesign,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        funded: 99,
    },
    {
        title: 'Logo Design',
        status: "Funded",
        image: logoDesign,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        funded: 99,
    },
    {
        title: 'Web Developement',
        status: "Expired",
        image: webDevelopement,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        funded: 99,
    },
    {
        title: 'App Design',
        status: "Seeding",
        image: appDesign,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        funded: 99,
    },
    {
        title: 'Web Developement',
        status: "Expired",
        image: webDevelopement,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        funded: 99,
    },
    {
        title: 'App Design',
        status: "Funded",
        image: appDesign,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        funded: 99,
    },
    {
        title: 'Website Design',
        status: "Seeding",
        image: webDesign,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        funded: 99,
    },
    {
        title: 'Logo Design',
        status: "Funded",
        image: logoDesign,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        funded: 99,
    },

]
