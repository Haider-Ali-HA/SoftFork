import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { EnhancedTableToolbar } from "./EnhancedTableToolbar";
import Box from "@mui/material/Box";
import SecondHeading from "../../../components/common/SecondHeading";
import CustomPagination from "./CustomPagination";

export default function DataTable({ columns, rows }) {
  const rowsPerPage = 10; // Rows per page for pagination
  const [page, setPage] = useState(0);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Enforce fixed width for columns
  const updatedColumns = columns.map((col) => ({
    ...col,
    sortable: false, // Disable sorting
    width: col.width || 150, // Set a default fixed width if not defined
    resizable: false, // Prevent resizing
  }));

  return (
    <Paper className="px-5 md:px-10 mt-10 py-10 flex flex-col items-end !shadow-[0px_0px_10px_#e6e6e6] !rounded-xl justify-center w-full">
      <div className="flex flex-col md:flex-row items-center w-full justify-between">
        <Box>
          <SecondHeading text={"Backers"} />
        </Box>
        <EnhancedTableToolbar />
      </div>
      {/* Horizontal scroll wrapper */}
      <div style={{ height: "auto", width: "100%", overflowX: "auto" }}>
        <div style={{ minWidth: "800px" }}> {/* Set a minimum width for the table */}
          <DataGrid
            rows={paginatedRows}
            columns={updatedColumns}
            hideFooter
            disableSelectionOnClick
            disableColumnMenu // Disable the column menu
            disableColumnSelector // Disable column selection
            disableColumnFilter // Disable column filtering
            rowHeight={70}
            sx={{
              border: "2px solid #e6e6e6",
              borderRadius: "15px",
              "& .MuiDataGrid-cell": {
                outline: "none",
                fontSize: "1.1rem",
                color: "#5D6679",
                fontFamily: "Roboto",
              },
              "& .MuiDataGrid-columnHeader": {
                fontSize: "1.1rem",
                backgroundColor: "#F7FAFC",
                color: "#667085",
              },
              "& .MuiDataGrid-columnSeparator": {
                display: "none", // Hides the vertical lines
              },
            }}
          />
        </div>
      </div>

      <CustomPagination
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
      />
    </Paper>
  );
}
