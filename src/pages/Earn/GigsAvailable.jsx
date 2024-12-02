import React from 'react'
import MainHeading from '../../components/common/MainHeading'
import SubHeading from '../../components/common/SubHeading'
import GigCard from '../../components/Homepage/GigCard'
import ButtonOutline from '../../components/common/ButtonOutline'
import profile1 from "/images/profile1.png"
import Navbar3 from '../../components/common/Navbar3'

const GigsAvailable = () => {

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
        <>
        <Navbar3 showBtn={false}/>
        <div className="w-full px-4">

            <div className="mt-24"></div>
            <MainHeading text={"Gigs Available"} />
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
                        showReadMore={true}
                    />
                ))
                }
            </div>

            <div className="w-[10%] mx-auto mt-10 mb-14">
                <ButtonOutline text="Show All" showIcon />
            </div>

        </div>
        </>
    )
}

export default GigsAvailable
