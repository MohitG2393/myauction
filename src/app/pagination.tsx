// Pagination.tsx

import React from "react";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
}) => {
  // Calculate total pages based on 16 items per page
  const totalPages = Math.ceil(pageCount / 16);

  // Function to handle page navigation
  const goToPage = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center space-x-4">
      {/* Previous Button */}
      <button
        className={`px-4 py-2 bg-gray-200 text-gray-800 rounded-md ${
          currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        }`}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`px-4 py-2 ${
            currentPage === index
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          } rounded-md`}
          onClick={() => goToPage(index)}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`px-4 py-2 bg-gray-200 text-gray-800 rounded-md ${
          currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        }`}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
