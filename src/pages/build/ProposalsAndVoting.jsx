import { Tooltip } from '@mui/material'
import React from 'react'
import searchIcon from "/icons/Search.png"
import filterIcon from "/icons/Filter.png"
import Navbar3 from '../../components/common/Navbar3'
import MainHeading from '../../components/common/MainHeading'
import SubHeading from '../../components/common/SubHeading'
import ProposalVotingCard from '../../components/build/ProposalVotingCard'
import profile1 from "/images/profile1.png"
import ButtonFilled from '../../components/common/ButtonFilled'
import ButtonOutline from '../../components/common/ButtonOutline'

const ProposalsAndVoting = () => {

  const gigs = [
    {
      title: "Hifi UX Mockups",
      project: 'Chatbot AI for Healthcare',
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
      skills: ["UI/UX Design", "Figma", "Prototype"],
      author: "Square Dashboard",
      authorEmail: "karson123@gmail.com",
      profilePhoto: profile1,
      price: 2910,
      deadline: "25/12/2024"
    },
    {
      title: "Mobile App Development",
      project: 'Chatbot AI for Healthcare',
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
      skills: ["UI/UX Design", "Figma", "Prototype"],
      author: "Square Dashboard",
      authorEmail: "karson123@gmail.com",
      profilePhoto: profile1,
      price: 5985,
      deadline: "25/12/2024"
    },
    {
      title: "Hifi UX Mockups",
      project: 'Chatbot AI for Healthcare',
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
      skills: ["UI/UX Design", "Figma", "Prototype"],
      author: "Square Dashboard",
      authorEmail: "karson123@gmail.com",
      profilePhoto: profile1,
      price: 2910,
      deadline: "25/12/2024",

    },
    {
      title: "Mobile App Development",
      project: 'Chatbot AI for Healthcare',
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
      skills: ["UI/UX Design", "Figma", "Prototype"],
      author: "Square Dashboard",
      authorEmail: "karson123@gmail.com",
      profilePhoto: profile1,
      price: 5985,
      deadline: "25/12/2024"
    },
  ]


  return (
    <>
      <Navbar3 />
      <div className="w-full px-4">
        <div className="mt-5"></div>
        <MainHeading text={"Proposals & Voting"} />
        <SubHeading
          text={`Bring your idea to life and connect with \nbackers ready to fund your vision.`}
        />
        <div className="mb-10 mt-8">
          <div className="">
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
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-1">
          {
            gigs.map((gig, index) => (
              <ProposalVotingCard
                key={index}
                title={gig.title}
                project={gig.project}
                description={gig.description}
                skills={gig.skills}
                author={gig.author}
                authorEmail={gig.authorEmail}
                profilePhoto={gig.profilePhoto}
                price={gig.price}
                deadline={gig.deadline}
              />
            ))
          }
        </div>

        <div className="w-48 mx-auto mt-4">
          <ButtonOutline text={"Create Project"} />
        </div>

      </div>
    </>
  )
}

export default ProposalsAndVoting
