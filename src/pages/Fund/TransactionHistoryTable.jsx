import React from 'react'
import DataTable from "../../components/common/transactionHistoryDataTable/DataTable";
import UsageHistoryDataTable from "../../components/common/transactionHistoryDataTable/UsageHistoryDataTable";
import User1 from "../../assets/datatable/userImage1.png"; // Add user image
import User2 from "../../assets/datatable/userImage2.png"; // Add user image
import User3 from "../../assets/datatable/userImage3.png"; // Add user image
import User4 from "../../assets/datatable/userImage4.png"; // Add user image

const TransactionHistoryTable = () => {
   // Transaction History Table Data
const headCells = [
  { id: "date", label: "Date" },
  { id: "amount", label: "Amount" },
];
const rows = [
  { id: 1, date: "August 2, 2023", amount: "$100" },
  { id: 2, date: "August 2, 2023", amount: "$150" },
  { id: 3, date: "August 2, 2023", amount: "$200" },
  { id: 4, date: "August 2, 2023", amount: "$250" },
  { id: 5, date: "August 2, 2023", amount: "$300" },
  // Add more rows as needed
];
// Head cells
const usageHeadCells = [
  { id: "projectName", label: "Project Name" }, // Added project name
  { id: "date", label: "Date" },
  { id: "amount", label: "Amount" },
];

// Rows
const usageRows = [
  {
    id: 1,
    projectName: "Project Alpha",
    date: "August 2, 2023",
    amount: "$100",
    image: User1,
  },
  {
    id: 2,
    projectName: "Project Beta",
    date: "August 2, 2023",
    amount: "$150",
    image: User2,
  },
  {
    id: 3,
    projectName: "Project Gamma",
    date: "August 2, 2023",
    amount: "$200",
    image: User3,
  },
  {
    id: 4,
    projectName: "Project Delta",
    date: "August 2, 2023",
    amount: "$250",
    image: User4,
  },
];
    return (
        <div className="py-10">
            <div className="flex flex-wrap items-stretch justify-center gap-6">
       
                <div className="flex-1 min-w-[300px] max-w-full lg:w-auto">
                    <div className="h-full flex flex-col">
                        <DataTable
                            headCells={headCells}
                            rows={rows}
                            identifier="recentTokenAllocation"
                        />
                    </div>
                </div>

        
                <div className="flex-1 min-w-[300px] max-w-full lg:w-auto">
                    <div className="h-full flex flex-col">
                        <UsageHistoryDataTable
                            headCells={usageHeadCells}
                            rows={usageRows}
                        />
                    </div>
                </div>

                <div className="flex-1 min-w-[300px] max-w-full lg:w-auto">
                    <div className="h-full flex flex-col">
                        <DataTable
                            headCells={headCells}
                            rows={rows}
                            identifier="expiredToken"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionHistoryTable
