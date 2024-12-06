import React, { useState } from "react";
import DataTable from "../components/common/gigWorkerDataTable/DataTable";
import MainHeading from "../components/common/MainHeading";

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
    feedback: "Kathryn is consistently delivering high-quality work.",
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
    id: 4,
    name: "Cameron Williamson",
    tasksCompleted: 3,
    performance: { color: "blue", value: 50 },
    feedback: "Cameron is improving steadily with consistent efforts.",
  },
];

const renderProgressBar = (params) => {
  const { color, value } = params.value || {};

  if (!color || value == null) {
    return null;
  }

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
  return (
    <button
      onClick={params.row.handleRowExpand}
      className="text-blue-600 cursor-pointer"
    >
      {params.row.expanded ? "▲ Hide Feedback" : "▼ Show Feedback"}
    </button>
  );
};

const AllTablesTesting = () => {
  const [expandedRows, setExpandedRows] = useState([]);

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
            <td colSpan={columns.length}>
              <div
                className="italic text-sm text-black px-4 py-2"
                style={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                  color: "black",
                }}
              >
                {row.feedback}
              </div>
            </td>
          ),
        },
      ]
      : [row]
  );


  return (
    <div className="py-10">
      <div>
        <MainHeading text={"Gig Worker"} />
        <div className="rounded lg:p-10">
          <DataTable columns={columns} rows={rowsToRender} />
        </div>
      </div>
    </div>
  );
};

export default AllTablesTesting;
