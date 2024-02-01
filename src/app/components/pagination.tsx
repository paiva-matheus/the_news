import { Pagination as FlowbitePagination } from 'flowbite-react';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  totalResults: number;
}

export function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
  totalResults
}: PaginationProps) {
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 100,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <FlowbitePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        results={totalResults}
      />
    </div>
  );
}
