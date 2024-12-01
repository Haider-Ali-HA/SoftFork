import React from 'react'
import ButtonOutline from '../../components/common/ButtonOutline'
import MainHeading from '../../components/common/MainHeading'
import SubHeading from '../../components/common/SubHeading'
import GigCard from '../../components/Homepage/GigCard'
import profile1 from "/images/profile1.png"
import GigCard2 from '../../components/Homepage/GigCard2'

const Earn = () => {

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


    const myGigs = [
        {
            title: "Mobile App Development",
            author: "Square Dashboard",
            authorEmail: "karson123@gmail.com",
            profilePhoto: profile1,
            price: 500,
            duration: "May 8, 2024 - Present",
            status: "Active"
        },
        {
            title: "Web Front-End Development",
            author: "Square Dashboard",
            authorEmail: "karson123@gmail.com",
            profilePhoto: profile1,
            price: 200,
            duration: "May 8, 2024 - Present",
            status: "Active"
        },
    ]


    return (
        <div className="w-full">
            <div className="mt-10"></div>
            <MainHeading text={"Metrics"} />
            <SubHeading text={`Your Current Progress`} />

            <div className="flex justify-around mt-10 text-center">
                <div className='w-full'>
                    <p className="text-2xl font-semibold text-light">Total Earned</p>
                    <h2 className="text-4xl text-[#3D434A] font-bold">$250</h2>
                </div>
                <div className=' w-full border-l-2 border-l-black'>
                    <p className="text-2xl font-semibold text-light">Gigs Completed</p>
                    <h2 className="text-4xl text-[#3D434A] font-bold">07</h2>
                </div>
                <div className='text-2xl font-semibold w-full border-l-2 border-l-black'>
                    <p className="text-light">Current Gigs</p>
                    <h2 className="text-4xl text-[#3D434A] font-bold">03</h2>
                </div>
                <div className='text-2xl font-semibold w-full border-l-2 border-l-black'>
                    <p className="text-light">Gigs Proposed</p>
                    <h2 className="text-4xl text-[#3D434A] font-bold">08</h2>
                </div>
            </div>


            <div className="mt-24"></div>
            <MainHeading text={"Gigs for Apply"} />
            <SubHeading text={`Explore Gigs and Collaborate \nwith Founders`} />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
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

            <div className="w-[10%] mx-auto mt-10 mb-14">
                <ButtonOutline text="Show All" showIcon />
            </div>


            <MainHeading text={"My Gigs"} />
            <SubHeading text={`Gigs which got accepted`} />

            <div className="flex flex-col">
                {myGigs.map((gig, index) => (
                    <GigCard2 key={index} title={gig.title}
                        author={gig.author}
                        authorEmail={gig.authorEmail}
                        profilePhoto={gig.profilePhoto}
                        status="Active"
                        price={gig.price}
                        duration={gig.duration}
                    />
                ))
                }
            </div>



            <div className="mt-14"></div>
            <MainHeading text={"My Proposals"} />
            <SubHeading text={`Proposals dispatched from \nyour end`} />


        </div>
    )
}

export default Earn
