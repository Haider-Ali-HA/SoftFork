import React from 'react'
import MainHeading from '../../components/common/MainHeading'
import SubHeading from '../../components/common/SubHeading'
import profile1 from "/images/profile1.png"
import ProjectCard from '../../components/Homepage/ProjectCard';
import ButtonOutline from '../../components/common/ButtonOutline';
import GigCard from '../../components/Homepage/GigCard';
import CreateLaunchProject from '../../components/common/CreateLaunchProject';



const Homepage = () => {
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
            profilePhoto: profile1
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
            profilePhoto: profile1
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
            profilePhoto: profile1
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
            profilePhoto: profile1
        },
    ];

    const gigs = [
        {
            title: "Hifi UX Mockups",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
            skills: ["UI/UX Design", "Figma", "Prototype"],
            author: "Square Dashboard",
            authorEmail: "karson123@gmail.com",
            profilePhoto: profile1,
            price: 2910,
            datePosted: "3 days ago"
        },
        {
            title: "Mobile App Development",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
            skills: ["UI/UX Design", "Figma", "Prototype"],
            author: "Square Dashboard",
            authorEmail: "karson123@gmail.com",
            profilePhoto: profile1,
            price: 5985,
            datePosted: "3 days ago"
        },
        {
            title: "Hifi UX Mockups",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
            skills: ["UI/UX Design", "Figma", "Prototype"],
            author: "Square Dashboard",
            authorEmail: "karson123@gmail.com",
            profilePhoto: profile1,
            price: 2910,
            datePosted: "3 days ago"
        },
        {
            title: "Mobile App Development",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
            skills: ["UI/UX Design", "Figma", "Prototype"],
            author: "Square Dashboard",
            authorEmail: "karson123@gmail.com",
            profilePhoto: profile1,
            price: 5985,
            datePosted: "3 days ago"
        },

    ]

    return (
        <div className="w-full px-4">
            <div className="mt-6"></div>
            <MainHeading text={"Ideas For Funding"} />
            <SubHeading text={`Why kept very ever home mrs. Considered \nsympathize ten uncommonly.`} />
            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                    />
                ))}
            </div>

            <div className="w-[10%] mx-auto mt-8 mb-12">
                <ButtonOutline text="Show All" showIcon />
            </div>


            <MainHeading text={"Gigs for Apply"} />
            <SubHeading text={`Why kept very ever home mrs. Considered \nsympathize ten uncommonly.`} />

            <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-4">
                {gigs.map((gig, index) => (
                    <GigCard key={index} title={gig.title}
                        description={gig.description}
                        skills={gig.skills}
                        author={gig.author}
                        authorEmail={gig.authorEmail}
                        profilePhoto={gig.profilePhoto}
                        price={gig.price}
                        datePosted={gig.datePosted}
                    />
                ))
                }
            </div>

            <div className="w-[10%] mx-auto mt-12 mb-14">
                <ButtonOutline text="Show All" showIcon />
            </div>

            <CreateLaunchProject />



        </div>
    );
};

export default Homepage;