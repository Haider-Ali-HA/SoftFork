import React from "react";
import DataTable from "../../components/common/dataTable2/DataTable"; // Import your DataTable component

const FundsTable = () => {
  // Define the table headers
  const headCells = [
    { id: "number", numeric: false, label: "Number" },
    { id: "fullName", numeric: false, label: "Full Name" },
    { id: "role", numeric: false, label: "Role" },
    { id: "startingDate", numeric: false, label: "Starting Date" },
    { id: "fund", numeric: false, label: "Fund" },
    { id: "duration", numeric: false, label: "Duration" },
    { id: "autoRefill", numeric: false, label: "Auto Refill" },
    { id: "status", numeric: false, label: "Status" },
    { id: "action", numeric: false, label: "Action" },
  ];

  // Define the table data
  const rows = [
    {
      id: 1,
      number: "01",
      fullName: "Somogyi Adél",
      role: "Gig Worker",
      startingDate: "May 12, 2019",
      status: "Active",
    },
    {
      id: 2,
      number: "02",
      fullName: "John Doe",
      role: "Manager",
      startingDate: "June 15, 2018",
      status: "Vacated",
    },
    {
      id: 3,
      number: "03",
      fullName: "Jane Smith",
      role: "Developer",
      startingDate: "July 20, 2020",
      status: "Ongoing",
    },
    {
      id: 4,
      number: "04",
      fullName: "Michael Brown",
      role: "Designer",
      startingDate: "August 25, 2017",
      status: "Active",
    },
    {
      id: 5,
      number: "05",
      fullName: "Emily Davis",
      role: "Tester",
      startingDate: "September 30, 2019",
      status: "Vacated",
    },
    {
      id: 6,
      number: "06",
      fullName: "David Wilson",
      role: "Support",
      startingDate: "October 10, 2021",
      status: "Ongoing",
    },
    {
      id: 7,
      number: "07",
      fullName: "Sarah Johnson",
      role: "HR",
      startingDate: "November 5, 2016",
      status: "Active",
    },
    {
      id: 8,
      number: "08",
      fullName: "Chris Lee",
      role: "Sales",
      startingDate: "December 12, 2018",
      status: "Vacated",
    },
    {
      id: 9,
      number: "09",
      fullName: "Anna White",
      role: "Marketing",
      startingDate: "January 15, 2020",
      status: "Ongoing",
    },
    {
      id: 10,
      number: "10",
      fullName: "James Green",
      role: "Finance",
      startingDate: "February 20, 2017",
      status: "Active",
    },
    {
      id: 11,
      number: "11",
      fullName: "Patricia Harris",
      role: "Admin",
      startingDate: "March 25, 2019",
      status: "Vacated",
    },
    {
      id: 12,
      number: "12",
      fullName: "Robert Clark",
      role: "Consultant",
      startingDate: "April 30, 2021",
      status: "Ongoing",
    },
    {
      id: 13,
      number: "13",
      fullName: "Linda Martinez",
      role: "Analyst",
      startingDate: "May 15, 2018",
      status: "Active",
    },
    {
      id: 14,
      number: "14",
      fullName: "Thomas Lewis",
      role: "Engineer",
      startingDate: "June 20, 2020",
      status: "Vacated",
    },
    {
      id: 15,
      number: "15",
      fullName: "Barbara Walker",
      role: "Architect",
      startingDate: "July 25, 2017",
      status: "Ongoing",
    },
  ];

  return (
    <div className="rounded lg:p-10">
      <DataTable
        headCells={headCells} // Pass headers
        rows={rows} // Conditionally pass rows
        identifier="fundsTable" // Unique identifier for the table
      />
    </div>
  );
};

export default FundsTable;
