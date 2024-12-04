import React from "react";
import DataTable from "../../components/common/dataTable2/DataTable"; // Import your DataTable component

const Employees = () => {
  // Define the table headers
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
    <div className="rounded lg:p-10">
      <DataTable
        headCells={headCells} // Pass headers
        rows={rows} // Conditionally pass rows
        identifier="employeesTable" // Unique identifier for the table
      />
    </div>
  );
};

export default Employees;
