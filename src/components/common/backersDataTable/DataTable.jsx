import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Button,
} from "@mui/material";
import CustomPagination from "./CustomPagination";
import { EnhancedTableToolbar } from "./EnhancedTableToolbar";
import { BsThreeDots } from "react-icons/bs";
import SecondHeading from "../SecondHeading";

const DataTable = ({ headCells, rows, identifier }) => {
  const rowsPerPage = 10; // Rows per page for pagination
  const [page, setPage] = useState(0);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-2 md:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Box>
          <SecondHeading text={"Backers"} />
        </Box>
        <EnhancedTableToolbar />
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
                    if (headCell.id === "name") {
                      if (identifier === "backersHistory") {
                        return (
                          <TableCell
                            key={headCell.id}
                            className="text-[#05004E] !font-medium"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={row.image} // Add image in row data
                                alt="User"
                                className="w-10 h-10 rounded-xl object-cover"
                              />
                              <span>{row.name}</span>
                            </div>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell
                            key={headCell.id}
                            className="text-[#05004E] !font-medium"
                          >
                            {row.name}
                          </TableCell>
                        );
                      }
                    }

                    if (
                      headCell.id === "amountFunded" ||
                      headCell.id === "tokens"
                    ) {
                      return (
                        <TableCell
                          key={headCell.id}
                          className="text-[#05004E] !font-medium"
                        >
                          {headCell.id === "amountFunded"
                            ? `${row.amountFunded}`
                            : `${row.tokens} `}
                        </TableCell>
                      );
                    }

                    if (headCell.id === "action") {
                      if (identifier === "backers") {
                        return (
                          <TableCell key={headCell.id} className="!font-medium">
                            <BsThreeDots className="text-xl" />
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={headCell.id} className="!font-medium">
                            <button className="bg-primary text-white py-2 px-3 rounded-md cursor-pointer hover:bg-opacity-80">
                              View Profile
                            </button>
                          </TableCell>
                        );
                      }
                    }

                    return (
                      <TableCell
                        key={headCell.id}
                        className="text-[#05004E] !font-medium"
                      >
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

      <CustomPagination
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DataTable;
