import React, { useState } from 'react'
import Navbar3 from '../../components/common/Navbar3'
import MainHeading from '../../components/common/MainHeading'
import SubHeading from '../../components/common/SubHeading'
import ProfileDetail from '../../components/common/ProfileDetail'
import profile1 from "/images/profile1.png"
import ProgressBar from '../../components/common/ProgressBar'
import ButtonOutline from '../../components/common/ButtonOutline'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { PiSmiley } from 'react-icons/pi'
import { BsSendArrowUpFill } from 'react-icons/bs'
import TextareaField2 from '../../components/common/TextAreaField.2'
import ButtonFilled from '../../components/common/ButtonFilled'
import videoImg from "/images/video.png"
import playIcon from "/images/playIcon.png"
import banner from "/images/banner.png"
import whiteOverlay from "/images/whiteOverlay.png"
import { useNavigate } from 'react-router-dom'
import discussionBanner from "/images/discussionBanner.png"
import webDesign from "/images/webDesign.png"
import ProposeTaskModel from '../build/ProposeTaskModel'
import TaskTable from './TaskTable'
import BackerTable from '../build/BackerTable'
import Comments from '../../components/common/Comments'

const ProjectDetailsBuild2 = () => {
    const [open,setOpen] = useState(false);
    

    const [noOfMilestonesToShow, setNoOfMilestonesToShow] = useState(1);
    const navigate = useNavigate()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClickPublish = () => {
        navigate("/build/proposals-and-voting")
    }

    return (
        <>
            <Navbar3 />
            <div className="w-full max-w-6xl mx-auto">

                <div className="relative">
                    <h4 className={`text-lg w-full text-left md:text-xl font-gilroy font-bold absolute top-4 left-20`}>
                        <span className='text-light mr-10'>My Role:</span> <span className='text-light mr-10'>Tokens:</span>
                        <br />
                        <span className='text-[#3D434A] mr-10 text-2xl'>Founder</span> <span className='text-[#3D434A] mr-10 text-2xl'>150</span>
                    </h4>

                    <MainHeading text={projectData.title} />
                    <div className="mx-auto w-fit mt-1">
                        <div className="px-2 px-1 text-[#00A2FF] border border-[#00A2FF] rounded-lg bg-[#00A2FF] bg-opacity-[30%]">
                            {projectData.status}
                        </div>
                    </div>
                    <div className="mb-6"></div>

                    <div className="relative rounded-3xl ">
                        <img
                            src={webDesign}
                            className="w-full h-80 object-cover rounded-3xl mx-auto"
                            poster={videoImg} // Replace with your preview image URL
                        />
                    </div>

                    {/* tags */}
                    <h4 className='mt-4 mb-2 font-semibold text-lg'>Project Tags:</h4>
                    <div className="mb-4 flex gap-2">
                        {
                            projectData.projectTags.map((tag, i) => (
                                <div className="p-2 text-white text-sm max-sm:text-xs bg-black rounded-lg">
                                    {tag}
                                </div>
                            ))
                        }
                    </div>
                    <div className="h-[.75px] mb-10 bg-black w-full"></div>

                    {/* short description */}
                    <h2 className=" mt-10 text-xl text-[#3D434A] font-bold">Short Description</h2>
                    <p className='mt-1 text-[#5A5A5A] text-xs sm:text-sm'>{projectData.shortDescription}</p>

                    <p className='font-semibold text-right'>{projectData.funded}%</p>
                    <ProgressBar fill={projectData.funded} color="#7A70BA" />
                    <div className="grid sm:grid-cols-3 grid-cols-1  mt-10 text-center">
                        <div className='w-full text-left px-2 md:pl-4' >
                            <p className="text-xl font-semibold text-light">Funding Raised:</p>
                            <h2 className="text-3xl text-[#3D434A] font-bold">${projectData.fundedNeeded}</h2>
                        </div>
                        <div className=' w-full border-l-2 border-l-black text-left px-2 md:pl-4'>
                            <p className="text-xl font-semibold text-light">Start 
                                Date
                            </p>
                            <h2 className="text-3xl text-[#3D434A] font-bold">25/08/2024</h2>
                        </div>
                        <div className='text-xl font-semibold w-full border-l-2 border-l-black text-left pl-5'>
                            <p className="text-light">End Date</p>
                            <h2 className="text-3xl text-[#3D434A] font-bold">{projectData.fundingDeadline}</h2>
                        </div>
                      
                    </div>




                    {/* Project Milestons */}
                    <h2 className=" mt-10 mb-8 text-3xl text-black text-center font-bold">Milestones for the Project</h2>

                    {
                        projectData.milestones.map((milestone, index) => (
                            <div className="shadow-md p-4 mt-2 rounded-lg">
                                <div className="flex justify-between">
                                    <h2 className=" mb-4 text-lg text-[#121212] font-bold">Milestone {index + 1}: {milestone.title}</h2>
                                    {
                                        (index + 1) >= noOfMilestonesToShow ? (
                                            <button
                                                type="button"
                                                className="p-2 px-3  bg-gray-300 rounded-full flex items-center justify-center
                                                "
                                                onClick={() => setNoOfMilestonesToShow(noOfMilestonesToShow + 1)}
                                            >
                                                <FaPlus size={12} />
                                            </button>
                                        ) : null
                                    }
                                </div>
                                {
                                    ((index + 1) <= noOfMilestonesToShow) && (
                                        <div>
                                            <p className='mt-1 mb-4 text-[#5A5A5A] text-xs sm:text-sm'>{milestone.description}</p>
                                            <h2 className=" mb-4 text-lg text-[#121212] font-bold">Requirements</h2>
                                            <p className=' mb-4 text-[#5A5A5A] text-xs sm:text-sm'>{milestone.requirements}</p>
                                            <div className=" mb-4 flex max-sm:gap-3 gap-8">
                                                <div className="">
                                                    <h2 className=" mb-4 text-lg text-[#121212] font-bold">Starting Date</h2>
                                                    <p className='text-[#121212]'>{milestone.startingDate}</p>
                                                </div>
                                                <div className="">
                                                    <h2 className=" mb-4 text-lg text-[#121212] font-bold">Ending Date</h2>
                                                    <p className='text-[#121212]'>{milestone.endingDate}</p>
                                                </div>
                                            </div>

                                            <h2 className=" mb-4 text-lg text-[#121212] font-bold">Completion Deliverable:</h2>
                                            <p className=' mb-4 text-[#5A5A5A] text-xs sm:text-sm'>{milestone.completionDeliverable}</p>

                                            <h2 className=" mb-4 text-lg text-[#121212] font-bold">Queries from Backers:</h2>
                                            <Comments/>

                                            <div className="relative w-full font-gilroy">
                                                <input
                                                    type="text"
                                                    className="w-full mt-2 border border-[#ADADAD] rounded-lg placeholder:text-[#808080] pl-12 px-4 py-3 md:py-4 outline-none"
                                                    placeholder="Type Comment here.."
                                                />
                                                <span
                                                    className="absolute left-4 top-[48%] cursor-pointer flex items-center gap-3 "
                                                >
                                                    <FaPlus className="text-sm" color='#772787' />

                                                </span>
                                                <span
                                                    className="absolute right-4 top-[30%] cursor-pointer flex items-center gap-3"
                                                >

                                                    <PiSmiley className="text-xl" />

                                                    <div className="bg-primary p-2 sm:p-3 rounded-md flex items-center justify-center">
                                                        <BsSendArrowUpFill color='white' />
                                                    </div>
                                                </span>
                                            </div>

                                        </div>
                                    )
                                }
                            </div>

                        ))
                    }

                    <h2 className=" mt-10 mb-6 text-3xl text-black text-center font-bold">Discussion</h2>
                    <img src={discussionBanner} alt="" className='w-full h-full object-cover'/>



                    <TaskTable/>

                
                    <BackerTable/>

                
                
                    <h2 className=" mt-10 mb-6 text-3xl text-black text-center font-bold">Gig Worker</h2>



                    <ProposeTaskModel
                    open={open}
                    handleClose={handleClose}
                />

                </div>

            </div>

        </>
    )
}

