import React from "react";

// history of backend transaction table imports
// import User1 from "../assets/datatable/userImage1.png"; // Add user image
// import User2 from "../assets/datatable/userImage2.png"; // Add user image
// import User3 from "../assets/datatable/userImage3.png"; // Add user image
// import User4 from "../assets/datatable/userImage4.png"; // Add user image
// import DataTable from "../components/common/backersDataTable/DataTable";
// import MainHeading from "../components/common/MainHeading";

// backers Table imports
// import DataTable from "../components/common/backersDataTable/DataTable";
// import MainHeading from "../components/common/MainHeading";

// Task Table imports
// import DataTable from "../components/common/tasksTable/DataTable";
// import MainHeading from "../components/common/MainHeading";
// import { BiDotsHorizontalRounded } from "react-icons/bi";
// import User1 from "../assets/datatable/userImage1.png"; // Add user image
// import User2 from "../assets/datatable/userImage2.png"; // Add user image
// import User3 from "../assets/datatable/userImage3.png"; // Add user image
// import User4 from "../assets/datatable/userImage4.png"; // Add user image

//Transaction History Table imports
// import DataTable from "../components/common/transactionHistoryDataTable/DataTable";
// import UsageHistoryDataTable from "../components/common/transactionHistoryDataTable/UsageHistoryDataTable";
// import User1 from "../assets/datatable/userImage1.png"; // Add user image
// import User2 from "../assets/datatable/userImage2.png"; // Add user image
// import User3 from "../assets/datatable/userImage3.png"; // Add user image
// import User4 from "../assets/datatable/userImage4.png"; // Add user image

// Backers History Table Data
// const backersHistoryHeadCells = [
//   { id: "name", numeric: false, label: "Name" },
//   { id: "amountFunded", numeric: false, label: "Amount Funded" },
//   { id: "role", numeric: false, label: "Role" },
//   { id: "action", numeric: false, label: "Actions" },
// ];

// const backersHistoryRows = [
//   {
//     id: 1,
//     name: "John Doe",
//     amountFunded: "$100",
//     role: "Founder",
//     action: "",
//     image: User1, // Add image path here
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     amountFunded: "$150",
//     role: "Co-Founder",
//     action: "",
//     image: User2,
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     amountFunded: "$200",
//     role: "Investor",
//     action: "",
//     image: User3,
//   },
//   {
//     id: 4,
//     name: "Bob Brown",
//     amountFunded: "$250",
//     role: "Advisor",
//     action: "",
//     image: User4,
//   },
// ];

// Backers Table Data
// const backersHeadCells = [
//   { id: "name", numeric: false, label: "Name" },
//   { id: "tokens", numeric: false, label: "Tokens" },
//   { id: "role", numeric: false, label: "Role" },
//   { id: "action", numeric: false, label: "Actions" },
// ];

// const backersRows = [
//   {
//     id: 1,
//     name: "John Doe",
//     tokens: "100",
//     role: "Founder",
//     action: "",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     tokens: "150",
//     role: "Co-Founder",
//     action: "",
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     tokens: "200",
//     role: "Investor",
//     action: "",
//   },
//   {
//     id: 4,
//     name: "Bob Brown",
//     tokens: "250",
//     role: "Advisor",
//     action: "",
//   },
// ];

