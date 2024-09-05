import { Card as FlowbiteCard } from 'flowbite-react';
import { News } from '@/domain/entities/news';

interface CardProps {
  news: News;
}

export function Card({ news }: CardProps) {
  return (
    <FlowbiteCard className="max-w-sm" imgSrc={news.image}>
      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {news.title}
      </h3>
      <p className="text-sm text-gray-500">
        <time dateTime={news.publishedAt.toISOString()}>
          {news.publishedAt.toDateString()}
        </time>
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {news.description}
      </p>
      <a
        href={news.url}
        target="_blank"
        className="inline-flex justify-center items-center mt-auto py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        rel="noreferrer"
      >
        Access
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </FlowbiteCard>
  );
}