export default ProjectDetailsBuild2


const projectData = {
    title: "Website Design",
    status:"Seeding",
    role:"Founder",
    tokens:150,
    authorPhoto: profile1,
    image:webDesign,
    projectTags: ["Deadline Passed", "Fund Completed"],
    funded: 80,
    fundedNeeded: 5635,
    collectedFunds: 3520,
    fundingDeadline: "25/08/2024",
    startingDate: '25/09/2024',
    endingDate: '25/11/2024',
    shortDescription: "An eco-friendly packaging business provides biodegradable, recyclable, and reusable packaging solutions for e-commerce companies. Using sustainable materials like plant-based plastics and recycled paper, the business offers customizable packaging that helps companies reduce waste, meet environmental goals, and appeal to eco-conscious consumers. With options like subscription-based supplies and branded designs, the venture supports businesses in minimizing their environmental impact while enhancing their green credentials.",
    projectDescription: [
        {
            title: "Eco-Friendly Packaging Business ",
            content: "With e-commerce booming, many companies are seeking sustainable packaging solutions to reduce waste and appeal to eco-conscious consumers. Your business would design and produce biodegradable, recyclable, and reusable packaging options using materials like plant-based plastics, recycled paper, or compostable materials."
        },
        {
            title: "Products & Services:",
            content: "Offer a range of packaging such as biodegradable boxes, recyclable mailers, and customizable designs with eco-friendly inks. You could also provide reusable packaging solutions and subscription-based services for businesses needing regular supplies."
        },
        {
            title: "Target Market:",
            content: "Your primary customers are small to medium e-commerce companies in industries like fashion, beauty, and food, looking to reduce their carbon footprint."
        },
        {
            title: "Value Proposition:",
            content: "By providing sustainable, customizable packaging, you help businesses reduce waste, meet environmental goals, and attract eco-conscious consumers, creating a win-win for the planet and business growth."
        }
    ],
    milestones: [
        {
            title: "Website Design and Development",
            description: "Website Brief Description: The website will serve as the digital platform for our environmental protection startup. It will highlight the company’s mission to promote sustainability, showcase key initiatives, offer resources for individuals to take action, and provide updates on projects. Users can also engage through volunteer sign-ups, donations, and a blog featuring eco-tips and news. The design will be clean, modern, and eco-friendly, emphasizing green energy and conservation efforts",
            requirements: "User-friendly interface, mobile optimization, donation system, and content management for blog updates.",
            startingDate: "25/09/2024",
            endingDate: "25/11/2024",
            completionDeliverable: "Fully functional website with integrated donation system, volunteer sign-up, project showcase, and CMS for easy updates."
        },
        {
            title: "Front End Development",
            description: "Website Brief Description: The website will serve as the digital platform for our environmental protection startup. It will highlight the company’s mission to promote sustainability, showcase key initiatives, offer resources for individuals to take action, and provide updates on projects. Users can also engage through volunteer sign-ups, donations, and a blog featuring eco-tips and news. The design will be clean, modern, and eco-friendly, emphasizing green energy and conservation efforts",
            requirements: "User-friendly interface, mobile optimization, donation system, and content management for blog updates.",
            startingDate: "25/09/2024",
            endingDate: "25/11/2024",
            completionDeliverable: "Fully functional website with integrated donation system, volunteer sign-up, project showcase, and CMS for easy updates."
        },
        {
            title: "AI Model Training",
            description: "Website Brief Description: The website will serve as the digital platform for our environmental protection startup. It will highlight the company’s mission to promote sustainability, showcase key initiatives, offer resources for individuals to take action, and provide updates on projects. Users can also engage through volunteer sign-ups, donations, and a blog featuring eco-tips and news. The design will be clean, modern, and eco-friendly, emphasizing green energy and conservation efforts",
            requirements: "User-friendly interface, mobile optimization, donation system, and content management for blog updates.",
            startingDate: "25/09/2024",
            endingDate: "25/11/2024",
            completionDeliverable: "Fully functional website with integrated donation system, volunteer sign-up, project showcase, and CMS for easy updates."
        }
    ]
}