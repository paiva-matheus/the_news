'use client';
import { useState } from 'react';
import { Registry, container } from '@/infra/container-registry';
import { ListNewsUseCase } from '@/application/news/list-news.use-case';
import { useQuery } from '@tanstack/react-query';

type FetchTopHeadlinesParams = { [key: string]: string | number };

export function useListTopHeadlines(params: FetchTopHeadlinesParams) {
  const [totalResults, setTotalResults] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(9);
  const [totalPages, setTotalPages] = useState<number>(0);

  const listNewsUseCase = container.get<ListNewsUseCase>(
    Registry.ListNewsUseCase
  );

  const fetchTopHeadlines = async (query: FetchTopHeadlinesParams) => {
    const data = await listNewsUseCase.execute(query);
    console.log(data);
    setTotalResults(data.totalResults);

    setTotalPages(Math.ceil(data.totalResults / perPage));
    return data.news;
  };

  const query = {
    country: 'us',
    page: page,
    pageSize: perPage
  };

  const { data, isFetching } = useQuery({
    queryKey: ['topHeadlines', query, params],
    queryFn: () => fetchTopHeadlines({ ...query, ...params }),
    enabled: true,
    initialData: [],
    refetchInterval: 12000000,
    refetchOnWindowFocus: false
  });

  const setCurrentPage = (page: number) => {
    setPage(page);
  };

  return {
    totalResults: totalResults,
    topHeadlines: data,
    isFetching: isFetching,
    page: page,
    setCurrentPage: setCurrentPage,
    totalPages: totalPages
  };
}
