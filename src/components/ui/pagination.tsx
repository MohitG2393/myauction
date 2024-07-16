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
  const goToPage = (page: number) => {
    if (page < 0 || page >= pageCount) return;
    onPageChange(page);
  };

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      {Array.from({ length: pageCount }, (_, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded-md focus:outline-none ${
            currentPage === index
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => goToPage(index)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === pageCount - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
