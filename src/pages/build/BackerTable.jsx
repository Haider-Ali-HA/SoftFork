import React from 'react'
import DataTable from "../../components/common/backersDataTable/DataTable";
import MainHeading from "../../components/common/MainHeading";

const BackerTable = () => {
    // Backers Table Data
const backersHeadCells = [
  { id: "name", numeric: false, label: "Name" },
  { id: "tokens", numeric: false, label: "Tokens" },
  { id: "role", numeric: false, label: "Role" },
  { id: "action", numeric: false, label: "Actions" },
];

const backersRows = [
  {
    id: 1,
    name: "John Doe",
    tokens: "100",
    role: "Founder",
    action: "",
  },
  {
    id: 2,
    name: "Jane Smith",
    tokens: "150",
    role: "Co-Founder",
    action: "",
  },
  {
    id: 3,
    name: "Alice Johnson",
    tokens: "200",
    role: "Investor",
    action: "",
  },
  {
    id: 4,
    name: "Bob Brown",
    tokens: "250",
    role: "Advisor",
    action: "",
  },
];

  return (
    <div className="py-10">
       <MainHeading text={"Backers"} />
      <div className="rounded lg:p-10">
        <DataTable
          headCells={backersHeadCells}
          rows={backersRows}
          identifier={"backers"}
        />
      </div>
    </div>
  )
}

export default BackerTable
