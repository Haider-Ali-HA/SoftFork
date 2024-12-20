import React from 'react'
import MainHeading from '../../components/common/MainHeading'
import SubHeading from '../../components/common/SubHeading'
import profile1 from "/images/profile1.png"
import ProjectCard from '../../components/Homepage/ProjectCard';
import ButtonOutline from '../../components/common/ButtonOutline';
import FundedCard from '../../components/Homepage/FundedCard';
import Navbar3 from '../../components/common/Navbar3';
import { NavLink } from 'react-router-dom';
import TransactionHistoryTable from './TransactionHistoryTable';

const Fund = () => {

    const projects = [
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
            seriesName: "Pre-Seed"
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
            seriesName: "Series A"
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
            seriesName: "Series C"
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
            seriesName: "Series D"
        },
    ];


    const fundedProjects = [
        {
            title: 'Eco-Friendly Packaging',
            author: 'Square Dashboard',
            authorEmail: 'karson123@gmail.com',
            skills: [
                {
                    name: "UX Design",
                    color: "#7A70BA"
                },
                {
                    name: "3D Design",
                    color: "#48A3D7"
                },
            ],
            daysRemaining: 36,
            profilePhoto: profile1,
            seeded: 2910,
            tasks: 12,
            resolved: 5,
            comments: 7,
        },
        {
            title: 'Virtual Fitness Classes',
            author: 'Cronin Lewis',
            authorEmail: 'cronin324@gmail.com',
            skills: [
                {
                    name: "Illustration",
                    color: "#7A70BA"
                },
                {
                    name: "Video Editing",
                    color: "#D77748"
                },
            ],
            daysRemaining: 30,
            profilePhoto: profile1,
            seeded: 2360,
            tasks: 10,
            resolved: 9,
            comments: 5,
        },
        {
            title: 'Subscription Snack Box',
            author: 'Rau Foster',
            authorEmail: 'raufoster23@gmail.com',
            skills: [
                {
                    name: "2D Design",
                    color: "#C95E9E"
                },
                {
                    name: "Dribble Post",
                    color: "#48A3D7"
                },
            ],
            daysRemaining: 12,
            profilePhoto: profile1,
            seeded: 2002,
            tasks: 16,
            resolved: 10,
            comments: 7,
        },
        {
            title: 'Custom Apparel Printing',
            author: 'Volkman Melissa',
            authorEmail: 'volkman837@gmail.com',
            skills: [
                {
                    name: "Design System",
                    color: "#7A70BA"
                },
                {
                    name: "Branding",
                    color: "#48A3D7"
                },
            ],
            daysRemaining: 6,
            profilePhoto: profile1,
            seeded: 5635,
            tasks: 4,
            resolved: 5,
            comments: 7,
        },
    ];


    return (
        <>
            <Navbar3 />
            <div className="w-full px-4">
                <div className="mt-10"></div>
                <MainHeading text={"Number of Tokens"} />
                <SubHeading text={`Why kept very ever home mrs. Considered \nsympathize ten uncommonly.`} />

                <div className="flex justify-around mt-10 text-center">
                    <div className='w-full'>
                        <p className="text-2xl font-semibold text-light">Available</p>
                        <h2 className="text-4xl text-[#3D434A] font-bold">250</h2>
                    </div>
                    <div className=' w-full border-l-2 border-l-black'>
                        <p className="text-2xl font-semibold text-light">Committed</p>
                        <h2 className="text-4xl text-[#3D434A] font-bold">150</h2>
                    </div>
                    <div className='text-2xl font-semibold w-full border-l-2 border-l-black'>
                        <p className="text-light">Invested</p>
                        <h2 className="text-4xl text-[#3D434A] font-bold">100</h2>
                    </div>
                </div>


                <div className="mt-24"></div>
                <MainHeading text={"Discover Ideas"} />
                <SubHeading text={`Why kept very ever home mrs. Considered \nsympathize ten uncommonly.`} />
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {projects.map((project, index) => (
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

                <div className="w-[10%] mx-auto mt-4 mb-14">
                    <NavLink className="w-full" to="/discover-ideas">
                    <ButtonOutline text="Show All" showIcon />
                    </NavLink>
                </div>


                <MainHeading text={"Your Funded Ideas"} />
                <SubHeading text={`Why kept very ever home mrs. Considered \nsympathize ten uncommonly.`} />

                <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {fundedProjects.map((project, index) => (
                        <FundedCard
                            key={index}
                            title={project.title}
                            author={project.author}
                            authorEmail={project.authorEmail}
                            skills={project.skills}
                            tasks={project.tasks}
                            resolved={project.resolved}
                            comments={project.comments}
                            seeded={project.seeded}
                            daysRemaining={project.daysRemaining}
                            profilePhoto={project.profilePhoto}
                        />
                    ))}
                </div>

                <div className="w-[10%] mx-auto mt-10 mb-14">
                    <ButtonOutline text="Show All" showIcon />
                </div>


                <MainHeading text={"Transaction History"} />
                <SubHeading text={`Why kept very ever home mrs. Considered \nsympathize ten uncommonly.`} />

                <TransactionHistoryTable/>

            </div>
        </>
    )
}

export default Fund
