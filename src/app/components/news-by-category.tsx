'use client';
import { List } from '@/components/list';
import { useListTopHeadlines } from '@/src/hooks/use-list-top-headlines';

interface NewsByCategoryProps {
  category: string;
}

export function NewsByCategory({ category }: NewsByCategoryProps) {
  const params = { category: category };
  const { topHeadlines, setCurrentPage, page, totalPages, totalResults } =
    useListTopHeadlines({ params: params });

  return (
    <section className="w-full max-w-[1220px] mt-8">
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
