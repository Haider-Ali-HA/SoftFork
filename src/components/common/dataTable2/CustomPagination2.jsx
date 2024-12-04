import React from "react";

export default function CustomPagination2({
  count,
  page,
  rowsPerPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(count / rowsPerPage);
  const start = page * rowsPerPage + 1;
  const end = Math.min((page + 1) * rowsPerPage, count);

  const handlePrevious = () => {
    if (page > 0) {
      onPageChange(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      onPageChange(page + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row items-center justify-between w-full mt-4">
      {/* Page Info */}
      <div className="text-sm text-gray-500">
        {`Showing ${start} to ${end} of ${count} entries`}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={page === 0}
          className={`px-4 py-2 text-sm rounded-md ${
            page === 0
              ? "text-gray-400 bg-gray-200 cursor-not-allowed"
              : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index)}
            className={`px-4 py-2 text-sm rounded-md ${
              index === page
                ? "bg-[#7A70BA] text-white"
                : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className={`px-4 py-2 text-sm rounded-md ${
            page === totalPages - 1
              ? "text-gray-400 bg-gray-200 cursor-not-allowed"
              : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
