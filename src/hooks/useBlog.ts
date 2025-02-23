import { useState } from "react";
import blogsData from "@/content/blogs/blogs.json";

export const useBlog = () => {
  const itemsPerPage = 15; // Number of posts per page
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate the range of blogs to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = blogsData.slice(startIndex, startIndex + itemsPerPage);

  return { currentBlogs, itemsPerPage, currentPage, handlePageChange };
};
