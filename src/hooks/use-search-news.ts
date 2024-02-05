'use client';
import { useState } from 'react';
import { Registry, container } from '@/infra/container-registry';
import { useQuery } from '@tanstack/react-query';
import { SearchNewsUseCase } from '@/application/news/search-news.use-case';

type FetchSearchParams = { [key: string]: string | number };

export function useSearchNews(params: FetchSearchParams) {
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState(params.q as string);

  const searchNewsUseCase = container.get<SearchNewsUseCase>(
    Registry.SearchNewsUseCase
  );

  const fetchSearch = async (query: FetchSearchParams) => {
    const data = await searchNewsUseCase.execute(query);
    setTotalResults(data.totalResults);
    setTotalPages(Math.ceil(data.totalResults / perPage));
    return data.news;
  };

  const defaultParams = {
    page: page,
    pageSize: perPage,
    q: search
  };

  const { data, isFetching } = useQuery({
    queryKey: ['searchNews', params, defaultParams],
    queryFn: () => fetchSearch({ ...defaultParams, ...params }),
    initialData: [],
    refetchOnWindowFocus: false
  });

  const setCurrentPage = (page: number) => {
    setPage(page);
  };

  return {
    totalResults: totalResults,
    results: data,
    isFetching,
    page,
    setCurrentPage,
    totalPages,
    search,
    setSearch
  };
}
