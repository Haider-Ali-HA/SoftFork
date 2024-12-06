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
import HistoryBackerTable from './HistoryBackerTable'
import Comments from '../../components/common/Comments'

const ProjectDetailsFund = () => {

    const [noOfMilestonesToShow, setNoOfMilestonesToShow] = useState(1);


    return (
        <>
            <Navbar3 />
            <div className="w-full max-w-6xl mx-auto">

                <div className="relative">
                    <h4 className={`text-lg w-full text-right md:text-xl font-gilroy font-bold absolute top-4 right-20`}>
                        {projectData.title}
                    </h4>

                    <MainHeading text={projectData.title} />
                    <div className="mx-auto w-fit mt-1">
                        <ProfileDetail profileName={projectData.authorName} profilePhoto={projectData.authorPhoto} profileEmail={projectData.authorEmail} />
                    </div>
                    <div className="mb-6"></div>

                    <p className='font-semibold text-right'>{projectData.funded}%</p>
                    <ProgressBar fill={projectData.funded} color="#7A70BA" />
                    <div className="grid sm:grid-cols-4 grid-cols-1  mt-10 mb-8 text-center">
                        <div className='w-full text-left px-2 md:pl-4' >
                            <p className="text-xl font-semibold text-light">Funding Needed:</p>
                            <h2 className="text-3xl text-[#3D434A] font-bold">${projectData.fundedNeeded}</h2>
                        </div>
                        <div className=' w-full border-l-2 border-l-black text-left px-2 md:pl-4'>
                            <p className="text-xl font-semibold text-light">Collected Funds</p>
                            <h2 className="text-3xl text-[#3D434A] font-bold">${projectData.collectedFunds}</h2>
                        </div>
                        <div className='text-xl font-semibold w-full border-l-2 border-l-black'>
                            <p className="text-light">Funding Deadline</p>
                            <h2 className="text-3xl text-[#3D434A] font-bold">{projectData.fundingDeadline}</h2>
                        </div>
                        <div className='text-xl font-semibold w-full border-l-2 border-l-black flex items-center justify-center px-2 md:px-4'>
                            <ButtonOutline text={"Contribute Now!"} />
                        </div>
                    </div>

                    <div className="relative rounded-3xl ">
                        <video
                            src={projectData.video}
                            className="w-full h-80 object-cover rounded-3xl mx-auto"
                            poster={videoImg} // Replace with your preview image URL
                        />
                        <img src={playIcon} className='absolute rounded-3xl top-[45%] right-[47%] w-14 h-14 z-50 ' alt="" />
                        <div className="absolute inset-0 rounded-3xl bg-black bg-opacity-50 pointer-events-none"></div>
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

                    <button
                        className={`bg-white border-primary hover:bg-primary  hover:text-white border text-primary font-gilroy font-semibold text-sm md:text-md transition-all duration-200 py-2 md:py-3 rounded-lg w-[18%] mt-3 flex items-center justify-center `}
                    >
                        <div className="flex items-center justify-center gap-3">
                            <FaPlay />
                            <p>Play Video</p>
                        </div>
                    </button>


                    {/* Project Description */}
                    <h2 className=" mt-10 mb-8 text-3xl text-black text-center font-bold">Project Description</h2>
                    {
                        projectData.projectDescription.map((desc, i) => (
                            <>
                                <h2 className=" mb-4 text-lg text-[#5A5A5A] font-bold">{desc.title}</h2>
                                <p className='mt-1 mb-2 text-[#5A5A5A] text-xs sm:text-sm'>{desc.content}</p>

                            </>
                        ))
                    }

                    {/* Project Milestons */}
                    <h2 className=" mt-10 mb-8 text-3xl text-black text-center font-bold">Milestones for the Project</h2>

                    {
                        projectData.milestones.map((milestone, index) => (
                            <div className="shadow-md p-4 mt-2 rounded-lg">
                                <div className="flex justify-between">
                                    <h2 className=" mb-4 text-lg text-[#121212] font-bold">Milestone {index + 1}: {milestone.title}</h2>
                                    {
                                        (index) >= noOfMilestonesToShow ? (
                                            <button
                                                type="button"
                                                className="p-2 px-3  bg-gray-300 rounded-full flex items-center justify-center
                                                "
                                                onClick={() => setNoOfMilestonesToShow((prev) => prev + 1)}
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

                    <h2 className=" mt-10 text-3xl text-black text-center font-bold">Project Timeline</h2>
                    <div className=" mb-4 flex max-sm:gap-3 gap-8 -mt-6 w-fit mx-auto">
                        <div className="text-center">
                            <h2 className=" mt-10 mb-2 text-2xl text-black text-center font-bold">Starting Date:</h2>
                            <p className='text-[#121212] text-xl'>{projectData.startingDate}</p>
                        </div>
                        <div className="text-center">
                            <h2 className=" mt-10 mb-2 text-2xl text-black text-center font-bold">Ending Date:</h2>
                            <p className='text-[#121212] text-xl'>{projectData.endingDate}</p>
                        </div>
                    </div>

                    {/* Lean Canvas & Documentations */}
                    <h2 className=" mt-10 mb-6 text-3xl text-black text-center font-bold">Lean Canvas & Documentations</h2>
                    <h2 className=" mb-4 text-md text-[#121212] font-bold">Lean Canvas</h2>

                   {/* grid */}
                   <div className="grid grid-cols-5 border-4 border-black mt-6 mx-4">
                        <div className=" border-2 border-black text-black p-4 row-span-2">

                            <TextareaField2
                                placeholderText=""
                                inputLabel={"Problem"}
                                name="problem"
                                value={canvasData.problem}
                                showWordCount={false}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                outline={false}
                                isCanvas
                                disabled
                            />
                            <TextareaField2
                                placeholderText={""}
                                inputLabel={"Existing Alternatives"}
                                name={"existingAlternatives"}
                                value={canvasData.existingAlternatives}
                                showWordCount={false}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                outline={false}
                                isCanvas
                                disabled
                            />

                        </div>
                        <div className=" border-2 border-black text-black p-4">
                            <TextareaField2
                                placeholderText=""
                                inputLabel={"Solutions"}
                                name="solutions"
                                value={canvasData.solutions}
                                showWordCount={false}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                outline={false}
                                isCanvas
                                disabled
                            />
                        </div>
                        <div className="border-2 border-black text-black p-4 row-span-2">
                            <TextareaField2
                                placeholderText=""
                                inputLabel={"Unique Value Propositions"}
                                name="uniqueValueProposition"
                                value={canvasData.uniqueValueProposition}
                                showWordCount={false}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                outline={false}
                                isCanvas
                                disabled
                            />
                            <TextareaField2
                                placeholderText=""
                                inputLabel={"High Level Concept"}
                                name="highLevelConcept"
                                value={canvasData.highLevelConcept}
                                showWordCount={false}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                outline={false}
                                isCanvas
                                disabled
                            />
                        </div>
                        <div className=" border-2 border-black text-black p-4">
                            <TextareaField2
                                placeholderText=""
                                inputLabel={"Unfair Advantage"}
                                name="unfairAdvantage"
                                value={canvasData.unfairAdvantage}
                                showWordCount={false}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                outline={false}
                                isCanvas
                                disabled
                            />
                        </div>
                        <div className=" border-2 border-black text-black p-4 row-span-2">
                            <TextareaField2
                                placeholderText=""
                                inputLabel={"Customer Segment"}
                                name="customerSegment"
                                value={canvasData.customerSegment}
                                showWordCount={false}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                outline={false}
                                isCanvas
                                disabled
                            />
                            <TextareaField2
                                placeholderText=""
                                inputLabel={"Early Adopters"}
                                name="earlyAdopters"
                                value={canvasData.earlyAdopters}
                                showWordCount={false}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                outline={false}
                                isCanvas
                                disabled
                            />
                        </div>
                        <div className="border-2 border-black text-black p-4">
                            <TextareaField2
                                placeholderText=""
                                inputLabel={"Key Metrics"}
                                name="keyMetrics"
                                value={canvasData.keyMetrics}
                                showWordCount={false}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                outline={false}
                                isCanvas
                                disabled
                            />
                        </div>
                        <div className="border-2 border-black text-black p-4">
                            <TextareaField2
                                placeholderText=""
                                inputLabel={"Channels"}
                                name="channels"
                                value={canvasData.channels}
                                showWordCount={false}
                                lableStyling="text-xs"
                                textStyling='text-xs'
                                outline={false}
                                isCanvas
                                disabled
                            />
                        </div>

                        <div className="col-span-5 grid grid-cols-1 sm:grid-cols-2 border-t-4 border-black">
                            <div className=" border-2 border-black text-black p-4">
                                <TextareaField2
                                    placeholderText=""
                                    inputLabel={"Cost Structure"}
                                    name="costStructure"
                                    value={canvasData.costStructure}
                                    showWordCount={false}
                                    lableStyling="text-xs"
                                    textStyling='text-xs'
                                    rows={2}
                                    outline={false}
                                    isCanvas
                                    disabled
                                />
                            </div>
                            <div className=" border-2 border-black text-black p-4">
                                <TextareaField2
                                    placeholderText=""
                                    inputLabel={"Reserve Streams"}
                                    name="revenueStreams"
                                    value={canvasData.reserveStreams}
                                    showWordCount={false}
                                    lableStyling="text-xs"
                                    textStyling='text-xs'
                                    rows={2}
                                    outline={false}
                                    isCanvas
                                    disabled
                                />
                            </div>
                        </div>
                    </div>


                    <div className="relative">
                        <h2 className="mb-4 mt-8 text-md text-[#121212] font-bold">PowerPoint Slides</h2>
                        <img
                            src={banner}
                            alt="Banner"
                            className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute inset-0 bg-white bg-opacity-5 pointer-events-none"
                            style={{ backgroundImage: `url(${whiteOverlay})`, backgroundSize: "cover", backgroundPosition: "center" }}
                        ></div>
                    </div>
                    <h2 className=" mb-4 mt-4 text-md text-[#121212] font-bold">You can download all documents about project!</h2>
                    <div className="w-[20%]">
                        <ButtonFilled text={"Download Now"} />
                    </div>

                    <h2 className=" mt-10 mb-6 text-3xl text-black text-center font-bold">Voting Power & Contribution</h2>

                    <div className="flex gap-20 mb-6 justify-center flex-wrap">
                        <div className="">
                            <h2 className=" mb-6 text-xl text-black text-left font-bold">Voting Power</h2>
                            <h2 className=" mb-3 text-xl text-light text-left font-bold">Voting Power:</h2>
                            <h2 className="  text-2xl text-black text-left font-bold">5 Vote</h2>
                        </div>
                        <div className="">
                            <h2 className=" mb-6 text-xl text-black text-left font-bold">Total Voting Tokens</h2>
                            <h2 className=" mb-3 text-xl text-light text-left font-bold">Total Voting Tokens:</h2>
                            <h2 className="  text-2xl text-black text-left font-bold">20 Voting Tokens</h2>
                        </div>
                        <div className="">
                            <h2 className=" mb-6 text-xl text-black text-left font-bold">Previous Contributions</h2>
                            <h2 className=" text-xl text-black text-left font-bold">
                                Date: <span className='text-light text-lg'>01/01/2024</span> Amount: <span className='text-light text-lg'>5500</span> Tokens: <span className='text-light text-lg'>25</span>
                            </h2>
                            <h2 className=" mb-6 text-xl text-black text-left font-bold">
                                Date: <span className='text-light text-lg'>01/01/2024</span> Amount: <span className='text-light text-lg'>5500</span> Tokens: <span className='text-light text-lg'>25</span>
                            </h2>
                        </div>
                    </div>

                    <div className="w-[20%] mx-auto">
                        <ButtonFilled text={"Increase Contribution"} />
                    </div>
                   

                    {/* follow the steps */}
                    <h2 className=" mt-10 mb-6 text-3xl text-black text-center font-bold">Follow the Steps to Become a Backer</h2>
                    <p className='mt-1 text-[#5A5A5A] text-xs sm:text-sm'>
                        Supporting impactful ideas has never been easier! Follow these simple steps to contribute to projects that <br /> align with your values and help shape the future.
                    </p>
                    <p className='mt-1 text-[#5A5A5A] text-xs sm:text-sm'>
                        <span className='font-semibold'>Step 1: </span> Review the Project: "Read through the project details and ensure it aligns with your values."
                    </p>
                    <p className='mt-1 text-[#5A5A5A] text-xs sm:text-sm'>
                        <span className='font-semibold'>Step 2: </span> Select Contribution Amount: "Choose how much you want to contribute to the project."
                    </p>
                    <p className='mt-1 text-[#5A5A5A] text-xs sm:text-sm'>
                        <span className='font-semibold'>Step 3:</span> Confirm Payment: "Confirm your payment to support the project and receive tokens in return."
                    </p>
                    <p className='mt-1 text-[#5A5A5A] text-xs sm:text-sm'>
                        <span className='font-semibold'>Step 4:</span> Track Your Impact: "After contributing, track the project&apos;s progress and see how your funding is making a difference.
                    </p>

                    <h2 className="mt-8 mb-2 text-md text-[#121212] font-bold">Why Contribute?</h2>


                    <ul className='list-disc '>
                        <li className='mt-1 text-[#5A5A5A] text-xs sm:text-sm'>
                            Potential ROI: "High potential return on inverstment (ROI) for early backers"
                        </li>
                        <li className='mt-1 text-[#5A5A5A] text-xs sm:text-sm'>
                            Social impact: "Support a project that creates positive environmental or social change."
                        </li>
                        <li className='mt-1 text-[#5A5A5A] text-xs sm:text-sm'>
                            Technological Innovation: "Be part of cutting-edge technology that can transform industries."
                        </li>
                        <li className='mt-1 text-[#5A5A5A] text-xs sm:text-sm'>
                            Scalable Growth: "This project has the potential to grow rapidly in the comming years."
                        </li>
                    </ul>

                    <HistoryBackerTable/>

                </div>

            </div>
        </>
    )
}

export default ProjectDetailsFund


const projectData = {
    title: "Hifi UX Mockups",
    authorName: "Square Dashboard",
    authorEmail: "karson123@gmail.com",
    authorPhoto: profile1,
    video: "https://www.youtube.com/watch?v=-BEqV6eaaQk",
    projectTags: ["Project Management", "Graphics Design", "Prototype"],
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

const canvasData = {
    problem: "List your customers top 3 problems",
    existingAlternatives: "List how these problems are solved today",
    solutions: "Outline possible solution for each problem",
    keyMetrics: "List key numbers telling how your business is doing today",
    uniqueValueProposition: "Single, clear, compelling that turns an unaware visitor into an interested prospect ",
    highLevelConcept: "List your X for Y analogy (e.g. YouTube = Flickr for videos)",
    unfairAdvantage: "Something that can't be easily copied or bought ",
    channels: "List your path to customers",
    customerSegment: "List your target customers and users",
    earlyAdopters: "List characteristics of your ideal customer",
    costStructure: "List your fixed and variable costs",
    reserveStreams: "List your sources of revenue"
}
