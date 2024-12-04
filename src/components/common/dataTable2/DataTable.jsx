import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import CustomPagination1 from "./CustomPagination1";
import CustomPagination2 from "./CustomPagination2";
import { EnhancedTableToolbar } from "./EnhancedTableToolbar";
import { Link } from "react-router-dom";
import MainHeading from "../MainHeading";
import { BsThreeDots } from "react-icons/bs";

const DataTable = ({
  headCells,
  rows,
  identifier,
  title,
  uniqueName,
  onToggleFilter,
  isFilterOpen,
  hiddenColumns,
  onColumnToggle,
  filterRef,
}) => {
  const rowsPerPage = 10; // Rows per page for pagination
  const [page, setPage] = useState(0);
  const [autoRefillState, setAutoRefillState] = useState({});
  const [durationState, setDurationState] = useState({});

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleCheckboxChange = (id) => {
    setAutoRefillState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDurationChange = (id, value) => {
    setDurationState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const [dropdownOpen, setDropdownOpen] = useState({});
  const [selectedDuration, setSelectedDuration] = useState({});

  const toggleDropdown = (id) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDurationSelect = (id, duration) => {
    setSelectedDuration((prev) => ({
      ...prev,
      [id]: duration,
    }));
    setDropdownOpen((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-2 md:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Box>
          {identifier === "viewReportsTable" ? (
            <>
              <MainHeading text="Projects List" />
            </>
          ) : (
            <>
              <div className="flex flex-wrap gap-2 my-4">
                <button className="rounded-full cursor-pointer bg-blue-100 border-[#0F50AA] border w-20 text-[#0F50AA] py-2 text-center">
                  All
                </button>
                <button className="rounded-full cursor-pointer bg-white border-gray-400 border w-20 text-[#4b4b4b] py-2 text-center">
                  Active
                </button>
                <button className="rounded-full cursor-pointer bg-white border-gray-400 border w-24 text-[#4b4b4b] py-2 text-center">
                  Vacated
                </button>
                <button className="rounded-full cursor-pointer bg-white border-gray-400 border w-24 text-[#4b4b4b] py-2 text-center">
                  Ongoing
                </button>
              </div>
            </>
          )}
        </Box>

        <EnhancedTableToolbar
          uniqueName={uniqueName}
          onToggleFilter={onToggleFilter}
          isFilterOpen={isFilterOpen}
          hiddenColumns={hiddenColumns}
          headCells={headCells}
          onColumnToggle={onColumnToggle}
          filterRef={filterRef}
          identifier={identifier}
        />
      </div>

      <div className="overflow-x-auto">
        <TableContainer>
          <Table sx={{ minWidth: 750 }} stickyHeader>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "left"}
                    className="!bg-[#F7F9FC] !text-[#667085] !font-medium"
                  >
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow hover key={row.id}>
                  {headCells.map((headCell) => {
                    if (identifier === "fundsTable") {
                      if (headCell.id === "fund") {
                        return (
                          <TableCell
                            key={headCell.id}
                            className="text-[#05004E] !font-medium"
                          >
                            <div className="rounded-lg border border-gray-500 text-center px-2 py-1">
                              $25
                            </div>
                          </TableCell>
                        );
                      } else if (headCell.id === "duration") {
                        return (
                          <TableCell key={headCell.id} className="!font-medium">
                            <button
                              className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 relative"
                              type="button"
                              onClick={() => toggleDropdown(row.id)}
                            >
                              <span>
                                {selectedDuration[row.id] || "Yearly"}
                              </span>
                              <svg
                                className="w-4 h-4 text-gray-400 absolute -right-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            {dropdownOpen[row.id] && (
                              <div className="absolute z-10 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div
                                  className="py-1"
                                  role="menu"
                                  aria-orientation="vertical"
                                >
                                  <button
                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                    onClick={() =>
                                      handleDurationSelect(row.id, "Yearly")
                                    }
                                  >
                                    Yearly
                                  </button>
                                  <button
                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                    onClick={() =>
                                      handleDurationSelect(row.id, "Monthly")
                                    }
                                  >
                                    Monthly
                                  </button>
                                  <button
                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                    onClick={() =>
                                      handleDurationSelect(row.id, "Weekly")
                                    }
                                  >
                                    Weekly
                                  </button>
                                </div>
                              </div>
                            )}
                          </TableCell>
                        );
                      } else if (headCell.id === "autoRefill") {
                        return (
                          <TableCell
                            key={headCell.id}
                            className="text-[#05004E] !font-medium"
                          >
                            <Checkbox
                              checked={autoRefillState[row.id] || false}
                              onChange={() => handleCheckboxChange(row.id)}
                            />
                          </TableCell>
                        );
                      }
                    }

                    if (headCell.id === "projectName") {
                      return (
                        <TableCell key={headCell.id} className="!font-medium">
                          <div className="flex items-center gap-3">
                            {/* Image on the left */}
                            <img
                              src={row.userImage} // Replace with dynamic image if required
                              alt="Project"
                              className="w-10 h-10 rounded-xl object-cover"
                            />
                            {/* Project name on the right */}
                            <span className="text-[#05004E]">
                              {row[headCell.id]}
                            </span>
                          </div>
                        </TableCell>
                      );
                    }

                    if (headCell.id === "reports") {
                      return (
                        <TableCell
                          key={headCell.id}
                          className="text-[#05004E]  !font-medium"
                        >
                          <Link to="/admin/view-single-reports">
                            <button className="bg-primary text-white py-2 lg:px-4 !text-sm !lg:text-base rounded hover:bg-opacity-80">
                              View Reports
                            </button>
                          </Link>
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell
                        key={headCell.id}
                        className={`text-[#05004E] !font-medium ${
                          headCell.id === "status"
                            ? (identifier === "viewReportsTable" &&
                                row[headCell.id] === "Live") ||
                              row[headCell.id] === "Fund Completed"
                              ? "!text-green-500"
                              : row[headCell.id] === "Funding Missed"
                              ? "!text-red-500"
                              : row[headCell.id] === "Deadline Passed"
                              ? "!text-orange-500"
                              : row[headCell.id] === "Active"
                              ? "!text-green-500"
                              : row[headCell.id] === "Vacated"
                              ? "!text-red-500"
                              : row[headCell.id] === "Ongoing"
                              ? "!text-orange-500"
                              : ""
                            : ""
                        }`}
                      >
                        {headCell.id === "action" ? (
                          <BsThreeDots className="text-xl cursor-pointer" />
                        ) : (
                          row[headCell.id]
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {identifier === "viewReportsTable" ? (
        <CustomPagination2
          count={rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
        />
      ) : (
        <CustomPagination1
          count={rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default DataTable;
