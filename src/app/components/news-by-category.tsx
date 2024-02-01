'use client';
import { List } from '@/components/list';
import { useListTopHeadlines } from '@/src/hooks/use-list-top-headlines';
import { SkeletonList } from './skeleton-list';

interface NewsByCategoryProps {
  category: string;
}

export function NewsByCategory({ category }: NewsByCategoryProps) {
  const params = { category: category };
  const {
    topHeadlines,
    setCurrentPage,
    page,
    totalPages,
    totalResults,
    isFetching
  } = useListTopHeadlines({ params: params });

  return (
    <section className="w-full max-w-[1220px] mt-8">
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
