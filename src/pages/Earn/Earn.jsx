import React from "react";
import ButtonOutline from "../../components/common/ButtonOutline";
import MainHeading from "../../components/common/MainHeading";
import SubHeading from "../../components/common/SubHeading";
import GigCard from "../../components/Homepage/GigCard";
import profile1 from "/images/profile1.png";
import GigCard2 from "../../components/Homepage/GigCard2";
import ButtonFilled from "../../components/common/ButtonFilled";
import Navbar3 from "../../components/common/Navbar3";
import { NavLink } from "react-router-dom";
import DataTable from "../../components/common/dataTable2/DataTable"; // Import your DataTable component

const Earn = () => {
  const gigs = [
    {
      title: "Hifi UX Mockups",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
      skills: ["UI/UX Design", "Figma", "Prototype"],
      author: "Square Dashboard",
      authorEmail: "karson123@gmail.com",
      profilePhoto: profile1,
      price: 2910,
      datePosted: "3 days ago",
    },
    {
      title: "Mobile App Development",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
      skills: ["UI/UX Design", "Figma", "Prototype"],
      author: "Square Dashboard",
      authorEmail: "karson123@gmail.com",
      profilePhoto: profile1,
      price: 5985,
      datePosted: "3 days ago",
    },
    {
      title: "Hifi UX Mockups",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
      skills: ["UI/UX Design", "Figma", "Prototype"],
      author: "Square Dashboard",
      authorEmail: "karson123@gmail.com",
      profilePhoto: profile1,
      price: 2910,
      datePosted: "3 days ago",
    },
    {
      title: "Mobile App Development",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
      skills: ["UI/UX Design", "Figma", "Prototype"],
      author: "Square Dashboard",
      authorEmail: "karson123@gmail.com",
      profilePhoto: profile1,
      price: 5985,
      datePosted: "3 days ago",
    },
  ];

  const myGigs = [
    {
      title: "Mobile App Development",
      author: "Square Dashboard",
      authorEmail: "karson123@gmail.com",
      profilePhoto: profile1,
      price: 500,
      duration: "May 8, 2024 - Present",
      status: "Active",
    },
    {
      title: "Web Front-End Development",
      author: "Square Dashboard",
      authorEmail: "karson123@gmail.com",
      profilePhoto: profile1,
      price: 200,
      duration: "May 8, 2024 - Present",
      status: "Active",
    },
  ];

  // Define the table headers
  const headCells = [
    { id: "number", numeric: false, label: "Number" },
    { id: "projectName", numeric: false, label: "Project Name" },
    { id: "price", numeric: false, label: "Price" },
    { id: "startingDate", numeric: false, label: "Starting Date" },
    { id: "endingDate", numeric: false, label: "Ending Date" },
    { id: "status", numeric: false, label: "Status" },
    { id: "action", numeric: false, label: "Action" },
  ];

  // Define the table data
  const rows = [
    {
      id: 1,
      number: "01",
      projectName: "Project Alpha",
      price: "$1000",
      startingDate: "January 1, 2023",
      endingDate: "March 1, 2023",
      status: "Approved",
      action: "View",
    },
    {
      id: 2,
      number: "02",
      projectName: "Project Beta",
      price: "$1500",
      startingDate: "February 1, 2023",
      endingDate: "April 1, 2023",
      status: "Pending",
      action: "View",
    },
    {
      id: 3,
      number: "03",
      projectName: "Project Gamma",
      price: "$2000",
      startingDate: "March 1, 2023",
      endingDate: "May 1, 2023",
      status: "Rejected",
      action: "View",
    },
    {
      id: 4,
      number: "04",
      projectName: "Project Delta",
      price: "$2500",
      startingDate: "April 1, 2023",
      endingDate: "June 1, 2023",
      status: "Approved",
      action: "View",
    },
    {
      id: 5,
      number: "05",
      projectName: "Project Epsilon",
      price: "$3000",
      startingDate: "May 1, 2023",
      endingDate: "July 1, 2023",
      status: "Pending",
      action: "View",
    },
    {
      id: 6,
      number: "06",
      projectName: "Project Zeta",
      price: "$3500",
      startingDate: "June 1, 2023",
      endingDate: "August 1, 2023",
      status: "Rejected",
      action: "View",
    },
    {
      id: 7,
      number: "07",
      projectName: "Project Eta",
      price: "$4000",
      startingDate: "July 1, 2023",
      endingDate: "September 1, 2023",
      status: "Approved",
      action: "View",
    },
    {
      id: 8,
      number: "08",
      projectName: "Project Theta",
      price: "$4500",
      startingDate: "August 1, 2023",
      endingDate: "October 1, 2023",
      status: "Pending",
      action: "View",
    },
    {
      id: 9,
      number: "09",
      projectName: "Project Iota",
      price: "$5000",
      startingDate: "September 1, 2023",
      endingDate: "November 1, 2023",
      status: "Rejected",
      action: "View",
    },
    {
      id: 10,
      number: "10",
      projectName: "Project Kappa",
      price: "$5500",
      startingDate: "October 1, 2023",
      endingDate: "December 1, 2023",
      status: "Approved",
      action: "View",
    },
  ];

  return (
    <>
      <Navbar3 showBtn={false} />
      <div className="w-full px-4">
        <div className="mt-10"></div>
        <MainHeading text={"Metrics"} />
        <SubHeading text={`Your Current Progress`} />

        <div className="grid sm:grid-cols-4 grid-cols-1  mt-10 text-center">
          <div className="w-full">
            <p className="text-xl font-semibold text-light">Total Earned</p>
            <h2 className="text-3xl text-[#3D434A] font-bold">$250</h2>
          </div>
          <div className=" w-full border-l-2 border-l-black">
            <p className="text-xl font-semibold text-light">Gigs Completed</p>
            <h2 className="text-3xl text-[#3D434A] font-bold">07</h2>
          </div>
          <div className="text-xl font-semibold w-full border-l-2 border-l-black">
            <p className="text-light">Current Gigs</p>
            <h2 className="text-3xl text-[#3D434A] font-bold">03</h2>
          </div>
          <div className="text-xl font-semibold w-full border-l-2 border-l-black">
            <p className="text-light">Gigs Proposed</p>
            <h2 className="text-3xl text-[#3D434A] font-bold">08</h2>
          </div>
        </div>

        <div className="mt-24"></div>
        <MainHeading text={"Gigs for Apply"} />
        <SubHeading text={`Explore Gigs and Collaborate \nwith Founders`} />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
          {gigs.map((gig, index) => (
            <GigCard
              key={index}
              title={gig.title}
              description={gig.description}
              skills={gig.skills}
              author={gig.author}
              authorEmail={gig.authorEmail}
              profilePhoto={gig.profilePhoto}
              price={gig.price}
              datePosted={gig.datePosted}
            />
          ))}
        </div>

        <div className="w-[10%] mx-auto mt-10 mb-14">
          <NavLink className="w-full" to="/earn/gigs-available">
            <ButtonOutline text="Show All" showIcon />
          </NavLink>
        </div>

        <MainHeading text={"My Gigs"} />
        <SubHeading text={`Gigs which got accepted`} />

        <div className="flex flex-col">
          {myGigs.map((gig, index) => (
            <GigCard2
              key={index}
              title={gig.title}
              author={gig.author}
              authorEmail={gig.authorEmail}
              profilePhoto={gig.profilePhoto}
              status="Active"
              price={gig.price}
              duration={gig.duration}
            />
          ))}
        </div>

        <div className="mt-14"></div>
        <MainHeading text={"My Proposals"} />
        <SubHeading text={`Proposals dispatched from \nyour end`} />

        <div className="rounded lg:p-10">
          <DataTable
            headCells={headCells} // Pass headers
            rows={rows} // Conditionally pass rows
            identifier="earnTable" // Unique identifier for the table
          />
        </div>

        <div className="mt-14"></div>
        <MainHeading text={"Payout"} />
        <SubHeading text={`Data and Analytics for \nyour earning`} />

        <div className="grid grid-cols-2 max-w-2xl gap-y-6 mx-auto">
          <div className="w-full">
            <p className="text-xl font-semibold text-light">Pending Payment</p>
            <h2 className="text-3xl text-[#3D434A] font-bold">$3520</h2>
          </div>
          <div className=" w-full border-l-2 border-l-black pl-2 md:pl-28 ">
            <p className="text-xl font-semibold text-light">
              Available for Withdraw
            </p>
            <h2 className="text-3xl text-[#3D434A] font-bold">$3520</h2>
          </div>
          <div className="text-xl font-semibold w-full ">
            <p className="text-light">Pending Payment</p>
            <h2 className="text-3xl text-[#3D434A] font-bold">$1525</h2>
          </div>
          <div className="text-xl font-semibold w-full border-l-2 border-l-black pl-2 md:pl-28">
            <p className="text-light">Last Payment Date</p>
            <h2 className="text-3xl text-[#3D434A] font-bold">25/08/2024</h2>
          </div>
        </div>

        <div className="w-[10%] mx-auto mt-10 mb-6">
          <ButtonFilled text="Withdraw" />
        </div>
      </div>
    </>
  );
};

export default Earn;
