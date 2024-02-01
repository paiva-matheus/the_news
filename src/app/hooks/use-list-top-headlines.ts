'use client';
import { useState } from 'react';
import { Registry, container } from '../@core/infra/container-registry';
import { ListNewsUseCase } from '../@core/application/news/list-news.use-case';
import { useQuery } from '@tanstack/react-query';

export function useListTopHeadlines() {
  const [totalResults, setTotalResults] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(9);
  const [totalPages, setTotalPages] = useState<number>(0);

  const listNewsUseCase = container.get<ListNewsUseCase>(
    Registry.ListNewsUseCase
  );

  const fetchTopHeadlines = async (query: {
    [key: string]: string | number;
  }) => {
    const data = await listNewsUseCase.execute(query);
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
    queryKey: ['topHeadlines', query],
    queryFn: () => fetchTopHeadlines(query),
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
