import React from "react";
import DataTable from "../../components/common/dataTable2/DataTable"; // Import your DataTable component
import User from "../../assets/header/profile-photo.png";
import MainHeading from "../../components/common/MainHeading";

const ViewSingleReport = () => {
  const headCells = [
    { id: "number", numeric: false, label: "Number" },
    { id: "fullName", numeric: false, label: "Full Name" },
    { id: "activeAs", numeric: false, label: "Active As" },
    { id: "joiningDate", numeric: false, label: "Joining Date" },
    { id: "status", numeric: false, label: "Status" },
    { id: "action", numeric: false, label: "Action" },
  ];

  // Define the table data
  const rows = [
    {
      id: 1,
      number: "01",
      fullName: "Somogyi Adél",
      activeAs: "Gig Worker",
      joiningDate: "May 12, 2019",
      status: "Active",
    },
    {
      id: 2,
      number: "02",
      fullName: "Tóth Kamilla",
      activeAs: "Gig Worker",
      joiningDate: "December 19, 2013",
      status: "Vacated",
    },
    {
      id: 3,
      number: "03",
      fullName: "Katona Beatrix",
      activeAs: "Backer",
      joiningDate: "March 13, 2014",
      status: "Vacated",
    },
    {
      id: 4,
      number: "04",
      fullName: "Nagy Tímea",
      activeAs: "Founder",
      joiningDate: "May 20, 2015",
      status: "Active",
    },
    {
      id: 5,
      number: "05",
      fullName: "Molnár Fruzsina",
      activeAs: "Backer",
      joiningDate: "May 29, 2017",
      status: "Vacated",
    },
    {
      id: 6,
      number: "06",
      fullName: "Virág Mercédesz",
      activeAs: "Gig Worker",
      joiningDate: "July 14, 2015",
      status: "Active",
    },
    {
      id: 7,
      number: "07",
      fullName: "Soós Annamária",
      activeAs: "Founder",
      joiningDate: "May 6, 2012",
      status: "Active",
    },
    {
      id: 8,
      number: "08",
      fullName: "Veres Panna",
      activeAs: "Gig Worker",
      joiningDate: "August 24, 2013",
      status: "Active",
    },
    {
      id: 9,
      number: "09",
      fullName: "Surány Izabella",
      activeAs: "Gig Worker",
      joiningDate: "December 29, 2012",
      status: "Vacated",
    },
    {
      id: 10,
      number: "10",
      fullName: "László Cintia",
      activeAs: "Gig Worker",
      joiningDate: "February 28, 2018",
      status: "Ongoing",
    },
  ];
  return (
    <div className="bg-white h-full flex flex-col gap-7 ">
      {/* Page title */}
      <div className="flex items-center flex-col gap-5  mt-3">
        <MainHeading text="Eco-Friendly Packaging" />
        <div className="flex gap-2">
          <img src={User} alt="user" className="w-10 h-10 rounded-full" />
          <div>
            <h4 className="text-gray-700 font-medium">Square Dashboard</h4>
            <p className="text-gray-500 text-sm">karson123@gmail.com</p>
          </div>
        </div>
      </div>
      {/* cards  */}
      <div className="flex flex-wrap gap-x-4 gap-y-7">
        <div className="bg-white p-6 rounded-2xl shadow-[0px_0px_20px_#e2e2e2] flex flex-col items-start">
          <h3 className="text-2xl w-full text-gray-600 font-medium mb-2">
            Total Invites Pending
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-primary">10</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-[0px_0px_20px_#e2e2e2] flex flex-col items-start">
          <h3 className="text-2xl w-full text-gray-600 font-medium mb-2">
            Total People Collaborating
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-primary">08</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-[0px_0px_20px_#e2e2e2] flex flex-col items-start">
          <h3 className="text-2xl w-full text-gray-600 font-medium mb-2">
            Active Backers
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-primary">07</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-[0px_0px_20px_#e2e2e2] flex flex-col items-start">
          <h3 className="text-2xl w-full text-gray-600 font-medium mb-2">
            Active Gig Workers
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-primary">05</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-[0px_0px_20px_#e2e2e2] flex flex-col items-start">
          <h3 className="text-2xl w-full text-gray-600 font-medium mb-2">
            Total Amount Raised
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-primary">05</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-[0px_0px_20px_#e2e2e2] flex flex-col items-start">
          <h3 className="text-2xl w-full text-gray-600 font-medium mb-2">
            Pending Gig Applicants
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-primary">02</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-[0px_0px_20px_#e2e2e2] flex flex-col items-start">
          <h3 className="text-2xl w-full text-gray-600 font-medium mb-2">
            Engaged Workers
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-primary">06</p>
        </div>
      </div>
      {/* DataTable */}
      <div className="p-0 lg:p-10 rounded-xl ">
        <DataTable
          headCells={headCells} // Pass headers
          rows={rows} // Conditionally pass rows
        />
      </div>
    </div>
  );
};

export default ViewSingleReport;
