import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import CustomPagination from "./CustomPagination";
import { EnhancedTableToolbar } from "./EnhancedTableToolbar"; // Assuming you have this component

export default function DataTable({
  columns,
  rows,
  uniqueName,
  onToggleFilter,
  isFilterOpen,
  hiddenColumns,
  headCells,
  onColumnToggle,
  filterRef,
}) {
  const rowsPerPage = 10; // Set your preferred rows per page
  const [page, setPage] = useState(0);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Remove sorting, hiding, and filtering from columns
  const modifiedColumns = columns.map((column) => ({
    ...column,
    sortable: false, // Disable sorting
    hide: false, // Ensure columns are not hidden
    filterable: false, // Disable filtering (if applicable)
    disableColumnMenu: true, // Remove the column menu (which has sorting, filtering, etc.)
  }));

  return (
    <Paper className="px-5 md:px-10 mt-20  py-10 flex flex-col items-end !shadow-[0px_0px_10px_#e6e6e6] !rounded-xl justify-center w-5/6 md:w-3/4">
      <EnhancedTableToolbar
        uniqueName={uniqueName}
        onToggleFilter={onToggleFilter}
        isFilterOpen={isFilterOpen}
        hiddenColumns={hiddenColumns}
        headCells={headCells}
        onColumnToggle={onColumnToggle}
        filterRef={filterRef}
      />
      <div style={{ height: 600, width: "100%" }}>
        {" "}
        {/* Set height explicitly */}
        <DataGrid
          rows={paginatedRows} // Provide only the paginated rows to the DataGrid
          columns={modifiedColumns || []} // Fallback to an empty array if columns are not provided
          checkboxSelection // Optional: Enable checkbox for selecting rows
          disableSelectionOnClick // Avoid selection on row clicks
          hideFooter // Hide the default footer
          autoHeight={false} // Disable autoHeight to use explicit height
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
              justifyContent: "space-between", // Apply space-between to header title
              width: "100%", // Ensure full width for the column header
              border: "none", // Remove border from column header
            },
            "& .MuiDataGrid-cell[data-field='number']": {
              color: "black", // Set text color to black for the 'number' column
            },
          }}
        />
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
