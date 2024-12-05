import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

const DataTable = ({ headCells, rows, identifier }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <Box>
          {identifier === "recentTokenAllocation" ? (
            <h3 className="text-lg font-semibold capitalize">
              Recent Token Allocation
            </h3>
          ) : (
            <h3 className="text-lg font-semibold capitalize">Expired Token</h3>
          )}
        </Box>
      </div>

      <div className="overflow-x-auto">
        <TableContainer>
          <Table sx={{ width: 300, height: 370 }} stickyHeader>
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
                  {headCells.map((headCell) => (
                    <TableCell
                      key={headCell.id}
                      className={`text-[#05004E] !font-medium ${
                        identifier === "expiredToken" &&
                        headCell.id === "amount"
                          ? "!text-red-500"
                          : ""
                      }`}
                    >
                      {row[headCell.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DataTable;
