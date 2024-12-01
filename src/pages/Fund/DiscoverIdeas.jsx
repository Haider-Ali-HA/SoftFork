import React from 'react'
import MainHeading from '../../components/common/MainHeading'
import SubHeading from '../../components/common/SubHeading'
import profile1 from "/images/profile1.png"
import ProjectCard from '../../components/Homepage/ProjectCard';
import { Tooltip } from '@mui/material';
import filterIcon from "/icons/Filter.png"
import searchIcon from "/icons/Search.png"

const DiscoverIdeas = () => {

    const projectsData = [
        {
            title: 'Website Design',
            author: 'Square Dashboard',
            authorEmail: 'karson123@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 2910,
            funded: 99,
            daysRemaining: 36,
            barColor: "#7A70BA",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        {
            title: 'Social Post Design',
            author: 'Cronin Lewis',
            authorEmail: 'cronin324@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 2360,
            funded: 50,
            daysRemaining: 30,
            barColor: "#48A3D7",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        {
            title: 'Podcast Web Design',
            author: 'Rou Foster',
            authorEmail: 'cronin324@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 2002,
            funded: 30,
            daysRemaining: 12,
            barColor: "#D77748",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        {
            title: 'Crypto Dashboard',
            author: 'Volkman Melissa',
            authorEmail: 'volkman@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 55635,
            funded: 40,
            daysRemaining: 0,
            barColor: "#C95E9E",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        {
            title: 'Website Design',
            author: 'Square Dashboard',
            authorEmail: 'karson123@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 2910,
            funded: 99,
            daysRemaining: 36,
            barColor: "#7A70BA",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        {
            title: 'Social Post Design',
            author: 'Cronin Lewis',
            authorEmail: 'cronin324@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 2360,
            funded: 50,
            daysRemaining: 30,
            barColor: "#48A3D7",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        {
            title: 'Podcast Web Design',
            author: 'Rou Foster',
            authorEmail: 'cronin324@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 2002,
            funded: 30,
            daysRemaining: 12,
            barColor: "#D77748",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        {
            title: 'Crypto Dashboard',
            author: 'Volkman Melissa',
            authorEmail: 'volkman@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 55635,
            funded: 40,
            daysRemaining: 0,
            barColor: "#C95E9E",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        {
            title: 'Website Design',
            author: 'Square Dashboard',
            authorEmail: 'karson123@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 2910,
            funded: 99,
            daysRemaining: 36,
            barColor: "#7A70BA",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        {
            title: 'Social Post Design',
            author: 'Cronin Lewis',
            authorEmail: 'cronin324@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 2360,
            funded: 50,
            daysRemaining: 30,
            barColor: "#48A3D7",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        {
            title: 'Podcast Web Design',
            author: 'Rou Foster',
            authorEmail: 'cronin324@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 2002,
            funded: 30,
            daysRemaining: 12,
            barColor: "#D77748",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        {
            title: 'Crypto Dashboard',
            author: 'Volkman Melissa',
            authorEmail: 'volkman@gmail.com',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
            requiredAmount: 55635,
            funded: 40,
            daysRemaining: 0,
            barColor: "#C95E9E",
            profilePhoto: profile1,
            seriesName:"Pre-Seed"
        },
        
    ];


    return (
        <div className="w-full">
            <div className="mt-6"></div>

            <MainHeading text={"Discover Ideas"} />
            <SubHeading text={`Why kept very ever home mrs. Considered \nsympathize ten uncommonly.`} />

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

            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        author={project.author}
                        authorEmail={project.authorEmail}
                        description={project.description}
                        requiredAmount={project.requiredAmount}
                        daysRemaining={project.daysRemaining}
                        funded={project.funded}
                        barColor={project.barColor}
                        profilePhoto={project.profilePhoto}
                        showSeries={true}
                        seriesName={project.seriesName}
                    />
                ))}
            </div>
        </div>
    )
}

export default DiscoverIdeas
