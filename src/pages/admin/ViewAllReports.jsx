import DataTable from "../../components/common/dataTable2/DataTable"; // Import your DataTable component
import User1 from "../../assets/datatable/userImage1.png"; // Add user image
import User2 from "../../assets/datatable/userImage2.png"; // Add user image
import User3 from "../../assets/datatable/userImage3.png"; // Add user image
import User4 from "../../assets/datatable/userImage4.png"; // Add user image
import MainHeading from "../../components/common/MainHeading";

const headCells = [
  { id: "projectName", numeric: false, label: "Project Name" },
  { id: "founderName", numeric: false, label: "Founder Name" },
  { id: "status", numeric: false, label: "Status" },
  { id: "reports", numeric: false, label: "Reports" },
  { id: "action", numeric: false, label: "Actions" },
];

// Define the table data for ViewReports

const rows = [
  {
    id: 1,
    projectName: "Sustainable Packaging Initiative",
    founderName: "John Doe",
    status: "Live",
    reports: "Annual Sustainability Report",
    userImage: User1, // Add user image
  },
  {
    id: 2,
    projectName: "Green Energy Campaign",
    founderName: "Jane Smith",
    status: "Fund Completed",
    reports: "Monthly Sales Report",
    userImage: User2, // Add user image
  },
  {
    id: 3,
    projectName: "Urban Farming Project",
    founderName: "Alice Johnson",
    status: "Funding Missed",
    reports: "Quarterly Growth Report",
    userImage: User3, // Add user image
  },
  {
    id: 4,
    projectName: "Water Conservation Program",
    founderName: "Bob Brown",
    status: "Deadline Passed",
    reports: "Final Impact Report",
    userImage: User4, // Add user image
  },
];
const ViewAllReports = () => {
  return (
    <div className="bg-white h-full flex flex-col gap-7 ">
     
      <div className="bg-white h-full flex flex-col gap-7">
       

        {/* Pass the data to the DataTable component */}
        <div className="rounded lg:p-10">
          <DataTable
            headCells={headCells} // Pass headers
            rows={rows} // Pass rows
            identifier="viewReportsTable" // Unique identifier for the table
          />
        </div>
      </div>
    </div>
  );
};

export default ViewAllReports;
