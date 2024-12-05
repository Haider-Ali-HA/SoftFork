import React, { useState } from "react";
import { Toolbar, Tooltip } from "@mui/material";
import filterIcon from "../../../assets/datatable/Filter.png";
import searchIcon from "../../../assets/datatable/Search.png";
import { BsThreeDots } from "react-icons/bs";
export function EnhancedTableToolbar({}) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Toolbar className="flex flex-col  justify-end   lg:flex-row">
        <div className="flex gap-2 flex-wrap justify-end">
          <Tooltip title="Filter list">
            <button className="border px-6 h-11 text-base rounded-lg flex gap-2 items-center justify-center border-gray-500">
              <img src={filterIcon} alt="filter icon" />
              Filter
            </button>
          </Tooltip>

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
            <button className="bg-primary text-white w-36 h-11 text-base rounded-lg flex gap-2 items-center justify-center">
              Propose Task
            </button>
          </div>
        </div>
      </Toolbar>
    </>
  );
}
