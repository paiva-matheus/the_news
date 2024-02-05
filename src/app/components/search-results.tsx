import { List } from '@/components/list';
import { SkeletonList } from './skeleton-list';
import { News } from '@/src/@core/domain/entities/news';

interface SearchResultsProps {
  results: News[];
  setCurrentPage: (page: number) => void;
  page: number;
  totalPages: number;
  totalResults: number;
  isFetching: boolean;
  search: string;
}

export function SearchResults({
  results,
  setCurrentPage,
  page,
  totalPages,
  totalResults,
  isFetching,
  search
}: SearchResultsProps) {
  return (
    <>
      {search !== '' && (
        <section className="w-full max-w-[1220px]">
          <p className="dark:text-white py-8">
            Displaying results out of {totalResults} for{' '}
            <span className="font-bold">{search}</span>
          </p>
          {isFetching ? (
            <SkeletonList />
          ) : (
            <List
              news={results}
              setCurrentPage={setCurrentPage}
              page={page}
              totalPages={totalPages}
              totalResults={totalResults}
            />
          )}
        </section>
      )}
    </>
  );
}
