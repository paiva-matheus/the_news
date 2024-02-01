import { News } from '@/domain/entities/news';
import { Card } from '@/src/app/components/card';
import { Pagination } from '@/src/app/components/pagination';

interface ListProps {
  news: News[];
  setCurrentPage: (page: number) => void;
  page: number;
  totalPages: number;
  totalResults: number;
}

export function List({
  news,
  setCurrentPage,
  page,
  totalPages,
  totalResults
}: ListProps) {
  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-wrap gap-8 mx-auto my-0 p-0 justify-center">
        {news.map((news: News) => (
          <Card key={news.title} news={news} />
        ))}
      </ul>

      <Pagination
        currentPage={page}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalResults={totalResults}
      />
    </div>
  );
}
