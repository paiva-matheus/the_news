'use client';
import { News } from '../@core/domain/entities/news';
import { useListTopHeadlines } from '@/hooks/use-list-top-headlines';
import { Card } from '@/components/card';
import { Pagination } from '@/components/pagination';
import { Title } from '@/components/title';

export function TopHeadlines() {
  const { topHeadlines, setCurrentPage, page, totalPages, totalResults } =
    useListTopHeadlines();

  return (
    <section className="max-w-[1220px]">
      <Title>Últimas Notícias</Title>
      <div className="flex flex-col gap-6">
        <ul className="flex flex-wrap gap-8 mx-auto my-0 p-0 justify-center">
          {topHeadlines.map((news: News) => (
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
    </section>
  );
}
