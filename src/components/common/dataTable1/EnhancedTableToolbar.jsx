import React, { useState } from "react";
import { Toolbar, Tooltip } from "@mui/material";
import filterIcon from "../../../assets/datatable/Filter.png";
import searchIcon from "../../../assets/datatable/Search.png";
import Model from "../Model"; // Import the Model component

export function EnhancedTableToolbar({
  onToggleFilter,
  isFilterOpen,
  hiddenColumns,
  headCells,
  onColumnToggle,
  filterRef, // Added ref for filter dropdown
}) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Toolbar className="flex flex-col   gap-5 mb-5 lg:flex-row">
        <div className="flex gap-5 flex-wrap justify-center">
          <>
            <Tooltip title="Filter list">
              <button
                className="border px-6 h-11 text-base rounded-lg flex gap-2 items-center justify-center border-gray-500"
                onClick={onToggleFilter}
              >
                <img src={filterIcon} alt="filter icon" />
                Filter
              </button>
            </Tooltip>
            {isFilterOpen && (
              <div
                ref={filterRef}
                className="absolute  mt-7 ml-7 p-7 bg-white shadow-lg border rounded-md z-50"
              >
                {headCells.map((column) => (
                  <div key={column.id} className="flex    items-center gap-3">
                    <input
                      className="h-4 w-4 "
                      type="checkbox"
                      checked={!hiddenColumns.includes(column.id)}
                      onChange={() => onColumnToggle(column.id)}
                    />
                    <label className="my-1">{column.label}</label>
                  </div>
                ))}
              </div>
            )}
          </>

          <Tooltip title="Search">
            <div className="relative rounded-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={searchIcon} alt="search icon" />
              </div>
              <input
                type="text"
                placeholder="Search…"
                aria-label="search"
                className="pl-10 pr-3 py-2 w-40 border border-gray-400 rounded-md outline-none"
              />
            </div>
          </Tooltip>
          <div>
            <button
              className="bg-primary text-white w-36 h-11 text-base rounded-lg flex gap-2 items-center justify-center"
              onClick={handleOpenModal} // Open modal on click
            >
              Send Invites
            </button>
          </div>
        </div>
      </Toolbar>
      <Model
        open={isModalOpen}
        handleClose={handleCloseModal}
        title="Invites Sent"
        content="Your invite has been sent. Now you can get your team on board via Slack or Rippling"
        buttonText="Okay"
      />
    </>
  );
}
