import React from 'react'
import DataTable from "../../components/common/tasksTable/DataTable";
import MainHeading from "../../components/common/MainHeading";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import User1 from "../../assets/datatable/userImage1.png"; // Add user image
import User2 from "../../assets/datatable/userImage2.png"; // Add user image
import User3 from "../../assets/datatable/userImage3.png"; // Add user image
import User4 from "../../assets/datatable/userImage4.png"; // Add user image

const TaskTable = () => {
    // Task Table Data
const columns = [
  {
    field: "fileName",
    headerName: "File Name",
    width: 200,
    renderCell: (params) => (
      <div className="flex items-center space-x-2 ">
        {/* Assuming you have an image URL or a path */}
        <img
          src={params.row.fileImage} // Assuming fileImage is a field in your data that holds the image URL
          alt="file"
          className="w-10 h-10 object-cover rounded" // You can customize the image size and shape
        />
        <span>{params.value}</span>{" "}
        {/* File name displayed next to the image */}
      </div>
    ),
  },
  { field: "assignee", headerName: "Assignee", width: 150 },
  { field: "deadline", headerName: "Deadline", width: 150 },
  {
    field: "progress",
    headerName: "Progress Bar",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="flex items-center h-full w-3/4">
          <div className="bg-gray-200 rounded-full w-full">
            <div
              style={{
                width: `${params.value}%`,
                height: "13px",
                backgroundColor: params.row.progressColor, // Use progressColor from row data
                borderRadius: "inherit",
              }}
            ></div>
          </div>
        </div>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => (
      <div className="flex items-center justify-center h-full w-10">
        {params.value}
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    fileName: "Rules Post on Dribble",
    fileImage: User1, // Image URL or path
    assignee: "John Doe",
    deadline: "March 23, 2023",
    progress: 75,
    progressColor: "#7A70BA", // Red color
    action: <BiDotsHorizontalRounded className="text-xl cursor-pointer " />,
  },
  {
    id: 2,
    fileName: "Login $ Sign Up Ui",
    fileImage: User2, // Image URL or path
    assignee: "Jane Smith",
    deadline: "May 15, 2023",
    progress: 50,
    progressColor: "#D77748", // Blue color
    action: <BiDotsHorizontalRounded className="text-xl cursor-pointer" />,
  },
  {
    id: 3,
    fileName: "NFT Marketplace Design",
    fileImage: User3, // Image URL or path
    assignee: "Alice Johnson",
    deadline: "November 30, 2023",
    progress: 20,
    progressColor: "#FF0004", // Green color
    action: <BiDotsHorizontalRounded className="text-xl cursor-pointer" />,
  },
  {
    id: 4,
    fileName: "Dashboard Design",
    fileImage: User4, // Image URL or path
    assignee: "Bob Brown",
    deadline: "December 25, 2023",
    progress: 90,
    progressColor: "#0DA759", // Yellow color
    action: <BiDotsHorizontalRounded className="text-xl cursor-pointer" />,
  },
];


    return (
        <div className="py-10">
            {/* Task Table */}
              <MainHeading text={"Tasks"} /> 
            <div className="rounded lg:p-10">
                <DataTable
                    columns={columns}
                    rows={rows.map((row) => ({
                        ...row,
                        action: (
                            <div className="flex items-center justify-center h-full w-full">
                                <BiDotsHorizontalRounded className="text-xl cursor-pointer" />
                            </div>
                        ),
                    }))}
                />
            </div>
        </div>
    )
}

export default TaskTable
