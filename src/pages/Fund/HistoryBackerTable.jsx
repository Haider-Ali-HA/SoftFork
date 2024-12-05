import React from 'react'
import User1 from "../../assets/datatable/userImage1.png"; // Add user image
import User2 from "../../assets/datatable/userImage2.png"; // Add user image
import User3 from "../../assets/datatable/userImage3.png"; // Add user image
import User4 from "../../assets/datatable/userImage4.png"; // Add user image
import DataTable from "../../components/common/backersDataTable/DataTable";
import MainHeading from "../../components/common/MainHeading";

const HistoryBackerTable = () => {

    // Backers History Table Data
const backersHistoryHeadCells = [
  { id: "name", numeric: false, label: "Name" },
  { id: "amountFunded", numeric: false, label: "Amount Funded" },
  { id: "role", numeric: false, label: "Role" },
  { id: "action", numeric: false, label: "Actions" },
];

const backersHistoryRows = [
  {
    id: 1,
    name: "John Doe",
    amountFunded: "$100",
    role: "Founder",
    action: "",
    image: User1, // Add image path here
  },
  {
    id: 2,
    name: "Jane Smith",
    amountFunded: "$150",
    role: "Co-Founder",
    action: "",
    image: User2,
  },
  {
    id: 3,
    name: "Alice Johnson",
    amountFunded: "$200",
    role: "Investor",
    action: "",
    image: User3,
  },
  {
    id: 4,
    name: "Bob Brown",
    amountFunded: "$250",
    role: "Advisor",
    action: "",
    image: User4,
  },
];

  return (
    <div className="py-10">
      {/* History of Backer Transactions Table */}
      <MainHeading text={"History of Backer Transactions"} />
      <div className="rounded lg:p-10">
        <DataTable
          headCells={backersHistoryHeadCells}
          rows={backersHistoryRows}
          identifier={"backersHistory"}
        />
      </div>
      
    </div>
  )
}

export default HistoryBackerTable
