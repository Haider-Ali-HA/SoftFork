import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

const UsageHistoryDataTable = ({ headCells, rows }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      {/* Table Heading */}
      <div className="flex items-center justify-between mb-4">
        <Box>
          <h3 className="text-lg font-semibold capitalize">Usage History</h3>
        </Box>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <TableContainer>
          <Table sx={{ minWidth: 750  }} stickyHeader>
            {/* Table Header */}
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

            {/* Table Body */}
            <TableBody>
              {rows.map((row) => (
                <TableRow hover key={row.id}>
                  {headCells.map((headCell) => {
                    // Custom rendering for the "projectName" column
                    if (headCell.id === "projectName") {
                      return (
                        <TableCell key={headCell.id} className="!font-medium">
                          <div className="flex items-center gap-3">
                            {/* Image on the left */}
                            <img
                              src={row.image} // Use image from the data
                              alt="Project"
                              className="w-10 h-10 rounded-xl object-cover"
                            />
                            {/* Name on the right */}
                            <span className="text-[#05004E]">
                              {row.projectName}
                            </span>
                          </div>
                        </TableCell>
                      );
                    }

                    // Default rendering for other columns
                    return (
                      <TableCell key={headCell.id} className="!font-medium">
                        {row[headCell.id]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default UsageHistoryDataTable;
