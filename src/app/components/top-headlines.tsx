'use client';
import { useListTopHeadlines } from '@/hooks/use-list-top-headlines';
import { List } from '@/components/list';
import { Title } from '@/components/title';
import { SkeletonList } from './skeleton-list';

export function TopHeadlines() {
  const {
    topHeadlines,
    setCurrentPage,
    page,
    totalPages,
    totalResults,
    isFetching
  } = useListTopHeadlines({ params: {} });

  return (
    <section className="w-full max-w-[1220px]">
      <Title>Lastest News</Title>
      {isFetching ? (
        <SkeletonList />
      ) : (
        <List
          news={topHeadlines}
          setCurrentPage={setCurrentPage}
          page={page}
          totalPages={totalPages}
          totalResults={totalResults}
        />
      )}
    </section>
  );
}