// Task Table Data
// const columns = [
//   {
//     field: "fileName",
//     headerName: "File Name",
//     width: 200,
//     renderCell: (params) => (
//       <div className="flex items-center space-x-2 ">
//         {/* Assuming you have an image URL or a path */}
//         <img
//           src={params.row.fileImage} // Assuming fileImage is a field in your data that holds the image URL
//           alt="file"
//           className="w-10 h-10 object-cover rounded" // You can customize the image size and shape
//         />
//         <span>{params.value}</span>{" "}
//         {/* File name displayed next to the image */}
//       </div>
//     ),
//   },
//   { field: "assignee", headerName: "Assignee", width: 150 },
//   { field: "deadline", headerName: "Deadline", width: 150 },
//   {
//     field: "progress",
//     headerName: "Progress Bar",
//     width: 180,
//     renderCell: (params) => {
//       return (
//         <div className="flex items-center h-full w-3/4">
//           <div className="bg-gray-200 rounded-full w-full">
//             <div
//               style={{
//                 width: `${params.value}%`,
//                 height: "13px",
//                 backgroundColor: params.row.progressColor, // Use progressColor from row data
//                 borderRadius: "inherit",
//               }}
//             ></div>
//           </div>
//         </div>
//       );
//     },
//   },
//   {
//     field: "action",
//     headerName: "Action",
//     width: 100,
//     renderCell: (params) => (
//       <div className="flex items-center justify-center h-full w-10">
//         {params.value}
//       </div>
//     ),
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     fileName: "Rules Post on Dribble",
//     fileImage: User1, // Image URL or path
//     assignee: "John Doe",
//     deadline: "March 23, 2023",
//     progress: 75,
//     progressColor: "#7A70BA", // Red color
//     action: <BiDotsHorizontalRounded className="text-xl cursor-pointer " />,
//   },
//   {
//     id: 2,
//     fileName: "Login $ Sign Up Ui",
//     fileImage: User2, // Image URL or path
//     assignee: "Jane Smith",
//     deadline: "May 15, 2023",
//     progress: 50,
//     progressColor: "#D77748", // Blue color
//     action: <BiDotsHorizontalRounded className="text-xl cursor-pointer" />,
//   },
//   {
//     id: 3,
//     fileName: "NFT Marketplace Design",
//     fileImage: User3, // Image URL or path
//     assignee: "Alice Johnson",
//     deadline: "November 30, 2023",
//     progress: 20,
//     progressColor: "#FF0004", // Green color
//     action: <BiDotsHorizontalRounded className="text-xl cursor-pointer" />,
//   },
//   {
//     id: 4,
//     fileName: "Dashboard Design",
//     fileImage: User4, // Image URL or path
//     assignee: "Bob Brown",
//     deadline: "December 25, 2023",
//     progress: 90,
//     progressColor: "#0DA759", // Yellow color
//     action: <BiDotsHorizontalRounded className="text-xl cursor-pointer" />,
//   },
// ];

// Transaction History Table Data
// const headCells = [
//   { id: "date", label: "Date" },
//   { id: "amount", label: "Amount" },
// ];
// const rows = [
//   { id: 1, date: "August 2, 2023", amount: "$100" },
//   { id: 2, date: "August 2, 2023", amount: "$150" },
//   { id: 3, date: "August 2, 2023", amount: "$200" },
//   { id: 4, date: "August 2, 2023", amount: "$250" },
//   { id: 5, date: "August 2, 2023", amount: "$300" },
//   // Add more rows as needed
// ];
// // Head cells
// const usageHeadCells = [
//   { id: "projectName", label: "Project Name" }, // Added project name
//   { id: "date", label: "Date" },
//   { id: "amount", label: "Amount" },
// ];

// // Rows
// const usageRows = [
//   {
//     id: 1,
//     projectName: "Project Alpha",
//     date: "August 2, 2023",
//     amount: "$100",
//     image: User1,
//   },
//   {
//     id: 2,
//     projectName: "Project Beta",
//     date: "August 2, 2023",
//     amount: "$150",
//     image: User2,
//   },
//   {
//     id: 3,
//     projectName: "Project Gamma",
//     date: "August 2, 2023",
//     amount: "$200",
//     image: User3,
//   },
//   {
//     id: 4,
//     projectName: "Project Delta",
//     date: "August 2, 2023",
//     amount: "$250",
//     image: User4,
//   },
// ];
const AllTablesTesting = () => {
  return (
    <div className="py-10">
      {/* History of Backer Transactions Table */}
      {/* <MainHeading text={"History of Backer Transactions"} />
      <div className="rounded lg:p-10">
        <DataTable
          headCells={backersHistoryHeadCells}
          rows={backersHistoryRows}
          identifier={"backersHistory"}
        />
      </div> */}

      {/* Backers Table */}
      {/* <MainHeading text={"Backers"} />
      <div className="rounded lg:p-10">
        <DataTable
          headCells={backersHeadCells}
          rows={backersRows}
          identifier={"backers"}
        />
      </div> */}

      {/* Task Table */}
      {/* <MainHeading text={"Tasks"} />
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
      </div> */}

      {/* Transaction History Table */}

      {/* <div className="flex flex-wrap items-stretch justify-center gap-6">
        Recent Token Allocation Table
        <div className="flex-1 min-w-[300px] max-w-full lg:w-auto">
          <div className="h-full flex flex-col">
            <DataTable
              headCells={headCells}
              rows={rows}
              identifier="recentTokenAllocation"
            />
          </div>
        </div>

        Usage History Table
        <div className="flex-1 min-w-[300px] max-w-full lg:w-auto">
          <div className="h-full flex flex-col">
            <UsageHistoryDataTable
              headCells={usageHeadCells}
              rows={usageRows}
            />
          </div>
        </div>

        Expired Tokens Table
        <div className="flex-1 min-w-[300px] max-w-full lg:w-auto">
          <div className="h-full flex flex-col">
            <DataTable
              headCells={headCells}
              rows={rows}
              identifier="expiredToken"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AllTablesTesting;
