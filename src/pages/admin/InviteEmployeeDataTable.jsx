import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi"; // Import vertical dots icon
import DataTable from "../../components/common/dataTable1/DataTable";

// Define the columns
const columns = [
  { field: "number", headerName: "Number", width: 100 },
  { field: "fullName", headerName: "Full Name", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "role", headerName: "Role", width: 200 },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: () => (
      <div className="flex  items-center h-full">
        <BiDotsVerticalRounded className="text-xl cursor-pointer" />
      </div>
    ), // Vertical dots for actions
  },
];

// Define exactly 15 records for rows
const rows = [
  {
    id: 1,
    number: 1,
    fullName: "John Doe",
    email: "john.doe@example.com",
    role: "Data Analyst",
  },
  {
    id: 2,
    number: 2,
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Product Manager",
  },
  {
    id: 3,
    number: 3,
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Head of Engineering",
  },
  {
    id: 4,
    number: 4,
    fullName: "Bob Brown",
    email: "bob.brown@example.com",
    role: "Software Developer",
  },
  {
    id: 5,
    number: 5,
    fullName: "Charlie White",
    email: "charlie.white@example.com",
    role: "UX Designer",
  },
  {
    id: 6,
    number: 6,
    fullName: "David Green",
    email: "david.green@example.com",
    role: "Data Analyst",
  },
  {
    id: 7,
    number: 7,
    fullName: "Ella Black",
    email: "ella.black@example.com",
    role: "Product Manager",
  },
  {
    id: 8,
    number: 8,
    fullName: "Frank Blue",
    email: "frank.blue@example.com",
    role: "Head of Engineering",
  },
  {
    id: 9,
    number: 9,
    fullName: "Grace Pink",
    email: "grace.pink@example.com",
    role: "Software Developer",
  },
  {
    id: 10,
    number: 10,
    fullName: "Hannah Yellow",
    email: "hannah.yellow@example.com",
    role: "UX Designer",
  },
  {
    id: 11,
    number: 11,
    fullName: "Ian Purple",
    email: "ian.purple@example.com",
    role: "Data Analyst",
  },
  {
    id: 12,
    number: 12,
    fullName: "Jack Orange",
    email: "jack.orange@example.com",
    role: "Product Manager",
  },
  {
    id: 13,
    number: 13,
    fullName: "Kathy Red",
    email: "kathy.red@example.com",
    role: "Head of Engineering",
  },
  {
    id: 14,
    number: 14,
    fullName: "Liam Gray",
    email: "liam.gray@example.com",
    role: "Software Developer",
  },
  {
    id: 15,
    number: 15,
    fullName: "Mia Cyan",
    email: "mia.cyan@example.com",
    role: "UX Designer",
  },
];

const InviteEmployeeDataTable = () => {
  return (
    <div className="  flex items-center justify-center">
      <DataTable columns={columns} rows={rows} />
    </div>
  );
};

export default InviteEmployeeDataTable;
