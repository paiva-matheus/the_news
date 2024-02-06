import Image from 'next/image';
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
    <section className="w-full max-w-[1220px]">
      {search !== '' ? (
        <>
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
        </>
      ) : (
        <Image
          src="/search.svg"
          alt="Drawing of a girl with a magnifying glass indicating that the user can search for something"
          width={100}
          height={100}
          className="w-3/5 h-3/5 mx-auto my-20 lg:mt-10 lg:mb-0"
        />
      )}
    </section>
  );
}
