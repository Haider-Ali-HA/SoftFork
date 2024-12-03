import React from "react";
import SingleProject from "../../components/common/SingleProject";
import User from "../../assets/header/profile-photo.png";
const ShowAllProjects = () => {
  const projects = [
    {
      title: "Website Design",
      user: {
        name: "Square Dashboard",
        email: "karson123@gmail.com",
        image: User, // Update with actual image path
      },
      tags: ["UX Design", "3D Design"],
      tasks: { total: 12, resolved: 5, comments: 9 },
      funding: {
        amountSeeded: "$2910 Seeded",
        percentageFunded: "99% Funded",
        daysRemaining: "36 Days remaining",
      },
      progress: { total: 100, fill: 9, color: "#7A70BA" },
    },
    {
      title: "Mobile App Development",
      user: {
        name: "App Team",
        email: "appteam@gmail.com",
        image: User, // Update with actual image path
      },
      tags: ["App Design", "Development"],
      tasks: { total: 20, resolved: 10, comments: 15 },
      funding: {
        amountSeeded: "$5000 Seeded",
        percentageFunded: "75% Funded",
        daysRemaining: "20 Days remaining",
      },
      progress: { total: 100, fill: 75, color: "#0DA759" },
    },
    {
      title: "Marketing Campaign",
      user: {
        name: "Marketing Team",
        email: "marketing@gmail.com",
        image: User, // Update with actual image path
      },
      tags: ["Marketing", "SEO"],
      tasks: { total: 8, resolved: 4, comments: 5 },
      funding: {
        amountSeeded: "$1500 Seeded",
        percentageFunded: "50% Funded",
        daysRemaining: "10 Days remaining",
      },
      progress: { total: 100, fill: 50, color: "#7A70BA" },
    },
    {
      title: "E-commerce Platform",
      user: {
        name: "E-commerce Team",
        email: "ecommerce@gmail.com",
        image: User,
      },
      tags: ["Web Development", "Backend"],
      tasks: { total: 15, resolved: 10, comments: 7 },
      funding: {
        amountSeeded: "$4000 Seeded",
        percentageFunded: "80% Funded",
        daysRemaining: "25 Days remaining",
      },
      progress: { total: 100, fill: 80, color: "#0DA759" },
    },
    {
      title: "Social Media Integration",
      user: {
        name: "Social Media Team",
        email: "socialmedia@gmail.com",
        image: User,
      },
      tags: ["Integration", "API"],
      tasks: { total: 10, resolved: 6, comments: 4 },
      funding: {
        amountSeeded: "$2000 Seeded",
        percentageFunded: "60% Funded",
        daysRemaining: "15 Days remaining",
      },
      progress: { total: 100, fill: 60, color: "#7A70BA" },
    },
    {
      title: "AI Chatbot",
      user: {
        name: "AI Team",
        email: "aiteam@gmail.com",
        image: User,
      },
      tags: ["AI", "Machine Learning"],
      tasks: { total: 18, resolved: 12, comments: 8 },
      funding: {
        amountSeeded: "$3500 Seeded",
        percentageFunded: "70% Funded",
        daysRemaining: "30 Days remaining",
      },
      progress: { total: 100, fill: 70, color: "#0DA759" },
    },
    {
      title: "Cloud Storage Solution",
      user: {
        name: "Cloud Team",
        email: "cloudteam@gmail.com",
        image: User,
      },
      tags: ["Cloud", "Storage"],
      tasks: { total: 22, resolved: 18, comments: 10 },
      funding: {
        amountSeeded: "$6000 Seeded",
        percentageFunded: "90% Funded",
        daysRemaining: "40 Days remaining",
      },
      progress: { total: 100, fill: 90, color: "#0DA759" },
    },
    {
      title: "Blockchain Development",
      user: {
        name: "Blockchain Team",
        email: "blockchain@gmail.com",
        image: User,
      },
      tags: ["Blockchain", "Cryptography"],
      tasks: { total: 25, resolved: 20, comments: 12 },
      funding: {
        amountSeeded: "$7000 Seeded",
        percentageFunded: "95% Funded",
        daysRemaining: "50 Days remaining",
      },
      progress: { total: 100, fill: 95, color: "#0DA759" },
    },
    {
      title: "Data Analytics",
      user: {
        name: "Analytics Team",
        email: "analytics@gmail.com",
        image: User,
      },
      tags: ["Data", "Analytics"],
      tasks: { total: 30, resolved: 25, comments: 15 },
      funding: {
        amountSeeded: "$8000 Seeded",
        percentageFunded: "100% Funded",
        daysRemaining: "60 Days remaining",
      },
      progress: { total: 100, fill: 100, color: "#0DA759" },
    },
    {
      title: "Cybersecurity",
      user: {
        name: "Security Team",
        email: "security@gmail.com",
        image: User,
      },
      tags: ["Security", "Network"],
      tasks: { total: 12, resolved: 8, comments: 6 },
      funding: {
        amountSeeded: "$2500 Seeded",
        percentageFunded: "85% Funded",
        daysRemaining: "35 Days remaining",
      },
      progress: { total: 100, fill: 85, color: "#0DA759" },
    },
    {
      title: "IoT Development",
      user: {
        name: "IoT Team",
        email: "iot@gmail.com",
        image: User,
      },
      tags: ["IoT", "Hardware"],
      tasks: { total: 20, resolved: 15, comments: 10 },
      funding: {
        amountSeeded: "$4500 Seeded",
        percentageFunded: "90% Funded",
        daysRemaining: "45 Days remaining",
      },
      progress: { total: 100, fill: 90, color: "#0DA759" },
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap gap-2 my-4 ">
        <button className="rounded-full cursor-pointer bg-blue-100 border-[#0F50AA] border w-20 text-[#0F50AA] py-2 text-center">
          All
        </button>
        <button className="rounded-full cursor-pointer bg-[#6B65D6] border-[#006833] border w-40 text-[#ffffff] py-2 text-center">
          Live Projects
        </button>
        <button className="rounded-full cursor-pointer bg-[#07D86E] border-[#006833] border w-40 text-[#ffffff] py-2 text-center">
          Funding Complete
        </button>
        <button className="rounded-full cursor-pointer bg-[#FF823F] border-[#9B0003] border w-40 text-[#ffffff] py-2 text-center">
          Funding Missed
        </button>
        <button className="rounded-full cursor-pointer bg-[#FF0004] border-[#890002] border w-40 text-[#ffffff] py-2 text-center">
          Deadline Passed
        </button>
      </div>
      <div className="flex flex-wrap w-full h-full  gap-2 justify-center ">
        {projects.map((project, index) => (
          <SingleProject key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ShowAllProjects;
