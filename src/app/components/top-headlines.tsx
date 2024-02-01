'use client';
import { useListTopHeadlines } from '@/hooks/use-list-top-headlines';
import { List } from '@/components/list';
import { Title } from '@/components/title';

export function TopHeadlines() {
  const { topHeadlines, setCurrentPage, page, totalPages, totalResults } =
    useListTopHeadlines({ params: {} });

  return (
    <section className="w-full max-w-[1220px]">
      <Title>Lastest News</Title>
      <List
        news={topHeadlines}
        setCurrentPage={setCurrentPage}
        page={page}
        totalPages={totalPages}
        totalResults={totalResults}
      />
    </section>
  );
}
