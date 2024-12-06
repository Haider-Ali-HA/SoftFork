import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const columns = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "tasksCompleted", headerName: "Tasks Completed", flex: 1 },
  {
    field: "performance",
    headerName: "Performance",
    flex: 1,
    renderCell: (params) => renderProgressBar(params),
  },
  {
    field: "action",
    headerName: "Actions",
    flex: 1,
    renderCell: (params) => renderActionButton(params),
  },
];

const rows = [
  {
    id: 1,
    name: "Kathryn Murphy",
    tasksCompleted: 2,
    performance: { color: "green", value: 80 },
    feedback: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whicf Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    tasksCompleted: 5,
    performance: { color: "orange", value: 60 },
    feedback: "Guy needs to focus more on completing tasks on time.",
  },
  {
    id: 3,
    name: "Albert Flores",
    tasksCompleted: 6,
    performance: { color: "red", value: 40 },
    feedback: "Albert needs significant improvement in task quality.",
  },
  {
    id: 5,
    name: "Cameron Williamson",
    tasksCompleted: 3,
    performance: { color: "blue", value: 50 },
    feedback: "Cameron is improving steadily with consistent efforts.",
  },
];

const renderProgressBar = (params) => {
  const { color, value } = params.value || {};
  if (!color || value == null) return null;
  return (
    <div className="flex items-center h-full w-3/4">
      <div className="w-4/5 h-3.5 bg-gray-300 rounded-full overflow-hidden">
        <div
          style={{
            width: `${value}%`,
            backgroundColor: color,
            borderRadius: "inherit",
          }}
          className="h-full rounded"
        ></div>
      </div>
    </div>
  );
};

const renderActionButton = (params) => {
  const { row } = params;
  // Ensure row.id is valid and avoid rendering for feedback rows
  if (!row || !row.id || row.id.toString().startsWith("feedback-")) return null;

  return (
    <button
      onClick={row.handleRowExpand}
      className="text-black cursor-pointer flex justify-center items-center w-full h-full"
    >
      {row.expanded ? <BiChevronUp size={40} /> : <BiChevronDown size={40} />}
    </button>
  );
};

const GigWorkerTable = () => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleRowExpand = (rowId) => {
    setExpandedRows((prevState) =>
      prevState.includes(rowId)
        ? prevState.filter((id) => id !== rowId)
        : [...prevState, rowId]
    );
  };

  const rowsWithAction = rows.map((row) => ({
    ...row,
    expanded: expandedRows.includes(row.id),
    handleRowExpand: () => handleRowExpand(row.id),
  }));

  const rowsToRender = rowsWithAction.flatMap((row) =>
    row.expanded
      ? [
        row,
        {
          id: `feedback-${row.id}`,
          name: (
            <td colSpan={columns.length} >
              <div
                className={`text-sm  text-black px-4 py-2 my-2 mb-10`}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  color: "black",
                  height: row.feedback.length > 200 ? "60px" : "150px",
                }}
              >
                <div className=" absolute top-0 left-0 w-[90%] bg-white z-50 pl-4">
                  <p className="text-[#3D434A] font-semibold">Feedback</p>
                  <p className="text-[#3D434A] ">{row.feedback}</p>
                </div>
              </div>
            </td>
          ),
        },
      ]
      : [row]
  );

  const totalPages = Math.ceil(rowsToRender.length / rowsPerPage);
  const start = page * rowsPerPage + 1;
  const end = Math.min((page + 1) * rowsPerPage, rowsToRender.length);

  const handlePageChange = (newPage) => setPage(newPage);

  return (
    <div className="py-10 rounded lg:p-10 shadow-lg">
      <div className="">
        <h1 className="text-3xl font-semibold mb-4">Gig Worker</h1>
        <div className=" overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b border-black">
                {columns.map((col) => (
                  <th key={col.field} className="text-left p-3">{col.headerName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowsToRender.slice(start - 1, end).map((row) => (
                <tr key={row.id} className="relative border-dotted border-y-2 border-gray-300">
                  {columns.map((col) => (
                    <td key={col.field} className="p-3">
                      {col.renderCell ? col.renderCell({ value: row[col.field], row }) : row[col.field]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between w-full mt-4">
        <div className="text-sm text-gray-500">
          Showing {start} to {end} of {rowsToRender.length} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(page > 0 ? page - 1 : 0)}
            disabled={page === 0}
            className={`px-4 py-2 text-sm rounded-md ${page === 0
                ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
              }`}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`px-4 py-2 text-sm rounded-md ${index === page
                  ? "bg-primary text-white"
                  : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
                }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(page < totalPages - 1 ? page + 1 : totalPages - 1)}
            disabled={page === totalPages - 1}
            className={`px-4 py-2 text-sm rounded-md ${page === totalPages - 1
                ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GigWorkerTable;
