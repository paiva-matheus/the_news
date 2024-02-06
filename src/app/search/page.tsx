'use client';

import { SearchInput } from '@/components/search-input';
import { useSearchNews } from '@/hooks/use-search-news';
import { SearchResults } from '@/components/search-results';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();

  const {
    search,
    setSearch,
    results,
    isFetching,
    page,
    setCurrentPage,
    totalPages,
    totalResults
  } = useSearchNews({ q: searchParams.get('q') ?? '' });

  return (
    <main className="flex flex-col items-center p-8 dark:bg-gray-800">
      <SearchInput search={search} setSearch={setSearch} />

      <SearchResults
        isFetching={isFetching}
        page={page}
        results={results}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalResults={totalResults}
        search={search}
      />
    </main>
  );
}
