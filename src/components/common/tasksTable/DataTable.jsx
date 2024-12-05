import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import CustomPagination from "./CustomPagination";
import { EnhancedTableToolbar } from "./EnhancedTableToolbar"; // Assuming you have this component
import { Box } from "@mui/material";
import SecondHeading from "../SecondHeading";

export default function DataTable({ columns, rows }) {
  const rowsPerPage = 10; // Set your preferred rows per page
  const [page, setPage] = useState(0);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Modify columns to set auto width and disable resizing
  const modifiedColumns = columns.map((column) => ({
    ...column,
    sortable: false, // Disable sorting
    hide: false, // Ensure columns are not hidden
    filterable: false, // Disable filtering (if applicable)
    disableColumnMenu: true, // Remove the column menu (which has sorting, filtering, etc.)
    disableColumnResize: true, // Disable resizing
    flex: 1, // Ensure columns take up available space
    minWidth: 150, // Set a minimum width for columns to prevent them from getting too narrow
    // Remove fixed width to allow auto width
  }));

  // Specifically style the "Action" column header and cell
  const actionColumnIndex = modifiedColumns.findIndex(
    (col) => col.field === "Action"
  );
  if (actionColumnIndex !== -1) {
    modifiedColumns[actionColumnIndex] = {
      ...modifiedColumns[actionColumnIndex],
      headerClassName: "action-column-header", // Add a class to target this column header
      align: "center", // Center-align both header and cell content
    };
  }

  return (
    <Paper className="px-5 md:px-10 mt-10 py-10 flex flex-col items-end !shadow-[0px_0px_10px_#e6e6e6] !rounded-xl justify-center w-full">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Box>
          <SecondHeading text={"Active Tasks"} />
        </Box>
        <EnhancedTableToolbar />
      </div>
      <div style={{ height: "100%", width: "100%", overflowX: "auto" }}>
        {/* Set height explicitly */}
        <div style={{ minWidth: "100%", overflowX: "auto" }}>
          <DataGrid
            rows={paginatedRows} // Provide only the paginated rows to the DataGrid
            columns={modifiedColumns || []} // Fallback to an empty array if columns are not provided
            checkboxSelection // Optional: Enable checkbox for selecting rows
            disableSelectionOnClick // Avoid selection on row clicks
            hideFooter // Hide the default footer
            autoHeight={false} // Disable autoHeight to use explicit height
            rowHeight={70} // Increase the row height to 60px
            sx={{
              border: "2px solid #e6e6e6", // Optionally, add border to the table
              borderRadius: "15px", // Optionally, add border radius
              "& .MuiDataGrid-cell": {
                outline: "none", // Remove cell focus border
                fontSize: "1.1rem", // Increase the font size here
                color: "#5D6679", // Optionally, change text
                fontFamily: "Roboto", // Optionally, change font family
              },
              "& .MuiDataGrid-columnHeader": {
                fontSize: "1.1rem", // Optionally, increase header font size
                backgroundColor: "#F7FAFC", // Optionally, change header background
                color: "#667085", // Optionally, change header text color
                border: "none", // Remove column header border
                display: "flex", // Use flex layout
                justifyContent: "space-between", // Align the header content with space-between
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                display: "flex", // Ensures title uses flexbox
                justifyContent: "center", // Align header content in center
                width: "100%", // Ensure full width for the column header
                border: "none", // Remove border from column header
              },
              "& .MuiDataGrid-columnSeparator": {
                display: "none", // Hide the column separator (resize handle)
              },
              "& .MuiDataGrid-cell[data-field='Action']": {
                display: "flex", // Ensure Action cell content is a flex item
                justifyContent: "start", // Center the action (three dots)
              },
            }}
          />
        </div>
      </div>
      <CustomPagination
        count={rows.length} // Total number of rows
        page={page} // Current page
        rowsPerPage={rowsPerPage} // Rows per page
        onPageChange={handlePageChange} // Handler for page change
      />
    </Paper>
  );
}
