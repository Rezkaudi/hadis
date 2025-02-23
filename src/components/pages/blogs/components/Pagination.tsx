import Link from "next/link";
import React from "react";

interface IPagination {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (x: number) => void;
}

const Pagination: React.FC<IPagination> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      // Show all pages if total pages are less than or equal to 7
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <Link
            href="#blogs"
            key={i}
            onClick={() => onPageChange(i)}
            className={`px-3 py-1 mx-1 rounded ${
              i === currentPage
                ? "bg-[#B81122] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {i}
          </Link>
        );
      }
    } else {
      // When totalPages > 7
      if (currentPage <= 3) {
        // First few pages
        for (let i = 1; i <= 4; i++) {
          pages.push(
            <Link
              href="#blogs"
              key={i}
              onClick={() => onPageChange(i)}
              className={`px-3 py-1 mx-1 rounded ${
                i === currentPage
                  ? "bg-[#B81122] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {i}
            </Link>
          );
        }
        pages.push(
          <span key="dots-end" className="px-3 py-1 mx-1 text-gray-500">
            ...
          </span>
        );
        pages.push(
          <Link
            href="#blogs"
            key={totalPages}
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-1 mx-1 rounded bg-gray-200 text-black"
          >
            {totalPages}
          </Link>
        );
      } else if (currentPage >= totalPages - 2) {
        // Last few pages
        pages.push(
          <Link
            href="#blogs"
            key={1}
            onClick={() => onPageChange(1)}
            className="px-3 py-1 mx-1 rounded bg-gray-200 text-black"
          >
            1
          </Link>
        );
        pages.push(
          <span key="dots-start" className="px-3 py-1 mx-1 text-gray-500">
            ...
          </span>
        );
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(
            <Link
              href="#blogs"
              key={i}
              onClick={() => onPageChange(i)}
              className={`px-3 py-1 mx-1 rounded ${
                i === currentPage
                  ? "bg-[#B81122] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {i}
            </Link>
          );
        }
      } else {
        // Middle range
        pages.push(
          <Link
            href="#blogs"
            key={1}
            onClick={() => onPageChange(1)}
            className="px-3 py-1 mx-1 rounded bg-gray-200 text-black"
          >
            1
          </Link>
        );
        pages.push(
          <span key="dots-start" className="px-3 py-1 mx-1 text-gray-500">
            ...
          </span>
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(
            <Link
              href="#blogs"
              key={i}
              onClick={() => onPageChange(i)}
              className={`px-3 py-1 mx-1 rounded ${
                i === currentPage
                  ? "bg-[#B81122] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {i}
            </Link>
          );
        }
        pages.push(
          <span key="dots-end" className="px-3 py-1 mx-1 text-gray-500">
            ...
          </span>
        );
        pages.push(
          <Link
            href="#blogs"
            key={totalPages}
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-1 mx-1 rounded bg-gray-200 text-black"
          >
            {totalPages}
          </Link>
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-4">
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;
